import React, { useEffect, useRef } from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

import "./Home.css";
import Facilities from "./HomeComponents/Facilities";
import MenuSection from "./HomeComponents/MenuSection";
import OfferSection from "./HomeComponents/OfferSection";
import Video from "./HomeComponents/Video";
import Welcome from "./HomeComponents/Welcome";

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
      <div class="adsPopup" ref={popupRef}>
        <button id="close" onClick={handleClose}>
          &times;
        </button>
        <h2>This Is The Title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          distinctio fugiat alias iure qui, commodi minima magni ullam aliquam
          dignissimos?
        </p>
        <a href="#">Let's Go</a>
      </div>
    </>
  );
};

export default Home;
