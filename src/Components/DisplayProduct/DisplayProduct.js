import React from "react";
import "./DisplayProduct.css";

const DisplayProduct = () => {
  const testP =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674642000/Frontend_images/Background_images/imrs0pmkjarmctevxguv.webp";
  const imgX =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp";
  const backgroundImg =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1675142448/fmtlh5gqitrtpy9u9rek.webp";
  return (
    <section className="displayProduct_main">
      <div className="container my-5">
        <div class="input-group rounded">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="bi bi-search"></i>
          </span>
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
            <p className="product_price">580 Tk</p>
            <button className="btn MyBtn product_button">
              View Details <i className="bi bi-eye"></i>
            </button>
          </div>
          <div className="product_card_body">
            <img src={imgX} alt="" className="product_img" />
            <h5 className="product_name">DishCo Platter</h5>
            <p className="product_price">580 Tk</p>
            <button className="btn MyBtn product_button">
              View Details <i className="bi bi-eye"></i>
            </button>
          </div>
          <div className="product_card_body">
            <img src={testP} alt="" className="product_img" />
            <h5 className="product_name">DishCo Platter</h5>
            <p className="product_price">580 Tk</p>
            <button className="btn MyBtn product_button">
              View Details <i className="bi bi-eye"></i>
            </button>
          </div>
          <div className="product_card_body">
            <img src={testP} alt="" className="product_img" />
            <h5 className="product_name">DishCo Platter</h5>
            <p className="product_price">580 Tk</p>
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
