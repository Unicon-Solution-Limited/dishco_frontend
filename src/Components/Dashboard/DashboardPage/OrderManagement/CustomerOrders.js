import React, { useEffect, useState } from "react";
import "./OrderManagement.css";
import TopbarNav from "../../Layouts/TopbarNav";
import SidebarNav from "../../Layouts/SidebarNav";
import axios from "axios";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";
import PopupOrderCustomer from "./PopupOrderCustomer";

const CustomerOrders = () => {
  const { currentUser } = useAuth();
  const [allCustomerOders, setallCustomerOrders] = useState([]);
  const [customerOrderDetails, setCustomerOrderDetails] = useState([]);

  //getting the customer order according the email
  useEffect(() => {
    const fetchCustomerOrders = async () => {
      if (currentUser) {
        try {
          const response = await axios.get(
            `https://server.dishcofood.com/getCustomerOrders?email=${currentUser?.email}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
              },
            }
          );
          setallCustomerOrders(response?.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchCustomerOrders();
  }, [currentUser]);

  //customer order data details according to the train id
  const handleCustomerTranId = async (tran_id) => {
    await axios
      .get(
        `https://server.dishcofood.com/customerOrderDetails?tran_id=` + tran_id
      )
      .then((response) => {
        setCustomerOrderDetails(response?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main className="customer_order">
            <div className="mb-5">
              <h3>Your Order List's per Date.</h3>
              <p>(Click to view details)</p>
            </div>
            {allCustomerOders.map((allCustomerOrder) => (
              <button
                className="btn single_order_section"
                data-bs-toggle="modal"
                data-bs-target="#singleOrderModal"
                key={allCustomerOrder._id}
                onClick={() => handleCustomerTranId(allCustomerOrder?.tran_id)}
              >
                {new Date(allCustomerOrder?.orderTime).toLocaleString("en-GB", {
                  dateStyle: "long",
                  timeStyle: "short",
                  hour12: true,
                })}{" "}
                <br />
                <strong>Order Status:</strong>{" "}
                {allCustomerOrder?.product_status}
              </button>
            ))}
            <PopupOrderCustomer customerOrderDetails={customerOrderDetails} />
          </main>
        </div>
      </div>
    </>
  );
};

export default CustomerOrders;
