import React from "react";

const Facilities = () => {
  const iCon =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674641182/Frontend_images/Background_images/j49tcxapg63qzbf0sy5d.webp";
  return (
    <section className="facilities_main">
      <h2>Facilities</h2>
      <img src={iCon} alt="" />
      <div className="facility_content">
        <span>Takeaway</span>
        <span>Dine In</span>
        <span>Online Order</span>
        <span>Halal Food</span>
      </div>
    </section>
  );
};

export default Facilities;
