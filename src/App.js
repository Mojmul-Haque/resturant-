import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./SCSS/style.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
