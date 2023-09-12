import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../AllContext/CartContext";

const Success = () => {
  const [cartData, setCartData, finaltotalAddonPrice, subTotalPrice] =
    useContext(CartProvider);

  useEffect(() => {
    setCartData([]);
    localStorage.removeItem("foodCart");
  }, [setCartData]);

  return (
    <section className="success_main">
      <div className="success_body">
        <h2 className="mb-2">Your Order has been received.</h2>
        <span className="success_icon">
          <i className="bi bi-check-circle"></i>
        </span>
        <p className="mt-2">Thank you for your purchase.</p>

        <strong className="mt-2">Please call to confirm your order.</strong>
        <h3>+88 01810-098389</h3>
        <div className="success_redirect_button mt-4">
          <Link to="/dashboard" className="btn MyBtn">
            Dashboard
          </Link>
          <Link to="/" className="btn MyBtn">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Success;
