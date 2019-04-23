import React from "react";
import TechBadges from "./techBadges";

const WorkDetail = props => {
  return (
    <div className="work-detail">
      <div>
        <a className="work-link" href={props.data.live} target="_blank">
          Live page
        </a>
        {"    "}
        <a className="work-link" href={props.data.source} target="_blank">
          Source code
        </a>
      </div>
      <a
        className="work-preview-image-container"
        href={props.data.live}
        target="_blank"
      >
        <img
          className="work-preview-image"
          src={require(`../resources/work/${props.data.imgUrl}.png`)}
          alt="Preview Image"
        />
      </a>

      <div className="work-descpription">{props.data.description}</div>
      <TechBadges techStack={props.data.techStack} />
    </div>
  );
};

export default WorkDetail;
