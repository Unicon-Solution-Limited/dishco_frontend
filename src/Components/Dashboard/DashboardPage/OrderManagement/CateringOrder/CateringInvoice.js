import React from "react";
import { useLocation } from "react-router";

const CateringInvoice = () => {
  const location = useLocation();
  const data = location.state.orderDetailsForCateringInvoice;

  return (
    <div>
      <h1>
        {data?.food?.map((orderDt, index) => (
          <div key={index}>
            <p>
              {orderDt?.day}: {orderDt?.package}-
              {new Intl.NumberFormat("bn-BD").format(orderDt.tk)} টাকা
            </p>
          </div>
        ))}
      </h1>
    </div>
  );
};

export default CateringInvoice;
