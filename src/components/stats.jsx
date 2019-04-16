import React from "react";
import "./main-content.css";
import vaultboy from "../resources/vaultboy.gif";

const Stats = props => {
  return (
    <div className="main-content">
      <img id="vault-boy" src={vaultboy} alt="Vault Boy animation" />
    </div>
  );
};

export default Stats;
