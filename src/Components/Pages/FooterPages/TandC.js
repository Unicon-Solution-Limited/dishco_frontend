import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./FooterPages.css";

const TandC = () => {
  return (
    <>
      <Header />
      <section className="footerPage_basic termsAndCondition">
        <div className="container">
          <h1 className="text-center mb-5">Terms and Condition</h1>
          <h2>Pricing and Payment Methods</h2>

          <p>
            In order to buy food, you must pay the price of the food at the time
            of purchase. We offer two payment methods:
          </p>

          <ul>
            <li>
              <strong>Cash on Delivery:</strong> With this payment method, you
              will pay for your food when it is delivered to you by our delivery
              person.
            </li>
            <li>
              <strong>Online Payment:</strong> With this payment method, you
              will need to pay for your food online before our delivery person
              will deliver your order.
            </li>
          </ul>

          <p>
            Please choose the payment method that is most convenient for you.
            Please note that additional fees or charges may apply depending on
            your chosen payment method.
          </p>
          <div className="mt-5">
            <h2>Access to the website continuously</h2>
            <p>
              We will take all reasonable steps to ensure that access to the
              Site is always available and error-free. However, this cannot be
              guaranteed due to the nature of the Internet and the Site's
              structure. Therefore, your access to the Site may be temporarily
              suspended or restricted without notice to allow for repairs,
              maintenance, or the addition of new features or services. We'll
              attempt to minimize any suspensions or restrictions to a bare
              minimum in frequency and duration.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TandC;
