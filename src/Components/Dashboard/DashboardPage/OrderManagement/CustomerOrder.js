import React from "react";
import "./OrderManagement.css";
import TopbarNav from "./../../Layouts/TopbarNav";
import SidebarNav from "./../../Layouts/SidebarNav";

const CustomerOrder = () => {
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
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CustomerOrder;
