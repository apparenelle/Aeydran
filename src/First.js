//import all images and documents and us js to call them.
import React, { useEffect } from 'react';
import { NewsLetter } from './News.js';
import { Sandwich } from './Sandwich';
import { OverlayNav } from './OverlayNav';
import Navigation from './Navigation.js';
import greetingPhoto from './assets/gerald.png';
import TechStack from './TechStack.js';

import './App.css';

function First(props) {
    let isSmall = props.isMobile;
    console.log(`Printing from navbar -- Value of isSmall: ${isSmall}`);
    return (
        <section className='first-sectional'>
            <Navigation isMobile={isSmall} />
            <div className='first-item-box'>
                <div className='first-sectional-container'>
                    <div className='photo-flex'>
                        <img className='photo-selfie' src={greetingPhoto} alt=""></img>
                    </div>
                    <div className='greeting-flex'>
                        <div className='greetings-box'>
                            <h1>Aeydran<br/><i>Software Engineer</i></h1>
                            <p>Born and raised here in NYC.<br/>I am an intuitive problem solver always looking for the next mountain.</p>
                        </div>
                    </div>
                </div>
                <TechStack/>
            </div>
        </section>
    );
    
}

export default First;