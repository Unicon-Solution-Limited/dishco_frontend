import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="container footer_top">
        <aside className="company_name">
          <h1>DishCo</h1>
          <h5>Dancing Deliciousness.</h5>
        </aside>
        <aside>
          <div className="icons company_social_icon" data-animation="to-top">
            <li>
              <a href="#0" target="_blank">
                <span className="icon-top">
                  <i className="bi bi-facebook"></i>
                </span>
                <span className="icon-bottom">
                  <i className="bi bi-facebook" aria-hidden="true"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#0" target="_blank">
                <span className="icon-top">
                  <i className="bi bi-youtube"></i>
                </span>
                <span className="icon-bottom">
                  <i className="bi bi-youtube" aria-hidden="true"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#0" target="_blank">
                <span className="icon-top">
                  <i className="bi bi-instagram"></i>
                </span>
                <span className="icon-bottom">
                  <i className="bi bi-instagram" aria-hidden="true"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#0" target="_blank">
                <span className="icon-top">
                  <i className="bi bi-whatsapp"></i>
                </span>
                <span className="icon-bottom">
                  <i className="bi bi-whatsapp" aria-hidden="true"></i>
                </span>
              </a>
            </li>
          </div>
        </aside>
      </section>
      <div className="header-separater"></div>
      <section className="container footer_middle">
        <div className="row">
          <aside className="col-lg-3 col-md-3 content">
            <p>
              In this Dine in Facility you can find different variation of mouth
              watering finger licking foods from Pizza, Pasta, Burger, Fast Food
              to Japanese, Indian, Chinese, Korean, Mexican & Fusion Foods.
            </p>
          </aside>
          <div className="col-lg-6 col-md-6 middle_links">
            <aside className="links">
              <ul>
                <li>
                  <Link to="/">My Account</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
              </ul>
            </aside>
            <aside className="links">
              <ul>
                <li>
                  <Link to="/">Menu Card</Link>
                </li>
                <li>
                  <Link to="/">All Items</Link>
                </li>
                <li>
                  <Link to="/">Your Cart Item</Link>
                </li>
                <li>
                  <Link to="/">Return and Refund Policy</Link>
                </li>
              </ul>
            </aside>
          </div>
          <aside className="col-md-3 address">
            <h3>Address</h3>
            <p>
              Shop-9007, 9th Floor, Shimanto Shambhar, Dhanmondi 2, Dhaka, 1205.
            </p>
          </aside>
        </div>
      </section>
      <div className="header-separater"></div>
      <section className="container footer_bottom">
        <p>
          DishCo – Copyright ©️ 2020 - {new Date().getFullYear()} | All right
          reserved |{" "}
          <a
            href="https://uniconbd.com/"
            target="_blank"
            className="web_link"
            rel="noreferrer"
          >
            Unicon Solution Limited.
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
