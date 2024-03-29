import React, { useEffect, useRef } from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import MessengerCustomerChat from "react-messenger-customer-chat";
import "./Home.css";
import Facilities from "./HomeComponents/Facilities";
import MenuSection from "./HomeComponents/MenuSection";
import OfferSection from "./HomeComponents/OfferSection";
import Video from "./HomeComponents/Video";
import Welcome from "./HomeComponents/Welcome";
import { Link } from "react-router-dom";

const Home = () => {
  const popupRef = useRef(null);
  const blurRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        blurRef.current &&
        !blurRef.current.contains(event.target)
      ) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (popupRef.current && blurRef.current) {
        popupRef.current.style.display = "block";
        blurRef.current.classList.add("active");
      }
    }, 2000);
  }, []);

  const handleClose = () => {
    if (popupRef.current && blurRef.current) {
      popupRef.current.style.display = "none";
      blurRef.current.classList.remove("active");
    }
  };

  return (
    <>
      <main className="homepage" id="blur" ref={blurRef}>
        <Header />
        <Video />
        <Welcome />
        <MenuSection />
        <OfferSection />
        <Facilities />
        <Footer />
      </main>
      {/* catering service */}
      <section className="catering-logo">
        <Link to="/cateringDetails">
          <img
            src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1690357966/Frontend_images/logo/qztx64rusybxyxaqcp9v.gif"
            alt=""
            className="catering-gif"
          />
        </Link>
      </section>
      {/* catering service */}
      <div className="adsPopup" ref={popupRef}>
        <button id="close" onClick={handleClose}>
          &times;
        </button>
        <img
          src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1702203448/zmakxwyrifjr61nzrjsn.webp"
          alt="15% Discount"
        />
      </div>
      <MessengerCustomerChat
        pageId="101975605485880"
        appId="650259003597895"
        className="messenger_chat"
      />
    </>
  );
};

export default Home;
