import React from "react";

import "./About.css";

import leftAboutImage from "../../assets/LeftAboutSection.png";
import rightAboutImage from "../../assets/RightAboutSection.png";

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutDescription">
        <div className="leftImg"></div>
        <h2>Something about the company</h2>
        <div className="rightImg"></div>
      </div>
    </div>
  );
}

export default About;
