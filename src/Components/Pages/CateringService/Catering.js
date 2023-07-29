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
            <button>suppose this is food 1</button>
          </Link>
          <br />
          <br />
          <Link to={`cateringDetils/${2}`}>
            <button>suppose this is food 2</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Catering;
