import React from "react";
import "./footer.css";
import AgeBar from "./ageBar";
import dateCalc from "./dateCalc";

const Footer = props => {
  let xp = Math.ceil(dateCalc("01 Jan 2019 00:00:00 GMT")[2] / 7);
  return (
    <div className="footer-container">
      <div
        onClick={() => {
          props.modalHandler(true);
        }}
        className="footer footer-hp"
      >
        A.B.O.U.T.
      </div>
      <div className="footer footer-level">
        <AgeBar />
      </div>
      <div className="footer footer-xp">XP {xp}</div>
    </div>
  );
};

export default Footer;
