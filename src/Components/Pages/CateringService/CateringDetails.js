import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";
import "./Catering.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

//dinamicly 7 days come
const getNextDays = (numDays) => {
  const days = [];
  const today = new Date();

  for (let i = 1; i <= numDays; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    days.push(nextDay);
  }

  return days;
};
const formatDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    // timeZoneName: "short",
  };
  return date.toLocaleDateString(undefined, options);
};

const CateringDetails = () => {
  const [dates, setDates] = useState(getNextDays(7));
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
      setCountMessage("You have to order at least 5 days");
    }
  };

  //handlesatRegDecrese
  const handleSatRegDecrease = () => {
    setQuantity(Math.max(quantity - 1, 1));
  };

  //handleSatRegIncrease
  const handlesatRegIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <Header />
      <main className="container my-5 package-body">
        <div>
          {dates.map((date, index) => (
            <button key={index} onClick={() => console.log(formatDate(date))}>
              {formatDate(date)}
            </button>
          ))}
        </div>
        <h2 className="package_headline">সাপ্তাহিক প্যাকেজ</h2>
        <div className="package_items-header">
          <h4>রেগুলার আইটেম</h4>
          <h4>স্পেশিয়াল আইটেম</h4>
        </div>
        <hr />
        <section>
          <h4 className="package_sub_headline">শুক্রবার</h4>
          <div className="package_items">
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/viyhshqbzy8wlilpftxo.webp"
                alt=""
                className="package_items_img_left"
              />
              <figcaption>ভাত + মুরগি + ডাল + সবজি = ৮০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="friday"
                  class="hidden-radio"
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
                <span class="custom-checkbox"></span> Select
              </label>
              {/* <span className="quantity_cart_input">
                <button
                  className="value-button"
                  id="decrease"
                  onClick={() => handleDecrease()}
                >
                  -
                </button>
                <input type="number" id="number" value={quantity} readOnly />
                <button
                  className="value-button"
                  id="increase"
                  onClick={() => handleIncrease()}
                >
                  +
                </button>
              </span> */}
            </aside>
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692009102/Frontend_images/Catering/qv318ra1nhsvoim0ioix.webp"
                alt=""
                className="package_items_img_right"
              />
              <figcaption>বীফ খিচুরি = ১২০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="friday"
                  class="hidden-radio"
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
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
          </div>
          <hr />
          <h4 className="package_sub_headline">শনিবার</h4>
          <div className="package_items">
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/k2qrgifz0rrleka96ama.webp"
                alt=""
                className="package_items_img_left"
              />
              <figcaption>ভাত + ডিম + ডাল + সবজি = ৮০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="saturday"
                  class="hidden-radio"
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
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692009101/Frontend_images/Catering/eheafpx22yyatxauzjqw.webp"
                alt=""
                className="package_items_img_right"
              />
              <figcaption>চিকেন পোলাও = ১২০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="saturday"
                  class="hidden-radio"
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
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
          </div>
          <hr />
          <h4 className="package_sub_headline">রবিবার</h4>
          <div className="package_items">
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/x36wtqeiwwgfthzty20u.webp"
                alt=""
                className="package_items_img_left"
              />
              <figcaption>ভাত + মাছ + ডাল + সবজি = ৮০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="sunday"
                  class="hidden-radio"
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
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692009101/Frontend_images/Catering/l6sjwzqhdvvhk5fsrqsq.webp"
                alt=""
                className="package_items_img_right"
              />
              <figcaption>বীফ তেহারি = ১২০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="sunday"
                  class="hidden-radio"
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
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
          </div>
          <hr />
          <h4 className="package_sub_headline">সোমবার</h4>
          <div className="package_items">
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/zam03uy7zifx3u5uiekc.webp"
                alt=""
                className="package_items_img_left"
              />
              <figcaption>ভাত + বীফ + ডাল + সবজি = ৮০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="monday"
                  class="hidden-radio"
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
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/cspimz68z9s14zfi8whm.webp"
                alt=""
                className="package_items_img_right"
              />
              <figcaption>ডিম খিচুরি = ৮০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="monday"
                  class="hidden-radio"
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
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
          </div>
          <hr />
          <h4 className="package_sub_headline">মঙ্গলবার</h4>
          <div className="package_items">
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/viyhshqbzy8wlilpftxo.webp"
                alt=""
                className="package_items_img_left"
              />
              <figcaption>ভাত + মুরগি + ডাল + সবজি = ৮০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="tuesday"
                  class="hidden-radio"
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
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692009102/Frontend_images/Catering/qv318ra1nhsvoim0ioix.webp"
                alt=""
                className="package_items_img_right"
              />
              <figcaption>বীফ খিচুরি = ১২০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="tuesday"
                  class="hidden-radio"
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
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
          </div>
          <hr />
          <h4 className="package_sub_headline">বুধবার</h4>
          <div className="package_items">
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/x36wtqeiwwgfthzty20u.webp"
                alt=""
                className="package_items_img_left"
              />
              <figcaption>ভাত + মাছ + ডাল + সবজি = ৮০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="wednesday"
                  class="hidden-radio"
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
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692009101/Frontend_images/Catering/l6sjwzqhdvvhk5fsrqsq.webp"
                alt=""
                className="package_items_img_right"
              />
              <figcaption>বীফ তেহারি = ১২০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="wednesday"
                  class="hidden-radio"
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
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
          </div>
          <hr />
          <h4 className="package_sub_headline">বৃহস্পতিবার</h4>
          <div className="package_items">
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/k2qrgifz0rrleka96ama.webp"
                alt=""
                className="package_items_img_left"
              />
              <figcaption>ভাত + ডিম + ডাল + সবজি = ৮০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="thursday"
                  class="hidden-radio"
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
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1692009101/Frontend_images/Catering/eheafpx22yyatxauzjqw.webp"
                alt=""
                className="package_items_img_right"
              />
              <figcaption>চিকেন পোলাও = ১২০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="thursday"
                  class="hidden-radio"
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
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
          </div>
          <hr />
        </section>

        <button
          className="MyBtn package_checkout_btn"
          onClick={() => handleSubmitFood()}
        >
          Process to Checkout
        </button>
        <h1>{countMessage}</h1>
      </main>

      <Footer />
    </>
  );
};

export default CateringDetails;
