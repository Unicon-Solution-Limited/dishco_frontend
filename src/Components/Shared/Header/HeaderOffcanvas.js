import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../AllContext/CartContext";

const HeaderOffcanvas = () => {
  //all context
  const [cartData, setCartData, finaltotalAddonPrice, subTotalPrice] =
    useContext(CartProvider);

  // Delete items from cart
  const deleteItem = (id) => {
    let newData = cartData.filter((item) => item.id !== id);
    setCartData(newData);
  };

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
        {cartData.map((cartDt) => (
          <div key={cartDt?.id} className="offcanvas_card_single_item">
            <img
              src={cartDt?.image}
              alt=""
              className="offcanvas_cart_img"
              loading="lazy"
            />
            <span>
              <p className="offcanvas_cart_product_name">{cartDt?.name}</p>
              <p className="offcanvas_cart_price_qnt">
                <span>{cartDt?.quantity}</span>x
                <span>
                  {cartDt?.price} tk. +{" "}
                  {cartDt?.extras.reduce(
                    (acc, addon) => acc + addon.priceOfAddon,
                    0
                  )}
                  tk.
                </span>
                <span>
                  =
                  {cartDt?.quantity * cartDt?.price +
                    cartDt?.extras.reduce(
                      (acc, addon) => acc + addon.priceOfAddon,
                      0
                    )}
                </span>
              </p>
            </span>
            <span className="offcanvas_cancellation">
              <button className="btn" onClick={() => deleteItem(cartDt?.id)}>
                <i className="bi bi-x-circle"></i>
              </button>
            </span>
          </div>
        ))}
        <div className="offcanvas_cart_footer">
          <h4>Subtotal: {subTotalPrice + finaltotalAddonPrice} Tk.</h4>
          <span className="offcanvas_cart_buttons">
            <button className="btn" data-bs-dismiss="offcanvas">
              <Link to="/cart" className="MyBtn offcanvas_cart_button">
                View Cart
              </Link>
            </button>
            <button className="btn" data-bs-dismiss="offcanvas">
              <Link to="/checkout" className="MyBtn offcanvas_cart_button">
                Checkout
              </Link>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderOffcanvas;
