import React from "react";
import { Link } from "react-router-dom";

const CateringDetails = () => {
  return (
    <div>
      <h1>catering details</h1>
      <Link to="/cateringCheckoutPage">
        <button>checkout page</button>
      </Link>
    </div>
  );
};

export default CateringDetails;
