import React from "react";
import { useLocation } from "react-router";

const CateringInvoice = () => {
  const location = useLocation();
  const data = location.state.orderDetailsForCateringInvoice;

  console.log(data);

  //total tk
  const totalTk = data?.food.reduce(
    (accumulator, item) => accumulator + item.tk,
    0
  );

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
      <br /> <br />
      <h1>মোট- {new Intl.NumberFormat("bn-BD").format(totalTk)} টাকা</h1>
      <h1>নাম- {data?.cus_name}</h1>
      <h1>ইমেল- {data.cus_email}</h1>
      <h1>মোবাইল নাম্বার- {data?.cus_phone}</h1>
      <h1>অর্ডার সময়- {data?.orderTime}</h1>
      <h1>পেমেন্ট পদ্ধতি- {data?.payment_method}</h1>
      <h1>এলাকা- {data?.ship_city}</h1>
      <h1>পূর্ণ ঠিকানা- {data?.extra_information}</h1>
    </div>
  );
};

export default CateringInvoice;
