import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

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

      <div className={`hamburger`}>
        {!hamburgerOpen && (
          <FontAwesomeIcon
            icon={faBars}
            id="bars"
            onClick={() => setHamburgerOpen(true)}
          />
        )}
        {hamburgerOpen && (
          <FontAwesomeIcon
            icon={faX}
            id="X"
            onClick={() => setHamburgerOpen(false)}
          />
        )}

        <ul className={`mobileNav ${hamburgerOpen ? "isOpen" : ""}`}>
          <li className="mobile">
            <a
              href="#home"
              className="navlink"
              onClick={() => setHamburgerOpen(false)}
            >
              Home
            </a>
          </li>
          <li className="mobile">
            <a
              href="#about"
              className="navlink"
              onClick={() => setHamburgerOpen(false)}
            >
              About
            </a>
          </li>
          <li className="mobile">
            <a
              href="#expertise"
              className="navlink"
              onClick={() => setHamburgerOpen(false)}
            >
              Expertise
            </a>
          </li>
          <li className="mobile">
            <a
              href="#contact"
              className="navlink"
              onClick={() => setHamburgerOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
