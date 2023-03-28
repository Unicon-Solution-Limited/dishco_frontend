import React from "react";
import "./ProfileManagement.css";
import TopbarNav from "./../../Layouts/TopbarNav";
import SidebarNav from "./../../Layouts/SidebarNav";

const ViewProfile = () => {
  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main className="container view_profile">
            <div className="card mb-3 p-3">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1674642000/Frontend_images/Background_images/imrs0pmkjarmctevxguv.webp"
                className="card-img-top"
                alt="User"
              />
              <div className="card-body">
                <h5 className="card-title view_profile_name">
                  md. moinul hossain
                </h5>
                <p className="card-text view_profile_contact">
                  <span>
                    <i className="bi bi-telephone-fill"></i> +88 01681894386
                  </span>
                  <span>
                    <i className="bi bi-envelope-fill"></i>{" "}
                    mmoinulh100@gmail.com
                  </span>
                </p>
                <p>
                  Road# 8, House# 17, C-Block, Baitul aman Housing, Mohammadpur.
                </p>

                <img
                  src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1679982155/Frontend_images/logo/bzczji4nlplgwwjud8bi.webp"
                  alt="Rank"
                  className="view_profile_rank_img mt-5"
                />
                <p className="mt-2">
                  <strong>Points:</strong> 1200
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
