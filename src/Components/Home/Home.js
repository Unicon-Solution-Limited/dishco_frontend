import React from "react";

import "./Home.css";
import MenuSection from "./HomeComponents/MenuSection";
import Video from "./HomeComponents/Video";
import Welcome from "./HomeComponents/Welcome";

const Home = () => {
  return (
    <>
      <Video />
      <Welcome />
      <MenuSection />
    </>
  );
};

export default Home;
