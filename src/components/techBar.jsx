import React from "react";
import "./main-content.css";
import Bar from "./bar";

const TechBar = props => {
  return (
    <>
      <div className="techbar-label">{props.label}</div>
      <Bar level={props.level} height="17px" width="90px" />
    </>
  );
};

export default TechBar;
