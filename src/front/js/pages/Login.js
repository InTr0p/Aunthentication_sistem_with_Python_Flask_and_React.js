import React, {useContext, useState} from "react";
import {Context} from "../store/appContext";
import {useHistory} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";

export const Login = () => {
  const {store, actions} = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const token = sessionStorage.getItem("token")

  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />);

  const handelToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(FaEye);
    } else {
      setPasswordType("password");
      setPasswordIcon(FaEyeSlash);
    }
  };

  console.log("This Is Your Token: ", store.token);
  const handleClick = () => {
    actions.Login(email, password);
  };

  // if (store.token && store.token != "" && store.token != undefined)
  //   history.push("/");

  return (
    <div className="text-center mt-5">
      {store.token && store.token != "" && store.token != undefined ? (
        "You Are Logged In With This Token: " + store.token
      ) : (
        <div>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Enter Your Email"
            id="typeEmailX"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type={passwordType}
            placeholder="Your Current Password "
            id="typePasswordX"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={handelToggle}
          >
            {passwordIcon}
          </span>
          <button
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};