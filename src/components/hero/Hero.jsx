import React from "react";

import "./Hero.css";
function Hero() {
  return (
    <div className="heroContainer">
      <div className="messageContainer">
        <h1 id="header">
          ElmPine <br />
          Construction
        </h1>
        <h2 id="headerMessage">Contact us for a consultation!</h2>
      </div>
      <div className="down-arrow"> </div>
    </div>
  );
}

export default Hero;
