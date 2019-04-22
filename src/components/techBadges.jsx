import React from "react";
import ReactDOM from "react-dom";

const TechBadges = props => {
  return (
    <div className="tech-stack-container">
      <span>Tech Stack</span>
      <div className="tech-badge-container">
        {props.techStack.map(tech => {
          return (
            <img
              style={{ width: "13%" }}
              src={require(`../resources/techstack/${tech}.png`)}
              alt={tech}
              className="tech-badge"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TechBadges;
