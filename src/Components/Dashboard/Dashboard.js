import React from "react";
import SidebarNav from "./Layouts/SidebarNav";
import TopbarNav from "./Layouts/TopbarNav";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid p-4">
              <section className="dashboard_welcome_page">
                <h1>Welcome to DishCo Admin Dashboard!</h1>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
