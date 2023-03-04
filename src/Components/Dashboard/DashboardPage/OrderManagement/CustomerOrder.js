import React from "react";
import "./OrderManagement.css";
import TopbarNav from "./../../Layouts/TopbarNav";
import SidebarNav from "./../../Layouts/SidebarNav";

const CustomerOrder = () => {
  return (
    <>
      <TopbarNav />
      <div id="layoutSidenav">
        <SidebarNav />
        <div id="layoutSidenav_content">
          <main>MY ORDER</main>
        </div>
      </div>
    </>
  );
};

export default CustomerOrder;
