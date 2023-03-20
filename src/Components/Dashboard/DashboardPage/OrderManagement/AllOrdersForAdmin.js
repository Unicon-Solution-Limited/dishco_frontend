import React, { useEffect, useState } from "react";
import SidebarNav from "../../Layouts/SidebarNav";
import TopbarNav from "../../Layouts/TopbarNav";
import "./OrderManagement.css";
import axios from "axios";
import PopupOrderAdmin from "./PopupOrderAdmin";

const AllOrdersForAdmin = () => {
  const [orders, setOrders] = useState([]);
  const [orderDetailsForPopup, setOrderDetailsForPopup] = useState([]);

  const orderDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/deleteOrder/${id}`
      );
      const data = response.data;
      if (data) {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (error) {
      console.log("Error deleting order:", error);
    }
  };

  //get all the orders for admin
  useEffect(() => {
    axios
      .get("http://localhost:8000/getAllOrderAdmin")
      .then((res) => {
        setOrders(res?.data);
      })
      .catch((error) => console.log(error));
  }, []);

  //handle the trand_id and matching it with the backend of order for show it in the popup page by props
  const handleOrderInfoAdmin = (tran_id) => {
    axios
      .get(`http://localhost:8000/adminOrdersDetails?tran_id=` + tran_id)
      .then((response) => {
        setOrderDetailsForPopup(response?.data);
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
          <main className="px-1">
            <div className="dashboard_product_searchbar my-3">
              <input type="search" placeholder="search orders" />
            </div>
            <div className="table-responsive">
              <table className="table table-striped align-middle">
                <thead>
                  <tr>
                    <th scope="col">Order Id</th>
                    <th scope="col">Item/'s</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, ou) => (
                    <tr key={ou}>
                      <th scope="row">{order?.tran_id}</th>
                      <td>{order?.orderedData?.length}</td>
                      <td>{order?.cus_name}</td>
                      <td>{order?.cus_phone}</td>
                      <td>
                        <span
                          className={`status ${
                            order?.product_status == "Pending"
                              ? "pending"
                              : order?.product_status == "Processing"
                              ? "processing"
                              : order?.product_status == "Shipped"
                              ? "shipped"
                              : ""
                          }`}
                        >
                          {order?.product_status}
                        </span>
                        {/* <span className="status processing">Processing</span>
                      <span className="status shipped">Shipped</span> */}
                      </td>
                      <td className="action_btns">
                        <button
                          className="btn details_btn"
                          data-bs-toggle="modal"
                          data-bs-target="#adminOrderProduct"
                          onClick={() => handleOrderInfoAdmin(order?.tran_id)}
                        >
                          Details
                        </button>
                        <button
                          className="btn MyBtn"
                          onClick={() => orderDelete(order?.tran_id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal for single order */}
            <PopupOrderAdmin orderDetailsForPopup={orderDetailsForPopup} />
          </main>
        </div>
      </div>
    </>
  );
};

export default AllOrdersForAdmin;
