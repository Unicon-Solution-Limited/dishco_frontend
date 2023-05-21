import React, { useEffect, useState } from "react";
import TopbarNav from "./../../Layouts/TopbarNav";
import SidebarNav from "./../../Layouts/SidebarNav";
import SingleCustomer from "./SingleCustomer";
import "./CustomerList.css";
import axios from "axios";
import { Link } from "react-router-dom";

const CustomerList = () => {
  const [orders, setOrders] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState("");

  //get all the orders for admin, update every 5 minutes
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/getUniqueOrderAdmin"
        );
        setOrders(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, []);

  //get selected email for the single customer page
  const handleSelectedEmail = (email) => {
    setSelectedEmail(email);
  };

  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main className="container-fluid p-4">
            <h2 className="text-center">Customers</h2>
            <div className="table-responsive">
              <table className="table align-middle table-hover">
                <thead>
                  <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((orderDt, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{orderDt.cus_name}</td>
                      <td>{orderDt.cus_email}</td>
                      <td>{orderDt.cus_phone}</td>

                      <td>
                        <Link to={`/singleCustomer/${orderDt.cus_email}`}>
                          <button
                            type="button"
                            className="btn MyBtn"
                            onClick={() =>
                              handleSelectedEmail(orderDt.cus_email)
                            }
                          >
                            View
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CustomerList;
