import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./SCSS/style.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import UserOrderList from "./components/UserOrderList/UserOrderList";
import AddProduct from "./components/AddProduct/AddProduct";
import AddReview from "./components/AddReview/AddReview";
import DemoDashBoard from "./pages/DemoDashBoard";
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
