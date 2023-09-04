import React from "react";
import { useAuth } from "../../../../../Authentication/AuthContext/AuthContext";

const PopupCustomerCateringOrderHistory = ({ customerOrderDetails }) => {
  //total tk counting
  const totalTk = customerOrderDetails?.food?.reduce(
    (sum, item) => sum + item.tk * item.quantity,
    0
  );
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
          <div className="modal-content">
            <div className="modal-header">
              <aside>
                <strong>ক্যাটারিং অর্ডার:</strong>{" "}
                {new Date(customerOrderDetails?.orderTime).toLocaleString(
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
                  {customerOrderDetails &&
                    customerOrderDetails?.food?.map((fd, index) => (
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
              </table>

              <aside className="discount_delivery_charge">
                <p>
                  {/* <td colspan="3"> */}
                  <strong>মোট বিল: </strong>
                  {new Intl.NumberFormat("bn-BD").format(totalTk)} টাকা
                  {/* </td> */}
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupCustomerCateringOrderHistory;
