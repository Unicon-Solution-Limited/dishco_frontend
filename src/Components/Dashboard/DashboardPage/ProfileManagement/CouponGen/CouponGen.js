import React from "react";
import { useState } from "react";
import TopbarNav from "../../../Layouts/TopbarNav";
import SidebarNav from "../../../Layouts/SidebarNav";
import "./CouponGen.css";
import axios from "axios";
import { useAuth } from "../../../../Authentication/AuthContext/AuthContext";
import { useEffect } from "react";

const CouponGen = () => {
  const [token, setToken] = useState("");
  const { currentUser } = useAuth();
  const [tokenMessage, setTokenMessage] = useState([]);
  const [tokendata, setTokenData] = useState([]);

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
  const sendToken = async () => {
    const now = new Date();
    const requestData = {
      token: token,
      customerCuponEmail: currentUser?.email,
      submitTime: now.toISOString(),
    };
    const url = "http://localhost:8000/addTokenData";
    try {
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
        // Reload the page after successfully adding the comment
        // window.location.reload();
      } else {
        // Display the error message from the server
        setTokenMessage(responseData.error);
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  //getting token data
  useEffect(() => {
    const fetchTokenData = async () => {
      if (currentUser.email) {
        try {
          const response = await axios.get(
            `http://localhost:8000/getTokenData?email=${currentUser.email}`
          );
          setTokenData(response?.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchTokenData();
  }, [currentUser.email]);

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
                <p>1500</p>
              </aside>
              <aside>
                <p>Usable Point</p>
                <p>1500</p>
              </aside>
            </section>

            {token && (
              <button className="btn apply_token_btn" onClick={generateToken}>
                Generate Token
              </button>
            )}
            <button
              onClick={() => sendToken()}
              className="btn Token_generate_btn"
            >
              Apply Token
            </button>
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
