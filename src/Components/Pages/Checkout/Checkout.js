import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Checkout.css";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { Link } from "react-router-dom";
import { CartProvider } from "../../AllContext/CartContext";
import { useAuth } from "./../../Authentication/AuthContext/AuthContext";

const Checkout = () => {
  const addressRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const noteRef = useRef();
  const PaymentRef = useRef();
  const { currentUser } = useAuth();
  const history = useHistory();
  const [paymnetLoading, setPaymentLoading] = useState(false);
  const [cartData, setCartData, finaltotalAddonPrice, subTotalPrice] =
    useContext(CartProvider);
  const [termCondition, setTermCondition] = useState(false);

  //calculation of grand total
  const grandTotal = Number(finaltotalAddonPrice) + Number(subTotalPrice) + 80;

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    setPaymentLoading(true);
    const confirmOderData = {
      total_amount: grandTotal,
      orderedData: cartData,
      cus_name: currentUser?.displayName,
      cus_email: currentUser?.email,
      cus_phone: phoneNumberRef.current.value,
      cus_add1: addressRef.current.value,
      product_status: "Processing",
      payment_method: PaymentRef.current.value,
      orderTime: Date(),
    };

    //conditionally check the payment and hit the api
    if (confirmOderData.payment_method === "Online Payment") {
      fetch(`http://localhost:8000/onileInit`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(confirmOderData),
      })
        .then((res) => res.json())
        .then((data) => {
          setPaymentLoading(false);
          window.location.replace(data);
        });
    } else {
      fetch(`http://localhost:8000/cashonDeliveryInit`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(confirmOderData),
      })
        .then((res) => res.json())
        .then((data) => {
          setPaymentLoading(false);
          console.log(data);
        });
      history.push("/dashboard");
    }
  };

  return (
    <>
      <Header />
      <section className="container-fluid my-5 checkout_main">
        <h2 className="mb-5 px-5">Checkout</h2>
        <form className="checkout_body" onSubmit={handleConfirmOrder}>
          <aside className="billing_form">
            <h5>Shipping Address</h5>
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label mandatory_field">
                Your name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                defaultValue={currentUser?.displayName}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="area" className="form-label mandatory_field">
                Area
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                required
              >
                <option value="">Select Your Area</option>
                <option value="Dhanmondi">Dhanmondi</option>
                <option value="Mohammadpur">Mohammadpur</option>
                <option value="Elephant Road">Elephant Road</option>
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="inputAddress"
                className="form-label mandatory_field"
              >
                Details Address
              </label>
              <input
                ref={addressRef}
                type="text"
                className="form-control"
                id="inputAddress"
                required
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="inputContact"
                className="form-label mandatory_field"
              >
                Contact Number
              </label>
              <input
                ref={phoneNumberRef}
                type="phone"
                className="form-control"
                id="inputContact"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="inputEmail"
                className="form-label mandatory_field"
              >
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                className="form-control"
                id="inputEmail"
                defaultValue={currentUser?.email}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label htmlFor="extraInfo" className="form-label">
                Order Note(Optional)
              </label>
              <textarea
                ref={noteRef}
                className="form-control"
                id="extraInfo"
                rows="3"
              ></textarea>
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
            {/* <div className="table_row checkout_product_row">
              <span>Calamari Prawn Crunch Cocktail</span>
              <span>× 1 =</span>
              <span>410.00 Tk.</span>
            </div> */}
            <div className="table_row subtotal">
              <strong>Total Food Price</strong>
              <span>{subTotalPrice} Tk.</span>
            </div>

            <div className="table_row shipping">
              <strong>Total Extra Item Price</strong>
              <span>{finaltotalAddonPrice} tk.</span>
            </div>

            <div className="table_row shipping">
              <strong>Shipping Charges</strong>
              <span>Flat rate: 80.00 Tk.</span>
            </div>
            <div className="table_row total">
              <strong>Total</strong>
              <span>
                {cartData.length && finaltotalAddonPrice + subTotalPrice + 80}{" "}
                Tk.
              </span>
            </div>
            <select
              className="form-select"
              aria-label="Default select example"
              ref={PaymentRef}
              required
            >
              <option value="">Select Payment Methods</option>
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

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onChange={() => setTermCondition(!termCondition)}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I have read and agree to the website{" "}
                <Link to="/" className="myLinks TandC_link">
                  Terms and Conditions
                </Link>
                *
              </label>
            </div>
            <button
              type="submit"
              className="btn MyBtn placeOrder_btn"
              disabled={!termCondition || cartData.length === 0}
            >
              {paymnetLoading ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                "Confirm Order"
              )}
            </button>
          </aside>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
