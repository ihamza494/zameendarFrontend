import React, { Component, useState, useEffect } from "react";
import { BsFillEnvelopeFill, BsLockFill } from "react-icons/bs";

import { Link, useHistory } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Sidebar from "../Sidebar/SideBar2";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './farmer.css'
import axios from 'axios'
function CurrentFarmers() {
  console.log("clicked Current");
}

function OldFarmers() {
  console.log("clicked Old");
}


function Farmer() {
  const token = localStorage.getItem('token');

  const [data, setData] = useState([]);

  const history = useHistory();
  useEffect(() => {
    axios.get('http://localhost:4000/farmer/allfarmers',
      { headers: { "x-auth-token": `${token}` } })
      .then((Response) => {

        console.log(Response.data)
        setData(Response.data)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }, [])


  return (
    <>
      <NavigationBar />
      <Sidebar />

      <h4 style={{ marginLeft: '6.5rem' }}>Farmers Details</h4>
      <div style={{ marginLeft: '69rem' }}>
        <button type="button" class="btn btn-primary" onClick={CurrentFarmers}>Current Farmers</button>
        <button style={{ marginLeft: '0.5rem' }} type="button" class="btn btn-warning" onClick={OldFarmers}>Old Farmers</button>

      </div>

      <div style={{ marginLeft: '6.5rem', marginTop: '2rem' }}>
        <table>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>CNIC</th>
            <th>Age</th>
            <th>DOJ</th>
          </tr>
          {data.map((farmer) =>
            <tr>
              <td>{farmer.name}</td>
              <td>{farmer.phone}</td>
              <td>{farmer.cnic}</td>
              <td>{farmer.age}</td>
              <td>{farmer.date}</td>


            </tr>
          )}
        </table>
      </div>

    </>

  );
}
export default Farmer;