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

  // Search

  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <>
      <Header />
      <section className="displayProduct_main">
        <div className="container my-5">
          {/* <form action="" className="search_bar_body">
            <input
              type="text"
              name="search"
              placeholder="Search food....."
              className="search_bar"
              value={value}
              onChange={onChange}
            />
            <button
              className="btn MyBtn search_button"
              onClick={() => onSearch(value)}
            >
              Search
            </button>
          </form> */}
          <div className="dropdown">
            {food
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.name.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() => onSearch(item.name)}
                  className="dropdown-row"
                  key={item.name}
                >
                  {item.name}
                </div>
              ))}
          </div>

          <div className="product_card_row">
            {food.map((data, index) => (
              <div key={index}>
                <div className="product_card_body">
                  <img
                    src={data.image}
                    alt=""
                    className="product_img"
                    loading="lazy"
                  />
                  <h6 className="product_name">{data.name.slice(0, 30)}</h6>
                  <p className="product_price">
                    {data.sizePriceItem.map((sizePrice, index2) => (
                      <span key={index2}>
                        <span className="price_span">{sizePrice?.price}</span>
                      </span>
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
