import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Shared/NotFound/NotFound";
import RouterChangeTop from "./Components/Shared/RouterChangeTop/RouterChangeTop";
import Login from "./Components/Authentication/Login/Login";
import Signup from "./Components/Authentication/Signup/Signup";
import ForgotPassword from "./Components/Authentication/ForgotPassword/ForgotPassword";
import Dashboard from "./Components/Dashboard/Dashboard";
import CreateProduct from "./Components/Dashboard/DashboardPage/CreateProduct/CreateProduct";
import DisplayProduct from "./Components/DisplayProduct/DisplayProduct";
import SingleProduct from "./Components/DisplayProduct/SingleProduct/SingleProduct";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

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

          <Route path="/createProduct">
            <CreateProduct />
          </Route>

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
