import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";
import { useHistory } from  "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {DiGithubFull} from "react-icons/di";
import "../../styles/Login.css";

export const Login = () => {
  const {store, actions} = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleClick = () => {
  actions.Login(email, password).then(()  => {
  history.push("/")})};

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

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5  shadow p-1 mb-1 bg-info rounded">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase text-info text-decoration-underline">
                    Login
                  </h2>
                  <p className="text-info mb-5">
                    Please enter your email and password!
                  </p>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      id="typeEmailX"
                      className="form-control form-control-lg bg-dark text-info"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <label
                      className="form-label text-danger"
                      htmlFor="typeEmailX"
                    >
                      Email
                      <br />
                      (InTr0p@gmail.com)
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type={passwordType}
                      placeholder="Your Current Password "
                      id="typePasswordX"
                      className="form-control form-control-lg bg-dark text-info position-relative "
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <span
                      className="icons-span position-absolute passwordType"
                      onClick={handelToggle}
                    >
                      {passwordIcon}
                    </span>
                    <label
                      className="form-label text-danger"
                      htmlFor="typePasswordX"
                    >
                      Password
                      <br />
                      (1234)
                    </label>
                  </div>
                  <button
                    className="btn Login_btn btn-outline-info btn-lg px-5"

                    onClick={handleClick}
                  >
                    Login
                  </button>
                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a
                      href="https://github.com/InTr0p"
                      target="_blank"
                      className="text-info DiGithubFull"
                    >
                      <DiGithubFull />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};