import React from "react";
import SidebarNav from "../../Layouts/SidebarNav";
import TopbarNav from "../../Layouts/TopbarNav";
import "./ProductManagement.css";

const AllProduct = () => {
  const demo =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp";
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
                      <img
                        src={demo}
                        alt=""
                        className="dashboard_all_product_img"
                      />
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
                      <button className="btn btn-success">Edit</button>
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
      <div
        className="modal fade"
        id="view"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="viewLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="viewLabel">
                Product Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <p>
                <strong>SKU:</strong> DSF-001
              </p>
              <img
                src={demo}
                alt="product_Image"
                className="single_product_modal_image my-2"
              />
              <h6>DishCo Special Platter</h6>
              <p className="my-2">Price: 500 Tk.</p>
              <p>Size: 8' 10 ' 12'</p>
              <p className="my-3 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                officia dolores, quidem quasi qui nemo beatae iusto illo eaque
                commodi, debitis consequatur quas fugit harum delectus facere
                est animi ipsa!
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn MyBtn"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ////// Single Product View Modal ////// */}
    </>
  );
};

export default AllProduct;
