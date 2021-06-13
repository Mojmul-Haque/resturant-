import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";
const PrivateRoute = ({ children, ...rest }) => {
  const user = useSelector((state) => {
    return state.user.userInfo;
  });
  console.log(user);

  const [loggedInUser, setlogggedInUser] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
