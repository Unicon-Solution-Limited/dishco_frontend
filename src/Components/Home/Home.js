import React from "react";

import "./Home.css";
import CarouselSection from "./HomeComponents/CarouselSection";
import Facilities from "./HomeComponents/Facilities";
import MenuSection from "./HomeComponents/MenuSection";
import Video from "./HomeComponents/Video";
import Welcome from "./HomeComponents/Welcome";

const Home = () => {
  return (
    <>
      <Video />
      <Welcome />
      <MenuSection />
      <CarouselSection />
      <Facilities />
    </>
  );
};

export default Home;
