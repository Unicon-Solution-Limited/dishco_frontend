import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CateringSuccess = () => {
  useEffect(() => {
    localStorage.removeItem("cateringFood");
  }, []);
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
          <Link to="/" className="btn MyBtn">
            Continue Shopping
          </Link>
          <Link to="/" className="btn MyBtn">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CateringSuccess;
