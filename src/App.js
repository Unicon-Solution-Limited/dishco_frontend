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
import GiftAndRanking from "./Components/Pages/FooterPages/GiftAndRanking";
import TandC from "./Components/Pages/FooterPages/TandC";
import CartContext from "./Components/AllContext/CartContext";
import AllOrdersForAdmin from "./Components/Dashboard/DashboardPage/OrderManagement/AllOrdersForAdmin";
import PrivateRoute from "./Components/Authentication/PrivateRoute/PrivateRoute";
import Success from "./Components/Pages/Checkout/Success";
import EditProduct from "./Components/Dashboard/DashboardPage/ProductManagement/EditProduct";
import CustomerOrder from "./Components/Dashboard/DashboardPage/OrderManagement/CustomerOrders";
import MakeAdmin from "./Components/Dashboard/DashboardPage/MakeAdmin/MakeAdmin";
import Invoice from "./Components/Dashboard/DashboardPage/OrderManagement/Invoice";

function App() {
  return (
    <>
      <CartContext>
        <Router>
          <RouterChangeTop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>

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
            <Route path="/editProduct/:editPdId">
              <EditProduct />
            </Route>
            <Route path="/allOrders">
              <AllOrdersForAdmin />
            </Route>
            <Route path="/MyOrder">
              <CustomerOrder />
            </Route>
            <Route path="/invoice">
              <Invoice />
            </Route>
            {/* Dashboard router end */}

            <Route path="/forgotPassword">
              <ForgotPassword />
            </Route>
            <Route path="/products/:navItem">
              <DisplayProduct />
            </Route>
            <PrivateRoute path="/singleProduct/:viewDetails">
              <SingleProduct />
            </PrivateRoute>

            <PrivateRoute path="/cart">
              <Cart />
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <Checkout />
            </PrivateRoute>
            <Route path="/success/:tran_id">
              <Success />
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
            <Route path="/gift_ranking">
              <GiftAndRanking />
            </Route>
            <Route path="/tc">
              <TandC />
            </Route>
            <Route path="/make_admin">
              <MakeAdmin />
            </Route>
            {/* Not Found Page */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </CartContext>
    </>
  );
}

export default App;
