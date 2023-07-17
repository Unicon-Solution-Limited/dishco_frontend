import React from "react";
const OfferSection = () => {
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

  const satM =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1675070172/Frontend_images/Weekly-offer/tp6fr5sel45wnfhmmmyb.png";
  const sunM =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1675070172/Frontend_images/Weekly-offer/ttxcgnr8f1cvg1y7ywen.png";
  const monM =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1675070172/Frontend_images/Weekly-offer/pyqznyvuvrwkpg6hmcm9.png";
  const tueM =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1675070172/Frontend_images/Weekly-offer/l3olvlozqogbh773wbmv.png";
  const wedM =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1675070172/Frontend_images/Weekly-offer/eskztdabd9ny8nlblfp8.png";
  const thuM =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1675070172/Frontend_images/Weekly-offer/cdt9slb2vsoh0rfzrswe.png";
  const friM =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1675070172/Frontend_images/Weekly-offer/psqwrtlb6vx06cqbi8ez.png";

  return (
    <>
      <section className="offer_main">
        <h2>Daily Deals</h2>
        <p>Only for Dine In</p>
        <div>
          <div className="offer_img_divs">
            <span data-bs-toggle="modal" data-bs-target="#sat">
              <img src={satM} alt="" className="offer_img_m" loading="lazy" />
            </span>
            <span data-bs-toggle="modal" data-bs-target="#sun">
              <img src={sunM} alt="" className="offer_img_m" loading="lazy" />
            </span>
          </div>
          <div className="offer_img_divs">
            <span data-bs-toggle="modal" data-bs-target="#mon">
              <img src={monM} alt="" className="offer_img_m" loading="lazy" />
            </span>
            <span data-bs-toggle="modal" data-bs-target="#tue">
              <img src={tueM} alt="" className="offer_img_m" loading="lazy" />
            </span>
            <span data-bs-toggle="modal" data-bs-target="#wed">
              <img src={wedM} alt="" className="offer_img_m" loading="lazy" />
            </span>
          </div>
          <div className="offer_img_divs">
            <span data-bs-toggle="modal" data-bs-target="#thu">
              <img src={thuM} alt="" className="offer_img_m" loading="lazy" />
            </span>
            <span data-bs-toggle="modal" data-bs-target="#fri">
              <img src={friM} alt="" className="offer_img_m" loading="lazy" />
            </span>
          </div>
        </div>

        {/* Saturday */}
        <div
          className="modal fade modal_body"
          id="sat"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content home_page_modal_content">
              <div className="modal-body home_page_modal_body">
                <button
                  type="button"
                  className="btn-close active modal_close_btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <img src={sat} alt="" className="offer_img" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* Sunday */}
        <div
          className="modal fade modal_body"
          id="sun"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content home_page_modal_content">
              <div className="modal-body home_page_modal_body">
                <button
                  type="button"
                  className="btn-close active modal_close_btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <img src={sun} alt="" className="offer_img" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* Monday */}
        <div
          className="modal fade modal_body"
          id="mon"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content home_page_modal_content">
              <div className="modal-body home_page_modal_body">
                <button
                  type="button"
                  className="btn-close active modal_close_btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <img src={mon} alt="" className="offer_img" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* Tuesday */}
        <div
          className="modal fade modal_body"
          id="tue"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content home_page_modal_content">
              <div className="modal-body home_page_modal_body">
                <button
                  type="button"
                  className="btn-close active modal_close_btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <img src={tue} alt="" className="offer_img" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* wednesday */}
        <div
          className="modal fade modal_body"
          id="wed"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content home_page_modal_content">
              <div className="modal-body home_page_modal_body">
                <button
                  type="button"
                  className="btn-close active modal_close_btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <img src={wed} alt="" className="offer_img" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* Thursday */}
        <div
          className="modal fade modal_body"
          id="thu"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content home_page_modal_content">
              <div className="modal-body home_page_modal_body">
                <button
                  type="button"
                  className="btn-close active modal_close_btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <img src={thu} alt="" className="offer_img" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* Friday */}
        <div
          className="modal fade modal_body"
          id="fri"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content home_page_modal_content">
              <div className="modal-body home_page_modal_body">
                <button
                  type="button"
                  className="btn-close active modal_close_btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <img src={fri} alt="" className="offer_img" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </section>
    </>
  );
};

export default OfferSection;
