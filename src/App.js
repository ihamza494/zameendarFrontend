import React from "react";
//import ReactDOM from "react-dom";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import {  Switch, Route } from "react-router-dom";
import Homepage from "./components/HomePage/homepage";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Error from "./components/Error";
import Home from "./components/Home/home";
import Farmer from "./components/Farmer/Farmer";
import Update from "./components/update/Update";
import Add from "./components/Add/Add";
import Delete from "./components/delete/Delete";
import Logout from "./components/Logout/logout";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/dashboard" component={Homepage}/> */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/error" component={Error} />
        <Route exact path="/dashboard" component={Home} />
        <Route exact path="/farmer" component={Farmer} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/update" component={Update} />
        <Route exact path="/delete" component={Delete} />
        <Route exact path="/logout" component={Logout} />






      </Switch>
    </Router>
  );
}



export default App

