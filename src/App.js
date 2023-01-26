import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Shared/NotFound/NotFound";
import RouterChangeTop from "./Components/Shared/RouterChangeTop/RouterChangeTop";
import Login from "./Components/Authentication/Login/Login";
import Signup from "./Components/Authentication/Signup/Signup";
import ForgotPassword from "./Components/Authentication/ForgotPassword/ForgotPassword";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <RouterChangeTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
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

          <Route path="/forgotPassword">
            <ForgotPassword />
          </Route>

          {/* Not Found Page */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
