import React from "react";
import "./OrderManagement.css";

const PopupOrderCustomer = ({ customerOrderDetails }) => {
  return (
    <>
      <div
        className="modal fade"
        id="singleOrderModal"
        tabIndex="-1"
        aria-labelledby="singleOrderModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          {customerOrderDetails.map((customerOrderDtls) => (
            <div className="modal-content" key={customerOrderDtls._id}>
              <div className="modal-header">
                <aside className="order_date_id">
                  <p>
                    <strong>Date & Time:</strong> {customerOrderDtls?.orderTime}
                  </p>
                  <p>
                    <strong>Order Id:</strong> {customerOrderDtls?.tran_id}
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
                {customerOrderDtls.orderedData.map((orderDt) => (
                  <div className="product_single_order_items" key={orderDt?.id}>
                    <section className="product_single_order_first_col">
                      <aside className="my-2">
                        <img
                          src={orderDt.image}
                          alt=""
                          className="order_image"
                        />
                      </aside>
                      <aside className="order_info">
                        <h5>{orderDt?.name}</h5>
                        <p>
                          <strong>Code:</strong> {orderDt?.foodCode}
                        </p>
                        <p>
                          <strong>Price:</strong> {orderDt?.price} tk.
                        </p>
                        <p>
                          <strong>Quantity:</strong> {orderDt?.quantity}
                        </p>
                      </aside>
                    </section>
                    <aside className="order_info">
                      <strong>Extra Items:</strong>
                      {orderDt?.extras?.map((extraItem, e) => (
                        <span key={e}>
                          {extraItem?.nameOfAddon} ({extraItem?.priceOfAddon}
                          )tk.{" "}
                        </span>
                      ))}
                      <p className="mt-3">
                        <strong>Size(If Any):</strong> {orderDt?.size}
                      </p>
                    </aside>
                  </div>
                ))}
                <aside className="discount_delivery_charge">
                  <p>
                    <strong>Delivery Charge:</strong> 80 tk.
                  </p>
                  <p>
                    <strong>Discount:</strong> 00 tk.
                  </p>
                  <p>
                    <strong>Total:</strong> {customerOrderDtls?.total_amount}{" "}
                    tk.
                  </p>
                </aside>
              </div>
              <div className="modal-footer single_order_modal_footer">
                <p>
                  <strong>Status:</strong>
                  <span className="status pending">
                    {customerOrderDtls?.product_status}
                  </span>
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
          ))}
        </div>
      </div>
    </>
  );
};

export default PopupOrderCustomer;
