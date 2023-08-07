import React from "react";
import { Link } from "react-router-dom";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";

const CateringDetails = () => {
  return (
    <>
      <Header />
      <main className="container my-5">
        <h2 className="package_headline">সাপ্তাহিক প্যাকেজ</h2>
        <div className="package_items">
          <h4>রেগুলার আইটেম</h4>
          <h4>স্পেসিয়াল আইটেম</h4>
        </div>
        <hr />
        <section>
          <h4 className="package_sub_headline">শুক্রবার</h4>
          <div>
            <aside>Regular</aside>
            <aside>Special</aside>
          </div>
          <hr />
          <h4 className="package_sub_headline">শনিবার</h4>
          <div>
            <aside>Regular</aside>
            <aside>Special</aside>
          </div>
          <hr />
          <h4 className="package_sub_headline">রবিবার</h4>

          <div>
            <aside>Regular</aside>
            <aside>Special</aside>
          </div>
          <hr />
          <h4 className="package_sub_headline">সোমবার</h4>

          <div>
            <aside>Regular</aside>
            <aside>Special</aside>
          </div>
          <hr />
          <h4 className="package_sub_headline">মঙ্গলবার</h4>

          <div>
            <aside>Regular</aside>
            <aside>Special</aside>
          </div>
          <hr />
          <h4 className="package_sub_headline">বুধবার</h4>

          <div>
            <aside>Regular</aside>
            <aside>Special</aside>
          </div>
          <hr />
          <h4 className="package_sub_headline">বৃহস্পতিবার</h4>

          <div>
            <aside>Regular</aside>
            <aside>Special</aside>
          </div>
          <hr />
        </section>
        <Link to="/cateringCheckoutPage">
          <button>checkout page</button>
        </Link>
      </main>

      <Footer />
    </>
  );
};

export default CateringDetails;
