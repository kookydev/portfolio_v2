import React from "react";

const WorkListItem = props => {
  return (
    <button
      className={
        props.index === props.current ? "list-item list-current" : "list-item"
      }
      onClick={() => {
        props.clickHandler(props.index);
      }}
    >
      {props.title}
    </button>
  );
};

export default WorkListItem;
