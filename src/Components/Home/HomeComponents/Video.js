import React from "react";
import v from "../../../Media/Final Web Video 2023.mp4";

const Video = () => {
  const fallback =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674641183/Frontend_images/Background_images/rh6vjlpg81xrbtrieyep.webp";
  return (
    <section className="video_body">
      <video
        className="w-100"
        id="video_content"
        autoPlay
        loop
        muted
        playsInline
        poster={fallback}
      >
        <source src={v} type="video/mp4" />
        <img
          src={fallback}
          title="Your browser does not support the <video> tag"
          alt="DishCo- Dancing Deliciousness"
        ></img>
      </video>
    </section>
  );
};

export default Video;
