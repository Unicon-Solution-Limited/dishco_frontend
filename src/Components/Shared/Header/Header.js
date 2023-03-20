import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../AllContext/CartContext";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import "./Header.css";
import HeaderOffcanvas from "./HeaderOffcanvas";

const Header = () => {
  const [cartData, setCartData] = useContext(CartProvider);
  const { currentUser } = useAuth();

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
            <form action="" className="search_bar_body">
              <input
                type="text"
                name="search"
                placeholder="Search food....."
                className="search_bar"
              />
              <button className="search_button">
                <i className="bi bi-search"></i>
              </button>
            </form>

            {currentUser ? (
              <>
                <Link to="/dashboard" className="auth_login">
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <aside className="auth_links">
                  <Link className="myLinks" to="/login">
                    Login
                  </Link>{" "}
                  /{" "}
                  <Link className="myLinks" to="/signup">
                    Sign Up
                  </Link>
                </aside>
              </>
            )}
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
                loading="lazy"
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
                  arearole="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="/#"
                >
                  Appetizer & Rice <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-content">
                  <li>
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"Appetizer"}`}
                    >
                      Appetizer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"RiceCuisine"}`}
                    >
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
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"DishCoPlatter"}`}
                    >
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
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"MeatBox"}`}
                    >
                      Meat Box
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"RiceBowl"}`}
                    >
                      Rice Bowl
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"PlatterCuisine"}`}
                    >
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
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"IndianCuisines"}`}
                    >
                      Indian Cuisines
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"JapaneseCuisines"}`}
                    >
                      Japanese Cuisines
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"KoreanCuisines"}`}
                    >
                      Korean Cuisines
                    </Link>
                  </li>
                  {/* test */}
                  <li className="navbarItems2 nav_sub_link">
                    <Link
                      to={`/products/${"ChineseCuisines"}`}
                      className="nav_link2"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Chinese Cuisines
                    </Link>
                    <ul className="dropdown-menu dropdown-content-2nd">
                      <li className="nav_sub_link">
                        <Link
                          to={`/products/${"Soup"}`}
                          className="dropdown-items-sub"
                        >
                          Soup
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* test */}
                </ul>
              </li>
              <li className="nav-item navbarItems">
                <Link
                  to={`/products/${"Steak"}`}
                  className="nav-link nav_link"
                  aria-current="page"
                >
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
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"Pizza"}`}
                    >
                      Pizza
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"BurgerSandwich"}`}
                    >
                      Burger and Sandwich
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"FryBasket"}`}
                    >
                      Fry Basket
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"Pasta"}`}
                    >
                      Pasta
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item navbarItems">
                <Link
                  to={`/products/${"Dessert"}`}
                  className="nav-link nav_link"
                >
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
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"PeyalaTea"}`}
                    >
                      Peyala Tea
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"HotDrinks"}`}
                    >
                      Hot Drinks
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"ColdDrinks"}`}
                    >
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
                  {cartData.length}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Offcanvas */}
      <HeaderOffcanvas />
    </>
  );
};

export default Header;
