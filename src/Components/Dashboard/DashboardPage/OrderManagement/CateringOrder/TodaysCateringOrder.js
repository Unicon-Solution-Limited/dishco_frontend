import React, { useState, useEffect } from "react";
import { IntlMessageFormat } from "intl-messageformat";
import TopbarNav from "./../../../Layouts/TopbarNav";
import SidebarNav from "./../../../Layouts/SidebarNav";
import { useAuth } from "../../../../Authentication/AuthContext/AuthContext";

const getBeforeDays = (numDays) => {
  const days = [];
  const today = new Date();

  for (let i = -2; i <= numDays; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    days.push(nextDay);
  }

  return days;
};

const formatDate = (date) => {
  const banglaLocale = "bn-BD";

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
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
  const [dates, setDates] = useState(getBeforeDays(6));
  const [todaysOrder, setTodaysOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useAuth();
  const [foodStatusMsg, setFoodStatusMsg] = useState("");

  //get the todays order from backend
  const fatchProductAccordingDate = async (selectedDate) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/sendTodaysDateData?todayDate=` +
          encodeURIComponent(JSON.stringify(selectedDate))
      );
      const data = await response.json();
      setTodaysOrder(data);
      setIsLoading(false);
    } catch (error) {
      console.log("err", error);
      setIsLoading(false);
    }
  };

  //status done update
  const handleDone = async (id) => {
    const foodStatus = "Done";

    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/updateFoodStatus/${id}?email=${currentUser?.email}`;
      const option = {
        method: "PATCH",
        body: JSON.stringify({ foodStatus }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
        },
      };
      // await fetch(url, option);
      const response = await fetch(url, option);
      if (response.status === 200) {
        setFoodStatusMsg("Successfully Confirmed the Order");
        setTimeout(() => {
          setFoodStatusMsg("");
        }, 3000);
        //this is for update status show
        setTodaysOrder([]);
      } else {
        console.log("Error updating food status:", response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //food status cancel change
  const handleCancle = async (id) => {
    const foodStatus = "Cancel";

    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/updateFoodStatus/${id}?email=${currentUser?.email}`;
      const option = {
        method: "PATCH",
        body: JSON.stringify({ foodStatus }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("dishco-token")}`,
        },
      };
      // await fetch(url, option);
      const response = await fetch(url, option);
      if (response.status === 200) {
        setFoodStatusMsg("This Order Successfully Canceled");
        setTimeout(() => {
          setFoodStatusMsg("");
        }, 3000);
        //this is for update status show
        setTodaysOrder([]);
      } else {
        console.log("Error updating food status:", response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid p-4">
              <div>
                {isLoading && <p>Please wait...</p>}
                {/* daynamic button */}
                <section className="package-select-buttons">
                  {dates.map((date, index) => {
                    const formatted = formatDate(date);

                    return (
                      <button
                        key={index}
                        onClick={() => fatchProductAccordingDate(formatted)}
                        type="button"
                      >
                        {formatted.weekday},{formatted.day} {formatted.month}{" "}
                        {formatted.year}
                      </button>
                    );
                  })}
                </section>

                <table className="table todays-order-table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Package</th>
                      <th scope="col">Tk.</th>
                      <th scope="col">Update Status</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todaysOrder.map((todayOrderDt, i) => (
                      <tr key={todayOrderDt._id}>
                        <th scope="row">{i + 1}</th>
                        <td>{todayOrderDt.cus_name}</td>
                        <td>
                          {todayOrderDt.cus_add1}, {todayOrderDt.cus_city}
                        </td>
                        <td>{todayOrderDt.cus_phone}</td>
                        {JSON.parse(todayOrderDt.food).map(
                          (foodItem, foodIndex) => (
                            <React.Fragment key={foodIndex}>
                              <td>{foodItem?.package}</td>
                              <td>{foodItem?.tk} Tk.</td>
                              <td className="d-flex justify-content-around">
                                <button
                                  className="btn btn-success"
                                  onClick={() => handleDone(foodItem?.foodId)}
                                >
                                  <i className="bi bi-check-circle"></i>
                                </button>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => handleCancle(foodItem?.foodId)}
                                >
                                  <i className="bi bi-x-circle"></i>
                                </button>
                              </td>
                              <td
                                className={`bg-food-status ${
                                  (foodItem?.foodStatus === "Done" &&
                                    " cat-done") ||
                                  (foodItem?.foodStatus === "Cancel" &&
                                    " cat-cancel") ||
                                  " cat-pending"
                                }`}
                              >
                                {foodItem.foodStatus}
                              </td>
                            </React.Fragment>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {foodStatusMsg && (
                  <p className="status-change-msg">{foodStatusMsg}</p>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default TodaysCateringOrder;
