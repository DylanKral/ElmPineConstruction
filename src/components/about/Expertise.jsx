import React from "react";

import "./Expertise.css";
import { ExpertiseItems } from "./expertiseExports";

function Expertise() {
  return (
    <div className="expertiseContainer">
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
  );
}

export default Expertise;
