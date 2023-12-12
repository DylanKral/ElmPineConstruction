import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <nav>
      <ul id="navUl">
        <li>
          <a href="#about" className="navlink">
            About
          </a>
        </li>
        <li>
          <a href="#expertise" className="navlink">
            Expertise
          </a>
        </li>
        <li>
          <a href="#contact" className="navlink">
            Contact
          </a>
        </li>
      </ul>

      <div className="hamburger" onClick={hamburgerOpen}>
        <FontAwesomeIcon icon={faBars} id="bars" />
      </div>
    </nav>
  );
}

export default Nav;
