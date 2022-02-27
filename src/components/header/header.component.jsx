import React from "react";
import { ReactComponent as Logo1 } from "../../assets/ugl-ruck-sales.svg";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <a href="#">
          <Logo1 className="logo" />
        </a>
        <div className="links">
          <a href="#">About</a>
          <a href="#">Docs</a>
          <a href="#">Inventory</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
