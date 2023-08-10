import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";
import "./Catering.css";

const CateringDetails = () => {
  const [food, setFood] = useState([]);
  // console.log(food);
  const saturdayRegRef = useRef();
  const sundayRegRef = useRef();
  const mondayRegRef = useRef();
  const tuesdayRegRef = useRef();
  const thursdayRegRef = useRef();
  const fridayRegRef = useRef();
  const saturdaySpclRef = useRef();
  const sundaySpclRef = useRef();
  const mondaySpclRef = useRef();
  const tuesdaySpclRef = useRef();
  const thursdaySpclRef = useRef();
  const fridaySpclRef = useRef();

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
    localStorage.setItem("cateringFood", JSON.stringify(food));
  };

  return (
    <>
      <Header />
      <main className="container my-5 package-body">
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
                      name: "Chicken Meal",
                      tk: 80,
                      day: "friday",
                      number: 1,
                    })
                  }
                />
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471892/Frontend_images/Catering/mpjx2teriodgxb71ywe0.webp"
                alt=""
                className="package_items_img_right"
              />
              <figcaption>বিফ খিচুরি = ১২০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="friday"
                  class="hidden-radio"
                  onClick={() =>
                    handlePackageClick({
                      name: "Beef khichuri",
                      tk: 120,
                      day: "friday",
                      number: 1,
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
                      name: "Egg Meal",
                      tk: 80,
                      day: "Saturday",
                      number: 2,
                    })
                  }
                />
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471892/Frontend_images/Catering/ddhl9phljy5wzksfifw4.webp"
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
                      name: "Chicken Polao",
                      tk: 120,
                      day: "Saturday",
                      number: 2,
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
                      name: "Fish Meal",
                      tk: 80,
                      day: "Sunday",
                      number: 3,
                    })
                  }
                />
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/zer5bzwungxyhzvngm82.webp"
                alt=""
                className="package_items_img_right"
              />
              <figcaption>বিফ তেহারি = ১২০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="sunday"
                  class="hidden-radio"
                  onClick={() =>
                    handlePackageClick({
                      name: "Beef Teheri",
                      tk: 120,
                      day: "Sunday",
                      number: 3,
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
              <figcaption>ভাত + বিফ + ডাল + সবজি = ৮০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="monday"
                  class="hidden-radio"
                  onClick={() =>
                    handlePackageClick({
                      name: "Beef Meal",
                      tk: 80,
                      day: "Monday",
                      number: 4,
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
                      name: "Egg khichuri",
                      tk: 80,
                      day: "Monday",
                      number: 4,
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
                      name: "Chicken Meal",
                      tk: 80,
                      day: "Monday",
                      number: 5,
                    })
                  }
                />
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471892/Frontend_images/Catering/mpjx2teriodgxb71ywe0.webp"
                alt=""
                className="package_items_img_right"
              />
              <figcaption>বিফ খিচুরি = ১২০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="tuesday"
                  class="hidden-radio"
                  onClick={() =>
                    handlePackageClick({
                      name: "Beef khichuri",
                      tk: 120,
                      day: "tuesday",
                      number: 5,
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
                      name: "Fish Meal",
                      tk: 80,
                      day: "wednesday",
                      number: 6,
                    })
                  }
                />
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471893/Frontend_images/Catering/zer5bzwungxyhzvngm82.webp"
                alt=""
                className="package_items_img_right"
              />
              <figcaption>বিফ তেহারি = ১২০ টাকা</figcaption>
              <label class="custom-radio">
                <input
                  type="radio"
                  name="wednesday"
                  class="hidden-radio"
                  onClick={() =>
                    handlePackageClick({
                      name: "Beef Teheri",
                      tk: 120,
                      day: "wednesday",
                      number: 6,
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
                      name: "Egg Meal",
                      tk: 80,
                      day: "thursday",
                      number: 7,
                    })
                  }
                />
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
            <aside className="package_single">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691471892/Frontend_images/Catering/ddhl9phljy5wzksfifw4.webp"
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
                      name: "Chicken Polao",
                      tk: 120,
                      day: "thursday",
                      number: 7,
                    })
                  }
                />
                <span class="custom-checkbox"></span> Select
              </label>
            </aside>
          </div>
          <hr />
        </section>
        <Link to="/cateringCheckoutPage">
          <button
            className="MyBtn package_checkout_btn"
            onClick={() => handleSubmitFood()}
          >
            Process to Checkout
          </button>
        </Link>
      </main>

      <Footer />
    </>
  );
};

export default CateringDetails;
