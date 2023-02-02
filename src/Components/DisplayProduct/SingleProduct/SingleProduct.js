import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { viewDetails } = useParams();
  const [food, setFood] = useState([]);

  // getting data matching of viewDetails
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/getSingleFood?singleFoodId=" + viewDetails
        );
        const data = await response.json();
        setFood(data);
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchFood();
  }, [viewDetails]);

  const demo =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp";

  return (
    <section className="container singleProduct_main">
      {food.map((data) => (
        <div className="single_product_body">
          <aside className="single_product_img">
            <img src={data?.Image} alt="food" />
          </aside>
          <aside className="single_product_details">
            <p>{data?.foodCode}</p>
            <h1 className="single_product_name">{data?.name}</h1>
            <p className="single_product_description">
              {data?.foodDescription}
            </p>
            <p
              className="single_product_price my-3"
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {data.sizePriceItem.map((sizePrice, index2) => (
                <div key={index2}>
                  <span>{sizePrice?.price} Tk</span>
                </div>
              ))}
            </p>
            <select name="" id="" className="single_product_select_option mt-4">
              <option value="">Select Pizza Size</option>
              {data.sizePriceItem.map((sizePrice, index3) => (
                <>
                  <option value={sizePrice?.size}>{sizePrice?.size} </option>
                </>
              ))}
            </select>
            <div className="quantity_cart_button my-3">
              <span className="quantity_cart_input">
                <button
                  class="value-button"
                  id="decrease"
                  // onClick={decreaseValue}
                  // value="Decrease Value"
                >
                  -
                </button>
                <input type="number" id="number" value="1" />
                <button
                  class="value-button"
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
  );
};

export default SingleProduct;
