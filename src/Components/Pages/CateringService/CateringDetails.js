import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";
import "./Catering.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import video from "../../../Media/catering-bg.webm";
import { IntlMessageFormat } from "intl-messageformat";

const getNextDays = (numDays) => {
  const days = [];
  const today = new Date();

  for (let i = 2; i <= numDays; i++) {
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

const CateringDetails = () => {
  const [dates, setDates] = useState(getNextDays(8));
  const [selectedDate, setSelectedDate] = useState(null);
  const [food, setFood] = useState([]);
  const [countMessage, setCountMessage] = useState("");
  const history = useHistory();
  //Sat handleDecrese/Increase
  const [satQuantity, satSetQuantity] = useState(1);

  // Confirm button
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleSatDecrease = () => {
    satSetQuantity(Math.max(satQuantity - 1, 1));
  };
  const handleSatIncrease = () => {
    satSetQuantity(satQuantity + 1);
  };

  //Sun handleDecrese/Increase
  const [sunQuantity, sunSetQuantity] = useState(1);
  const handleSunDecrease = () => {
    sunSetQuantity(Math.max(sunQuantity - 1, 1));
  };
  const handleSunIncrease = () => {
    sunSetQuantity(sunQuantity + 1);
  };

  //mon handleDecrese/Increase
  const [monQuantity, monSetQuantity] = useState(1);
  const handleMonDecrease = () => {
    monSetQuantity(Math.max(monQuantity - 1, 1));
  };
  const handleMonIncrease = () => {
    monSetQuantity(monQuantity + 1);
  };
  //tues handleDecrese/Increase
  const [tuesQuantity, tuesSetQuantity] = useState(1);
  const handleTuesDecrease = () => {
    tuesSetQuantity(Math.max(tuesQuantity - 1, 1));
  };
  const handleTuesIncrease = () => {
    tuesSetQuantity(tuesQuantity + 1);
  };
  //wed handleDecrese/Increase
  const [wedQuantity, wedSetQuantity] = useState(1);
  const handleWedDecrease = () => {
    wedSetQuantity(Math.max(wedQuantity - 1, 1));
  };
  const handleWedIncrease = () => {
    wedSetQuantity(wedQuantity + 1);
  };
  //thirs handleDecrese/Increase
  const [thirsQuantity, thirsSetQuantity] = useState(1);
  const handleThirsDecrease = () => {
    thirsSetQuantity(Math.max(thirsQuantity - 1, 1));
  };
  const handleThirsIncrease = () => {
    thirsSetQuantity(thirsQuantity + 1);
  };
  //friday handleDecrese/Increase
  const [fridayQuantity, fridaySetQuantity] = useState(1);
  const handleFridayDecrease = () => {
    fridaySetQuantity(Math.max(fridayQuantity - 1, 1));
  };
  const handleFridayIncrease = () => {
    fridaySetQuantity(fridayQuantity + 1);
  };

  const handlePackageClick = (data) => {
    // Check if an item with the same number already exists in the food array
    const existingIndex = food.findIndex((item) => item.number === data.number);

    // If an existing item with the same number is found, replace it with the new item
    if (existingIndex !== -1) {
      const updatedFood = [...food];
      updatedFood[existingIndex] = data;
      setFood(updatedFood);
    } else {
      // If no existing item with the same number is found, add the new item
      setFood([...food, data]);
    }
    // Handle Button
    setIsButtonVisible(true);
  };

  const handleClick = () => {
    setIsButtonVisible(false);
  };

  const handleSubmitFood = () => {
    if (food.length >= 5) {
      localStorage.setItem("cateringFood", JSON.stringify(food));
      history.push("/cateringCheckoutPage");
    } else {
      setCountMessage(
        "চেকআউট পেজে যেতে হলে, আপনাকে কমপক্ষে ৫ দিনের খাবার অর্ডার করতে হবে"
      );
    }
  };

  const fallback =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1692686715/Frontend_images/Background_images/hpldnybpokkcekx0j2k4.webp";
  return (
    <>
      <Header />
      <main className="package-body">
        <section className="container package-body-main">
          <h2 className="package-headline">সাপ্তাহিক প্যাকেজ</h2>
          {/* date button */}
          <section className="package-select-buttons">
            {dates.map((date, index) => {
              const formatted = formatDate(date);
              return (
                <button
                  key={index}
                  onClick={() => setSelectedDate(formatted)}
                  data-bs-toggle="modal"
                  data-bs-target="#cateringModal"
                  className={`${
                    food.some((dt) => dt?.selectedDay === formatted?.day)
                      ? "package-select-button-active"
                      : ""
                  }`}
                >
                  {formatted.weekday},{formatted.day} {formatted.month}
                </button>
              );
            })}
          </section>

          <>
            <section className="accepted-package">
              <h4 className="accepted-package-headline">সিলেক্টেড প্যাকেজ</h4>
              {food.length !== 0 ? (
                <aside className="accepted-package-items">
                  <>
                    {food.map((dt, index) => (
                      <p key={index}>
                        <span>{dt.day} :</span> <span>{dt.package}</span>
                      </p>
                    ))}
                  </>
                </aside>
              ) : (
                <h5 className="mt-5 catering-note">
                  কোন প্যাকেজ সিলেক্ট হয়নি ।
                </h5>
              )}
            </section>
          </>

          {food?.length >= 5 ? (
            <button
              className="MyBtn package_checkout_btn"
              onClick={() => handleSubmitFood()}
            >
              Process to Checkout
            </button>
          ) : (
            <h3 className="catering-note">
              <i className="bi bi-asterisk"></i> সাপ্তাহিক প্যাকেজ কনফার্ম করতে
              কমপক্ষে ৫ দিনের খাবার সিলেক্ট করুন
            </h3>
          )}
        </section>
      </main>

      {/* Modals */}
      <div
        className="modal fade"
        id="cateringModal"
        tabindex="-1"
        aria-labelledby="cateringModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header catering-modal-header">
              <h1 className="modal-title fs-5" id="cateringModalLabel">
                যেকোনো একটি প্যাকেজ সিলেক্ট করুন
              </h1>
              <button
                type="button"
                className="btn package-modal-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => handleClick()}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="modal-body catering-modal-body">
              <>
                {selectedDate && selectedDate?.weekday === "শুক্রবার" && (
                  <>
                    <video
                      className="w-100 package-video"
                      id="video_content"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={fallback}
                    >
                      <source src={video} type="video/webm" />
                      <img
                        src={fallback}
                        title="Your browser does not support the <video> tag"
                        alt="DishCo- Dancing Deliciousness"
                        loading="lazy"
                      ></img>
                    </video>
                    <div className="package-item-main">
                      <h4 className="package_sub_headline">শুক্রবার</h4>
                      <div className="package_items">
                        <aside className="package_single">
                          <div className="package_items-header">
                            <h4>রেগুলার আইটেম</h4>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/viyhshqbzy8wlilpftxo.webp"
                            alt=""
                            className="package_items_img_left"
                          />
                          <figcaption className="package-img-caption">
                            ভাত + মুরগি + ডাল + সবজি = ৮০ টাকা
                          </figcaption>
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="friday"
                              className="hidden-radio"
                              onClick={() =>
                                handlePackageClick({
                                  image:
                                    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/viyhshqbzy8wlilpftxo.webp",
                                  name: "চিকেন মিল",
                                  tk: 80,
                                  day: "শুক্রবার",
                                  number: 1,
                                  package: "রেগুলার",
                                  selectedWeekday: selectedDate.weekday,
                                  selectedDay: selectedDate.day,
                                  selectedMonth: selectedDate.month,
                                  selectedYear: selectedDate.year,
                                  quantity: fridayQuantity,
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
                        </aside>
                        <aside className="catering-quantity-section">
                          <span>
                            <h4 className="catering-quantity-button-title">
                              Quantity
                            </h4>
                            <span className="quantity_cart_input">
                              <button
                                className="catering-quantity-decrease-button"
                                id="decrease"
                                onClick={() => handleFridayDecrease()}
                              >
                                -
                              </button>
                              <input
                                className="catering-quantity-input"
                                type="number"
                                id="number"
                                value={fridayQuantity}
                                readOnly
                              />
                              <button
                                className="catering-quantity-increase-button"
                                id="increase"
                                onClick={() => handleFridayIncrease()}
                              >
                                +
                              </button>
                            </span>
                          </span>
                          <>
                            {isButtonVisible && (
                              <button
                                className="catering-package-confirm-btn MyBtn"
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => handleClick()}
                              >
                                Confirm
                              </button>
                            )}
                          </>
                        </aside>
                        <aside className="package_single">
                          <div className="package_items-header">
                            <h4>স্পেশিয়াল আইটেম</h4>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692009102/Frontend_images/Catering/qv318ra1nhsvoim0ioix.webp"
                            alt=""
                            className="package_items_img_right"
                          />
                          <figcaption className="package-img-caption">
                            বীফ খিচুরি = ১২০ টাকা
                          </figcaption>
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="friday"
                              className="hidden-radio"
                              onClick={() =>
                                handlePackageClick({
                                  image:
                                    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471892/Frontend_images/Catering/mpjx2teriodgxb71ywe0.webp",
                                  name: "বীফ খিচুরি",
                                  tk: 120,
                                  day: "শুক্রবার",
                                  number: 1,
                                  package: "স্পেশিয়াল",
                                  selectedWeekday: selectedDate.weekday,
                                  selectedDay: selectedDate.day,
                                  selectedMonth: selectedDate.month,
                                  selectedYear: selectedDate.year,
                                  quantity: fridayQuantity,
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
                        </aside>
                      </div>
                    </div>
                  </>
                )}
              </>
              <>
                {selectedDate && selectedDate?.weekday === "শনিবার" && (
                  <>
                    <video
                      className="w-100 package-video"
                      id="video_content"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={fallback}
                    >
                      <source src={video} type="video/webm" />
                      <img
                        src={fallback}
                        title="Your browser does not support the <video> tag"
                        alt="DishCo- Dancing Deliciousness"
                        loading="lazy"
                      ></img>
                    </video>
                    <div className="package-item-main">
                      <h4 className="package_sub_headline">শনিবার</h4>
                      <div className="package_items">
                        <aside className="package_single">
                          <div className="package_items-header">
                            <h4>রেগুলার আইটেম</h4>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/k2qrgifz0rrleka96ama.webp"
                            alt=""
                            className="package_items_img_left"
                          />
                          <figcaption className="package-img-caption">
                            ভাত + ডিম + ডাল + সবজি = ৮০ টাকা
                          </figcaption>
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="saturday"
                              className="hidden-radio"
                              onClick={() =>
                                handlePackageClick({
                                  image:
                                    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/k2qrgifz0rrleka96ama.webp",
                                  name: "এগ মিল",
                                  tk: 80,
                                  day: "শনিবার",
                                  number: 2,
                                  package: "রেগুলার",
                                  selectedWeekday: selectedDate.weekday,
                                  selectedDay: selectedDate.day,
                                  selectedMonth: selectedDate.month,
                                  selectedYear: selectedDate.year,
                                  quantity: satQuantity,
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
                        </aside>
                        <aside className="catering-quantity-section">
                          <span>
                            <h4 className="catering-quantity-button-title">
                              Quantity
                            </h4>
                            <span className="quantity_cart_input">
                              <button
                                className="catering-quantity-decrease-button"
                                id="decrease"
                                onClick={() => handleSatDecrease()}
                              >
                                -
                              </button>
                              <input
                                className="catering-quantity-input"
                                type="number"
                                id="number"
                                value={satQuantity}
                                readOnly
                              />
                              <button
                                className="catering-quantity-increase-button"
                                id="increase"
                                onClick={() => handleSatIncrease()}
                              >
                                +
                              </button>
                            </span>
                          </span>
                          <>
                            <>
                              {isButtonVisible && (
                                <button
                                  className="catering-package-confirm-btn MyBtn"
                                  type="button"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                  onClick={() => handleClick()}
                                >
                                  Confirm
                                </button>
                              )}
                            </>
                          </>
                        </aside>
                        <aside className="package_single">
                          <div className="package_items-header">
                            <h4>স্পেশিয়াল আইটেম</h4>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692009101/Frontend_images/Catering/eheafpx22yyatxauzjqw.webp"
                            alt=""
                            className="package_items_img_right"
                          />
                          <figcaption className="package-img-caption">
                            চিকেন পোলাও = ১২০ টাকা
                          </figcaption>
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="saturday"
                              className="hidden-radio"
                              onClick={() =>
                                handlePackageClick({
                                  image:
                                    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471892/Frontend_images/Catering/ddhl9phljy5wzksfifw4.webp",
                                  name: "চিকেন পোলাও",
                                  tk: 120,
                                  day: "শনিবার",
                                  number: 2,
                                  package: "স্পেশিয়াল",
                                  selectedWeekday: selectedDate.weekday,
                                  selectedDay: selectedDate.day,
                                  selectedMonth: selectedDate.month,
                                  selectedYear: selectedDate.year,
                                  quantity: satQuantity,
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
                        </aside>
                      </div>
                    </div>
                  </>
                )}
              </>
              <>
                {selectedDate && selectedDate?.weekday === "রবিবার" && (
                  <>
                    <video
                      className="w-100 package-video"
                      id="video_content"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={fallback}
                    >
                      <source src={video} type="video/webm" />
                      <img
                        src={fallback}
                        title="Your browser does not support the <video> tag"
                        alt="DishCo- Dancing Deliciousness"
                        loading="lazy"
                      ></img>
                    </video>
                    <div className="package-item-main">
                      <h4 className="package_sub_headline">রবিবার</h4>
                      <div className="package_items">
                        <aside className="package_single">
                          <div className="package_items-header">
                            <h4>রেগুলার আইটেম</h4>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/x36wtqeiwwgfthzty20u.webp"
                            alt=""
                            className="package_items_img_left"
                          />
                          <figcaption className="package-img-caption">
                            ভাত + মাছ + ডাল + সবজি = ৮০ টাকা
                          </figcaption>
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="sunday"
                              className="hidden-radio"
                              onClick={() =>
                                handlePackageClick({
                                  image:
                                    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/x36wtqeiwwgfthzty20u.webp",
                                  name: "ফিশ মিল",
                                  tk: 80,
                                  day: "রবিবার",
                                  number: 3,
                                  package: "রেগুলার",
                                  selectedWeekday: selectedDate.weekday,
                                  selectedDay: selectedDate.day,
                                  selectedMonth: selectedDate.month,
                                  selectedYear: selectedDate.year,
                                  quantity: sunQuantity,
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
                        </aside>
                        <aside className="catering-quantity-section">
                          <span>
                            <h4 className="catering-quantity-button-title">
                              Quantity
                            </h4>
                            <span className="quantity_cart_input">
                              <button
                                className="catering-quantity-decrease-button"
                                id="decrease"
                                onClick={() => handleSunDecrease()}
                              >
                                -
                              </button>
                              <input
                                className="catering-quantity-input"
                                type="number"
                                id="number"
                                value={sunQuantity}
                                readOnly
                              />
                              <button
                                className="catering-quantity-increase-button"
                                id="increase"
                                onClick={() => handleSunIncrease()}
                              >
                                +
                              </button>
                            </span>
                          </span>
                          <>
                            {isButtonVisible && (
                              <button
                                className="catering-package-confirm-btn MyBtn"
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => handleClick()}
                              >
                                Confirm
                              </button>
                            )}
                          </>
                        </aside>
                        <aside className="package_single">
                          <div className="package_items-header">
                            <h4>স্পেশিয়াল আইটেম</h4>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692009101/Frontend_images/Catering/l6sjwzqhdvvhk5fsrqsq.webp"
                            alt=""
                            className="package_items_img_right"
                          />
                          <figcaption className="package-img-caption">
                            বীফ তেহারি = ১২০ টাকা
                          </figcaption>
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="sunday"
                              className="hidden-radio"
                              onClick={() =>
                                handlePackageClick({
                                  image:
                                    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/zer5bzwungxyhzvngm82.webp",
                                  name: "বীফ তেহারি",
                                  tk: 120,
                                  day: "রবিবার",
                                  number: 3,
                                  package: "স্পেশিয়াল",
                                  selectedWeekday: selectedDate.weekday,
                                  selectedDay: selectedDate.day,
                                  selectedMonth: selectedDate.month,
                                  selectedYear: selectedDate.year,
                                  quantity: sunQuantity,
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
                        </aside>
                      </div>
                    </div>
                  </>
                )}
              </>
              <>
                {selectedDate && selectedDate?.weekday === "সোমবার" && (
                  <>
                    <video
                      className="w-100 package-video"
                      id="video_content"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={fallback}
                    >
                      <source src={video} type="video/webm" />
                      <img
                        src={fallback}
                        title="Your browser does not support the <video> tag"
                        alt="DishCo- Dancing Deliciousness"
                        loading="lazy"
                      ></img>
                    </video>
                    <div className="package-item-main">
                      <h4 className="package_sub_headline">সোমবার</h4>
                      <div className="package_items">
                        <aside className="package_single">
                          <div className="package_items-header">
                            <h4>রেগুলার আইটেম</h4>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/zam03uy7zifx3u5uiekc.webp"
                            alt=""
                            className="package_items_img_left"
                          />
                          <figcaption className="package-img-caption">
                            ভাত + বীফ + ডাল + সবজি = ৮০ টাকা
                          </figcaption>
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="monday"
                              className="hidden-radio"
                              onClick={() =>
                                handlePackageClick({
                                  image:
                                    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/zam03uy7zifx3u5uiekc.webp",
                                  name: "বীফ মিল",
                                  tk: 80,
                                  day: "সোমবার",
                                  number: 4,
                                  package: "রেগুলার",
                                  selectedWeekday: selectedDate.weekday,
                                  selectedDay: selectedDate.day,
                                  selectedMonth: selectedDate.month,
                                  selectedYear: selectedDate.year,
                                  quantity: monQuantity,
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
                        </aside>
                        <aside className="catering-quantity-section">
                          <span>
                            <h4 className="catering-quantity-button-title">
                              Quantity
                            </h4>
                            <span className="quantity_cart_input">
                              <button
                                className="catering-quantity-decrease-button"
                                id="decrease"
                                onClick={() => handleMonDecrease()}
                              >
                                -
                              </button>
                              <input
                                className="catering-quantity-input"
                                type="number"
                                id="number"
                                value={monQuantity}
                                readOnly
                              />
                              <button
                                className="catering-quantity-increase-button"
                                id="increase"
                                onClick={() => handleMonIncrease()}
                              >
                                +
                              </button>
                            </span>
                          </span>
                          <>
                            <>
                              {isButtonVisible && (
                                <button
                                  className="catering-package-confirm-btn MyBtn"
                                  type="button"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                  onClick={() => handleClick()}
                                >
                                  Confirm
                                </button>
                              )}
                            </>
                          </>
                        </aside>
                        <aside className="package_single">
                          <div className="package_items-header">
                            <h4>স্পেশিয়াল আইটেম</h4>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/cspimz68z9s14zfi8whm.webp"
                            alt=""
                            className="package_items_img_right"
                          />
                          <figcaption className="package-img-caption">
                            ডিম খিচুরি = ৮০ টাকা
                          </figcaption>
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="monday"
                              className="hidden-radio"
                              onClick={() =>
                                handlePackageClick({
                                  image:
                                    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/cspimz68z9s14zfi8whm.webp",
                                  name: "ডিম খিচুরি",
                                  tk: 80,
                                  day: "সোমবার",
                                  number: 4,
                                  package: "স্পেশিয়াল",
                                  selectedWeekday: selectedDate.weekday,
                                  selectedDay: selectedDate.day,
                                  selectedMonth: selectedDate.month,
                                  selectedYear: selectedDate.year,
                                  quantity: monQuantity,
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
                        </aside>
                      </div>
                    </div>
                  </>
                )}
              </>
              <>
                {selectedDate && selectedDate?.weekday === "মঙ্গলবার" && (
                  <>
                    <video
                      className="w-100 package-video"
                      id="video_content"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={fallback}
                    >
                      <source src={video} type="video/webm" />
                      <img
                        src={fallback}
                        title="Your browser does not support the <video> tag"
                        alt="DishCo- Dancing Deliciousness"
                        loading="lazy"
                      ></img>
                    </video>
                    <div className="package-item-main">
                      <h4 className="package_sub_headline">মঙ্গলবার</h4>
                      <div className="package_items">
                        <aside className="package_single">
                          <div className="package_items-header">
                            <h4>রেগুলার আইটেম</h4>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/viyhshqbzy8wlilpftxo.webp"
                            alt=""
                            className="package_items_img_left"
                          />
                          <figcaption className="package-img-caption">
                            ভাত + মুরগি + ডাল + সবজি = ৮০ টাকা
                          </figcaption>
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="tuesday"
                              className="hidden-radio"
                              onClick={() =>
                                handlePackageClick({
                                  image:
                                    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/viyhshqbzy8wlilpftxo.webp",
                                  name: "চিকেন মিল",
                                  tk: 80,
                                  day: "মঙ্গলবার",
                                  number: 5,
                                  package: "রেগুলার",
                                  selectedWeekday: selectedDate.weekday,
                                  selectedDay: selectedDate.day,
                                  selectedMonth: selectedDate.month,
                                  selectedYear: selectedDate.year,
                                  quantity: tuesQuantity,
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
                        </aside>
                        <aside className="catering-quantity-section">
                          <span>
                            <h4 className="catering-quantity-button-title">
                              Quantity
                            </h4>
                            <span className="quantity_cart_input">
                              <button
                                className="catering-quantity-decrease-button"
                                id="decrease"
                                onClick={() => handleTuesDecrease()}
                              >
                                -
                              </button>
                              <input
                                className="catering-quantity-input"
                                type="number"
                                id="number"
                                value={tuesQuantity}
                                readOnly
                              />
                              <button
                                className="catering-quantity-increase-button"
                                id="increase"
                                onClick={() => handleTuesIncrease()}
                              >
                                +
                              </button>
                            </span>
                          </span>
                          <>
                            <>
                              {isButtonVisible && (
                                <button
                                  className="catering-package-confirm-btn MyBtn"
                                  type="button"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                  onClick={() => handleClick()}
                                >
                                  Confirm
                                </button>
                              )}
                            </>
                          </>
                        </aside>
                        <aside className="package_single">
                          <div className="package_items-header">
                            <h4>স্পেশিয়াল আইটেম</h4>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692009102/Frontend_images/Catering/qv318ra1nhsvoim0ioix.webp"
                            alt=""
                            className="package_items_img_right"
                          />
                          <figcaption className="package-img-caption">
                            বীফ খিচুরি = ১২০ টাকা
                          </figcaption>
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="tuesday"
                              className="hidden-radio"
                              onClick={() =>
                                handlePackageClick({
                                  image:
                                    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471892/Frontend_images/Catering/mpjx2teriodgxb71ywe0.webp",
                                  name: "বীফ খিচুরি",
                                  tk: 120,
                                  day: "মঙ্গলবার",
                                  number: 5,
                                  package: "স্পেশিয়াল",
                                  selectedWeekday: selectedDate.weekday,
                                  selectedDay: selectedDate.day,
                                  selectedMonth: selectedDate.month,
                                  selectedYear: selectedDate.year,
                                  quantity: tuesQuantity,
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
                        </aside>
                      </div>
                    </div>
                  </>
                )}
              </>
              <>
                {selectedDate && selectedDate?.weekday === "বুধবার" && (
                  <>
                    <video
                      className="w-100 package-video"
                      id="video_content"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={fallback}
                    >
                      <source src={video} type="video/webm" />
                      <img
                        src={fallback}
                        title="Your browser does not support the <video> tag"
                        alt="DishCo- Dancing Deliciousness"
                        loading="lazy"
                      ></img>
                    </video>
                    <div className="package-item-main">
                      <h4 className="package_sub_headline">বুধবার</h4>
                      <div className="package_items">
                        <aside className="package_single">
                          <div className="package_items-header">
                            <h4>রেগুলার আইটেম</h4>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/x36wtqeiwwgfthzty20u.webp"
                            alt=""
                            className="package_items_img_left"
                          />
                          <figcaption className="package-img-caption">
                            ভাত + মাছ + ডাল + সবজি = ৮০ টাকা
                          </figcaption>
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="wednesday"
                              className="hidden-radio"
                              onClick={() =>
                                handlePackageClick({
                                  image:
                                    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/x36wtqeiwwgfthzty20u.webp",
                                  name: "ফিশ মিল",
                                  tk: 80,
                                  day: "বুধবার",
                                  number: 6,
                                  package: "রেগুলার",
                                  selectedWeekday: selectedDate.weekday,
                                  selectedDay: selectedDate.day,
                                  selectedMonth: selectedDate.month,
                                  selectedYear: selectedDate.year,
                                  quantity: wedQuantity,
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
                        </aside>
                        <aside className="catering-quantity-section">
                          <span>
                            <h4 className="catering-quantity-button-title">
                              Quantity
                            </h4>
                            <span className="quantity_cart_input">
                              <button
                                className="catering-quantity-decrease-button"
                                id="decrease"
                                onClick={() => handleWedDecrease()}
                              >
                                -
                              </button>
                              <input
                                className="catering-quantity-input"
                                type="number"
                                id="number"
                                value={wedQuantity}
                                readOnly
                              />
                              <button
                                className="catering-quantity-increase-button"
                                id="increase"
                                onClick={() => handleWedIncrease()}
                              >
                                +
                              </button>
                            </span>
                          </span>
                          <>
                            <>
                              {isButtonVisible && (
                                <button
                                  className="catering-package-confirm-btn MyBtn"
                                  type="button"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                  onClick={() => handleClick()}
                                >
                                  Confirm
                                </button>
                              )}
                            </>
                          </>
                        </aside>
                        <aside className="package_single">
                          <div className="package_items-header">
                            <h4>স্পেশিয়াল আইটেম</h4>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692009101/Frontend_images/Catering/l6sjwzqhdvvhk5fsrqsq.webp"
                            alt=""
                            className="package_items_img_right"
                          />
                          <figcaption className="package-img-caption">
                            বীফ তেহারি = ১২০ টাকা
                          </figcaption>
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="wednesday"
                              className="hidden-radio"
                              onClick={() =>
                                handlePackageClick({
                                  image:
                                    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/zer5bzwungxyhzvngm82.webp",
                                  name: "বীফ তেহারি",
                                  tk: 120,
                                  day: "বুধবার",
                                  number: 6,
                                  package: "স্পেশিয়াল",
                                  selectedWeekday: selectedDate.weekday,
                                  selectedDay: selectedDate.day,
                                  selectedMonth: selectedDate.month,
                                  selectedYear: selectedDate.year,
                                  quantity: wedQuantity,
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
                        </aside>
                      </div>
                    </div>
                  </>
                )}
              </>
              <>
                {selectedDate && selectedDate?.weekday === "বৃহস্পতিবার" && (
                  <>
                    <video
                      className="w-100 package-video"
                      id="video_content"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={fallback}
                    >
                      <source src={video} type="video/webm" />
                      <img
                        src={fallback}
                        title="Your browser does not support the <video> tag"
                        alt="DishCo- Dancing Deliciousness"
                        loading="lazy"
                      ></img>
                    </video>
                    <div className="package-item-main">
                      <h4 className="package_sub_headline">বৃহস্পতিবার</h4>
                      <div className="package_items">
                        <aside className="package_single">
                          <div className="package_items-header">
                            <h4>রেগুলার আইটেম</h4>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/k2qrgifz0rrleka96ama.webp"
                            alt=""
                            className="package_items_img_left"
                          />
                          <figcaption className="package-img-caption">
                            ভাত + ডিম + ডাল + সবজি = ৮০ টাকা
                          </figcaption>
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="thursday"
                              className="hidden-radio"
                              onClick={() =>
                                handlePackageClick({
                                  image:
                                    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/k2qrgifz0rrleka96ama.webp",
                                  name: "এগ মিল",
                                  tk: 80,
                                  day: "বৃহস্পতিবার",
                                  number: 7,
                                  package: "রেগুলার",
                                  selectedWeekday: selectedDate.weekday,
                                  selectedDay: selectedDate.day,
                                  selectedMonth: selectedDate.month,
                                  selectedYear: selectedDate.year,
                                  quantity: thirsQuantity,
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
                        </aside>
                        <aside className="catering-quantity-section">
                          <span>
                            <h4 className="catering-quantity-button-title">
                              Quantity
                            </h4>
                            <span className="quantity_cart_input">
                              <button
                                className="catering-quantity-decrease-button"
                                id="decrease"
                                onClick={() => handleThirsDecrease()}
                              >
                                -
                              </button>
                              <input
                                className="catering-quantity-input"
                                type="number"
                                id="number"
                                value={thirsQuantity}
                                readOnly
                              />
                              <button
                                className="catering-quantity-increase-button"
                                id="increase"
                                onClick={() => handleThirsIncrease()}
                              >
                                +
                              </button>
                            </span>
                          </span>

                          <>
                            {isButtonVisible && (
                              <button
                                className="catering-package-confirm-btn MyBtn"
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => handleClick()}
                              >
                                Confirm
                              </button>
                            )}
                          </>
                        </aside>
                        <aside className="package_single">
                          <div className="package_items-header">
                            <h4>স্পেশিয়াল আইটেম</h4>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692009101/Frontend_images/Catering/eheafpx22yyatxauzjqw.webp"
                            alt=""
                            className="package_items_img_right"
                          />
                          <figcaption className="package-img-caption">
                            চিকেন পোলাও = ১২০ টাকা
                          </figcaption>
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="thursday"
                              className="hidden-radio"
                              onClick={() =>
                                handlePackageClick({
                                  image:
                                    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471892/Frontend_images/Catering/ddhl9phljy5wzksfifw4.webp",
                                  name: "চিকেন পোলাও",
                                  tk: 120,
                                  day: "বৃহস্পতিবার",
                                  number: 7,
                                  package: "স্পেশিয়াল",
                                  selectedWeekday: selectedDate.weekday,
                                  selectedDay: selectedDate.day,
                                  selectedMonth: selectedDate.month,
                                  selectedYear: selectedDate.year,
                                  quantity: thirsQuantity,
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
                        </aside>
                      </div>
                    </div>
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CateringDetails;
