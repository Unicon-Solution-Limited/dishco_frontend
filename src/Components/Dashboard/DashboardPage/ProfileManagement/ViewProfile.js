import React, { useEffect, useState } from "react";
import "./ProfileManagement.css";
import TopbarNav from "./../../Layouts/TopbarNav";
import SidebarNav from "./../../Layouts/SidebarNav";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";
import axios from "axios";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const ViewProfile = () => {
  const [allCustomerOrders, setAllCustomerOrders] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [rankLogo, setRankLogo] = useState("");

  //getting the customer order according the email
  useEffect(() => {
    const fetchCustomerOrders = async () => {
      if (currentUser) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/getSingleCustomerOrderShipped?email=${currentUser.email}`
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
            `${process.env.REACT_APP_BACKEND_URL}/getProfileImage?profileEmail=${currentUser.email}`
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

  //condition set for logo showing
  useEffect(() => {
    if (totalAmount <= 4990) {
      setRankLogo(
        "https://res.cloudinary.com/dnz6zg4on/image/upload/v1679982155/Frontend_images/logo/caj3pktvujd45qvbjm61.webp"
      );
    } else if (totalAmount <= 29990) {
      setRankLogo(
        "https://res.cloudinary.com/dnz6zg4on/image/upload/v1679982155/Frontend_images/logo/ezbuvfohme2cdiiphgiu.webp"
      );
    } else if (totalAmount <= 69990) {
      setRankLogo(
        "https://res.cloudinary.com/dnz6zg4on/image/upload/v1679982155/Frontend_images/logo/bzczji4nlplgwwjud8bi.webp"
      );
    } else {
      setRankLogo(
        "https://res.cloudinary.com/dnz6zg4on/image/upload/v1680676068/Frontend_images/logo/ikwdurwsltnd3zl1il3d.webp"
      );
    }
  }, [totalAmount]);

  //calculation for rank range
  const totalPoint = totalAmount / 10;
  const percentize = totalPoint * 0.0143;

  const marks = [
    {
      value: 0,
      // label: "Bronze",
    },
    {
      value: 7.15,
      label: "Silver",
    },
    {
      value: 43,
      label: "Gold",
    },
    {
      value: 100,
      label: "Platinum",
    },
  ];

  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main className="container view_profile">
            <div className="mb-3 p-3 profile_card_body">
              <div className="edit_link">
                <Link to="/editProfile">
                  <i className="bi bi-pencil-square"></i> Edit
                </Link>
              </div>
              <div className="card-body profile_card">
                <div className="customer_info">
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
                  <h5 className="card-title view_profile_name">
                    {currentUser?.displayName}
                  </h5>
                  <p className="card-text view_profile_contact">
                    <i className="bi bi-envelope-fill"> {currentUser?.email}</i>
                  </p>
                  <p className="mt-2">
                    <strong>In Total Earned Points:</strong> {totalAmount / 10}
                  </p>
                </div>

                <div>
                  <img
                    src={rankLogo}
                    alt="Rank"
                    className="view_profile_rank_img"
                  />

                  <br />
                  <br />
                  <br />
                  <Box className="slide_box">
                    {totalAmount && percentize && (
                      <Slider
                        defaultValue={percentize}
                        marks={marks}
                        disabled
                      />
                    )}
                  </Box>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
