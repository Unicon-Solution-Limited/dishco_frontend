import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Shared/NotFound/NotFound";
import RouterChangeTop from "./Components/Shared/RouterChangeTop/RouterChangeTop";

function App() {
  return (
    <>
      <Router>
        <RouterChangeTop />
        <Switch>
          <Route exact path="/">
            <Home />
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
