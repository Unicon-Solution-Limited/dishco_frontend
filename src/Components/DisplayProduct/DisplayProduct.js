import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
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
    <>
      <Header />
      <section className="displayProduct_main">
        <div className="container my-5">
          <div className="search_bar_body">
            <form action="">
              <input
                type="text"
                name="search"
                placeholder="Search food....."
                className="search_bar"
              />
            </form>
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
                    {data.sizePriceItem.map((sizePrice, index2) => (
                      <div key={index2}>
                        <span>{sizePrice?.price} Tk</span>
                      </div>
                    ))}
                  </p>

                  <span>
                    <Link
                      to={`/singleProduct/${data?._id}`}
                      className="btn MyBtn product_button"
                    >
                      View Details <i className="bi bi-eye"></i>
                    </Link>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DisplayProduct;
