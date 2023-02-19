import React from "react";
import "./FooterPages.css";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <section>
        <h2>About Dishco</h2>
        <p>
          Do you want to get authentic taste? Do you want to get multi-cuisine
          food taste at a reasonable price? Don't worry, Dishco is your one-stop
          shop for mouth-watering dishes and the best customer service.
        </p>
        <p>
          Since its inception in 2021 as a sister-concern of Unicon Solution
          Ltd, we have been committed to creating a trusted relationship with
          our customers. We take pride in our wide range of menu options,
          high-quality ingredients, and attentive service.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
