import React, { useEffect, useState } from "react";
import SidebarNav from "../../Layouts/SidebarNav";
import TopbarNav from "../../Layouts/TopbarNav";
import "./OrderManagement.css";
import axios from "axios";
import PopupOrderAdmin from "./PopupOrderAdmin";
import { DebounceInput } from "react-debounce-input";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";

const AllOrdersForAdmin = () => {
  const [orders, setOrders] = useState([]);
  const [orderDetailsForPopup, setOrderDetailsForPopup] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useAuth();

  // filter the orders based on search term
  const filteredOrders = orders.filter((order) =>
    order?.product_status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const orderDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://server.dishcofood.com/deleteOrder/${id}?email=${currentUser?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
          },
        }
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

  //get all the orders for admin, update every 5 minutes
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `https://server.dishcofood.com/getAllOrderAdmin?email=${currentUser?.email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
            },
          }
        );
        setOrders(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
    const interval = setInterval(() => {
      fetchOrders();
    }, 300000);

    return () => clearInterval(interval);
  }, [currentUser?.email]);

  //handle the trand_id and matching it with the backend of order for show it in the popup page by props
  const handleOrderInfoAdmin = (tran_id) => {
    axios
      .get(
        `https://server.dishcofood.com/adminOrdersDetails?tran_id=` + tran_id
      )
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
              <DebounceInput
                type="search"
                placeholder="search  product_status"
                value={searchTerm}
                onChange={handleSearchChange}
                minLength={2}
                debounceTimeout={300}
              />
            </div>
            <div className="table-responsive">
              <table className="table table-striped align-middle">
                <thead>
                  <tr>
                    <th scope="col">Date and Time</th>
                    <th scope="col">Item/'s</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order, ou) => (
                    <tr key={ou}>
                      <th scope="row">
                        {new Date(order?.orderTime).toLocaleString("en-GB", {
                          dateStyle: "short",
                          timeStyle: "short",
                          hour12: true,
                        })}
                      </th>
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
