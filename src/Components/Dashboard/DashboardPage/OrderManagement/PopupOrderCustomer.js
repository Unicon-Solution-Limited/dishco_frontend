import React from "react";
import "./OrderManagement.css";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";

const PopupOrderCustomer = ({ customerOrderDetails }) => {
  const { currentUser } = useAuth();

  const handleCancel = async (value, id) => {
    const product_status = value;
    try {
      const url = `http://localhost:8000/updateStatus/${id}?email=${currentUser?.email}`;
      const option = {
        method: "PATCH",
        body: JSON.stringify({ product_status }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
        },
      };
      await fetch(url, option);
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

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
                <aside>
                  <strong>Order Details on:</strong>{" "}
                  {new Date(customerOrderDtls?.orderTime).toLocaleString(
                    "en-GB",
                    {
                      dateStyle: "long",
                      timeStyle: "short",
                      hour12: true,
                    }
                  )}
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
                          alt="Loading"
                          className="order_image"
                          loading="lazy"
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
                    <strong>Delivery Charge:</strong> +60 tk.
                  </p>
                  <p>
                    <strong>Discount:</strong> -
                    {customerOrderDtls?.discountPrice} tk.
                  </p>
                  <p>
                    <strong>Special Discount:</strong> - 10%
                  </p>
                  <p>
                    <strong>Total:</strong> {customerOrderDtls?.total_amount}{" "}
                    tk.
                  </p>
                </aside>
              </div>
              <div className="modal-footer single_order_modal_footer">
                <p>
                  <strong>Status: </strong>
                  <span
                    className={`status ${
                      customerOrderDtls?.product_status == "Pending"
                        ? "pending"
                        : customerOrderDtls?.product_status == "canceled"
                        ? "cancel"
                        : customerOrderDtls?.product_status == "Shipped"
                        ? "shipped"
                        : ""
                    }`}
                  >
                    {customerOrderDtls?.product_status}
                  </span>
                </p>

                <aside className="order_cancel MyBtn">
                  {customerOrderDtls.product_status === "Pending" && (
                    <button
                      className="btn"
                      onClick={() =>
                        handleCancel("Canceled", customerOrderDtls._id)
                      }
                    >
                      Cancel order <i className="bi bi-trash"></i>
                    </button>
                  )}
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
