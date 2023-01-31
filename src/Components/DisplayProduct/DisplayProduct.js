import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DisplayProduct.css";
const testP =
  "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674642000/Frontend_images/Background_images/imrs0pmkjarmctevxguv.webp";
const imgX =
  "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp";
const backgroundImg =
  "https://res.cloudinary.com/dnz6zg4on/image/upload/v1675142448/fmtlh5gqitrtpy9u9rek.webp";

const DisplayProduct = () => {
  const { navItem } = useParams();
  const [food, setFood] = useState([]);
  console.log(navItem);

  // getting data matching of navItem
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/getSelectedFood?navItem=" + navItem
        );
        const data = await response.json();
        setFood(data);
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchFood();
  }, [navItem]);

  return (
    <section className="displayProduct_main">
      <div className="container my-5">
        <div className="search_bar_body">
          <input
            type="text"
            name="search"
            placeholder="Search food....."
            className="search_bar"
          />
        </div>
        <div className="product_card_row">
          <div className="product_card_body">
            <img src={testP} alt="" className="product_img" />
            {/* <span className="product_image_body">
              <img src={testP} alt="" className="product_img" />
              <img
                src={backgroundImg}
                alt=""
                className="product_img_background"
              />
            </span> */}
            <h5 className="product_name">DishCo Platter</h5>
            <p className="product_price">580</p>
            <button className="btn MyBtn product_button">
              View Details <i className="bi bi-eye"></i>
            </button>
          </div>
          <div className="product_card_body">
            <img src={imgX} alt="" className="product_img" />
            <h5 className="product_name">DishCo Platter</h5>
            <p className="product_price">580</p>
            <button className="btn MyBtn product_button">
              View Details <i className="bi bi-eye"></i>
            </button>
          </div>
          <div className="product_card_body">
            <img src={testP} alt="" className="product_img" />
            <h5 className="product_name">DishCo Platter</h5>
            <p className="product_price">580</p>
            <button className="btn MyBtn product_button">
              View Details <i className="bi bi-eye"></i>
            </button>
          </div>
          <div className="product_card_body">
            <img src={testP} alt="" className="product_img" />
            <h5 className="product_name">DishCo Platter</h5>
            <p className="product_price">580</p>
            <button className="btn MyBtn product_button">
              View Details <i className="bi bi-eye"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayProduct;
