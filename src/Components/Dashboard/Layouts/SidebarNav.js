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
              <div className="sb-sidenav-menu-heading">Product management </div>
              {/* Product Section start */}
              <span
                className="nav-link collapsed collapsed_Menu"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                Products
                <div className="sb-sidenav-collapse-arrow">
                  <i className="bi bi-chevron-double-down"></i>
                </div>
              </span>
              <div
                className="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link" to="/">
                    <div className="sb-nav-link-icon">
                      <i className="bi bi-bag-plus-fill"></i>
                    </div>
                    All Products
                  </Link>
                  <Link className="nav-link" to="/createProduct">
                    <div className="sb-nav-link-icon">
                      <i className="bi bi-bag-plus-fill"></i>
                    </div>
                    Create Products
                  </Link>
                </nav>
              </div>
              {/* Product Section end */}

              <div className="sb-sidenav-menu-heading">Customer Management</div>
              <Link className="nav-link" to="/about_edit">
                <span className="collapsed_Menu">Customer List </span>
                <div className="sb-sidenav-collapse-arrow">
                  <i className="bi bi-chevron-double-right"></i>
                </div>
              </Link>
              {/* Discount management start */}
              <span
                className="nav-link collapsed collapsed_Menu"
                data-bs-toggle="collapse"
                data-bs-target="#discount"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                Customer List per Range
                <div className="sb-sidenav-collapse-arrow">
                  <i className="bi bi-chevron-double-down"></i>
                </div>
              </span>
              <div
                className="collapse"
                id="discount"
                aria-labelledby="headingTwo"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link" to="/">
                    <div className="sb-nav-link-icon">
                      <i className="bi bi-bag-plus-fill"></i>
                    </div>
                    Bronze
                  </Link>
                  <Link className="nav-link" to="/createProduct">
                    <div className="sb-nav-link-icon">
                      <i className="bi bi-bag-plus-fill"></i>
                    </div>
                    Silver
                  </Link>
                  <Link className="nav-link" to="/createProduct">
                    <div className="sb-nav-link-icon">
                      <i className="bi bi-bag-plus-fill"></i>
                    </div>
                    Gold
                  </Link>
                  <Link className="nav-link" to="/createProduct">
                    <div className="sb-nav-link-icon">
                      <i className="bi bi-bag-plus-fill"></i>
                    </div>
                    Platinum
                  </Link>
                </nav>
              </div>
              {/* Discount management end */}

              <div className="sb-sidenav-menu-heading">Order management</div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SidebarNav;
