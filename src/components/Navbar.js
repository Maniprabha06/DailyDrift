import React from "react";
import "./Navbar.css";
import logo from "../assets/profile.jpg"; // Correct relative path

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1>Maniprabha ShankarGanesh</h1>
      </div>
      <div className="navbar-right">
        <button className="btn login">Login</button>
        <button className="btn subscribe">Subscribe</button>
        <div className="menu-icon">&#9776;</div>
      </div>
    </header>
  );
};

export default Navbar;
