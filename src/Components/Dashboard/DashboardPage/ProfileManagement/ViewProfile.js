import React, { useEffect, useState } from "react";
import "./ProfileManagement.css";
import TopbarNav from "./../../Layouts/TopbarNav";
import SidebarNav from "./../../Layouts/SidebarNav";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";
import axios from "axios";

const ViewProfile = () => {
  const [allCustomerOrders, setAllCustomerOrders] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [image, setImage] = useState();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  //seeting the image in the backend / update
  const handleChange = async (event) => {
    setLoading(true);
    const imageFile = event.target.files[0];
    const data = new FormData();
    data.append("file", imageFile);
    // your folder name
    data.append("upload_preset", "dishcofood");

    try {
      const result = await axios.post(
        // aykhne [Your Cloudinary Cloud Name] baki link thik thak thakbe
        "https://api.cloudinary.com/v1_1/dnz6zg4on/upload",
        data
      );
      setImage(result.data.url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //getting the customer order according the email
  useEffect(() => {
    const fetchCustomerOrders = async () => {
      if (currentUser) {
        try {
          const response = await axios.get(
            `http://localhost:8000/getCustomerOrders?email=${currentUser.email}`
          );
          setAllCustomerOrders(response?.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchCustomerOrders();
  }, [currentUser]);

  //get profile image according to the email
  useEffect(() => {
    const fetchCustomerOrders = async () => {
      if (currentUser) {
        try {
          const response = await axios.get(
            `http://localhost:8000/getProfileImage?profileEmail=${currentUser.email}`
          );
          setProfileData(response?.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchCustomerOrders();
  }, [currentUser]);

  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main className="container view_profile">
            <div className="card mb-3 p-3">
              {profileData.length == "" ? (
                <div className="image-upload-circle">
                  <label htmlFor="image-upload" className="image-upload-label">
                    {image ? (
                      <img
                        src={image}
                        alt="uploaded profile"
                        className="uploaded-image"
                      />
                    ) : (
                      <div className="placeholder-image">
                        <i className="bi bi-cloud-arrow-up-fill upload-icon"></i>
                      </div>
                    )}
                  </label>

                  <input
                    id="image-upload"
                    className="card-img-top"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    required
                  />
                </div>
              ) : (
                profileData.map((profileDt, i) => (
                  <img
                    key={i}
                    src={profileDt.profileImage}
                    className="card-img-top"
                    alt="User"
                  />
                ))
              )}

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
