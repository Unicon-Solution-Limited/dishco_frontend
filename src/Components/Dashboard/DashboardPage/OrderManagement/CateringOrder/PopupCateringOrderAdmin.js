import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Authentication/AuthContext/AuthContext";

const PopupCateringOrderAdmin = ({ orderDetailsForPopup }) => {
  const statusRef = useRef();
  const [statusMessage, setStatusMessage] = useState(false);
  const { currentUser } = useAuth();

  // For Order ID
  const orderTime = new Date(orderDetailsForPopup?.orderTime);
  const formattedDate = orderTime.toLocaleDateString(undefined, {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
  const formattedTime = orderTime.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const formattedDateTime = `${formattedDate}${formattedTime}`;

  // //handle status
  const handleStatusSubmit = async (id, e) => {
    e.preventDefault();
    const product_status = statusRef?.current?.value;

    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/updateCateringStatus/${id}?email=${currentUser?.email}`;
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
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title fs-5" id="exampleModalLabel">
              <strong>Order Id:</strong> {formattedDateTime}
            </p>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body order_details">
            <div className="product_details">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">দিন</th>
                    <th scope="col">প্যাকেজ</th>
                    <th scope="col">টাকা</th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetailsForPopup?.food?.map((orderDt, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{orderDt?.day}</td>
                      <td>{orderDt?.package}</td>
                      <td>
                        {new Intl.NumberFormat("bn-BD").format(orderDt.tk)} টাকা
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* <h1>
                {orderDetailsForPopup?.food?.map((orderDt, index) => (
                  <div key={index}>
                    <p>
                      {orderDt?.day}: {orderDt?.package}-
                      {new Intl.NumberFormat("bn-BD").format(orderDt.tk)} টাকা
                    </p>
                  </div>
                ))}
              </h1> */}
            </div>

            <div>
              <h3 className="text-center">Customer Details</h3>
              <hr />
              <div className="customer_details">
                <span>
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
                </span>
                <span>
                  <p>
                    <strong>Payment Method=</strong>{" "}
                    {orderDetailsForPopup?.payment_method}
                  </p>
                  <p>
                    <strong>Total=</strong> {orderDetailsForPopup?.total_amount}{" "}
                    tk.{" "}
                  </p>
                </span>
              </div>
            </div>
          </div>
          {/* <h3 className="container">{orderDetailsForPopup?.product_status}</h3> */}
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
                <option value="Deliverd">Deliverd</option>
                <option value="Canceled">Canceled</option>
              </select>
              <button
                className="btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                {/* send order data with link */}
                <Link
                  to={{
                    pathname: "/cateringInvoice",
                    state: {
                      orderDetailsForCateringInvoice: orderDetailsForPopup,
                    },
                  }}
                  className="btn MyBtn"
                >
                  Invoice
                </Link>
              </button>
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

export default PopupCateringOrderAdmin;
