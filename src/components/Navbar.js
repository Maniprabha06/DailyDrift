import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/profile.jpg"; // Ensure the correct path to the image

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false); // State to toggle between email and password login
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup

  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
    setShowPasswordLogin(false); // Reset to email login when modal is toggled
    setIsSignup(false); // Reset to login card when modal is toggled
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
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
              <img src={logo} alt="User" className="modal-profile-pic" />
              <h2>
                {isSignup
                  ? "Sign Up for DailyDrift"
                  : showPasswordLogin
                  ? "Log in with Password"
                  : "Log in to DailyDrift"}
              </h2>
            </div>
            <div className="modal-body">
              {isSignup ? (
                // Signup Card
                <>
                  <label htmlFor="signup-name">Name</label>
                  <input
                    type="text"
                    id="signup-name"
                    placeholder="Enter your name"
                    className="modal-input"
                  />
                  <label htmlFor="signup-email">Email</label>
                  <input
                    type="email"
                    id="signup-email"
                    placeholder="Enter your email"
                    className="modal-input"
                  />
                  <label htmlFor="signup-password">Password</label>
                  <input
                    type="password"
                    id="signup-password"
                    placeholder="Enter your password"
                    className="modal-input"
                  />
                  <button className="modal-btn primary">Sign Up</button>
                  <p>
                    Already have an account?{" "}
                    <span
                      style={{ color: "#007BFF", cursor: "pointer" }}
                      onClick={() => {
                        setIsSignup(false);
                        setShowPasswordLogin(false);
                      }}
                    >
                      Log in
                    </span>
                  </p>
                </>
              ) : !showPasswordLogin ? (
                // Email Login Card
                <>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="modal-input"
                  />
                  <button
                    className="modal-btn"
                    onClick={() => setShowPasswordLogin(true)} // Switch to password login
                  >
                    Log in with password
                  </button>
                  <button className="modal-btn primary">
                    Send Login Link to Email
                  </button>
                  <p>
                    Don't have an account?{" "}
                    <span
                      style={{ color: "#007BFF", cursor: "pointer" }}
                      onClick={() => setIsSignup(true)}
                    >
                      Sign Up
                    </span>
                  </p>
                </>
              ) : (
                // Password Login Card
                <>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="modal-input"
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="modal-input"
                  />
                  <button className="modal-btn primary">Log in</button>
                  <p>
                    <span
                      style={{ color: "#007BFF", cursor: "pointer" }}
                      onClick={() => setShowPasswordLogin(false)} // Go back to email login
                    >
                      Go back
                    </span>
                  </p>
                  <p>
                    Don't have an account?{" "}
                    <span
                      style={{ color: "#007BFF", cursor: "pointer" }}
                      onClick={() => setIsSignup(true)}
                    >
                      Sign Up
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
