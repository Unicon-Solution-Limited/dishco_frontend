import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { Link, useParams } from "react-router-dom";
import Header from "./../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const SingleProduct = () => {
  const { viewDetails } = useParams();
  const [food, setFood] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/getSingleFood?singleFoodId=${viewDetails}`
        );
        const data = await response.json();
        setFood(data);
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchFood();
  }, [viewDetails]);

  //matching the size
  const handleChange = (e) => {
    if (food.length) {
      setSelectedVariant(
        food[0].sizePriceItem.find((variant) => variant.size === e.target.value)
      );
    }
  };

  //quantity increase
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  //quantity decrease
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //add to cart system
  const addToCart = () => {
    const item = {
      id: food[0]._id,
      name: food[0].name,
      size: selectedVariant.size,
      price: selectedVariant.price,
      quantity,
    };
    console.log(item);
  };

  return (
    <>
      <Header />
      <section className="container singleProduct_main">
        {food.map((data) => (
          <div key={data._id} className="single_product_body">
            <aside className="single_product_img">
              <img src={data.Image} alt="food" />
            </aside>
            <aside className="single_product_details">
              <p>{data.foodCode}</p>
              <h1 className="single_product_name">{data.name}</h1>
              <p className="single_product_description">
                {data.foodDescription}
              </p>
              <p className="single_product_price my-3">
                {data.sizePriceItem.map((sizePrice, index) => (
                  <span key={index}>
                    <span>{sizePrice.price} Tk</span>
                  </span>
                ))}
              </p>
              {/* //slected price accoring to the size */}
              {selectedVariant && <h1>{selectedVariant.price} Tk</h1>}
              <select
                name=""
                id="food"
                className="single_product_select_option mt-4"
                onChange={handleChange}
              >
                <option value="0">Choose Size</option>
                {data.sizePriceItem.map((variant) => (
                  <option key={variant.size} value={variant.size}>
                    {variant.size}
                  </option>
                ))}
              </select>

              <div className="addons_checkbox my-5">
                <h6>Extra Items</h6>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineCheckbox1">
                    Sauce
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineCheckbox2">
                    Chezz
                  </label>
                </div>
              </div>

              <div className="quantity_cart_button my-3">
                <span className="quantity_cart_input">
                  <button
                    className="value-button"
                    id="decrease"
                    onClick={() => handleDecrease()}
                  >
                    -
                  </button>
                  <input type="number" id="number" value={quantity} />
                  <button
                    className="value-button"
                    id="increase"
                    onClick={() => handleIncrease()}
                  >
                    +
                  </button>
                </span>
                {/* add to card button */}
                <button
                  onClick={() => addToCart()}
                  className="MyBtn add_to_cart_button"
                >
                  <i className="bi bi-cart-fill"></i> Add To Cart
                </button>
              </div>
              <p className="my-3 categories_link my-4">
                Categories:{" "}
                <Link to="/" className="myLinks">
                  {data.categories}
                </Link>{" "}
                <i className="bi bi-chevron-right"></i>{" "}
                <Link to="/" className="myLinks">
                  {data.name}
                </Link>
              </p>
            </aside>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default SingleProduct;
