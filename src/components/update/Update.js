import React, { Component, useState } from "react";
import { BsFillEnvelopeFill, BsLockFill } from "react-icons/bs";

import { Link, useHistory } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Sidebar from "../Sidebar/SideBar2";
import axios from "axios";
import "../Add/Add.css";

function Update() {
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [DateJoining, setJoiningDate] = useState("");

  const history = useHistory();
  const token = localStorage.getItem("token");

  function submit(event) {
    alert("clicked");
    event.preventDefault();
    if (name.trim() !== "" && cnic.trim() !== "") {
      axios
        .post(
          "http://localhost:4000/farmer/update",
          {
            name: name,
            cnic: cnic,
            phone: number,
            age: age,
            date: DateJoining,
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
            alert("Added!");
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
      <h4 style={{ marginLeft: "6.5rem" }}>Update Farmers Details</h4>
      return (
      <div>
        <div className={"loginFormContainer"}>
          <div className={"loginForm"}>
            <h3 style={{ color: "#1d912b", fontStyle: "italic" }}>
              Update Farmers Details
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
                type={"number"}
                placeholder={"Cell Number"}
                name={"number"}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
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
            <div className={"inputContainer"}>
              <BsFillEnvelopeFill
                style={{ height: 20, width: 20, color: "#1d912b" }}
              />
              <input
                className={"input"}
                type={"number"}
                placeholder={"Age of Farmer"}
                name={"age"}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className={"inputContainer"}>
              <BsFillEnvelopeFill
                style={{ height: 20, width: 20, color: "#1d912b" }}
              />
              <input
                className={"input"}
                type={"date"}
                placeholder={"Date of Joining"}
                name={"JoiningDate"}
                value={DateJoining}
                onChange={(e) => setJoiningDate(e.target.value)}
              />
            </div>

            <button className={"loginButton"} type="submit" onClick={submit}>
              Update
            </button>
          </div>
          <div className={"loginImage"}></div>
        </div>
      </div>
      );
    </>
  );
}
export default Update;
