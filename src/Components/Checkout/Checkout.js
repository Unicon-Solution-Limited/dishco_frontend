import React from "react";
import "./Checkout.css";
import Header from "./../Shared/Header/Header";
import Footer from "./../Shared/Footer/Footer";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <Header />
      <section className="container-fluid my-5 checkout_main">
        <h2 className="mb-5 px-5">Checkout</h2>
        <form className="checkout_body">
          <aside className="billing_form">
            <h5>Shipping Address</h5>
            <div class="mb-3">
              <label for="inputName" class="form-label mandatory_field">
                Your name
              </label>
              <input type="text" class="form-control" id="inputName" />
            </div>
            <div class="mb-3">
              <label for="area" class="form-label mandatory_field">
                Area
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select Your Area</option>
                <option value="1">Dhanmondi</option>
                <option value="2">Mohammadpur</option>
                <option value="3">Elephant Road</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="inputAddress" class="form-label mandatory_field">
                Details Address
              </label>
              <input type="text" class="form-control" id="inputAddress" />
            </div>

            <div class="mb-3">
              <label for="inputContact" class="form-label mandatory_field">
                Contact Number
              </label>
              <input type="phone" class="form-control" id="inputContact" />
            </div>
            <div class="mb-3">
              <label for="inputEmail" class="form-label mandatory_field">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail" />
            </div>

            <div class="mb-3">
              <label for="extraInfo" class="form-label">
                Order Note(Optional)
              </label>
              <textarea class="form-control" id="extraInfo" rows="3"></textarea>
            </div>

            <div className="mandatory_note">
              Note: Start(*) Marks Fields are Mandatory.
            </div>
          </aside>
          <aside className="checkout_details">
            <h5 className="mb-5">Your Order</h5>
            <div className="table_row">
              <strong>Product</strong>
              <strong>Subtotal</strong>
            </div>
            <div className="table_row checkout_product_row">
              <span>Calamari Prawn Crunch Cocktail</span>
              <span>× 1 =</span>
              <span>410.00 Tk.</span>
            </div>
            <div className="table_row subtotal">
              <strong>Subtotal</strong>
              <span>1,755.00 Tk.</span>
            </div>
            <div className="table_row shipping">
              <strong>Shipping</strong>
              <span>Flat rate: 80.00 Tk.</span>
            </div>
            <div className="table_row total">
              <strong>Total</strong>
              <span>1,835.00 Tk.</span>
            </div>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select Payment Methods</option>
              <option value="Online Payment">Online Payment</option>
              <option value="Cash on delivery">Cash on delivery</option>
            </select>
            <p className="cash_delivery_text">
              <b>Cash on delivery:</b> Pay with cash upon delivery.
            </p>
            <p className="my-5 TandC_text">
              Your personal data(name and email address) will be used to process
              your order, support your experience throughout this website, and
              for other purposes described in our{" "}
              <Link to="/" className="myLinks TandC_link">
                privacy policy
              </Link>
              .
            </p>

            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                I have read and agree to the website{" "}
                <Link to="/" className="myLinks TandC_link">
                  Terms and Conditions
                </Link>
                *
              </label>
            </div>
            <button type="submit" class="btn MyBtn placeOrder_btn">
              Place Order
            </button>
          </aside>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
