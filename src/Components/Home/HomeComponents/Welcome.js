import React from "react";

const Welcome = () => {
  const img1 =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp";
  const img2 =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674642000/Frontend_images/Background_images/imrs0pmkjarmctevxguv.webp";
  return (
    <section className="welcome_section">
      <div className="container welcome-container">
        <div className="row">
          <div className="col-md-4 left_image">
            <img src={img1} alt="Dumpling" className="welcome_img" />
          </div>
          <aside className="col-md-4 welcome_text">
            <h4>Flavors of life!</h4> <h2>Welcome</h2>{" "}
            <h5>
              We are the finest multi-cuisine restaurant close to your home.{" "}
            </h5>
            <p>
              What do we provide? Our magic of the kitchen provides
              mouthwatering multi-cuisine foods from Korean, Japanese, Chinese,
              Indian, Italian, Mexican, American to local favorite foods are
              always experimenting innovating & adding new fusty food on our
              food craft.
            </p>
          </aside>
          <div className="col-md-4">
            <img src={img2} alt="kacchi Biryani" className="welcome_img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
