import React from 'react';
import './homepage.styles.scss';

import {ReactComponent as Logo1} from '../assets/ugl-ruck-sales.svg';
import {ReactComponent as Logo2} from '../assets/Icon1.svg';
import {ReactComponent as Logo3} from '../assets/Icon2.svg';
import {ReactComponent as Logo4} from '../assets/Icon3.svg';

import Logo5 from '../assets/traveler.jpg';
import Logo6 from '../assets/travel-guide.jpg';   

const HomePage = () => {
    return(
    <div className='homepage__'>
        <header>
            <nav>
                <a href="#"><Logo1 className="logo"/>
                   </a>
                <div className="links">             
                    <a href="#">About</a>
                    <a href="#">Docs</a>
                </div>
            </nav>
        </header>
        <main>
            <section className="info">
                <h1 className="hero__font">Find your desired truck with us</h1>
                <div className="icons">
                    <div className="icon">
                        <Logo2/>
                        <div Name="icon__info">
                            <p className="icon__top">Location</p>
                            <p className="icon__bottom">Montgomery IL</p>
                        </div>
                    </div>
                    <div className="icon">
                        <Logo3/>
                        <div className="icon__info">
                            <p className="icon__top">Customer Service</p>
                            <p className="icon__bottom">Exceptional</p>
                        </div>
                    </div>
                    <div className="icon">
                        <Logo4/>
                        <div className="icon__info">
                            <p className="icon__top">Quality</p>
                            <p className="icon__bottom">Outstanding</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features">
                <div className="feature">
                <img
                 src={Logo5}
                 width="100%"
                 />
                    <div className="feature__info">
                        <p className="feature__top">A lot to choose from</p>
                        <p className="feature__bottom">New high-quality guides  added each week.</p>
                    </div>
                </div>
                <div className="feature">
                <img
                 src={Logo6}
                 width="100%"
                 />
                    <div className="feature__info">
                        <p className="feature__top">Vetted local experts</p>
                        <p className="feature__bottom">The largest network of local guides worldwide.</p>
                        <a className="feature__cta" href="#">Learn More</a>
                    </div>
                </div>
                <div className="feature">
                <img
                 src={Logo5}
                 width="100%"
                 />
                    <div className="feature__info">
                        <p className="feature__top">Vetted local experts</p>
                        <p className="feature__bottom">The largest network of local guides worldwide.</p>
                        <a className="feature__cta" href="#">Learn More</a>
                    </div>
                </div>
                <div className="feature">
                <img
                 src={Logo6}
                 width="100%"
                 />
                    <div className="feature__info">
                        <p className="feature__top">Vetted local experts</p>
                        <p className="feature__bottom">The largest network of local guides worldwide.</p>
                        <a className="feature__cta" href="#">Learn More</a>
                    </div>
                </div>
            </section>
        </main>
    </div>
)};

export default HomePage;