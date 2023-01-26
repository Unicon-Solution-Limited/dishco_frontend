import React from "react";
import v from "../../../Media/Final Web Video 2023.mp4";

const Video = () => {
  return (
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
  );
};

export default Video;
