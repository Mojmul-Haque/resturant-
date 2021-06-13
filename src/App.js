import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./SCSS/style.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { createContext, useState } from "react";
// import { Provider } from "react-redux";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setlogggedInUser] = useState({
    name: "",
    email: "",
    image: "",
    signIn: false,
  });
  return (
    <UserContext.Provider value={[loggedInUser, setlogggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
