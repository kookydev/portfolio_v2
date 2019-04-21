import React from "react";
import TechBadges from "./techBadges";

const WorkDetail = props => {
  return (
    <div className="work-detail">
      <img
        className="work-preview-image"
        src={props.data.imgUrl}
        alt="Preview Image"
      />
      <div className="work-descpription">{props.data.description}</div>
      <TechBadges techStack={props.data.techStack} />
    </div>
  );
};

export default WorkDetail;
