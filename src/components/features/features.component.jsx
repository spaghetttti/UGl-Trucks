import React from "react";

import './features.styles.scss';

import Logo5 from '../../assets/traveler.jpg';
import Logo6 from '../../assets/travel-guide.jpg';   


const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <img src={Logo5} width="100%" alt="" />
        <div className="feature__info">
          <p className="feature__top">A lot to choose from</p>
          <p className="feature__bottom">
            New high-quality guides added each week.
          </p>
          <a className="feature__cta" href="#">
            Learn More
          </a>
        </div>
      </div>
      <div className="feature">
        <img src={Logo6} width="100%" alt="" />
        <div className="feature__info">
          <p className="feature__top">Vetted local experts</p>
          <p className="feature__bottom">
            The largest network of local guides worldwide.
          </p>
          <a className="feature__cta" href="#">
            Learn More
          </a>
        </div>
      </div>
      <div className="feature">
        <img src={Logo5} width="100%" alt="" />
        <div className="feature__info">
          <p className="feature__top">Vetted local experts</p>
          <p className="feature__bottom">
            The largest network of local guides worldwide.
          </p>
          <a className="feature__cta" href="#">
            Learn More
          </a>
        </div>
      </div>
      <div className="feature">
        <img src={Logo6} width="100%" alt="" />
        <div className="feature__info">
          <p className="feature__top">Vetted local experts</p>
          <p className="feature__bottom">
            The largest network of local guides worldwide.
          </p>
          <a className="feature__cta" href="#">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
