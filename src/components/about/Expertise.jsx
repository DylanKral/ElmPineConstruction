import React from "react";

import "./Expertise.css";
import { ExpertiseItems } from "./expertiseExports";

function Expertise() {
  return (
    <div className="expertiseContainer">
      <h2>Here are some of the areas we have expertise in! </h2>
      <div>
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
