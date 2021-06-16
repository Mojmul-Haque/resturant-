import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { firebaseItial, googleLogin } from "../../firebase/firebase";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import { loginUser } from "../../Redux/Action/authAciton";

const Login = () => {
  const init = firebaseItial;
  const dispatch = useDispatch();
  const [loggedInUser, setlogggedInUser] = useContext(UserContext);
  const googleSignIn = () => {
    googleLogin().then((res) => {
      console.log(res);
      const newUserInfo = {
        name: res.displayName,
        email: res.email,
        image: res.photoURL,
        signIn: true,
      };
      dispatch(loginUser(newUserInfo));
      history.replace(from);
    });
  };
  console.log(loggedInUser);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  return (
    <div className="my-4 text-center">
      <button onClick={googleSignIn} className="btn-success btn px-5">
        Google Login{" "}
      </button>
    </div>
  );
};

export default Login;
