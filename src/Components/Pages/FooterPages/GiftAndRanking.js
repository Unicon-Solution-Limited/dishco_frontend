import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./FooterPages.css";

const GiftAndRanking = () => {
  return (
    <>
      <Header />
      <main className="rank_body_main">
        <section className="container pt-5">
          <h2 className="text-center rank_headline">Customer Ranking</h2>
          <div className="rank_body_main py-5">
            <div className="rank_body">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1679982155/Frontend_images/logo/caj3pktvujd45qvbjm61.webp"
                alt="Bronze"
                className="logo_for_rank"
              />
              <p>0 - 499 Points</p>
            </div>
            <div className="rank_body">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1679982155/Frontend_images/logo/ezbuvfohme2cdiiphgiu.webp"
                alt="Silver"
                className="logo_for_rank"
              />
              <p>500 - 2999 Points</p>
            </div>
            <div className="rank_body">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1679982155/Frontend_images/logo/bzczji4nlplgwwjud8bi.webp"
                alt="Gold"
                className="logo_for_rank"
              />
              <p>3000 - 6999 Points</p>
            </div>
            <div className="rank_body">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1679982155/Frontend_images/logo/wkogtc6hr1r8pwhnfcnr.webp"
                alt="Platinum"
                className="logo_for_rank"
              />
              <p>
                7000 - <i className="bi bi-infinity"></i> Points
              </p>
            </div>
          </div>
          <div>
            <strong className="note">Note:</strong>
            <p>
              <strong>Purchased 10 Tk. equivalent food = 1 Point</strong>
            </p>
            <strong>Bronze:</strong> They Don't get any Discount.{" "}
          </div>
          <div>
            <strong>Silver:</strong> They Can Collect a Coupon using 200 points.
            After collecting a coupon they get 5% discount of all products
            within 7 days.
          </div>
          <div>
            <strong>Gold:</strong> They Can Collect a Coupon using 300 points.
            After collecting a coupon they get 10% discount of all products
            within 7 days.
          </div>
          <div>
            <strong>Platinum:</strong> They Can Collect a Coupon using 500
            points. After collecting a coupon they get 15% discount of all
            products within 7 days.
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GiftAndRanking;
