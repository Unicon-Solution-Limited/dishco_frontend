import React from "react";

const PopupOrderAdmin = ({ orderDetailsForPopup }) => {
  return (
    <div
      className="modal fade modal-lg"
      id="adminOrderProduct"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Order Date & Time: {orderDetailsForPopup?.orderTime}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body order_details">
            {orderDetailsForPopup?.orderedData?.map((orderDt) => (
              <div className="product_details" key={orderDt.id}>
                <div className="order_product_single">
                  <img
                    src={orderDt.image}
                    alt=""
                    className="single_product_modal_image"
                  />
                  <p>
                    <strong>{orderDt?.name}</strong>
                  </p>
                  <p>
                    <strong>Price:</strong> {orderDt?.price} tk.
                  </p>
                  <p>
                    <strong>Quantity:</strong> {orderDt?.quantity}
                  </p>
                  <p>
                    <strong>Size:</strong> {orderDt?.size}
                  </p>

                  <strong>Extra Items:</strong>
                  {orderDt?.extras.map((extra, index) => (
                    <aside key={index}>
                      <p>
                        {extra?.nameOfAddon} {extra?.priceOfAddon}tk.{" "}
                      </p>
                    </aside>
                  ))}
                </div>
                <div className="divider"></div>
              </div>
            ))}
            <div className="customer_details">
              <h6>Customer Details</h6>
              <hr />
              <p>
                <strong>Name:</strong> {orderDetailsForPopup?.cus_name}
              </p>
              <p>
                <strong>Phone:</strong> {orderDetailsForPopup?.cus_phone}
              </p>
              <p>
                <strong>Email:</strong> {orderDetailsForPopup.cus_email}
              </p>
              <p>
                <strong>Area:</strong> {orderDetailsForPopup?.ship_city}
              </p>
              <p>
                <strong>Address:</strong> {orderDetailsForPopup?.cus_add1}
              </p>
              <hr />
              <hr />
              {/* <p>
              <strong>Discount(If any):</strong> - 00 tk.{" "}
            </p> */}
              <p>
                <strong>Delivery Charge:</strong> + 80 tk.{" "}
              </p>
              <p>
                <strong>Total=</strong> {orderDetailsForPopup?.total_amount} tk.{" "}
              </p>
              <p>
                <strong>Payment Option:</strong>{" "}
                {orderDetailsForPopup?.payment_method}
              </p>
            </div>
          </div>
          <div className="order_modal_footer">
            <select
              className="form-select status_select_option"
              aria-label="Default select example"
            >
              <option selected>Status</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
            </select>
            <button type="button" className="btn MyBtn">
              Update Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupOrderAdmin;
