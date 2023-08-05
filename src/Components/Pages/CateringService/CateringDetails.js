import React from "react";
import { Link, useParams } from "react-router-dom";

const CateringDetails = () => {
  const { cateringDetail } = useParams();
  return (
    <div>
      <h1>{cateringDetail}</h1>
      <Link to="/cateringCheckoutPage">
        <button>checkout page</button>
      </Link>
    </div>
  );
};

export default CateringDetails;
