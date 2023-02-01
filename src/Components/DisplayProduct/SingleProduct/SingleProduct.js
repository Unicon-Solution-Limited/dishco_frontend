import React from "react";
import "./SingleProduct.css";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const demo =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp";

  // Increase/ Decrease
  function increaseValue() {
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("number").value = value;
  }

  function decreaseValue() {
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 2) {
      value = 2;
    }
    value--;
    document.getElementById("number").value = value;
  }

  return (
    <section className="container singleProduct_main">
      <div className="single_product_body">
        <aside className="single_product_img">
          <img src={demo} alt="" />
        </aside>
        <aside className="single_product_details">
          <p>SKU- SP-001</p>
          <h1 className="single_product_name">Margarita Pizza</h1>
          <p className="single_product_description">
            Cheese, P Cheese, Slice Cheese, Special Pizza Sauce
          </p>
          <h3 className="single_product_price my-3">315.00 – 485.00</h3>
          <select name="" id="">
            <option value="">Select Pizza Size</option>
            <option value="">S-8</option>
            <option value="">S-10</option>
            <option value="">S-12</option>
          </select>
          <div className="quantity_cart_button my-3">
            <span className="quantity_cart_input">
              <div
                class="value-button"
                id="decrease"
                onClick={decreaseValue}
                value="Decrease Value"
              >
                -
              </div>
              <input type="number" id="number" value="1" />
              <div
                class="value-button"
                id="increase"
                onClick={increaseValue}
                value="Increase Value"
              >
                +
              </div>
            </span>
            <button className="MyBtn add_to_cart_button">
              <i className="bi bi-cart-fill"></i> Add To Cart
            </button>
          </div>
          <p className="my-3">
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
    </section>
  );
};

export default SingleProduct;
