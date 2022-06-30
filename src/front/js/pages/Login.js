import React, {useContext, useState} from "react";
import {Context} from "../store/appContext";
import {useHistory} from "react-router-dom";
// import {FaEye, FaEyeSlash} from "react-icons/fa";

export const Login = () => {
  const {store, actions} = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // const [passwordType, setPasswordType] = useState("password");
  // const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />);

  // const handelToggle = () => {
  //   if (passwordType === "password") {
  //     setPasswordType("text");
  //     // setPasswordIcon(FaEye);
  //   } else {
  //     setPasswordType("password");
  //     // setPasswordIcon(FaEyeSlash);
  //   }
  // };

  const token = sessionStorage.getItem("token");
  console.log("This Is Your Token: ",token);
  const handleClick = () => {
    actions.Login(email, password);
  };

  // if (token && token != "" && token != undefined)
  //   history.push("/");

  return (
    <div className="text-center mt-5">
    <h1>Login</h1>
      {token && token != "" && token !=undefined ? (
        "You Are Logged In With This Token:" + token) : (
        <div>
          <input
            type="text"
            placeholder="email"
            // id="typeEmailX"
             value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            // type={passwordType}
            placeholder="password "
            // id="typePasswordX"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          {/* <span onClick={handelToggle}>{passwordIcon}</span> */}
          <button onClick={handleClick}>Login</button>
        </div>
      )}
    </div>
  );
};
