import React from "react";
import { useState } from "react";
import { useAuth } from "../../../../../Authentication/AuthContext/AuthContext";
import axios from "axios";
import { useEffect } from "react";
import TopbarNav from "../../../../Layouts/TopbarNav";
import { DebounceInput } from "react-debounce-input";
import SidebarNav from "../../../../Layouts/SidebarNav";
import PopupAdminCateringOrderHistory from "./PopupAdminCateringOrderHistory";

const AllAdminCateringOrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [orderDetailsForPopup, setOrderDetailsForPopup] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useAuth();
  //this is not for refreshing page when i delete anything
  const [removeId, setRemoveId] = useState(0);

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
        `${process.env.REACT_APP_BACKEND_URL}/deleteCateringOrderHistory/${id}?email=${currentUser?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
          },
        }
      );
      const data = response.data;
      if (data) {
        //this is not for refreshing page when i delete anything
        setRemoveId(id);
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
          `${process.env.REACT_APP_BACKEND_URL}/getAllCateringHistoryOrderAdmin?email=${currentUser?.email}`,
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
  }, [currentUser?.email, removeId]);

  //handle the trand_id and matching it with the backend of order for show it in the popup page by props
  const handleOrderInfoAdmin = (tran_id) => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/adminCateringHistoryOrdersDetails?tran_id=` +
          tran_id
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

                    <th scope="col">Customer Name</th>
                    <th scope="col">Phone Number</th>

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

                      <td>{order?.cus_name}</td>
                      <td>{order?.cus_phone}</td>

                      <td className="action_btns">
                        <button
                          className="btn details_btn"
                          data-bs-toggle="modal"
                          data-bs-target="#adminOrderProduct"
                          onClick={() => handleOrderInfoAdmin(order?.tran_id)}
                        >
                          Details
                        </button>
                        {(currentUser?.email === "swapna@uniconbd.com" ||
                          currentUser?.email === "jahid@gmail.com") && (
                          <button
                            className="btn MyBtn"
                            onClick={() => orderDelete(order?.tran_id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal for single order */}
            <PopupAdminCateringOrderHistory
              orderDetailsForPopup={orderDetailsForPopup}
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default AllAdminCateringOrderHistory;
