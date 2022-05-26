import React, { Component, useState } from "react";
import { BsFillEnvelopeFill, BsLockFill } from "react-icons/bs";
import image from "../../img/background.png";
import { Link, useHistory } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Sidebar from "../Sidebar/SideBar2";

function Home() {
  const [email, setEmail] = useState("");

  const [password, setPasword] = useState("");
  const history = useHistory();

  return (
    <>
      <NavigationBar />
      <Sidebar />
      <h4 style={{ marginLeft: "6.5rem" }}>Admin Profile</h4>
      <img
        src={image}
        style={{ width: "100%", height: "100%", marginleft: "6.5rem" }}
      />
    </>
  );
}
export default Home;
