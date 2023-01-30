import React from "react";

import "./Home.css";
import Facilities from "./HomeComponents/Facilities";
import MenuSection from "./HomeComponents/MenuSection";
import OfferSection from "./HomeComponents/OfferSection";
import Video from "./HomeComponents/Video";
import Welcome from "./HomeComponents/Welcome";

const Home = () => {
  return (
    <>
      <Video />
      <Welcome />
      <MenuSection />
      <OfferSection />
      <Facilities />
    </>
  );
};

export default Home;
