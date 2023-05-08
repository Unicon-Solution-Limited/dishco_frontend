import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./FooterPages.css";

const Returnpolicy = () => {
  return (
    <>
      <Header />
      <section className="footerPage_basic return_policy">
        <div className="container">
          <h1 className="text-center mb-5">Refund and Cancelation</h1>
          <p>
            Our refund and returns policy lasts 1 hour. If 1 hour has passed
            since your purchase food, we can’t offer you a full refund or
            exchange. After giving the order we have only two condition for
            return food.
          </p>

          <ul className="my-3">
            <strong>
              <li>
                1. When you do not get the food as your ordered invoice paper,
                then only you can return your food by communicate our main
                authority.
              </li>
            </strong>
            <strong>
              <li>
                2. If you find any kinds of unhygienic elements in the food,
                then only you can return your food with the strong evidence.
                After all kinds of investigation, our higher authority will take
                steps.
              </li>
            </strong>
          </ul>

          <p>
            We will send you an email to let you know that we have received your
            returned item once we have received it. We will also notify you of
            the approval or rejection of your refund. If you are approved, then
            your refund will be processed.
          </p>

          <div className="mt-5">
            <h3>Additional non-returnable items:</h3>
            <ul>
              <li>
                <h5>• Gift cards</h5>
              </li>
            </ul>
          </div>
          <div className="mt-1">
            <p>
              * The rules and regulations of DishCo authority is very strict.
              You always need to obey the rules and regulations.
            </p>
            <p>
              * The DishCo site have right to modify, change, add, or remove
              anything from this website without any kinds of notice.
            </p>
            <p>
              * The head office handles all of our terms and conditions, order
              cancellations, and food returns.
            </p>
          </div>
          <div className="mt-5">
            <h3>TAXES</h3>
            <p>
              We bear all kinds of taxes according to the government tax policy
              when you buy our product.
            </p>
          </div>
          <p className="text-danger mt-3">
            N.B: To complete your return, we require a receipt or proof of
            purchase.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Returnpolicy;
