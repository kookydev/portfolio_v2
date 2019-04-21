import React from "react";

const TechBadges = props => {
  return (
    <div className="tech-stack-container">
      <span>Tech Stack</span>
      <div className="tech-badge-container">
        {props.techStack.map(tech => {
          return (
            <img
              src={`../resources/techs/${tech}.png`}
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
