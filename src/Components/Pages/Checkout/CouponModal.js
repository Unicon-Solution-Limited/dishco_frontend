import React, { useContext, useEffect, useRef, useState } from "react";
import { CartProvider } from "../../AllContext/CartContext";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import axios from "axios";

const CouponModal = () => {
  const [subTotalPrice] = useContext(CartProvider);
  const couponRef = useRef();
  const { currentUser } = useAuth();
  const [sevenDaysTokenData, setSevenDaysTokenData] = useState([]);
  const [couponCondition, SetCouponCondition] = useState(false);
  const [couponMessage, setCouponMessage] = useState("");

  //getting 7 days(temporary)  token data according to the email
  useEffect(() => {
    const fetchTokenData = async () => {
      if (currentUser.email) {
        try {
          const response = await axios.get(
            `http://localhost:8000/getTemporaryTokenData?email=${currentUser.email}`
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

  return (
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      aria-labelledby="couponModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <form class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
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
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h5 class="modal-title">Apply your Coupon</h5>
            <div className="d-flex">
              <input
                ref={couponRef}
                type="text"
                className="form-control"
                id="inputCoupon"
                required
              />
            </div>
          </div>
          <div class="modal-footer">
            <h1>{couponMessage}</h1>
            <button className="btn MyBtn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CouponModal;
