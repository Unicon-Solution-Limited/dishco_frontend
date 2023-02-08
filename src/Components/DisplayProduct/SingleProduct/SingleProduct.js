import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { Link, useParams } from "react-router-dom";
import Header from "./../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const SingleProduct = () => {
  const { viewDetails } = useParams();
  const [food, setFood] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);

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

  const handleChange = (e) => {
    if (food.length) {
      setSelectedVariant(
        food[0].sizePriceItem.find((variant) => variant.size === e.target.value)
      );
    }
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
              <p
                className="single_product_price my-3"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                {data.sizePriceItem.map((sizePrice, index) => (
                  <div key={index}>
                    <span>{sizePrice.price} Tk</span>
                  </div>
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
                <option value="0">choose a size</option>
                {data.sizePriceItem.map((variant) => (
                  <option key={variant.size} value={variant.size}>
                    {variant.size}
                  </option>
                ))}
              </select>

              <div className="quantity_cart_button my-3">
                <span className="quantity_cart_input">
                  <button
                    className="value-button"
                    id="decrease"
                    // onClick={decreaseValue}
                    // value="Decrease Value"
                  >
                    -
                  </button>
                  <input type="number" id="number" value="1" />
                  <button
                    className="value-button"
                    id="increase"
                    // onClick={increaseValue}
                    // value="Increase Value"
                  >
                    +
                  </button>
                </span>
                <button className="MyBtn add_to_cart_button">
                  <i className="bi bi-cart-fill"></i> Add To Cart
                </button>
              </div>
              <p className="my-3 categories_link my-4">
                Categories:{" "}
                <Link to="/" className="myLinks">
                  Fast Food
                </Link>{" "}
                <i className="bi bi-chevron-right"></i>{" "}
                <Link to="/" className="myLinks">
                  Pizza
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
