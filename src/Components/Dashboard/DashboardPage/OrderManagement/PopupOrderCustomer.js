import React from "react";
import "./OrderManagement.css";

const PopupOrderCustomer = () => {
  return (
    <div
      className="modal fade"
      id="singleOrderModal"
      tabindex="-1"
      aria-labelledby="singleOrderModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <aside className="order_date_id">
              <p>
                <strong>Date & Time:</strong> 04.03.2023 5:30 PM
              </p>
              <p>
                <strong>Order Id:</strong> dJfv-05BG
              </p>
            </aside>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <aside className="my-2">
              <img src="{demo}" alt="" className="order_image mb-2" />
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
          <div className="modal-footer">
            <aside className="order_cancel MyBtn">
              <button className="btn">
                Cancel order <i className="bi bi-trash"></i>
              </button>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupOrderCustomer;
