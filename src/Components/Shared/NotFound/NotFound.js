import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <section className="not_found_main_body">
        <h1>404</h1>
        <h3>Page Not Found!</h3>
        <h6>
          Back To <a href="/">Home</a>
        </h6>
      </section>
    </>
  );
};

export default NotFound;
