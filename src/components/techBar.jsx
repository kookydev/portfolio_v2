import React from "react";
import "./main-content.css";

const TechBar = props => {
  return (
    <div className="techbar-outer">
      <div className="techbar-label">{props.label}</div>
      <div
        style={{ width: props.width, height: props.height }}
        className="techbar-container"
      >
        <div style={{ width: `${props.level}%` }} className="techbar-inner" />
      </div>
    </div>
  );
};

export default TechBar;
