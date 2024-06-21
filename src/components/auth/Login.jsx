import React from "react";
import { Button } from "@mui/material";
import { authentication, provider } from "../../firebase";
import { actionTypes } from "../../context/reducer.js";
import { useStateValue } from "../../context/StateProvider.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../../styles/Login.css";

const Login = () => {
  //pull info from the data layer with this hook.
  //dispatch the user into the data layer (the user exist inside of the data layer)
  const [state, dispatch] = useStateValue();
  //once that come back then
  const signIn = () => {
    signInWithPopup(authentication, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        console.log(result.user);
        //get the name, profile img.
        const userName = result.user.displayName;
        const profileImg = result.user.photoURL;

        //store the informations when the user login.
        localStorage.setItem("Name", userName);
        localStorage.setItem("Image", profileImg);
        // Check if photoURL is present

        //dispatch the type and parsing the user as whatever i got back as a response the user object. (push the user inside the data layer)
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/120px-2021_Facebook_icon.svg.png"
          alt="facebook_logo"
          style={{ cursor: "pointer" }}
        />

        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="text"
        />
      </div>

      <Button type="submit" className="button" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
