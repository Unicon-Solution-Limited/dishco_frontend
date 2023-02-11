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
          <main class="px-1">
            <div className="dashboard_product_searchbar my-3">
              <input type="search" placeholder="search product" />
            </div>
            <div className="table-responsive">
              <table class="w-100 table table-striped table-hover align-middle dashboard_product_display_table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Photo</th>
                    <th scope="col product_name_tc">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
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
                      <button className="btn btn-info">View</button>
                      <button className="btn btn-success">Edit</button>
                      <button className="btn btn-danger">
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
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
                    <td className="product_name_tc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt totam in nulla corrupti distinctio tenetur ut
                      omnis nisi quod ab.
                    </td>
                    <td>500 tk.</td>
                    <td className="action_button">
                      <button className="btn btn-info">View</button>
                      <button className="btn btn-success">Edit</button>
                      <button className="btn btn-danger">
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AllProduct;
