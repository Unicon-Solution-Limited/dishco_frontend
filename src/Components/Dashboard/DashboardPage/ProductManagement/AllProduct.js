import React, { useEffect, useState } from "react";
import SidebarNav from "../../Layouts/SidebarNav";
import TopbarNav from "../../Layouts/TopbarNav";
import "./ProductManagement.css";
import { Link } from "react-router-dom";
import ViewProductDetails from "./ViewProductDetails";
import axios from "axios";
import { DebounceInput } from "react-debounce-input";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";

const AllProduct = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState("");
  const { currentUser } = useAuth();

  const [searchTerm, setSearchTerm] = useState("");

  // filter the orders based on search term
  const filteredOrders = allFoods.filter((order) =>
    order?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchAllFood = () => {
      axios
        .get("https://server.dishcofood.com/getAllProducts")
        .then((response) => setAllFoods(response?.data))
        .catch((error) => console.log(error));
    };
    fetchAllFood();
  }, []);

  //delete food from database
  const handleFoodDelete = async (id) => {
    try {
      setDeleteMessage("");
      const response = await axios.delete(
        `https://server.dishcofood.com/deleteFood/${id}?email=${currentUser?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
          },
        }
      );
      const data = response.data;
      if (data) {
        setDeleteMessage("food deleted successfully");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };

  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main className="px-1">
            <div className="dashboard_product_searchbar my-3">
              <DebounceInput
                type="search"
                placeholder="search product name"
                value={searchTerm}
                onChange={handleSearchChange}
                minLength={2}
                debounceTimeout={300}
              />
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
                {filteredOrders.map((foodDt, index) => (
                  <tbody className="table-group-divider" key={foodDt._id}>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {" "}
                        <img
                          src={foodDt.image}
                          alt=""
                          className="dashboard_all_product_img"
                          loading="lazy"
                        />
                      </td>
                      <td className="product_name_tc">{foodDt.name}</td>
                      <td>
                        {" "}
                        {foodDt?.sizePriceItem?.map((sizePrice, k) => (
                          <span key={k} className="product_price_span">
                            <span>{sizePrice.price}</span>
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
                        <Link
                          to={`/editProduct/${foodDt._id} `}
                          className="btn btn-success"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleFoodDelete(foodDt._id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                        {/* ****** Single Product View Modal ******* */}
                        <ViewProductDetails viewProductId={foodDt._id} />
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AllProduct;
