import React, { Component } from "react";
//import { Layout} from "antd";

import "./homepage.css";
import Login from "../Login/login";
import NavigationBar from "../NavigationBar/NavigationBar";
import Sidebar from "../Sidebar/SideBar2";



import styled from 'styled-components';
import { Router } from "react-router-dom";

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
const Homepage = () => {

  return (
    <>
      <NavigationBar />
      <Sidebar />
      <h2 style={{ marginLeft: '9.5rem' }}>Name:{name}</h2>
      <h2 style={{ marginLeft: '6.5rem' }}>{email}</h2>

    </>
  );

}
export default Homepage


