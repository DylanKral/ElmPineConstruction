import React from "react";

import logo from "../../assets/image2vector.svg";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul id="navUl">
        <div>
          <img className="logo" id="elmPineLogo" src={logo} alt="Logo" />
        </div>
        <li>
          <a href="" className="navlink">
            About
          </a>
        </li>
        <li>
          <a href="" className="navlink">
            Testimonials
          </a>
        </li>
        <li>
          <a href="" className="navlink">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
