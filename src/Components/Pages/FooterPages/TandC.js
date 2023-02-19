import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./FooterPages.css";

const TandC = () => {
  return (
    <>
      <Header />
      <h1>terms and condition</h1>
      <h2>Pricing and Payment Methods</h2>

      <p>
        In order to buy food, you must pay the price of the food at the time of
        purchase. We offer two payment methods:
      </p>

      <ul>
        <li>
          Cash on Delivery: With this payment method, you will pay for your food
          when it is delivered to you by our delivery person.
        </li>
        <li>
          Online Payment: With this payment method, you will need to pay for
          your food online before our delivery person will deliver your order.
        </li>
      </ul>

      <p>
        Please choose the payment method that is most convenient for you. Please
        note that additional fees or charges may apply depending on your chosen
        payment method.
      </p>

      <Footer />
    </>
  );
};

export default TandC;
