import React from "react";
import "./OrderManagement.css";

const PopupOrderCustomer = () => {
  const demo =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp";
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
            <div className="product_single_order_items">
              <section className="product_single_order_first_col">
                <aside className="my-2">
                  <img src={demo} alt="" className="order_image" />
                </aside>
                <aside className="order_info">
                  <h5>DishCo Special Platter</h5>
                  <p>
                    <strong>Price:</strong> 600 tk.
                  </p>
                  <p>
                    <strong>Quantity:</strong> 2
                  </p>
                </aside>
              </section>
              <aside className="order_info">
                <p>
                  <strong>Extra Items:</strong>{" "}
                  <ul>
                    <li>Sause 30 tk.</li>
                    <li>Mewonese 30 tk.</li>
                  </ul>
                </p>
                <p className="mt-3">
                  <strong>Size(If Any):</strong> 8"
                </p>
              </aside>
            </div>
            <aside className="discount_delivery_charge">
              <p>
                <strong>Delivery Charge:</strong> 120 tk.
              </p>
              <p>
                <strong>Discount:</strong> 120 tk.
              </p>
              <p>
                <strong>Total:</strong> 600 tk.
              </p>
            </aside>
          </div>
          <div className="modal-footer single_order_modal_footer">
            <p>
              <strong>Status:</strong>
              <span className="status pending">Pending</span>
            </p>
            <aside className="order_cancel">
              <button className="btn invoice_btn">Invoice</button>
            </aside>
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
