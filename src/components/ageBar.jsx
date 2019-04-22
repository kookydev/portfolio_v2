import React from "react";
import Bar from "./bar";
import dateCalc from "./dateCalc";

const AgeBar = props => {
  let data = dateCalc("27 Apr 1981 00:00:00 GMT");

  return (
    <div className="agebar-container">
      <div className="agebar-label">LEVEL {data[0]}</div>
      <Bar
        width="30vw"
        height={window.innerWidth < 1024 ? "20px" : "35px"}
        level={data[1]}
      />
    </div>
  );
};

export default AgeBar;
