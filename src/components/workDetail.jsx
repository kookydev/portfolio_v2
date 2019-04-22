import React from "react";
import TechBadges from "./techBadges";

const WorkDetail = props => {
  return (
    <div className="work-detail">
      <div>
        <a className="work-link" href={props.data.live}>
          Live page
        </a>
        {"    "}
        <a className="work-link" href={props.data.source}>
          Source code
        </a>
      </div>
      <img
        className="work-preview-image"
        src={require(`../resources/work/${props.data.imgUrl}.png`)}
        alt="Preview Image"
      />

      <div className="work-descpription">{props.data.description}</div>
      <TechBadges techStack={props.data.techStack} />
    </div>
  );
};

export default WorkDetail;
