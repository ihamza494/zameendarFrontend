import React, { Component, useState } from "react";
import { BsFillEnvelopeFill, BsLockFill } from "react-icons/bs";
import "../Login/login.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../images/logo.jpeg";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const history = useHistory();

  function submit(event) {
    console.log(email, password);

    if (email.trim() !== "" && password.trim() !== "") {
      axios
        .post("http://localhost:4000/admin/Login", {
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          if (response.data !== "Wrong Password") {
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("email", response.data.email);

            history.push("/dashboard");
          } else {
            alert("you enter Wrong password");
          }
        })
        .catch(function (error) {
          alert("user NOT Found");
          history.push("/signuppage");
        });
    }
    // history.push()
  }

  return (
    <div>
      <div className={"loginMainContainer"}>
        <div className={"loginFormContainer"}>
          <div className={"loginForm"}>
            <h1 style={{ color: "#1d912b", fontStyle: "italic" }}>Login</h1>

            <div className={"inputContainer"}>
              <BsFillEnvelopeFill
                style={{ height: 20, width: 20, color: "#1d912b" }}
              />
              <input
                className={"input"}
                type={"text"}
                placeholder={"Email"}
                name={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={"inputContainer1"}>
              <BsLockFill style={{ height: 20, width: 20, color: "#1d912b" }} />
              <input
                className={"input1"}
                type={"password"}
                placeholder={"Password"}
                name={"password"}
                value={password}
                onChange={(e) => setPasword(e.target.value)}
              />
            </div>

            <div className={"forgetPassword"}>
              <p style={{ fontStyle: "italic" }}>Forget Password?</p>
            </div>

            <button className={"loginButton"} type="submit" onClick={submit}>
              Login
            </button>

            <div className={"newUser"}>
              <p style={{ fontStyle: "italic" }}>Don't have an account? </p>
              <Link
                to="/signuppage"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className={"signup"}>Sign Up</p>
              </Link>
            </div>
          </div>
          <div className={"loginImage"}>
            <div className={"logoImage"}>
              <img src={logo} width={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
