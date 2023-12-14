import React from "react";

import "./Expertise.css";
import { ExpertiseItems } from "./expertiseExports";

function Expertise() {
  return (
    <div className="expertiseContainer" id="expertise">
      <div className="expertiseTopShapeDivider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <h2>Here are some of the areas we have expertise in! </h2>
      <div className="expertiseIcons">
        {ExpertiseItems.map((item, index) => (
          <div key={index} className="expertiseItem">
            <img
              src={item.icon}
              alt={`Icon for ${item.description}`}
              className="imageIcon"
            />
            <h2>{item.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
