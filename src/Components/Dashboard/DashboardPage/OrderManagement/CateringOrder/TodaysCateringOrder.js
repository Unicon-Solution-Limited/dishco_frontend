import React, { useState, useEffect } from "react";
import { IntlMessageFormat } from "intl-messageformat";
import axios from "axios";
import TopbarNav from "./../../../Layouts/TopbarNav";
import SidebarNav from "./../../../Layouts/SidebarNav";

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const today = new Date();
    const formatted = formatDate(today);
    setTodayDate(formatted);
  }, []);

  //get the todays order from backend
  const fatchProductAccordingDate = async () => {
    setIsLoading(true);
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
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid p-4">
              <div>
                {isLoading && <p>Please wait...</p>}
                <h3>
                  - {todayDate?.weekday}, {todayDate?.day} {todayDate?.month}{" "}
                  {todayDate?.year}
                </h3>

                <button
                  className="btn MyBtn mt-2"
                  onClick={() => fatchProductAccordingDate()}
                >
                  View Today's Catering Orders
                </button>

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
                            <>
                              <span key={foodIndex}>
                                <td>{foodItem.package}</td>
                              </span>
                              <td>{foodItem.tk} Tk.</td>
                            </>
                          )
                        )}
                        <td className="d-flex justify-content-around">
                          <button className="btn btn-success">
                            <i className="bi bi-check-circle"></i>
                          </button>
                          <button className="btn btn-danger">
                            <i className="bi bi-x-circle"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default TodaysCateringOrder;
