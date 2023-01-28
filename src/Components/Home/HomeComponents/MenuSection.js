import React from "react";
import { Link } from "react-router-dom";

const MenuSection = () => {
  const iconTop =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674641182/Frontend_images/Background_images/lzfhbwgkleyfnu3ocfjl.webp";
  return (
    <section className="menuSection">
      <div className="container menu_content">
        <img src={iconTop} alt="" className="my-3" />
        <h2 className="my-3">Our Menu</h2>
        <h5 className="my-4">Quality Ingredients, Tasty Meals</h5>
        <p className="my-3">
          Congue, gravida. Placeat nibh sunt semper elementum anim! Integer
          lectus debitis auctor. Molestias vivamus eligendi ut, cupidatat nisl
          iaculis etiam! Laboris aenean.
        </p>
        <div className="my-5">
          <Link to="/" className="menu_link">
            Entire Menu <i className="bi bi-arrow-right-short"></i>
          </Link>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default MenuSection;
