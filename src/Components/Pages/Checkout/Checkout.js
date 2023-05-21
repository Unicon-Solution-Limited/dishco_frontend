import React, { useContext, useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Checkout.css";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { Link } from "react-router-dom";
import { CartProvider } from "../../AllContext/CartContext";
import { useAuth } from "./../../Authentication/AuthContext/AuthContext";
import axios from "axios";

const Checkout = () => {
  const cityRef = useRef();
  const addressRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const extra_informationRef = useRef();
  const PaymentRef = useRef();
  const { currentUser } = useAuth();
  const history = useHistory();
  const [paymnetLoading, setPaymentLoading] = useState(false);
  const [cartData, setCartData, finaltotalAddonPrice, subTotalPrice] =
    useContext(CartProvider);
  const [termCondition, setTermCondition] = useState(false);
  const [grandTotal, setGrandTotal] = useState(0);
  //coupon
  const couponRef = useRef();
  const [sevenDaysTokenData, setSevenDaysTokenData] = useState([]);
  const [couponCondition, SetCouponCondition] = useState(false);
  const [couponMessage, setCouponMessage] = useState("");
  const [discountPrice, setDicountPrice] = useState(0);

  //getting 7 days(temporary)  token data according to the email
  useEffect(() => {
    const fetchTokenData = async () => {
      if (currentUser.email) {
        try {
          const response = await axios.get(
            `https://server.dishcofood.com/getTemporaryTokenData?email=${currentUser.email}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
              },
            }
          );
          setSevenDaysTokenData(response?.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchTokenData();
  }, [currentUser.email]);

  //conditionally token applied
  const tokenApplySubmit = (event) => {
    event.preventDefault();
    if (sevenDaysTokenData[0]?.token == couponRef?.current?.value) {
      SetCouponCondition(true);
      setCouponMessage("Coupon applied successfully");
      couponRef.current.value = "";
    } else {
      SetCouponCondition(false);
      setCouponMessage(
        "Oops, it looks like there's a problem with your coupon."
      );
      couponRef.current.value = "";
    }
  };

  //calculation and condition of discount price
  useEffect(() => {
    if (
      couponCondition === true &&
      sevenDaysTokenData[0].customerPosition == "Bronze"
    ) {
      setDicountPrice(subTotalPrice * (2 / 100));
    } else if (
      couponCondition === true &&
      sevenDaysTokenData[0].customerPosition == "Silver"
    ) {
      setDicountPrice(subTotalPrice * (5 / 100));
    } else if (
      couponCondition === true &&
      sevenDaysTokenData[0].customerPosition == "Gold"
    ) {
      setDicountPrice(subTotalPrice * (10 / 100));
    } else if (
      couponCondition === true &&
      sevenDaysTokenData[0].customerPosition == "Platinum"
    ) {
      setDicountPrice(subTotalPrice * (15 / 100));
    }
  }, [couponCondition, sevenDaysTokenData, subTotalPrice]);

  //calculation of grand total
  useEffect(() => {
    // discountPrice
    setGrandTotal(
      Number(finaltotalAddonPrice) +
        Number(subTotalPrice) -
        Number(discountPrice) +
        60
    );
  }, [discountPrice, finaltotalAddonPrice, subTotalPrice]);

  // const grandTotal = Number(finaltotalAddonPrice) + Number(subTotalPrice) + 80;

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    setPaymentLoading(true);
    const confirmOderData = {
      total_amount: grandTotal,
      orderedData: cartData,
      discountPrice: discountPrice,
      cus_name: currentUser?.displayName,
      cus_city: cityRef?.current.value,
      cus_email: currentUser?.email,
      extra_information: extra_informationRef?.current.value,
      cus_phone: phoneNumberRef.current.value,
      cus_add1: addressRef.current.value,
      product_status: "Pending",
      payment_method: PaymentRef.current.value,
      orderTime: Date(),
    };

    //conditionally check the payment and hit the api
    if (confirmOderData.payment_method === "Online Payment") {
      fetch(`https://server.dishcofood.com/onileInit?email=${currentUser?.email}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
        },
        body: JSON.stringify(confirmOderData),
      })
        .then((res) => res.json())
        .then((data) => {
          setPaymentLoading(false);
          window.location.replace(data);
        });
    } else {
      fetch(
        `https://server.dishcofood.com/cashonDeliveryInit?email=${currentUser?.email}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
          },
          body: JSON.stringify(confirmOderData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPaymentLoading(false);
          console.log(data);
          history.push("/success/cashOnDelivery");
        });
    }
  };

  return (
    <>
      <Header />
      <section className="container-fluid my-5 checkout_main">
        <h2 className="mb-5 px-5 row">Checkout</h2>
        {subTotalPrice ? (
          <form className="my-5 col-md-6" onSubmit={tokenApplySubmit}>
            <p>
              Apply your Coupon{" "}
              {(sevenDaysTokenData &&
                sevenDaysTokenData[0]?.customerPosition == "Bronze" &&
                "for 2% discount") ||
                (sevenDaysTokenData[0]?.customerPosition == "Silver" &&
                  "for 5% discount") ||
                (sevenDaysTokenData[0]?.customerPosition == "Gold" &&
                  "for 10% discount") ||
                (sevenDaysTokenData[0]?.customerPosition == "Platinum" &&
                  "for 15% discount")}
            </p>
            {subTotalPrice > 0 && sevenDaysTokenData.length ? (
              <p>
                Your Token:{" "}
                <span style={{ color: "green" }}>
                  {sevenDaysTokenData[0]?.token}
                </span>
              </p>
            ) : (
              ""
            )}
            <div className="d-flex mt-2">
              <input
                ref={couponRef}
                type="text"
                className="form-control"
                id="inputCoupon"
                required
                // style={{ width: "44%" }}
              />
              <button className="btn MyBtn" type="submit">
                Submit
              </button>
            </div>
            <h1>{couponMessage}</h1>
          </form>
        ) : (
          ""
        )}
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
                ref={cityRef}
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
                ref={extra_informationRef}
                className="form-control"
                id="extraInfo"
                rows="3"
              ></textarea>
            </div>

            <div className="mandatory_note">
              Note: Start(*) Marks Fields are Mandatory.
            </div>

            {/* <form className="my-5" onSubmit={tokenApplySubmit}>
              <p>Apply your Coupon</p>
              {sevenDaysTokenData.length ? (
                <p>
                  Your Token:{" "}
                  <span style={{ color: "green" }}>
                    {sevenDaysTokenData[0]?.token}
                  </span>
                </p>
              ) : (
                ""
              )}
              <div className="d-flex mt-2">
                <input
                  ref={couponRef}
                  type="text"
                  className="form-control"
                  id="inputCoupon"
                  required
                />
                <button className="btn MyBtn" type="submit">
                  Submit
                </button>
              </div>
            </form> */}
          </aside>
          <aside className="checkout_details">
            <h5 className="mb-5">Your Order</h5>
            <div className="table_row">
              <strong>Items</strong>
              <strong>Subtotal</strong>
            </div>

            <div className="table_row subtotal">
              <strong>Total Food Price</strong>
              <span>{subTotalPrice} Tk.</span>
            </div>

            <div className="table_row subtotal">
              <strong>Discount</strong>
              <span>{discountPrice} Tk.</span>
            </div>

            <div className="table_row shipping">
              <strong>Total Extra Item Price</strong>
              <span>{finaltotalAddonPrice} tk.</span>
            </div>

            <div className="table_row shipping">
              <strong>Shipping Charges</strong>
              <span>Flat rate: 60.00 Tk.</span>
            </div>
            <div className="table_row total">
              <strong>Total</strong>
              <span>
                {/* {cartData.length && finaltotalAddonPrice + subTotalPrice + 80} */}
                {grandTotal}
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

            <div className="mb-3 form-check checkBox_main">
              <input
                type="checkbox"
                className="form-check-input checkBox_input"
                id="exampleCheck1"
                onChange={() => setTermCondition(!termCondition)}
              />
              <label
                className="form-check-label checkBox_label"
                htmlFor="exampleCheck1"
              >
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
