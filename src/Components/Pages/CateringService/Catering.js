import React from "react";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { Link } from "react-router-dom";
import "./Catering.css";

const Catering = () => {
  return (
    <>
      <Header />
      <main className="container catering_services_body">
        <h1 className="text-center mb-3">Our Catering Services</h1>
        <section className="catering_services">
          <aside className="packages">
            <img
              src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1690977514/Frontend_images/Catering/om9iedu3zxklclfemb1x.webp"
              alt=""
              className="catering_services_img"
            />
            <Link to={`cateringDetails/${1}`} className="MyBtn package_buttons">
              View Details
            </Link>
          </aside>
          <aside className="packages">
            <img
              src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1690977514/Frontend_images/Catering/ileigdxtqxcvii0iftva.webp"
              alt=""
              className="catering_services_img"
            />
            <Link to={`cateringDetails/${2}`} className="MyBtn package_buttons">
              View Details
            </Link>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Catering;
