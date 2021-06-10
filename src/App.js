import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./SCSS/style.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import UserOrderList from "./components/UserOrderList/UserOrderList";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashaboard/all-orders" component={UserOrderList} />
      </Switch>
    </Router>
  );
}

export default App;
