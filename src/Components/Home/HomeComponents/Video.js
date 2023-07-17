import React from "react";
import v from "../../../Media/dishco.webm";

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
        <source src={v} type="video/webm" />
        <img
          src={fallback}
          title="Your browser does not support the <video> tag"
          alt="DishCo- Dancing Deliciousness"
          loading="lazy"
        ></img>
      </video>
    </section>
  );
};

export default Video;
