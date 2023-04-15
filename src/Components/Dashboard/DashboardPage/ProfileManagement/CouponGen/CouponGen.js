import React from "react";
import { useState } from "react";
import TopbarNav from "../../../Layouts/TopbarNav";
import SidebarNav from "../../../Layouts/SidebarNav";
import "./CouponGen.css";
import axios from "axios";
import { useAuth } from "../../../../Authentication/AuthContext/AuthContext";
import { useEffect } from "react";
import { useMemo } from "react";

const CouponGen = () => {
  const [token, setToken] = useState("");
  const { currentUser } = useAuth();
  const [tokenMessage, setTokenMessage] = useState([]);
  const [FixedTokendata, setFixedTokenData] = useState([]);
  const [allCustomerOrders, setAllCustomerOrders] = useState([]);
  const [customerPosition, setCustomerPosition] = useState("");

  //generate the dynamic token
  function generateToken() {
    const characters =
      "ABCDEFqwertyuioplkjhgfdaGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setToken(result);
  }

  //send cupon in the backend
  const [totalPoint, setTotalPoint] = useState();

  console.log(FixedTokendata, "tokendata");

  const sendToken = async () => {
    if (totalPoint < 200) {
      setTokenMessage(
        "You do not have enough points to apply this coupon code"
      );
      return;
    }
    const now = new Date();
    const requestData = {
      token: token,
      customerCuponEmail: currentUser?.email,
      customerPosition: customerPosition,
      submitTime: now.toISOString(),
      totalSuccessCount: 1,
    };
    // add token info at mongodb(it will vanish after 7days)
    try {
      const url = "http://localhost:8000/addTokenData";
      setTokenMessage("");
      const option = {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      const response = await fetch(url, option);
      const responseData = await response.json();
      if (response.ok) {
        // Deduct $200 from the money variable if the request was successful
        window.location.reload();
        setTokenMessage(
          "Congratulations! You've successfully applied your coupon!"
        );
      } else {
        // Display the error message from the server
        setTokenMessage(responseData.error);
      }
    } catch (error) {
      console.log("err", error);
    }

    // add  fixed token info at mongodb
    try {
      const url = "http://localhost:8000/FixedAddTokenData";
      const option = {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      const response = await fetch(url, option);
      const data = await response.json();
      if (data) {
        console.log("fixed data added");
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  //getting fixed token data according to the email
  useEffect(() => {
    const fetchTokenData = async () => {
      if (currentUser.email) {
        try {
          const response = await axios.get(
            `http://localhost:8000/getTokenData?email=${currentUser.email}`
          );
          setFixedTokenData(response?.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchTokenData();
  }, [currentUser.email]);

  //getting the customer order according the email
  useEffect(() => {
    const fetchCustomerOrders = async () => {
      if (currentUser) {
        try {
          const response = await axios.get(
            `http://localhost:8000/getSingleCustomerOrderShipped?email=${currentUser.email}`
          );
          setAllCustomerOrders(response?.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchCustomerOrders();
  }, [currentUser]);

  // calculate the total product cost (all)
  const totalAmount = useMemo(() => {
    return allCustomerOrders.reduce(
      (accumulator, currentValue) =>
        accumulator + (currentValue?.total_amount ?? 0),
      0
    );
  }, [allCustomerOrders]);

  useEffect(() => {
    setTotalPoint(totalAmount / 10);
  }, [totalAmount]);

  //calculate the silver/gold/platinum for set role and send it the backend
  useEffect(() => {
    if (totalAmount <= 4990) {
      setCustomerPosition("Bronze");
    } else if (totalAmount <= 29990) {
      setCustomerPosition("Silver");
    } else if (totalAmount <= 69990) {
      setCustomerPosition("Gold");
    } else {
      setCustomerPosition("Platinum");
    }
  }, [totalAmount]);

  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main className="customer_point_wallet_main">
            <section className="wallet_top_section">
              <aside>
                <p>{token && <strong> {token}</strong>}</p>
              </aside>
              <aside>
                <p>Point Deduct</p>
                <p>{FixedTokendata.length * 200}</p>
              </aside>
              <aside>
                <p>Usable Point</p>
                <p>{totalAmount / 10 - FixedTokendata.length * 200}</p>
              </aside>
            </section>

            {totalPoint >= 200 ? (
              <button className="btn apply_token_btn" onClick={generateToken}>
                Generate Token
              </button>
            ) : (
              <h1 style={{ marginTop: "50px", textAlign: "center" }}>
                You do not have enough points to apply this coupon code{" "}
              </h1>
            )}

            {token && (
              <button
                onClick={() => sendToken()}
                className="btn Token_generate_btn"
              >
                Apply Token
              </button>
            )}
            <h4 style={{ color: "red", textAlign: "center" }}>
              {tokenMessage}
            </h4>
          </main>
        </div>
      </div>
    </>
  );
};

export default CouponGen;
