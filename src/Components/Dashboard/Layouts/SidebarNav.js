import React from "react";
import { Link } from "react-router-dom";

const SidebarNav = () => {
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Lawyer Maintenance </div>
              <Link className="nav-link" to="/createProduct">
                <div className="sb-nav-link-icon">
                  <i className="bi bi-person-badge"></i>
                </div>
                Create Products
              </Link>
              <Link className="nav-link" to="/rq">
                <div className="sb-nav-link-icon">
                  <i className="bi bi-people"></i>
                </div>
                Profile Request
              </Link>
              <div className="sb-sidenav-menu-heading">
                Company Profile Interface
              </div>
              <Link className="nav-link" to="/about_edit">
                <div className="sb-nav-link-icon">
                  <i className="bi bi-person-badge"></i>
                </div>
                About Us
              </Link>
              <Link className="nav-link" to="/career_edit">
                <div className="sb-nav-link-icon">
                  <i className="bi bi-person-badge"></i>
                </div>
                Career
              </Link>
              <Link className="nav-link" to="/contact_edit">
                <div className="sb-nav-link-icon">
                  <i className="bi bi-person-badge"></i>
                </div>
                Contact Us
              </Link>
              <Link className="nav-link" to="/mission_edit">
                <div className="sb-nav-link-icon">
                  <i className="bi bi-person-badge"></i>
                </div>
                Mission And Vision
              </Link>
              <Link className="nav-link" to="/newsEventEdit_edit">
                <div className="sb-nav-link-icon">
                  <i className="bi bi-person-badge"></i>
                </div>
                News And Events
              </Link>
              <Link className="nav-link" to="/team_edit">
                <div className="sb-nav-link-icon">
                  <i className="bi bi-person-badge"></i>
                </div>
                Teams
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SidebarNav;
