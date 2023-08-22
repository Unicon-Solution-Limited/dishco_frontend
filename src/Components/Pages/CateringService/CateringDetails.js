import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";
import "./Catering.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import video from "../../../Media/catering-bg.webm";

//dinamicly 7 days come
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

const getBanglaDayName = (dayName) => {
  const dayNameInBangla = {
    Sunday: "রবিবার",
    Monday: "সোমবার",
    Tuesday: "মঙ্গলবার",
    Wednesday: "বুধবার",
    Thursday: "বৃহস্পতিবার",
    Friday: "শুক্রবার",
    Saturday: "শনিবার",
  };
  return dayNameInBangla[dayName] || dayName;
};

const formatDate = (date) => {
  const options = {
    weekday: "long",
    // year: "numeric",
    // month: "long",
    // day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    // timeZoneName: "short",
  };

  const dayName = date.toLocaleDateString("en-US", options);
  const banglaDayName = getBanglaDayName(dayName);

  return banglaDayName;
};

const CateringDetails = () => {
  const [dates, setDates] = useState(getNextDays(8));
  const [selectedDate, setSelectedDate] = useState("");
  const [food, setFood] = useState([]);
  const [countMessage, setCountMessage] = useState("");
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);

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
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674641183/Frontend_images/Background_images/rh6vjlpg81xrbtrieyep.webp";
  return (
    <>
      <Header />
      <main className="package-body">
        <section className="container package-body-main">
          <h2 className="package_headline">সাপ্তাহিক প্যাকেজ</h2>
          {/* date button */}
          <section className="package-select-buttons">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(formatDate(date))}
                data-bs-toggle="modal"
                data-bs-target="#cateringModal"
                className={`${
                  food.some((dt) => dt?.day === formatDate(date))
                    ? "package-select-button-active"
                    : ""
                }`}
              >
                {formatDate(date)}
              </button>
            ))}
          </section>

          <>
            <section className="accepted-package">
              <h4 className="accepted-package-headline">সিলেক্টেড প্যাকেজ</h4>
              {food.length !== 0 ? (
                <aside className="accepted-package-items">
                  <>
                    {food.map((dt) => (
                      <p>
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
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="modal-body catering-modal-body">
              <>
                {selectedDate === "শুক্রবার" && (
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
                          <label
                            className="custom-radio"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
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
                                })
                              }
                            />
                            <span className="custom-checkbox"></span> Select
                          </label>
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
                          <label
                            className="custom-radio"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
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
                {selectedDate === "শনিবার" && (
                  <>
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
                        <figcaption>
                          ভাত + ডিম + ডাল + সবজি = ৮০ টাকা
                        </figcaption>
                        <label
                          className="custom-radio"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
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
                              })
                            }
                          />
                          <span className="custom-checkbox"></span> Select
                        </label>
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
                        <figcaption>চিকেন পোলাও = ১২০ টাকা</figcaption>
                        <label
                          className="custom-radio"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
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
                              })
                            }
                          />
                          <span className="custom-checkbox"></span> Select
                        </label>
                      </aside>
                    </div>
                  </>
                )}
              </>
              <>
                {selectedDate === "রবিবার" && (
                  <>
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
                        <figcaption>
                          ভাত + মাছ + ডাল + সবজি = ৮০ টাকা
                        </figcaption>
                        <label
                          className="custom-radio"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
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
                              })
                            }
                          />
                          <span className="custom-checkbox"></span> Select
                        </label>
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
                        <figcaption>বীফ তেহারি = ১২০ টাকা</figcaption>
                        <label
                          className="custom-radio"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
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
                              })
                            }
                          />
                          <span className="custom-checkbox"></span> Select
                        </label>
                      </aside>
                    </div>
                  </>
                )}
              </>
              <>
                {selectedDate === "সোমবার" && (
                  <>
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
                        <figcaption>
                          ভাত + বীফ + ডাল + সবজি = ৮০ টাকা
                        </figcaption>
                        <label
                          className="custom-radio"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
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
                              })
                            }
                          />
                          <span className="custom-checkbox"></span> Select
                        </label>
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
                        <figcaption>ডিম খিচুরি = ৮০ টাকা</figcaption>
                        <label
                          className="custom-radio"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
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
                              })
                            }
                          />
                          <span className="custom-checkbox"></span> Select
                        </label>
                      </aside>
                    </div>
                  </>
                )}
              </>
              <>
                {selectedDate === "মঙ্গলবার" && (
                  <>
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
                        <figcaption>
                          ভাত + মুরগি + ডাল + সবজি = ৮০ টাকা
                        </figcaption>
                        <label
                          className="custom-radio"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
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
                              })
                            }
                          />
                          <span className="custom-checkbox"></span> Select
                        </label>
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
                        <figcaption>বীফ খিচুরি = ১২০ টাকা</figcaption>
                        <label
                          className="custom-radio"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
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
                              })
                            }
                          />
                          <span className="custom-checkbox"></span> Select
                        </label>
                      </aside>
                    </div>
                  </>
                )}
              </>
              <>
                {selectedDate === "বুধবার" && (
                  <>
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
                        <figcaption>
                          ভাত + মাছ + ডাল + সবজি = ৮০ টাকা
                        </figcaption>
                        <label
                          className="custom-radio"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
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
                              })
                            }
                          />
                          <span className="custom-checkbox"></span> Select
                        </label>
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
                        <figcaption>বীফ তেহারি = ১২০ টাকা</figcaption>
                        <label
                          className="custom-radio"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
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
                              })
                            }
                          />
                          <span className="custom-checkbox"></span> Select
                        </label>
                      </aside>
                    </div>
                  </>
                )}
              </>
              <>
                {selectedDate === "বৃহস্পতিবার" && (
                  <>
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
                        <figcaption>
                          ভাত + ডিম + ডাল + সবজি = ৮০ টাকা
                        </figcaption>
                        <label
                          className="custom-radio"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
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
                              })
                            }
                          />
                          <span className="custom-checkbox"></span> Select
                        </label>
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
                        <figcaption>চিকেন পোলাও = ১২০ টাকা</figcaption>
                        <label
                          className="custom-radio"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
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
                              })
                            }
                          />
                          <span className="custom-checkbox"></span> Select
                        </label>
                      </aside>
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
