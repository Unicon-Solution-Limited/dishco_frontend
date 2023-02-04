import React from "react";
import TopbarNav from "./Layouts/TopbarNav/TopbarNav";
import SidebarNav from "./Layouts/SidebarNav/SidebarNav";

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
                <div>Welcome to Lawyer Profile Admin Dashboard!</div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
