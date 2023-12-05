import React from "react";

import logo from "../../assets/image2vector.svg";
import "./Contact.css";

function Contact() {
  function sendEmail() {}

  return (
    <div className="contactContainer">
      <div class="contactTopShapeDivider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
      <h2 id="contactTitle">Contact Us So We Could Set Up A Call!</h2>

      <div id="logoAndInputs">
        <img id="contactLogo" src={logo} alt="Logo of the company" />

        <div className="contactInfoContainer">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Enter Name"
            />
            <br />
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Enter Email"
            />
            <br />
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              placeholder="Enter Phone Number"
              maxLength="12"
            />
            <br />
            <textarea
              id="text-area"
              name="message"
              rows="4"
              placeholder="Enter Message Here"
            ></textarea>
            <br />
            <input type="submit" id="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
