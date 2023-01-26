import React from "react";

const Welcome = () => {
  const img1 =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp";
  const img2 =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674642000/Frontend_images/Background_images/imrs0pmkjarmctevxguv.webp";
  return (
    <section className="welcome_section">
      <div className="container my-5">
        <div className="row">
          <aside className="col-md-4">
            <img src={img1} alt="" className="welcome_img" />
          </aside>
          <aside className="col-md-4">
            <h5>Country's Most Loved!</h5> <h2>Welcome</h2>{" "}
            <h4>We Are Locally Served Food & beverage Serving Since 2021. </h4>
            We served Rice Bowl, Pizza & Burger & Sandwich, Soup, Pasta, Fry
            Basket, Steak Cuisine, Ramen Special, Korean Cuisine, Japanese
            Cuisine, Chinese Cuisine, Indian Cuisine, Rice Cuisine, Dessert,
            Peyala Tea, and difference kinds of beverage.
          </aside>
          <aside className="col-md-4">
            <img src={img2} alt="" className="welcome_img" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
