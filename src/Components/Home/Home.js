import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import "./Home.css";
import v from "../../Media/Final Web Video 2023.mp4";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="video_body">
          <video
            className="w-100"
            id="video_content"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={v} type="video/mp4" />
          </video>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
