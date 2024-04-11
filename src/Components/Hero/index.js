import React from "react";
import "./index.css";
import dark_arrow from "../../Assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          fields of education.
        </p>
        <button className="btn">
          Explore More
          <img src={dark_arrow} alt="logo" className="btn-arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
