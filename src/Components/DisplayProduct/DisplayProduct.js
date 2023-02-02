import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DisplayProduct.css";

const DisplayProduct = () => {
  const { navItem } = useParams();
  const [food, setFood] = useState([]);

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
          {food.map((data, index) => (
            <div key={index}>
              <div className="product_card_body">
                <img src={data.Image} alt="" className="product_img" />

                <h5 className="product_name">{data.name}</h5>
                <p
                  className="product_price"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  {data.sizePriceItem.map((sizePrice) => (
                    <div key={sizePrice._id}>
                      <p>{sizePrice?.price} Tk</p>
                    </div>
                  ))}
                </p>
                <Link to="/" className="btn MyBtn product_button">
                  View Details <i className="bi bi-eye"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisplayProduct;
