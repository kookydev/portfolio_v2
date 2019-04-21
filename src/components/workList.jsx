import React from "react";
import WorkListItem from "./workListItem";

const WorkList = props => {
  return (
    <div className="work-list">
      {props.data.map((obj, index) => {
        return (
          <WorkListItem
            clickHandler={props.clickHandler}
            title={obj.title}
            index={index}
            current={props.current}
          />
        );
      })}
    </div>
  );
};

export default WorkList;
