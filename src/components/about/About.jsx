import React, { useEffect, useState } from "react";

import "./About.css";
import Expertise from "./Expertise";

function About() {
  return (
    <React.Fragment>
      <div className="aboutContainer" id="about">
        <div className="aboutDescription">
          <div className="leftImg"></div>
          <div id="aboutWordingContainer">
            <h2 id="aboutTitle">Where Expertise Meets Excellence</h2>
            <p id="aboutWording">
              At ElmPine Construction, we specialize in transforming dreams into
              reality. With expertise in all facets of home construction, from
              renovations to new builds, our dedicated team is committed to
              delivering quality craftsmanship that turns houses into homes.
            </p>
            <a id="contactButton" href="#contact">
              Schedule a Call
            </a>
          </div>
          <div className="rightImg"></div>
        </div>
      </div>
      <Expertise />
    </React.Fragment>
  );
}

export default About;
