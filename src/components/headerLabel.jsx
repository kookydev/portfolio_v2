import React from "react";
import "./header.css";

const HeaderLabel = props => {
  return (
    <span
      className={
        props.active ? "header-label header-label-active" : "header-label"
      }
    >
      {props.title}
    </span>
  );
};

export default HeaderLabel;
