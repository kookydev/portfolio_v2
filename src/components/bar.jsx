import React from "react";

const Bar = props => {
  return (
    <>
      <div
        style={{ width: props.width, height: props.height }}
        className="techbar-container"
      >
        <div style={{ width: `${props.level}%` }} className="techbar-inner" />
      </div>
    </>
  );
};

export default Bar;
