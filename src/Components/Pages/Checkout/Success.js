import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <section className="success_main">
      <div className="success_body">
        <h2 className="mb-2">Your Order has been received.</h2>
        <span className="success_icon">
          <i class="bi bi-check-circle"></i>
        </span>
        <p className="mt-2">Thank you for your purchase.</p>
        <strong>Your Order ID is: FVBG458741236</strong>
        <p>
          You will received an order confirmation email with details of your
          order.
        </p>
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

export default Success;
