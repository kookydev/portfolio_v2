import React from "react";
import "./contact.css";

const Contact = props => {
  return (
    <div className="contact-container">
      <h2>Follow me:</h2>
      <div className="contact-container-child">
        <a href="https://github.com/kookydev">
          <i class="fab fa-github-square" /> github.com/kookydev
        </a>
        <a href="https://linkedin.com/in/kyle-trotter">
          <i class="fab fa-linkedin" /> linkedin.com/in/kyle-trotter
        </a>
      </div>
      <h2>Contact me:</h2>
      <div className="contact-container-child">
        <a href="mailto:info@kooky.dev">
          <i class="fas fa-envelope-square" /> info@kooky.dev
        </a>
        <a href="tel:+447726152415">
          <i class="fas fa-phone-square" /> 07726 152415
        </a>
      </div>
    </div>
  );
};

export default Contact;
