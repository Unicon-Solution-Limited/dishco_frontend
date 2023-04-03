import React, { useEffect, useState } from "react";
import "./ProfileManagement.css";
import TopbarNav from "./../../Layouts/TopbarNav";
import SidebarNav from "./../../Layouts/SidebarNav";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";
import axios from "axios";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const ViewProfile = () => {
  const [allCustomerOrders, setAllCustomerOrders] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

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

  // calculate the total product cost (all)
  const totalAmount = useMemo(() => {
    return allCustomerOrders.reduce(
      (accumulator, currentValue) =>
        accumulator + (currentValue?.total_amount ?? 0),
      0
    );
  }, [allCustomerOrders]);

  console.log(totalAmount);

  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main className="container view_profile">
            <div className="card mb-3 p-3">
              {profileData.length ? (
                profileData.map((profileDt, i) => (
                  <img
                    key={i}
                    src={profileDt.profileImage}
                    className="card-img-top"
                    alt="User"
                  />
                ))
              ) : (
                <div className="image-circle">
                  <i className="bi bi-person-fill"></i>
                </div>
              )}

              <div className="edit_link">
                <Link to="/editProfile">
                  <i className="bi bi-pencil-square"></i> Edit
                </Link>
              </div>
              <div className="card-body">
                <div>
                  <h5 className="card-title view_profile_name">
                    {currentUser?.displayName}
                  </h5>
                  <p className="card-text view_profile_contact">
                    <span>
                      <i className="bi bi-envelope-fill"></i>{" "}
                      {currentUser?.email}
                    </span>
                  </p>
                </div>

                {(totalAmount <= 4990 && (
                  <>
                    <img
                      src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1679982155/Frontend_images/logo/bzczji4nlplgwwjud8bi.webp"
                      alt="Rank"
                      className="view_profile_rank_img mt-5"
                    />
                  </>
                )) ||
                  (totalAmount <= 29990 && "Silver") ||
                  (totalAmount <= 69990 && "Gold") ||
                  (totalAmount <= 70000 && "Platinum")}

                {/* <img
                  src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1679982155/Frontend_images/logo/bzczji4nlplgwwjud8bi.webp"
                  alt="Rank"
                  className="view_profile_rank_img mt-5"
                />
                <p className="mt-2">
                  <strong>Points:</strong> 1200
                </p> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
