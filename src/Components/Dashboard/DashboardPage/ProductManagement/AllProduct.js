import React from "react";
import SidebarNav from "../../Layouts/SidebarNav";
import TopbarNav from "../../Layouts/TopbarNav";
import "./ProductManagement.css";
import { Link } from "react-router-dom";
import ViewProductDetails from "./ViewProductDetails";

const AllProduct = () => {
  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main className="px-1">
            <div className="dashboard_product_searchbar my-3">
              <input type="search" placeholder="search product" />
            </div>
            <div className="table-responsive">
              <table className="w-100 table table-striped table-hover align-middle dashboard_product_display_table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Photo</th>
                    <th scope="col product_name_tc">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      {" "}
                      <img alt="" className="dashboard_all_product_img" />
                    </td>
                    <td className="product_name_tc">DishCo Pizza</td>
                    <td>500 tk.</td>
                    <td className="action_button">
                      <button
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#view"
                      >
                        View
                      </button>
                      <Link to="/editProduct" className="btn btn-success">
                        Edit
                      </Link>
                      <button className="btn btn-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>

      {/* ****** Single Product View Modal ******* */}
      <ViewProductDetails />
    </>
  );
};

export default AllProduct;
