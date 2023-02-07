import React from "react";
import { Link } from "react-router-dom";
import "./Layouts.css";

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
              <div className="sb-sidenav-menu-heading">
                Product Maintenance{" "}
              </div>
              {/* Product Section start */}
              <span
                class="nav-link collapsed collapsed_Menu"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <div class="sb-nav-link-icon">
                  <i class="fas fa-columns"></i>
                </div>
                <i class="bi bi-box2"> Products</i>
                <div class="sb-sidenav-collapse-arrow">
                  <i class="bi bi-chevron-double-down"></i>
                </div>
              </span>
              <div
                class="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav class="sb-sidenav-menu-nested nav">
                  <Link className="nav-link" to="/createProduct">
                    <div className="sb-nav-link-icon">
                      <i className="bi bi-person-badge"></i>
                    </div>
                    Create Products
                  </Link>
                  <a class="nav-link" href="layout-sidenav-light.html">
                    Light Sidenav
                  </a>
                </nav>
              </div>
              {/* Product Section end */}

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
