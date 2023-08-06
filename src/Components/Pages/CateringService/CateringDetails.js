import React from "react";
import { Link } from "react-router-dom";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";

const CateringDetails = () => {
  return (
    <>
      <Header />
      <main className="container-fluid">
        <h2>Select your weekly meal</h2>
        <section>
          <aside>Regular</aside>
          <aside>Special</aside>
          <hr />
          <aside>Regular</aside>
          <aside>Special</aside>
          <hr />
          <aside>Regular</aside>
          <aside>Special</aside>
          <hr />
          <aside>Regular</aside>
          <aside>Special</aside>
          <hr />
          <aside>Regular</aside>
          <aside>Special</aside>
          <hr />
          <aside>Regular</aside>
          <aside>Special</aside>
          <hr />
          <aside>Regular</aside>
          <aside>Special</aside>
          <hr />
        </section>
      </main>
      <Link to="/cateringCheckoutPage">
        <button>checkout page</button>
      </Link>
      <Footer />
    </>
  );
};

export default CateringDetails;
