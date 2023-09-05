import React from "react";
import { useAuth } from "../../../../Authentication/AuthContext/AuthContext";
import "../OrderManagement.css";

const PopupOrderCustomer = ({ customerOrderDetails }) => {
  const { currentUser } = useAuth();

  const handleCancel = async (value, id) => {
    const product_status = value;
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

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

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
                    <th scope="col">স্ট্যাটাস</th>
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
                        <td
                          className={`bg-food-status ${
                            (fd?.foodStatus === "Done" && " cat-done") ||
                            (fd?.foodStatus === "Cancel" && " cat-cancel") ||
                            " cat-pending"
                          }`}
                        >
                          {fd?.foodStatus}
                        </td>
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
                {/* <p>
                  <strong>Delivery Charge:</strong> +60 tk.
                </p> */}
                {/* <p>
                  <strong>Discount:</strong> -
                </p> */}
                {/* <p>
                  <strong>Special Discount:</strong> - 10%
                </p> */}
                <p>
                  {/* <td colspan="3"> */}
                  <strong>মোট বিল: </strong>
                  {new Intl.NumberFormat("bn-BD").format(totalTk)} টাকা
                  {/* </td> */}
                </p>
              </aside>
            </div>
            <div className="modal-footer single_order_modal_footer">
              <p>
                <strong>Status: </strong>
                <span
                  className={`status ${
                    customerOrderDetails?.product_status == "Pending"
                      ? "pending"
                      : customerOrderDetails?.product_status == "Canceled"
                      ? "cancel"
                      : customerOrderDetails?.product_status == "Completed"
                      ? "shipped"
                      : customerOrderDetails?.product_status == "Running"
                      ? "processing"
                      : ""
                  }`}
                >
                  {customerOrderDetails?.product_status}
                </span>
              </p>

              <aside className="order_cancel MyBtn">
                {customerOrderDetails.product_status === "Pending" && (
                  <button
                    className="btn"
                    onClick={() =>
                      handleCancel("Canceled", customerOrderDetails._id)
                    }
                  >
                    Cancel order <i className="bi bi-trash"></i>
                  </button>
                )}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupOrderCustomer;
