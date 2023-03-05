import React, { useEffect, useState } from "react";
import "./OrderManagement.css";
import TopbarNav from "../../Layouts/TopbarNav";
import SidebarNav from "../../Layouts/SidebarNav";
import axios from "axios";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";
import PopupOrderCustomer from "./PopupOrderCustomer";

const CustomerOrders = () => {
  const { currentUser } = useAuth();
  const [customerOders, setCustomerOrders] = useState([]);
  console.log(customerOders);
  useEffect(() => {
    const fetchCustomerOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/getCustomerOrders?email=${currentUser.email}`
        );
        setCustomerOrders(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCustomerOrders();
  }, [currentUser.email]);
  const demo =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp";
  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main className="customer_order">
            <h3 className="mb-5">Your Order List's per Date</h3>

            <button
              className="btn single_order_section"
              data-bs-toggle="modal"
              data-bs-target="#singleOrderModal"
            >
              05.03.2023 <br />
              <strong>Order ID:</strong> 4587-8Ac9
            </button>
          </main>

          <PopupOrderCustomer />
        </div>
      </div>
    </>
  );
};

export default CustomerOrders;
