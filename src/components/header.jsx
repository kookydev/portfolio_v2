import React from "react";
import HeaderLabel from "./headerLabel";

const Header = props => {
  return (
    <>
      <div className="header">
        <HeaderLabel title="STATS" active={true} />
        <HeaderLabel title="WORK" active={false} />
        <HeaderLabel title="CONTACT" active={false} />
      </div>
      <div className="header-spacer" />
    </>
  );
};

export default Header;
