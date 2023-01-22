import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header_main_body">
      {/* TOP Header */}
      <div className="container">
        <section className="upper_header">
          <aside className="contact_number">
            <span>
              <i class="bi bi-telephone-fill"></i> +880 1810-098389
            </span>
            <span>
              <i class="bi bi-envelope-fill"></i> dishco@uniconbd.com
            </span>
          </aside>
          <aside className="auth_links">
            <Link className="myLinks">Login</Link> /{" "}
            <Link className="myLinks">Sign Up</Link>
          </aside>
        </section>
      </div>
      <div className="header-separater"></div>
      {/* Bottom Header */}
      <div className="container">
        <section className="lower_header">
          <nav class="navbar navbar-dark sticky-top navbar-expand-lg">
            <div class="container-fluid">
              <div className="d-flex">
                <a href="/">
                  <img
                    src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1674363983/Frontend_images/logo/logo_o4uryk.webp"
                    alt="DishCo"
                    className="site_logo"
                  />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon navToggleBtn"></span>
                </button>
              </div>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-lg-0 navbarItems_main_div">
                  <li class="nav-item dropdown navbarItems">
                    <span
                      class="nav-link dropdown-toggle nav_link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Appetizer & Rice
                    </span>
                    <ul class="dropdown-menu dropdown-content">
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          Appetizer
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          Rice Cuisine
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown navbarItems">
                    <span
                      class="nav-link dropdown-toggle nav_link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Platter
                    </span>
                    <ul class="dropdown-menu dropdown-content">
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          DishCo Platter
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown navbarItems">
                    <span
                      class="nav-link dropdown-toggle nav_link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Cheapo Box
                    </span>
                    <ul class="dropdown-menu dropdown-content">
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          Meat Box
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          Rice Bowl
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          Platter Cuisine
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown navbarItems">
                    <span
                      class="nav-link dropdown-toggle nav_link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Cuisines
                    </span>
                    <ul class="dropdown-menu dropdown-content">
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          Indian Cuisines
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          japanese Cuisines
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          Korean Cuisines
                        </Link>
                      </li>
                      {/* test */}
                      <li class="navbarItems2 nav_sub_link">
                        <Link
                          to="#"
                          class="nav_link2"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Chinese Cuisines
                        </Link>
                        <ul class="dropdown-menu dropdown-content-2nd">
                          <li className="nav_sub_link">
                            <Link to="#" className="dropdown-items-sub">
                              Soup
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* test */}
                    </ul>
                  </li>
                  <li class="nav-item navbarItems">
                    <span class="nav-link nav_link" aria-current="page">
                      Steak
                    </span>
                  </li>
                  <li class="nav-item dropdown navbarItems">
                    <span
                      class="nav-link dropdown-toggle nav_link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Fast Food
                    </span>
                    <ul class="dropdown-menu dropdown-content">
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          Pizza
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          Burger and Sandwich
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          Fry Basket
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          Pasta
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item navbarItems">
                    <span class="nav-link nav_link">Dessert</span>
                  </li>
                  <li class="nav-item dropdown navbarItems">
                    <span
                      class="nav-link dropdown-toggle nav_link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Drinks
                    </span>
                    <ul class="dropdown-menu dropdown-content">
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          Peyala Tea
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          Hot Drinks
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item nav_sub_link" to="#">
                          Cold Drinks
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <button class="btn" type="submit">
                    <i class="bi bi-cart-fill cartLogo"></i>
                    <span class="badge badge-warning" id="CartCount">
                      {" "}
                      7{" "}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Header;
