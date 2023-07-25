import React, { useEffect } from "react";

const Facilities = () => {
  const iCon =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674641182/Frontend_images/Background_images/j49tcxapg63qzbf0sy5d.webp";
  return (
    <>
      <section className="facilities_main">
        <h2>Facilities</h2>
        <img src={iCon} alt="facilities" loading="lazy" />
        <div className="facility_content">
          <p>Takeaway</p>
          <p>Dine In</p>
          <p>Online Order</p>
          <p>Catering</p>
        </div>
      </section>
    </>
  );
};

export default Facilities;
