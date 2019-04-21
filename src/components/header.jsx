import React from "react";
import HeaderLabel from "./headerLabel";

const Header = props => {
  return (
    <>
      <div className="header">
        {props.tabs.map((title, index) => {
          return (
            <HeaderLabel
              title={title}
              active={props.active === index ? true : false}
              index={index}
              clickFunc={props.clickFunc}
            />
          );
        })}
      </div>
      <div className="header-spacer" />
    </>
  );
};

export default Header;
