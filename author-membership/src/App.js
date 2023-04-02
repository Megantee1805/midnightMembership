import logo from './logo.svg';
import './App.css';
import React from "react";
import Homepage from './Authentication/homepage';
import Login from './Authentication/login';
import NavbarComponent from './Authentication/Navbar';
import Signup from './Authentication/registration'
// We use Route in order to define the different routes of our application
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
