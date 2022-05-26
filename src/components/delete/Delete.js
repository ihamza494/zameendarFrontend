import React, { Component, useState } from "react";
import { BsFillEnvelopeFill, BsLockFill } from "react-icons/bs";

import { Link, useHistory } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Sidebar from "../Sidebar/SideBar2";
import axios from "axios";
import "../Add/Add.css";

function Delete() {
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [DateJoining, setJoiningDate] = useState("");

  const history = useHistory();
  const token = localStorage.getItem("token");

  function submit() {
    console.log(cnic);
    if (name.trim() !== "" && cnic.trim() !== "") {
      axios
        .post(
          "http://localhost:4000/farmer/delete",
          {
            name: name,
            cnic: cnic,
          },
          {
            headers: {
              "x-auth-token": `${token}`,
            },
          }
        )
        .then(function (response) {
          console.log(response);
          if (response.data !== "Wrong Password") {
            console.log(response.data);
            alert("Deleted!");
            history.push("/farmer");
          } else {
            alert("you enter Wrong Information");
          }
        })
        .catch(function (error) {
          alert("some wrong");
        });
    }
  }

  return (
    <>
      <NavigationBar />
      <Sidebar />
      <h4 style={{ marginLeft: "6.5rem" }}>Delete Farmers Details</h4>
      return (
      <div>
        <div className={"loginFormContainer"}>
          <div className={"loginForm"}>
            <h3 style={{ color: "#1d912b", fontStyle: "italic" }}>
              Delete Farmers Details
            </h3>

            <div className={"inputContainer"}>
              <BsFillEnvelopeFill
                style={{ height: 20, width: 20, color: "#1d912b" }}
              />
              <input
                className={"input"}
                type={"text"}
                placeholder={"Farmer Name"}
                name={"name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={"inputContainer"}>
              <BsFillEnvelopeFill
                style={{ height: 20, width: 20, color: "#1d912b" }}
              />
              <input
                className={"input"}
                type={"text"}
                placeholder={"CNIC"}
                name={"cnic"}
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
              />
            </div>

            <button className={"loginButton"} type="submit" onClick={submit}>
              Delete
            </button>
          </div>
          <div className={"loginImage"}></div>
        </div>
      </div>
      );
    </>
  );
}
export default Delete;
