import React from "react";
import "./main-content.css";
import vaultboy from "../resources/vaultboy.gif";
import TechBar from "./techBar";

const Stats = props => {
  return (
    <div className="main-content">
      <TechBar height="15px" width="90px" label="Javascript" level="75" />

      <img id="vault-boy" src={vaultboy} alt="Vault Boy animation" />
      <TechBar height="15px" width="90px" label="CSS" level="75" />
    </div>
  );
};

export default Stats;
