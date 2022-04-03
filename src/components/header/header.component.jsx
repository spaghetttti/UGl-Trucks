import React from "react";
import { ReactComponent as Logo1 } from "../../assets/ugl-ruck-sales.svg";

import "./header.styles.scss";
import './menu.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { addClass: false };
  }

  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }

  render() {
    let boxClass = ["hamburger-menu"];
    let overLayBoxClass = [""];
    let menuListClass = ["header-list container has-fade"];
    if (this.state.addClass) {
      boxClass.push("animate");
      //* overLayBoxClass.push("overlay");
      overLayBoxClass.push("fade-in");
      menuListClass.push("fade-in");
    } else {
      overLayBoxClass.push("fade-out");
    }

    return (
      <div className="header">
        <div className={overLayBoxClass.join(" ")}></div>
        <nav>
          <a href="/">
            <Logo1 className="logo" />
          </a>
          <div className="links">
            <a href="/about">About</a>
            <a href="/">Docs</a>
            <a href="/inventory">Inventory</a>
          </div>

          <div className="header__menu menu-wrapper">
            <div
              onClick={this.toggle.bind(this)}
              className={boxClass.join(" ")}
              >
            </div>
          </div>
        </nav>
        <div className={menuListClass.join(" ")}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/">Docs</a>
          <a href="/inventory">Inventory</a>
        </div>
      </div>
    );
  }
}

export default Header;
