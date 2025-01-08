import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Adjust the path according to your directory structure
 // Path to your image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="DailyDrift Logo" className="logo" />
        <span className="brand-name">DailyDrift</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
