import React, { Component, useState } from "react";
import home from '../images/home.png'
import former from '../images/farmer.png'
import update from '../images/update.png'
import add from '../images/add_user_male_48px.png'
import remove from '../images/Remove.png'
import logout from '../images/logout48px.png'
import './sideBar.css'

function SideBar2() {

  return (
    <>
      <div class="sidebar">

        <a href="/dashboard"><img src={home} /><p style={{ marginBottom: '-1rem', color: "whitesmoke" }}>Home</p></a>
        <a href="/farmer"><img src={former} /><p style={{ marginBottom: '-1rem', color: "whitesmoke" }}>Farmers</p></a>
        <a href="/add"><img src={add} /><p style={{ marginBottom: '-1rem', color: "whitesmoke" }}>ADD</p></a>
        <a href="/update"><img src={update} /><p style={{ marginBottom: '-1rem', color: "whitesmoke" }}>Update</p></a>
        <a href="/delete"><img src={remove} /><p style={{ marginBottom: '-1rem', color: "whitesmoke" }}>Delete</p></a>
        <a href="/logout"><img src={logout} /><p style={{ marginBottom: '-1rem', color: "whitesmoke" }}>Logout</p></a>



      </div>
    </>

  );
}
export default SideBar2;