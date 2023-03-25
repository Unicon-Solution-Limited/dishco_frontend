import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import "./Layouts.css";
import toggler from "./toggler";

const SidebarNav = () => {
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // FIND ADMIN
  useEffect(() => {
    fetch(`http://localhost:8000/findAdmin?email=${currentUser.email}`)
      .then((res) => res.json())
      .then((result) => {
        setIsAdmin(true);
      });
  }, [currentUser?.email]);
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <button className="btn cross_btn" onClick={toggler}>
            <i className="bi bi-x-lg"></i>
          </button>
          <div className="sb-sidenav-menu">
            <div className="nav">
              {isAdmin && (
                <div>
                  <div className="sb-sidenav-menu-heading">
                    Product management{" "}
                  </div>
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
                      <Link
                        className="nav-link collapse_sub_menu"
                        to="/allProduct"
                      >
                        All Products
                      </Link>
                      <Link
                        className="nav-link collapse_sub_menu"
                        to="/createProduct"
                      >
                        Create Products
                      </Link>
                    </nav>
                  </div>
                </div>
              )}
              {/* Product Section end */}

              {isAdmin && (
                <div>
                  <div className="sb-sidenav-menu-heading">
                    Customer Management
                  </div>
                  <Link className="nav-link" to="/cus_list">
                    <span className="collapsed_Menu">Customer List </span>
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="bi bi-chevron-double-right"></i>
                    </div>
                  </Link>
                </div>
              )}
              {/* Discount management start */}
              {isAdmin && (
                <div>
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
                      <Link className="nav-link collapse_sub_menu" to="/">
                        Bronze
                      </Link>
                      <Link
                        className="nav-link collapse_sub_menu"
                        to="/createProduct"
                      >
                        Silver
                      </Link>
                      <Link
                        className="nav-link collapse_sub_menu"
                        to="/createProduct"
                      >
                        Gold
                      </Link>
                      <Link
                        className="nav-link collapse_sub_menu"
                        to="/createProduct"
                      >
                        Platinum
                      </Link>
                    </nav>
                  </div>
                </div>
              )}
              {/* Discount management end */}

              <div className="sb-sidenav-menu-heading">Order management</div>
              {/* Order management start */}
              <span
                className="nav-link collapsed collapsed_Menu"
                data-bs-toggle="collapse"
                data-bs-target="#order"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                Order
                <div className="sb-sidenav-collapse-arrow">
                  <i className="bi bi-chevron-double-down"></i>
                </div>
              </span>
              <div
                className="collapse"
                id="order"
                aria-labelledby="headingThree"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  {isAdmin && (
                    <Link
                      className="nav-link collapse_sub_menu"
                      to="/allOrders"
                    >
                      list of orders
                    </Link>
                  )}
                  <Link className="nav-link collapse_sub_menu" to="/MyOrder">
                    My Order
                  </Link>
                </nav>
              </div>
              {/* Order management end */}
              {/* make admin */}
              {isAdmin && (
                <Link className="nav-link" to="/make_admin">
                  <span className="collapsed_Menu">Make Admin </span>
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="bi bi-chevron-double-right"></i>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SidebarNav;
