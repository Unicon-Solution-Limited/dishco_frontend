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
            <div className="catering_services_img_section">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691056073/Frontend_images/Catering/bw7h7jtlbifgn9hokmgu.webp"
                alt=""
                className="catering_services_img"
              />
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691056073/Frontend_images/Catering/egcllz8haxr47awtcfmw.webp"
                alt=""
                className="catering_service_sub_img_left sub_img"
              />
            </div>
          </aside>
          <aside className="packages">
            <div className="catering_services_img_section">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691056073/Frontend_images/Catering/lqsqi2mypgjrmgmv5tu8.webp"
                alt=""
                className="catering_services_img"
              />
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1691060531/Frontend_images/Catering/kp8m34vilqdeznb3jvoh.webp"
                alt=""
                className="catering_service_sub_img_right sub_img"
              />
            </div>
          </aside>
        </section>
        <Link to="/cateringDetails" className="MyBtn package_buttons">
          View Details
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default Catering;
