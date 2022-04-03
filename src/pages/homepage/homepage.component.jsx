import React from 'react';
import './homepage.styles.scss';

import Header from '../../components/header/header.component';
import Hero from '../../components/hero/hero.component';
import Features from '../../components/features/features.component';

const HomePage = () => {
    return(
    <div className='homepage__'>
            <Header/>
        <main>
            <Hero/>
            <Features/>  
        </main>
    </div>
)};

export default HomePage;