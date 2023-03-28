import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./../../Authentication/AuthContext/AuthContext";
import toggler from "./toggler";

const TopbarNav = () => {
  const { logout, currentUser } = useAuth();

  return (
    <>
      <nav className="sb-topnav navbar-d navbar-expand navbar-dark bg-dark top_nav">
        <div>
          <Link className="navbar-brand ps-3" to="/admin-law">
            Admin Dashboard
          </Link>
          <button
            className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
            onClick={toggler}
          >
            <i className="bi bi-list"></i>
          </button>
        </div>

        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              to="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {currentUser ? (
                <span className="userName_login">
                  {currentUser.displayName.slice(0, 1)}
                </span>
              ) : (
                <i className="bi bi-person"></i>
              )}
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link className="dropdown-item" to="/">
                  <i className="bi bi-house"></i> Home
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/profile">
                  <i className="bi bi-gear"></i> Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li onClick={logout} className="logout_dropdown_btn">
                <div className="dropdown-item">
                  <i onClick={logout} className="bi bi-box-arrow-left"></i>{" "}
                  Logout
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopbarNav;
