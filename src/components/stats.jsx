import React from "react";
import "./main-content.css";
import vaultboy from "../resources/vaultboy.gif";
import TechBar from "./techBar";

const Stats = props => {
  return (
    <div className="main-content stats-content">
      <div className="techbar-outer" id="tech1">
        <TechBar label="HTML" level="95" />
      </div>
      <div className="techbar-outer" id="tech2">
        <TechBar label="CSS" level="95" />
      </div>
      <div className="techbar-outer" id="tech3">
        <TechBar label="Javascript" level="85" />
      </div>
      <div className="techbar-outer" id="tech4">
        <TechBar label="React.js" level="85" />
      </div>
      <div className="techbar-outer" id="tech5">
        <TechBar label="Node.js" level="85" />
      </div>
      <div className="techbar-outer" id="tech6">
        <TechBar label="JQuery" level="65" />
      </div>
      <div className="techbar-outer" id="tech7">
        <TechBar label="Express" level="50" />
      </div>
      <div className="techbar-outer" id="tech8">
        <TechBar label="Swift(iOS)" level="60" />
      </div>
      <div className="techbar-outer" id="tech9">
        <TechBar label="MongoDB" level="35" />
      </div>
      <img id="vault-boy" src={vaultboy} alt="Vault Boy animation" />
    </div>
  );
};

export default Stats;
