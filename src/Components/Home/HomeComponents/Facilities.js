import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Facilities = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const iCon =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674641182/Frontend_images/Background_images/j49tcxapg63qzbf0sy5d.webp";
  return (
    <section className="facilities_main">
      <h2>Facilities</h2>
      <img src={iCon} alt="" />
      <div className="facility_content">
        <span data-aos="fade-right">Takeaway</span>
        <span>Dine In</span>
        <span>Online Order</span>
        <span>Halal Food</span>
      </div>
    </section>
  );
};

export default Facilities;
