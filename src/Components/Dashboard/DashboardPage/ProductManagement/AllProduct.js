import React, { useEffect, useState } from "react";
import SidebarNav from "../../Layouts/SidebarNav";
import TopbarNav from "../../Layouts/TopbarNav";
import "./ProductManagement.css";
import { Link } from "react-router-dom";
import ViewProductDetails from "./ViewProductDetails";
import axios from "axios";

const AllProduct = () => {
  const [allFoods, setAllFoods] = useState([]);

  useEffect(() => {
    const fetchAllFood = () => {
      axios
        .get("http://localhost:8000/getAllProducts")
        .then((response) => setAllFoods(response?.data))
        .catch((error) => console.log(error));
    };
    fetchAllFood();
  }, []);

  console.log(allFoods);

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
                {allFoods.map((foodDt, index) => (
                  <tbody className="table-group-divider" key={foodDt._id}>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {" "}
                        <img
                          src={foodDt.image}
                          alt=""
                          className="dashboard_all_product_img"
                        />
                      </td>
                      <td className="product_name_tc">{foodDt.name}</td>
                      <td>
                        {" "}
                        {foodDt?.sizePriceItem?.map((sizePrice, k) => (
                          <span key={k}>
                            <span>{sizePrice.price} </span>
                          </span>
                        ))}{" "}
                        tk.
                      </td>
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
                ))}
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
