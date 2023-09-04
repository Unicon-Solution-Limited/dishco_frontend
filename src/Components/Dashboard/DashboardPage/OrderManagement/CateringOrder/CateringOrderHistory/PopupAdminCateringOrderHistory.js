import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useAuth } from "../../../../../Authentication/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const PopupAdminCateringOrderHistory = ({ orderDetailsForPopup }) => {
  const statusRef = useRef();
  const [statusMessage, setStatusMessage] = useState(false);
  const { currentUser } = useAuth();

  //total tk
  const totalTk = orderDetailsForPopup?.food?.reduce(
    (sum, item) => sum + item.tk * item.quantity,
    0
  );

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
              <strong>অর্ডার আইডি:</strong> {formattedDateTime}
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
              <table className="table catering-table">
                <thead>
                  <tr>
                    <th scope="col">দিন</th>
                    <th scope="col">প্যাকেজ</th>
                    <th scope="col">পরিমাণ</th>
                    <th scope="col">টাকা</th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetailsForPopup?.food &&
                    orderDetailsForPopup?.food?.length &&
                    orderDetailsForPopup?.food?.map((fd, index) => (
                      <tr key={index}>
                        <td>
                          {fd?.day}, {fd?.selectedDay} {fd?.selectedMonth}
                        </td>
                        <td>
                          {fd?.package} {""} (
                          {new Intl.NumberFormat("bn-BD").format(fd.tk)} টাকা)
                        </td>

                        <td>
                          {new Intl.NumberFormat("bn-BD").format(fd?.quantity)}
                        </td>
                        <td>
                          {new Intl.NumberFormat("bn-BD").format(
                            fd.tk * fd?.quantity
                          )}{" "}
                          {""}
                          টাকা
                        </td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3">
                      <strong>মোট বিল: </strong>
                      {new Intl.NumberFormat("bn-BD").format(totalTk)} টাকা
                    </td>
                  </tr>
                </tfoot>
              </table>
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
        </div>
      </div>
    </div>
  );
};

export default PopupAdminCateringOrderHistory;
