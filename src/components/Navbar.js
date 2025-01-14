import React, { useState } from "react";
import "./Navbar.css";

import "./Navbar.css";
import logo from "../assets/profile.jpg"; // Correct relative path

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo"
          />
          <h1>Maniprabha ShankarGanesh</h1>
        </div>
        <div className="navbar-right">
          <button className="btn login" onClick={toggleModal}>
            Login
          </button>
          <button className="btn subscribe">Subscribe</button>
          <div className="menu-icon">&#9776;</div>
        </div>
      </header>

      {/* Modal Section */}
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleModal}>
              &times;
            </button>
            <div className="modal-header">
              <img
                src={logo}
                alt="User"
                className="modal-profile-pic"
              />
              <h2>Log in to DailyDrift</h2>
            </div>
            <div className="modal-body">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="modal-input"
              />
              <button className="modal-btn">Log in with password</button>
              <button className="modal-btn primary">Send Login Link to Email</button>
              <p>
                Don't have an account? <a href="#signup">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
