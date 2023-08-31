import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import { useState } from "react";
import Footer from "./../../Shared/Footer/Footer";
import Header from "./../../Shared/Header/Header";

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
  const totalTk = food.reduce((sum, item) => sum + item.tk * item.quantity, 0);

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
    <>
      <Header />
      <main className="container-fluid catering-checkout-page">
        <section>
          <form
            className="checkout_body container"
            onSubmit={handleConfirmOrder}
          >
            <aside className="billing_form">
              <h5>প্রেরণের ঠিকানা</h5>
              <div className="mb-3">
                <label
                  htmlFor="inputName"
                  className="form-label mandatory_field"
                >
                  আপনার নাম
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
                  এলাকা
                </label>
                <select
                  className="form-select checkout-page-input"
                  aria-label="Default select example"
                  ref={cityRef}
                  required
                >
                  <option value="">এলাকা নির্বাচন করুন</option>
                  <option value="আজিমপুর">আজিমপুর</option>

                  <option value="ধানমন্ডি">ধানমন্ডি</option>
                  <option value="ঢাকা ইউনিভার্সিটি">ঢাকা ইউনিভার্সিটি</option>

                  <option value="এলিফেন্ট রোড">এলিফেন্ট রোড</option>
                  <option value="ফার্মগেট">ফার্মগেট</option>

                  <option value="গ্রীন রোড">গ্রীন রোড</option>
                  <option value="কলা বাগান">কলা বাগান</option>

                  <option value="নিউ মার্কেট, ঢাকা">নিউ মার্কেট, ঢাকা</option>

                  <option value="শাহবাগ">শাহবাগ</option>

                  <option value="পলাশী">পলাশী</option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="inputAddress"
                  className="form-label mandatory_field"
                >
                  পূর্ণাঙ্গ ঠিকানা
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
                  মোবাইল নাম্বার
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
                  ইমেল
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
                  অর্ডার নোট (ঐচ্ছিক)
                </label>
                <textarea
                  ref={extra_informationRef}
                  className="form-control checkout-page-input"
                  id="extraInfo"
                  rows="3"
                ></textarea>
              </div>

              <select
                className="form-select checkout-page-input"
                aria-label="Default select example"
                ref={PaymentRef}
                required
              >
                <option value="">পেমেন্ট পদ্ধতি বাছাই করুন </option>
                <option value="Online Payment">অনলাইন পেমেন্ট</option>
                <option value="Cash on delivery">ক্যাশ অন ডেলিভারি</option>
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
        </section>
        <section>
          <img
            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692872250/Frontend_images/joh2ojg6s3gwwmqh3st0.png"
            alt=""
            className="img-fluid"
          />
          <table className="table catering-table">
            <thead>
              <tr>
                <th scope="col">দিন</th>
                <th scope="col">প্যাকেজ</th>
                <th scope="col">পরিমাণ</th>
                <th scope="col">টাকা</th>
              </tr>
            </thead>
            <tbody>
              {food &&
                food.length &&
                food?.map((fd, index) => (
                  <tr key={index}>
                    <td>
                      {fd?.day}, {fd?.selectedDay} {fd?.selectedMonth}
                    </td>
                    <td>
                      {fd?.package} {""} (
                      {new Intl.NumberFormat("bn-BD").format(fd.tk)} টাকা)
                    </td>
                    <td>
                      {new Intl.NumberFormat("bn-BD").format(fd?.quantity)}
                    </td>
                    <td>
                      {new Intl.NumberFormat("bn-BD").format(
                        fd.tk * fd?.quantity
                      )}
                      টাকা
                    </td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">
                  <strong>মোট বিল: </strong>
                  {new Intl.NumberFormat("bn-BD").format(totalTk)} টাকা
                </td>
              </tr>
            </tfoot>
          </table>
          <img
            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692872250/Frontend_images/joh2ojg6s3gwwmqh3st0.png"
            alt=""
            className="img-fluid catering-checkout-patterns-bottom"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CateringCheckoutPage;
