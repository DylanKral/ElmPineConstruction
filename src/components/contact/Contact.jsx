import React, { useState, useRef } from "react";

import logo from "../../assets/image2vector.svg";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [isMessageSent, setMessageSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "elmPineConstruction",
        "ElmPineContact",
        form.current,
        "Pfc3Mm-FqgXlgBtBw"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset(); //reset input fields
          setMessageSent(true); //show popup when message is sent

          setTimeout(() => {
            setMessageSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactContainer" id="contact">
      <div className="contactTopShapeDivider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <h2 id="contactTitle">Contact Us So We Could Set Up A Call!</h2>

      <div id="logoAndInputs">
        <img id="contactLogo" src={logo} alt="Logo of the company" />

        <div className="contactInfoContainer">
          <form onSubmit={sendEmail} ref={form}>
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
          <div className={`popup ${isMessageSent ? "show" : "hide"}`}>
            <p id="sentMessage">Message Sent!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
