import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import { useState } from "react";

const CateringCheckoutPage = () => {
  const history = useHistory();
  const cityRef = useRef();
  const addressRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const extra_informationRef = useRef();
  const { currentUser } = useAuth();
  const [food, setFood] = useState([]);
  const PaymentRef = useRef();
  const [paymnetLoading, setPaymentLoading] = useState(false);

  //getting all food from local stroage
  useEffect(() => {
    const foods = localStorage.getItem("cateringFood");
    if (foods) {
      const parsedFoods = JSON.parse(foods);
      setFood(parsedFoods);
    }
  }, []);

  //total tk
  const totalTk = food.reduce((accumulator, item) => accumulator + item.tk, 0);

  //confirm order
  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    setPaymentLoading(true);
    const confimOrderData = {
      total_amount: totalTk,
      food: food,
      cus_name: currentUser?.displayName,
      cus_city: cityRef?.current.value,
      cus_email: currentUser?.email,
      extra_information: extra_informationRef?.current.value,
      cus_phone: phoneNumberRef.current.value,
      cus_add1: addressRef.current.value,
      product_status: "Pending",
      payment_method: PaymentRef.current.value,
      orderTime: new Date().toISOString(),
    };

    //conditionally check the payment and hit the api
    if (confimOrderData?.payment_method === "Online Payment") {
      fetch(
        `${process.env.REACT_APP_BACKEND_URL}/cateringOnileInit?email=${currentUser?.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
          },
          body: JSON.stringify(confimOrderData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPaymentLoading(false);
          window.location.replace(data);
        });
    } else {
      fetch(
        `${process.env.REACT_APP_BACKEND_URL}/cateringCashonDeliveryInit?email=${currentUser?.email}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
          },
          body: JSON.stringify(confimOrderData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPaymentLoading(false);
          console.log(data);
          history.push("/cateringSuccess/cashOnDelivery");
        });
    }
  };

  return (
    <div>
      <form className="checkout_body container" onSubmit={handleConfirmOrder}>
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
              <option value="Azimpur">Azimpur</option>
              <option value="Chankharpul">Chankharpul</option>
              <option value="Dhaka University Hall">
                Dhaka University Hall
              </option>
              <option value="Darussalam">Darussalam</option>
              <option value="Elephent Road">Elephent Road</option>
              <option value="Farmgate">Farmgate</option>
              <option value="Gulistan">Gulistan</option>
              <option value="Green Road">Green Road</option>
              <option value="Kola Bagan">Kola Bagan</option>
              <option value="Kamrangirchar">Kamrangirchar</option>
              <option value="Kallyanpur">Kallyanpur</option>
              <option value="Mohammadpur Bus Stand">
                Mohammadpur Bus Stand
              </option>
              <option value="Mohammadpur beribadh">Mohammadpur beribadh</option>
              <option value="Mohammadpur Adabor">Mohammadpur Adabor</option>
              <option value="Mohammadpur Asad Gate">
                Mohammadpur Asad Gate
              </option>
              <option value="Mirpur-1">Mirpur-1</option>
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
            <label htmlFor="inputEmail" className="form-label mandatory_field">
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
          <br />
          <br />
          <button
            type="submit"
            className="btn MyBtn placeOrder_btn"
            disabled={food.length === 0}
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

      <div>
        {food &&
          food.length &&
          food?.map((fd, index) => (
            <h1 key={index}>
              {fd?.day}: {fd?.package}------------
              {new Intl.NumberFormat("bn-BD").format(fd.tk)} টাকা
            </h1>
          ))}
        <h1>মোট বিল: {new Intl.NumberFormat("bn-BD").format(totalTk)} টাকা</h1>
      </div>
    </div>
  );
};

export default CateringCheckoutPage;
