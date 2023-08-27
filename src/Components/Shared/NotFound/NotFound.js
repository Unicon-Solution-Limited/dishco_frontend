import React from "react";
import "./NotFound.css";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <section className="not-found-main-body">
        <h1>404</h1>
        <h3>Page Not Found!</h3>
        <h6>
          Back To <a href="/">Home</a>
        </h6>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
