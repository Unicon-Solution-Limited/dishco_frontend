import React from "react";
import { Link } from "react-router-dom";

const HeaderOffcanvas = () => {
  const testImg =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp";
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="cart"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          Your Cart Items
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="offcanvas_card_single_item">
          <img src={testImg} alt="" className="offcanvas_cart_img" />
          <span>
            <p className="offcanvas_cart_product_name">
              DishCo Special Ramen Items
            </p>
            <p className="offcanvas_cart_price_qnt">
              <span>2</span>x <span>350 tk.</span>
              <span>= 700 tk.</span>
            </p>
          </span>
          <span className="offcanvas_cancellation">
            <button className="btn">
              <i className="bi bi-x-circle"></i>
            </button>
          </span>
        </div>
        <div className="offcanvas_cart_footer">
          <h4>Subtotal: 1030 Tk.</h4>
          <span className="offcanvas_cart_buttons">
            <Link to="/" className="MyBtn offcanvas_cart_button">
              View Cart
            </Link>
            <Link to="/" className="MyBtn offcanvas_cart_button">
              Checkout
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderOffcanvas;
