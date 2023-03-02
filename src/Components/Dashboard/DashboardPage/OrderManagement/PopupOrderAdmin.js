import React from "react";

const PopupOrderAdmin = ({ orderDetailsForPopup }) => {
  console.log(orderDetailsForPopup);
  return (
    <div
      className="modal fade modal-lg"
      id="adminOrderProduct"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Order Date & Time: 20-06-2023 12.30 PM
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body order_details">
            <div className="product_details">
              <div className="order_product_single">
                <img
                  src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp"
                  alt=""
                  className="single_product_modal_image"
                />
                <p>
                  <strong>DishCo special platter rice</strong>
                </p>
                <p>
                  <strong>Price:</strong> 600 tk.
                </p>
                <p>
                  <strong>Size:</strong> 8"
                </p>
                <aside>
                  <strong>Extra Items:</strong>
                  <p>Sauce (+30tk)</p>
                  <p>mayonnaise (+30tk)</p>
                </aside>
              </div>
              <div className="divider"></div>
            </div>

            <div className="customer_details">
              <h6>Customer Details</h6>
              <hr />
              <p>
                <strong>Name:</strong> MD. MOINUL HOSSAIN
              </p>
              <p>
                <strong>Phone:</strong> +88 01681894386
              </p>
              <p>
                <strong>Email:</strong> moinul@gmail.com
              </p>
              <p>
                <strong>Address:</strong> 270, Japan Garden City, Mohammadpur,
                Dhaka-1207
              </p>
              <hr />
              <hr />
              <p>
                <strong>Discount(If any):</strong> - 80 tk.{" "}
              </p>
              <p>
                <strong>Delivery Charge:</strong> + 80 tk.{" "}
              </p>
              <p>
                <strong>Total=</strong> 690 tk.{" "}
              </p>
              <p>
                <strong>Payment Option:</strong> Cash on delivery
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
