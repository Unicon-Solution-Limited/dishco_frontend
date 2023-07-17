import React from "react";
import { Link } from "react-router-dom";

const MenuSection = () => {
  const iconTop =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674641182/Frontend_images/Background_images/lzfhbwgkleyfnu3ocfjl.webp";
  const imgA =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674897530/Frontend_images/Background_images/yfnhdxq1imuscfskjfba.webp";
  const imgB =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674897530/Frontend_images/Background_images/of3a3gjp8ndyphyyzpqf.webp";
  const imgC =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674897530/Frontend_images/Background_images/werbgkipiwodzkxo4vev.webp";
  const imgD =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674897530/Frontend_images/Background_images/iabxbwzgksyjbeqkcayu.webp";
  return (
    <>
      <section className="menuSection">
        <div className="container menu_content">
          <img src={iconTop} alt="" className="mb-3" loading="lazy" />
          <h2 className="my-3">Our Menu</h2>
          <h5 className="my-4">Quality Ingredients, Tasty Meals</h5>
          <div className="my-5">
            <Link to="/menus" className="menu_link">
              Entire Menu <i className="bi bi-arrow-right-short"></i>
            </Link>
          </div>
        </div>
      </section>
      <div className="menu_middle">
        <div className="container menu_middle_items">
          <div className="row">
            <div className="col-md-4 menu_middle_each">
              <h4>Chicken Prawn Cheesy Bargu Steak </h4>{" "}
              <p>
                {" "}
                Cheesy Spicy Chicken & Prawn Mixed Bargu Steak Served with Spicy
                French Fry, Buttered Mushroom
              </p>{" "}
              <span>370 Tk.</span>
            </div>
            <div className="col-md-4 menu_middle_each">
              <img src={imgA} alt="" className="mid_menu_imgs" loading="lazy" />
            </div>
            <div className="col-md-4 menu_middle_each">
              <h4>Juicy Beef/Chicken Burger with Fusion Sauce</h4>{" "}
              <p>
                {" "}
                Cheesy Beef Patty in Fusion Sauce Served with Potato Wedges
              </p>{" "}
              <span>275 Tk.</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 menu_middle_each">
              <img src={imgB} alt="" className="mid_menu_imgs" loading="lazy" />
            </div>
            <div className="col-md-4 menu_middle_each">
              <h4>Gangnam Platter</h4>{" "}
              <p>
                {" "}
                Hakka Fried Rice Served with Boneless Chicken Brest, Prawn,
                Mushroom, Egg Poached & Vegetable.
              </p>{" "}
              <span>370 Tk.</span>
            </div>
            <div className="col-md-4 menu_middle_each">
              <img src={imgC} alt="" className="mid_menu_imgs" loading="lazy" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 menu_middle_each">
              <h4> Hyderabadi Biryani</h4>{" "}
              <p> Basmati Rice & Chicken/Beef Marinated in Spices.</p>{" "}
              <span> 315/370 Tk.</span>
            </div>
            <div className="col-md-4 menu_middle_each">
              <img src={imgD} alt="" className="mid_menu_imgs" loading="lazy" />
            </div>
            <div className="col-md-4 menu_middle_each">
              <h4> Fruit Custard Creamy Crepe</h4>{" "}
              <p> Fruit, Custard & Cream Blast in a Crepe</p>{" "}
              <span> 190 Tk.</span>
            </div>
          </div>
          <div className="my-5">
            <Link to="/menus" className="menu_link">
              Entire Menu <i className="bi bi-arrow-right-short"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSection;
