import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const testImg =
    "https://res.cloudinary.com/dnz6zg4on/image/upload/v1674643571/Frontend_images/Background_images/ah3nx1cd824n7wr2vx4n.webp";
  return (
    <>
      {/* TOP Header */}
      <nav className="header_main_body">
        <div className="container">
          <section className="upper_header">
            <aside className="contact_number">
              <span>
                <i className="bi bi-telephone-fill"></i> +880 1810-098389
              </span>
              <span>
                <i className="bi bi-envelope-fill"></i> dishco@uniconbd.com
              </span>
            </aside>
            <aside className="auth_links">
              <Link className="myLinks" to="/login">
                Login
              </Link>{" "}
              /{" "}
              <Link className="myLinks" to="/signup">
                Sign Up
              </Link>
            </aside>
          </section>
        </div>
      </nav>
      <div className="header-separater"></div>
      {/* Bottom Header */}
      <nav className="navbar navbar-dark navbar-expand-lg sticky-top header_main_body">
        <div className="container lower_header">
          <div className="logo_bar">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1674363983/Frontend_images/logo/logo_o4uryk.webp"
                alt="DishCo"
                className="site_logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon navToggleBtn"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0 navbarItems_main_div">
              <li className="nav-item dropdown navbarItems">
                <a
                  className="nav-link dropdown-toggle nav_link"
                  AreaRole="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="/#"
                >
                  Appetizer & Rice <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-content">
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Appetizer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Rice Cuisine
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown navbarItems">
                <span
                  className="nav-link dropdown-toggle nav_link"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Platter <i className="bi bi-chevron-down"></i>
                </span>
                <ul className="dropdown-menu dropdown-content">
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      DishCo Platter
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown navbarItems">
                <span
                  className="nav-link dropdown-toggle nav_link"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cheapo Box <i className="bi bi-chevron-down"></i>
                </span>
                <ul className="dropdown-menu dropdown-content">
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Meat Box
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Rice Bowl
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Platter Cuisine
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown navbarItems">
                <span
                  className="nav-link dropdown-toggle nav_link"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cuisines <i className="bi bi-chevron-down"></i>
                </span>
                <ul className="dropdown-menu dropdown-content">
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Indian Cuisines
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Japanese Cuisines
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Korean Cuisines
                    </Link>
                  </li>
                  {/* test */}
                  <li className="navbarItems2 nav_sub_link">
                    <Link
                      to="#"
                      className="nav_link2"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Chinese Cuisines
                    </Link>
                    <ul className="dropdown-menu dropdown-content-2nd">
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
              <li className="nav-item navbarItems">
                <Link to="/" className="nav-link nav_link" aria-current="page">
                  Steak
                </Link>
              </li>
              <li className="nav-item dropdown navbarItems">
                <span
                  className="nav-link dropdown-toggle nav_link"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Fast Food <i className="bi bi-chevron-down"></i>
                </span>
                <ul className="dropdown-menu dropdown-content">
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Pizza
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Burger and Sandwich
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Fry Basket
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Pasta
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item navbarItems">
                <Link to="/" className="nav-link nav_link">
                  Dessert
                </Link>
              </li>
              <li className="nav-item dropdown navbarItems">
                <span
                  className="nav-link dropdown-toggle nav_link"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Drinks <i className="bi bi-chevron-down"></i>
                </span>
                <ul className="dropdown-menu dropdown-content">
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Peyala Tea
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Hot Drinks
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav_sub_link" to="#">
                      Cold Drinks
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div
              className="d-flex"
              role="search"
              data-bs-toggle="offcanvas"
              data-bs-target="#cart"
              aria-controls="cart"
            >
              <button className="btn" type="submit">
                <i className="bi bi-cart-fill cartLogo"></i>
                <span className="badge badge-warning" id="CartCount">
                  {" "}
                  7{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Offcanvas */}

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="cart"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Your Cart Items
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvas_card_single_item">
            <img src={testImg} alt="" className="offcanvas_cart_img" />
            <span>
              <p className="offcanvas_cart_product_name">
                DishCo Special Ramen Items
              </p>
              <p className="offcanvas_cart_price_qnt">
                <span>2</span>x <span>350 tk.</span>
                <span>= 700 tk.</span>
              </p>
            </span>
            <span className="offcanvas_cancellation">
              <button className="btn">
                <i className="bi bi-x-circle"></i>
              </button>
            </span>
          </div>
          <div className="offcanvas_cart_footer">
            <h4>Subtotal: 1030 Tk.</h4>
            <span className="offcanvas_cart_buttons">
              <Link to="/" className="MyBtn offcanvas_cart_button">
                View Cart
              </Link>
              <Link to="/" className="MyBtn offcanvas_cart_button">
                Checkout
              </Link>
            </span>
          </div>
        </div>
      </div>
      {/* Offcanvas */}
    </>
  );
};

export default Header;
