import React, { useEffect, useState } from "react";
import "./OrderManagement.css";
import TopbarNav from "./../../Layouts/TopbarNav";
import SidebarNav from "./../../Layouts/SidebarNav";
import axios from "axios";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";

const CustomerOrder = () => {
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
          <main className="row customer_order">
            <div className="col-md-4 single_order">
              <aside className="order_date_id">
                <p>
                  <strong>Date & Time:</strong> 04.03.2023 5:30 PM
                </p>
                <p>
                  <strong>Order Id:</strong> dJfv-05BG
                </p>
              </aside>
              {/* //////////////// Per Items each order */}
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  {/* Items 1 */}
                  <div className="carousel-item active">
                    <aside className="my-2">
                      <img src={demo} alt="" className="order_image mb-2" />
                      <h6>DishCo Special Platter With japanese vegetable.</h6>
                    </aside>
                    <aside className="order_info">
                      <p>
                        <strong>Price:</strong> 600 tk.
                      </p>
                      <p>
                        <strong>Quantity:</strong> 2
                      </p>
                    </aside>
                    <aside className="order_info">
                      <p>
                        <strong>Extra Items:</strong>{" "}
                        <ul>
                          <li>Sause 30 tk.</li>
                          <li>Mewonese 30 tk.</li>
                        </ul>
                      </p>
                      <p>
                        <strong>Size(If Any):</strong> 8"
                      </p>
                    </aside>
                  </div>
                  {/* Items 2 */}
                  <div className="carousel-item">
                    <aside className="my-2">
                      <img src={demo} alt="" className="order_image mb-2" />
                      <h6>DishCo Special Platter With japanese vegetable.</h6>
                    </aside>
                    <aside className="order_info">
                      <p>
                        <strong>Price:</strong> 600 tk.
                      </p>
                      <p>
                        <strong>Quantity:</strong> 2
                      </p>
                    </aside>
                    <aside className="order_info">
                      <p>
                        <strong>Extra Items:</strong>{" "}
                        <ul>
                          <li>Sause 30 tk.</li>
                          <li>Mewonese 30 tk.</li>
                        </ul>
                      </p>
                      <p>
                        <strong>Size(If Any):</strong> 8"
                      </p>
                    </aside>
                  </div>
                  {/* Items 3 */}
                  <div className="carousel-item">
                    <aside className="my-2">
                      <img src={demo} alt="" className="order_image mb-2" />
                      <h6>DishCo Special Platter With japanese vegetable.</h6>
                    </aside>
                    <aside className="order_info">
                      <p>
                        <strong>Price:</strong> 600 tk.
                      </p>
                      <p>
                        <strong>Quantity:</strong> 2
                      </p>
                    </aside>
                    <aside className="order_info">
                      <p>
                        <strong>Extra Items:</strong>{" "}
                        <ul>
                          <li>Sause 30 tk.</li>
                          <li>Mewonese 30 tk.</li>
                        </ul>
                      </p>
                      <p>
                        <strong>Size(If Any):</strong> 8"
                      </p>
                    </aside>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon order_slide_btn"
                    aria-hidden="true"
                  ></span>
                  <i className="bi bi-chevron-left order_slide_btn_previous"></i>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon order_slide_btn"
                    aria-hidden="true"
                  ></span>
                  <i className="bi bi-chevron-right order_slide_btn_next"></i>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* Per Items each order ////////////// */}
              <hr />
              <aside className="order_info">
                <p>
                  <strong>Delivery Charge:</strong> 120 tk.
                </p>
                <p>
                  <strong>Discount:</strong> 120 tk.
                </p>
              </aside>
              <aside className="order_total_status">
                <p>
                  <strong>Total:</strong> 600 tk.
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className="status pending">Pending</span>
                </p>
              </aside>
              <aside className="order_cancel MyBtn">
                <button className="btn">
                  Cancel order <i className="bi bi-trash"></i>
                </button>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CustomerOrder;
