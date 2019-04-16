import React from "react";
import "./main-content.css";
import vaultboy from "../resources/vaultboy.gif";
import TechBar from "./techBar";

const Stats = props => {
  return (
    <div className="main-content">
      <TechBar
        id="tech1"
        height="15px"
        width="90px"
        label="Javascript"
        level="95"
      />

      <img id="vault-boy" src={vaultboy} alt="Vault Boy animation" />
      <TechBar id="tech2" height="15px" width="90px" label="CSS" level="80" />
    </div>
  );
};

export default Stats;
