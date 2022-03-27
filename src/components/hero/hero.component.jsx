import React from "react";

import "./hero.styles.scss";

import { ReactComponent as Logo2 } from "../../assets/Icon1.svg";
import { ReactComponent as Logo3 } from "../../assets/Icon2.svg";
import { ReactComponent as Logo4 } from "../../assets/Icon3.svg";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__font">Find your desired truck <br /> with us</h1>
      <div className="icons">
        <div className="icon">
          <Logo2 className="icon__img"/>
          <div className="icon__info">
            <p className="icon__top">Location</p>
            <p className="icon__bottom">Illinois</p>
          </div>
        </div>
        <div className="icon">
          <Logo3 className="icon__img"/>
          <div className="icon__info">
            <p className="icon__top">Service</p>
            <p className="icon__bottom">Outstanding</p>
          </div>
        </div>
        <div className="icon">
          <Logo4 className="icon__img"/>
          <div className="icon__info">
            <p className="icon__top">Quality</p>
            <p className="icon__bottom">Exceptional</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
