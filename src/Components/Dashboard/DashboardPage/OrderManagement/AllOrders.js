import React from "react";
import SidebarNav from "../../Layouts/SidebarNav";
import TopbarNav from "../../Layouts/TopbarNav";
import "./OrderManagement.css";

const AllOrders = () => {
  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main className="px-1">
            <div className="dashboard_product_searchbar my-3">
              <input type="search" placeholder="search orders" />
            </div>
            <div className="table-responsive">
              <table className="table table-striped align-middle">
                <thead>
                  <tr>
                    <th scope="col">Order Id</th>
                    <th scope="col">Item/'s</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">23-001</th>
                    <td>1</td>
                    <td>MD. Moinul Hossain</td>
                    <td>01681894386</td>
                    <td>
                      <span className="status pending">Pending</span>
                      {/* <span className="status processing">Processing</span>
                      <span className="status shipped">Shipped</span> */}
                    </td>
                    <td>
                      <button
                        className="btn MyBtn"
                        data-bs-toggle="modal"
                        data-bs-target="#singleOrderProduct"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Modal for single order */}
            <div
              className="modal fade modal-lg"
              id="singleOrderProduct"
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
                        <strong>Address:</strong> 270, Japan Garden City,
                        Mohammadpur, Dhaka-1207
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
          </main>
        </div>
      </div>
    </>
  );
};

export default AllOrders;
