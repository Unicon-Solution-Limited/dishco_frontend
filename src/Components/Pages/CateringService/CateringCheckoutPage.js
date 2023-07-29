import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const CateringCheckoutPage = () => {
  const cityRef = useRef();
  const addressRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const extra_informationRef = useRef();
  const { currentUser } = useAuth();

  //  multipe date picker
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDates([...selectedDates, date]);
  };

  const handleRemoveDate = (dateToRemove) => {
    setSelectedDates(selectedDates.filter((date) => date !== dateToRemove));
  };

  //confirm order
  const handleConfirmOrder = (e) => {
    e.preventDefault();
    const confimOrderData = {
      cus_name: currentUser?.displayName,
      cus_city: cityRef?.current.value,
      cus_email: currentUser?.email,
      extra_information: extra_informationRef?.current.value,
      cus_phone: phoneNumberRef.current.value,
      cus_add1: addressRef.current.value,
      product_status: "Pending",
      orderTime: Date(),
    };

    console.log("it is working");
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

          {/* date picker */}
          <h2>Date Of Ordering Food</h2>
          <DatePicker
            selected={null}
            onChange={handleDateChange}
            inline
            isClearable
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={15}
            placeholderText="Select dates"
            dateFormat="dd/MM/yyyy"
            excludeDates={selectedDates}
          />
          <div>
            <h3>Selected Dates:</h3>
            <ul>
              {selectedDates.map((date, index) => (
                <li key={index}>
                  {date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  <button onClick={() => handleRemoveDate(date)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>

          <button type="submit" className="btn MyBtn placeOrder_btn">
            "Confirm Order"
          </button>
        </aside>
      </form>
    </div>
  );
};

export default CateringCheckoutPage;
