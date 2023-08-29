import React from "react";
import SidebarNav from "./Layouts/SidebarNav";
import TopbarNav from "./Layouts/TopbarNav";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext/AuthContext";

const Dashboard = () => {
  const { logout, currentUser } = useAuth();

  //remove dishco token
  const removeDishcoToken = () => {
    localStorage.removeItem("dishco-token");
  };

  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid p-4">
              <section className="dashboard_welcome_page">
                <h1>Welcome to Dashboard!</h1>
                <span className="dashboard-items">
                  <Link to="/">
                    <i className="bi bi-house"></i> Home
                  </Link>
                  <Link to="/profile">
                    <i className="bi bi-gear"></i> Profile
                  </Link>
                  <Link
                    type="button"
                    onClick={() => {
                      logout();
                      removeDishcoToken();
                    }}
                    to="/"
                  >
                    <i onClick={logout} className="bi bi-box-arrow-left"></i>{" "}
                    Logout
                  </Link>
                </span>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
