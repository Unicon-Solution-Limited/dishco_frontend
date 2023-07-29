import React from "react";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { Link } from "react-router-dom";

const Catering = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Our Catering Services</h1>
        <h2>Regular</h2>
        <h2>Special</h2>
        <div>
          <h5>Combo 1</h5>
          <Link to={`cateringDetils/${1}`}>
            <button>HI</button>
          </Link>

          <p>HI</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Catering;
