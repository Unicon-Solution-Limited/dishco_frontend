import React, { useRef, useState } from "react";

const PopupOrderAdmin = ({ orderDetailsForPopup }) => {
  const statusRef = useRef();
  const [statusMessage, setStatusMessage] = useState(false);

  // //handle status
  const handleStatusSubmit = async (item_id, e) => {
    e.preventDefault();
    const product_status = statusRef?.current?.value;

    try {
      const url = `http://localhost:8000/updateStatus/${item_id}`;
      const option = {
        method: "PATCH",
        body: JSON.stringify({ product_status }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      await fetch(url, option);
    } catch (error) {
      console.log(error);
    }
    setStatusMessage(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

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
          <h3 className="container">{orderDetailsForPopup?.product_status}</h3>
          <form
            onSubmit={(e) => handleStatusSubmit(orderDetailsForPopup._id, e)}
          >
            <div className="order_modal_footer">
              <select
                className="form-select status_select_option"
                aria-label="Default select example"
                ref={statusRef}
              >
                <option value="">Status</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
              </select>
              <button type="submit" className="btn MyBtn">
                Update Status
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupOrderAdmin;
