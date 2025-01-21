import React from "react";
import "./Hero.css";
import logo from "../assets/profile.jpg"; 

const Hero = () => {
  return (
    <main className="hero-section">
      <img src={logo} alt="Profile" className="profile-pic" />
      <h1 className="hero-title">Maniprabha ShankarGanesh</h1>
      <h1 className="hero-subheading">Welcome to DailyDrift</h1>
      <p className="hero-description">
      Dive into a world of thoughts, insights, and reflections. Explore my
      mind, one post at a time
      </p>
      <div className="email-subscribe">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="email-input"
        />
        <button className="btn subscribe">Subscribe</button>
      </div>
    </main>
  );
};

export default Hero;
