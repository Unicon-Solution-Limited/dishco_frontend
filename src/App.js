import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Shared/NotFound/NotFound";
import RouterChangeTop from "./Components/Shared/RouterChangeTop/RouterChangeTop";
import Login from "./Components/Authentication/Login/Login";
import Signup from "./Components/Authentication/Signup/Signup";
import ForgotPassword from "./Components/Authentication/ForgotPassword/ForgotPassword";
// ************** Dashboard router start
import Dashboard from "./Components/Dashboard/Dashboard";
import CreateProduct from "./Components/Dashboard/DashboardPage/ProductManagement/CreateProduct";
import AllProduct from "./Components/Dashboard/DashboardPage/ProductManagement/AllProduct";
// ************** Dashboard router end
import DisplayProduct from "./Components/DisplayProduct/DisplayProduct";
import SingleProduct from "./Components/DisplayProduct/SingleProduct/SingleProduct";
import Cart from "./Components/Pages/Cart/Cart";
import Checkout from "./Components/Pages/Checkout/Checkout";
import AboutUs from "./Components/Pages/FooterPages/AboutUs";
import ContactUs from "./Components/Pages/FooterPages/ContactUs";
import MenuCard from "./Components/Pages/FooterPages/MenuCard";
import PrivacyPolicy from "./Components/Pages/FooterPages/PrivacyPolicy";
import Returnpolicy from "./Components/Pages/FooterPages/Returnpolicy";
import Shop from "./Components/Pages/FooterPages/Shop";
import TandC from "./Components/Pages/FooterPages/TandC";

function App() {
  return (
    <>
      <Router>
        <RouterChangeTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          {/* Dashboard router start */}
          <Route path="/createProduct">
            <CreateProduct />
          </Route>
          <Route path="/allProduct">
            <AllProduct />
          </Route>
          {/* Dashboard router end */}

          <Route path="/forgotPassword">
            <ForgotPassword />
          </Route>
          <Route path="/products/:navItem">
            <DisplayProduct />
          </Route>
          <Route path="/singleProduct/:viewDetails">
            <SingleProduct />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* Footer Pages Router */}
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/menus">
            <MenuCard />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/return-policy">
            <Returnpolicy />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/t_and_c">
            <TandC />
          </Route>
          {/* Not Found Page */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
