import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CartProvider } from "../../AllContext/CartContext";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import "./Header.css";
import HeaderOffcanvas from "./HeaderOffcanvas";
import debounce from "lodash/debounce";

const Header = () => {
  const [cartData, setCartData] = useContext(CartProvider);

  const { currentUser } = useAuth();

  const [searchValue, setSearchValue] = useState("");
  const [allFoods, setAllFoods] = useState([]);
  const history = useHistory();
  const [suggestions, setSuggestions] = useState([]); // new state for storing search suggestions

  // function to update search suggestions
  const updateSuggestions = (value) => {
    if (value.length === 0) {
      setSuggestions([]);
      return;
    }
    const regex = new RegExp(`^${value}`, "i");
    const results = allFoods.filter((food) => regex.test(food.name));
    setSuggestions(results.slice(0, 5));
  };

  // debounce the updateSuggestions function
  const delayedUpdateSuggestions = debounce(updateSuggestions, 500);

  //get all food
  useEffect(() => {
    const fetchAllFood = () => {
      axios
        .get("http://localhost:8000/getAllProducts")
        .then((response) => setAllFoods(response?.data))
        .catch((error) => console.log(error));
    };
    fetchAllFood();
  }, []);

  // sendign the daynamic  search value into the browser search bar and also redrict search component
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/Search/${searchValue}`);
  };

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
            <form className="search_bar_body" onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                placeholder="Search food....."
                className="search_bar"
                method="GET"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  delayedUpdateSuggestions(e.target.value);
                }}
                autoComplete="off"
                required
              />
              <button className="search_button" type="submit">
                <i className="bi bi-search"></i>
              </button>

              {suggestions.length > 0 && (
                <div className="suggestions">
                  {suggestions.map((food, f) => (
                    <h6 key={f} onClick={() => setSearchValue(food.name)}>
                      <button type="submit" className="suggestions_btn">
                        {food.name}
                      </button>
                    </h6>
                  ))}
                </div>
              )}
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
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dnz6zg4on/image/upload/v1674363983/Frontend_images/logo/logo_o4uryk.webp"
                alt="DishCo"
                className="site_logo"
                loading="lazy"
              />
            </Link>
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
                  <li>
                    <Link
                      className="dropdown-item nav_sub_link"
                      to={`/products/${"RamenSpecial"}`}
                    >
                      Ramen Special
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
