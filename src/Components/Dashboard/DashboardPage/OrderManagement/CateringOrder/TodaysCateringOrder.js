import React, { useState, useEffect } from "react";
import { IntlMessageFormat } from "intl-messageformat";
import axios from "axios";

const formatDate = (date) => {
  const banglaLocale = "bn-BD";

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "year",
  };

  const formattedDate = new IntlMessageFormat(
    `{weekday} {day} {month} {year}`,
    banglaLocale
  ).format({
    weekday: date.toLocaleDateString(banglaLocale, { weekday: "long" }),
    day: date.toLocaleDateString(banglaLocale, { day: "numeric" }),
    month: date.toLocaleDateString(banglaLocale, { month: "long" }),
    year: date.toLocaleDateString(banglaLocale, { year: "numeric" }),
  });

  const [weekday, day, month, year] = formattedDate.split(" ");

  return {
    weekday,
    day,
    month,
    year,
  };
};

const TodaysCateringOrder = () => {
  const [todayDate, setTodayDate] = useState(null);
  const [todaysOrder, setTodaysOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const today = new Date();
    const formatted = formatDate(today);
    setTodayDate(formatted);
  }, []);

  //get the todays order from backend
  const fatchProductAccordingDate = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/sendTodaysDateData?todayDate=` +
          encodeURIComponent(JSON.stringify(todayDate))
      );
      const data = await response.json();
      setTodaysOrder(data);
      setIsLoading(false);
    } catch (error) {
      console.log("err", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && <p>Please wait...</p>}
      <h1>{todayDate?.weekday}</h1>
      <h1>{todayDate?.day}</h1>
      <h1>{todayDate?.month}</h1>
      <button onClick={() => fatchProductAccordingDate()}>
        fatchProductAccordingDate
      </button>

      {todaysOrder.map((todayOrderDt) => (
        <div key={todayOrderDt._id}>
          <h1>Id: {todayOrderDt._id}</h1>
          <h1>Customer city: {todayOrderDt.cus_city}</h1>
          <h1>Customer address: {todayOrderDt.cus_add1}</h1>
          <h1>Email: {todayOrderDt.cus_email}</h1>
          <h1>Name: {todayOrderDt.cus_name}</h1>
          <h1>Phone: {todayOrderDt.cus_phone}</h1>
          <h1>Extra Information: {todayOrderDt.extra_information}</h1>
          <h1>Payment Method?: {todayOrderDt.payment_method}</h1>
        </div>
      ))}

      <h1>this is food</h1>
      <div>
        {todaysOrder.map((order, index) => (
          <div key={index}>
            {JSON.parse(order.food).map((foodItem, foodIndex) => (
              <div key={foodIndex}>
                <img src={foodItem.image} alt={foodItem.name} />
                <p>Name: {foodItem.name}</p>
                <p>Price: {foodItem.tk} Tk</p>
                <p>Package: {foodItem.package}</p>
                <p>Weekday: {foodItem.selectedWeekday}</p>
                <p>date: {foodItem.selectedDay}</p>
                <p>month: {foodItem.selectedMonth}</p>
                <p>Year: {foodItem.selectedYear}</p>
                <p>quantity: {foodItem.quantity}</p>
                {/* Display other food item details */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysCateringOrder;
