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

  console.log(cartData);

  //getting 7 days(temporary)  token data according to the email
  useEffect(() => {
    const fetchTokenData = async () => {
      if (currentUser.email) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/getTemporaryTokenData?email=${currentUser.email}`,
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
      total_amount: grandTotal - (subTotalPrice * 10) / 100,
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
      fetch(
        `${process.env.REACT_APP_BACKEND_URL}/onileInit?email=${currentUser?.email}`,
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
          window.location.replace(data);
        });
    } else {
      fetch(
        `${process.env.REACT_APP_BACKEND_URL}/cashonDeliveryInit?email=${currentUser?.email}`,
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
      <section className="container-fluid checkout_main">
        <span>
          <h2 className="text-center">Checkout</h2>
          <img
            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692872250/Frontend_images/joh2ojg6s3gwwmqh3st0.png"
            alt=""
            className="img-fluid checkout-patterns-bottom"
          />
        </span>
        {subTotalPrice ? (
          <form
            className="container-fluid my-3 col-md-6"
            onSubmit={tokenApplySubmit}
          >
            <p>
              Apply your Coupon(If any){" "}
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
                className="form-control coupon-input"
                id="inputCoupon"
                required
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
                className="form-control checkout-page-input"
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
                className="form-select checkout-page-input"
                aria-label="Default select example"
                ref={cityRef}
                required
              >
                <option value="">Select Your Area</option>
                <option value="Azimpur">Azimpur</option>
                <option value="Chankharpul">Chankharpul</option>
                <option value="Dhanmondi">Dhanmondi</option>
                <option value="Dhaka University Hall">
                  Dhaka University Hall
                </option>
                <option value="Darussalam">Darussalam</option>
                <option value="Elephent Road">Elephent Road</option>
                <option value="Farmgate">Farmgate</option>
                <option value="Green Road">Green Road</option>
                <option value="Kola Bagan">Kola Bagan</option>
                <option value="Kamrangirchar">Kamrangirchar</option>
                <option value="Kallyanpur">Kallyanpur</option>
                <option value="Mohammadpur Bus Stand">
                  Mohammadpur Bus Stand
                </option>
                <option value="Mohammadpur beribadh">
                  Mohammadpur beribadh
                </option>
                <option value="Mohammadpur Adabor">Mohammadpur Adabor</option>
                <option value="Mohammadpur Asad Gate">
                  Mohammadpur Asad Gate
                </option>
                <option value="New Market, Dhaka">New Market, Dhaka</option>
                <option value="Nakhalpara West Tejgaon">
                  Nakhalpara West Tejgaon
                </option>
                <option value="Nakhalpara south">Nakhalpara south</option>
                <option value="Shahbag">Shahbag</option>
                <option value="Shyamoli-1">Shyamoli-1</option>
                <option value="Shyamoli-2">Shyamoli-2</option>
                <option value="Panthopath Chattor">Panthopath Chattor</option>
                <option value="Polashi">Polashi</option>
                <option value="Puran Dhaka(Bangshal)">
                  Puran Dhaka(Bangshal)
                </option>
                <option value="Puran Dhaka (Dholaikhal)">
                  Puran Dhaka (Dholaikhal)
                </option>
                <option value="Rayer Bazaar">Rayer Bazaar</option>
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
                className="form-control checkout-page-input"
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
                className="form-control checkout-page-input"
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
                className="form-control checkout-page-input"
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
                className="form-control checkout-page-input"
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
              <strong>Items</strong>
              <strong>Subtotal</strong>
            </div>

            <div className="table_row subtotal">
              <strong>Total Food Price</strong>
              <span>{subTotalPrice} Tk.</span>
            </div>

            <div className="table_row subtotal">
              <strong>- Coupon Discount (only food)</strong>
              <span>{discountPrice} Tk.</span>
            </div>

            <div className="table_row subtotal">
              <strong>- Special Discount (food + addonItem)</strong>
              <span>
                {((subTotalPrice + finaltotalAddonPrice) * 10) / 100} Tk.
              </span>
            </div>

            <div className="table_row shipping">
              <strong>+ Total Extra Item Price</strong>
              <span>{finaltotalAddonPrice} tk.</span>
            </div>

            <div className="table_row shipping">
              <strong>+ Shipping Charges</strong>
              <span>Flat rate: 60.00 Tk.</span>
            </div>
            <div className="table_row total">
              <strong>Total</strong>
              <span>
                {/* dishcount with in total food i mean (food + addonItem / 100) */}
                {grandTotal -
                  ((subTotalPrice + finaltotalAddonPrice) * 10) / 100}
                Tk.
              </span>
            </div>
            <select
              className="form-select checkout-page-input"
              aria-label="Default select example"
              ref={PaymentRef}
              required
            >
              <option value="">Select Payment Methods</option>
              <option value="Online Payment">Online Payment</option>
              <option value="Cash on delivery">Cash on delivery</option>
            </select>
            <p className="my-5 TandC_text">
              <span className="cash-On-delivery-text">
                <b>* Cash on delivery:</b> Pay with cash upon delivery.
              </span>
              <br />
              Your personal data(name and email address) will be used to process
              your order, support your experience throughout this website, and
              for other purposes described in our{" "}
              <Link to="/privacy-policy" className="myLinks TandC_link">
                Privacy Policy
              </Link>{" "}
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
