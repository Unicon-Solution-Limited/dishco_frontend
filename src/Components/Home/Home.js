import React, { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

import "./Home.css";
import Facilities from "./HomeComponents/Facilities";
import MenuSection from "./HomeComponents/MenuSection";
import OfferSection from "./HomeComponents/OfferSection";
import Video from "./HomeComponents/Video";
import Welcome from "./HomeComponents/Welcome";

const Home = () => {
  return (
    <>
      <Header />
      <Video />
      <Welcome />
      <MenuSection />
      <OfferSection />
      <Facilities />
      <Footer />
    </>
  );
};

export default Home;
