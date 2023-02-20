import React, { useContext, useEffect, useState } from "react";
import "./SingleProduct.css";
import { Link, useParams } from "react-router-dom";
import Header from "./../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { CartProvider } from "../../AllContext/CartContext";

const SingleProduct = () => {
  const { viewDetails } = useParams();
  const [food, setFood] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartData, setCartData] = useContext(CartProvider);
  const [successMsg, setSuccessMsg] = useState(false);

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

  const handleChange = (event) => {
    setSelectedSize(event.target.value);
  };

  //add to refresh off
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //addons/ exters
  const handleExtraChange = (event) => {
    const selectedExtra = event.target.value;
    const isChecked = event.target.checked;

    const [addonName, addonPrice] = selectedExtra.split(",");

    if (isChecked) {
      setSelectedExtras((prevSelected) => [
        ...prevSelected,
        { nameOfAddon: addonName, priceOfAddon: parseInt(addonPrice) },
      ]);
    } else {
      setSelectedExtras((prevSelected) =>
        prevSelected.filter((extra) => extra.nameOfAddon !== addonName)
      );
    }
  };

  //handleDecrese
  const handleDecrease = () => {
    setQuantity(Math.max(quantity - 1, 1));
  };

  //handleIncrease
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  //hande add to cart system
  const addToCart = () => {
    // matching the size's-price according to selected size
    const selectedFoodPrice = food.map(
      (data) =>
        data?.sizePriceItem?.find((v) => v?.size === selectedSize)?.price || 0
    );

    //item object
    const item = {
      id: food[0]._id,
      name: food[0].name,
      size: selectedSize,
      price: parseInt(selectedFoodPrice),
      foodCode: food[0].foodCode,
      extras: selectedExtras,
      stock: food[0].stock,
      quantity: quantity,
    };

    // get existing cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // find the existing item index if the item already exists in the cart
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // if the item already exists, update the quantity instead of adding a new item
      // cartItems[existingItemIndex].quantity += 1;
    } else {
      // if the item is new, add it to the cartItems array
      cartItems.push(item);
    }

    // set the updated cart items array in local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // update the cart data in the context
    setCartData(cartItems);
  };

  //cartItem remove
  const handleClearCart = () => {
    setCartData([]);
  };

  return (
    <>
      <Header />
      {successMsg && <h1>Food Successfully added to your cart</h1>}
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
              <form onSubmit={handleSubmit}>
                {selectedSize && (
                  <h1>
                    {
                      data.sizePriceItem.find((v) => v.size === selectedSize)
                        .price
                    }
                    Tk
                  </h1>
                )}
                <select
                  name=""
                  id="food"
                  className="single_product_select_option mt-4"
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose Size</option>
                  {data.sizePriceItem.map((variant) => (
                    <option key={variant.size} value={variant.size}>
                      {variant.size}
                    </option>
                  ))}
                </select>

                <div className="addons_checkbox my-5">
                  <h6>Extra Items</h6>
                  {data?.addonsItem?.map((addon, index) => (
                    <div key={index} className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`inlineCheckbox${index}`}
                        value={`${addon.addonName},${addon.addonPrice}`}
                        onChange={handleExtraChange}
                        checked={selectedExtras.some(
                          (extra) => extra.nameOfAddon === addon.addonName
                        )}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`inlineCheckbox${index}`}
                      >
                        {addon.addonName} (${addon.addonPrice})
                      </label>
                    </div>
                  ))}
                </div>

                <div className="quantity_cart_button my-3">
                  <span className="quantity_cart_input">
                    <button
                      className="value-button"
                      id="decrease"
                      onClick={handleDecrease}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="number"
                      value={quantity}
                      readOnly
                    />
                    <button
                      className="value-button"
                      id="increase"
                      onClick={handleIncrease}
                    >
                      +
                    </button>
                  </span>
                  <button
                    onClick={addToCart}
                    className="MyBtn add_to_cart_button"
                    type="submit"
                  >
                    <i className="bi bi-cart-fill"></i> Add To Cart
                  </button>
                </div>
                <button
                  className="MyBtn add_to_cart_button"
                  onClick={() => handleClearCart()}
                >
                  <i className="bi bi-trash3"></i> Clear Cart
                </button>
              </form>
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
