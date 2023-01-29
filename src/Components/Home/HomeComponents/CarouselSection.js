import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CarouselSection = () => {
  const sat =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674992815/Frontend_images/Weekly-offer/nt8y623jutlrvvsm9lby.webp";
  const sun =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674992817/Frontend_images/Weekly-offer/ncvy9pwcm1dmosy0gnpi.webp";
  const mon =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674992816/Frontend_images/Weekly-offer/dszesg9bd0hu3pzslqow.webp";
  const tue =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674992820/Frontend_images/Weekly-offer/xzoqomrfxspa1mfxj85q.webp";
  const wed =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674992815/Frontend_images/Weekly-offer/c3xmwq6e43tjq4wyvk7q.webp";
  const thu =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674992817/Frontend_images/Weekly-offer/lvhrqu69mcde97h2vbnj.webp";
  const fri =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674992828/Frontend_images/Weekly-offer/dsfzu0wsc0oyls8nvqv0.webp";
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <section className="carousel_main">
      <h2>Daily Deals</h2>
      <p>Only for Dine In</p>

      <div className="carousel-images">
        <Slider {...settings}>
          <div>
            <img src={sat} alt="" className="offer_img" />
          </div>
          <div>
            <img src={sun} alt="" className="offer_img" />
          </div>
          <div>
            <img src={mon} alt="" className="offer_img" />
          </div>
          <div>
            <img src={tue} alt="" className="offer_img" />
          </div>
          <div>
            <img src={wed} alt="" className="offer_img" />
          </div>
          <div>
            <img src={thu} alt="" className="offer_img" />
          </div>
          <div>
            <img src={fri} alt="" className="offer_img" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default CarouselSection;
