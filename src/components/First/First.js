//import all images and documents and us js to call them.
import React, { useEffect } from 'react';
import { NewsLetter } from '../../News.js';
import { Sandwich } from './Navigation/Sandwich.js';
import { OverlayNav } from './Navigation/OverlayNav.js';
import Navigation from './Navigation/Navigation.js';
import greetingPhoto from '../../assets/gerald.png';
import TechStack from './TechStack.js';
import ThreeD from '../../ThreeD.js';

// import './App.css';
import './First.Stylesheet.css';

function First(props) {
    let isSmall = props.isMobile;
    let pcPage = <section className='first-sectional'>
        <Navigation isMobile={props.isMobile} />
        <div className='first-sectional-container'>
            <div className='home-container'>
                <div className='home-info-container'>
                    <div className='photo-flex'>
                        <ThreeD nScale={1}/>
                    </div>
                    <div className='greetings-flex'>
                        <div className='greetings-box'>
                            <h1>Aeydran<br/><i>Software Engineer</i></h1>
                            <div>Born and raised here in NYC.<br/>I am an intuitive problem solver<br/> always looking for the next mountain.</div>
                        </div>
                    </div>
                </div>
                <TechStack/>
            </div>
        </div>
        </section>;
    
    let mobilePage = <section className='first-sectional'>
        <Navigation isMobile={props.isMobile} />
        <div className='first-sectional-container'>
            <div className='home-container'>
                <div className='home-info-container'>
                    <div className='photo-flex'>
                        <ThreeD  nScale={1.2}/>
                    </div>
                    <div className='greetings-flex'>
                        <div className='greetings-box'>
                            <h1>Aeydran<br/><i>Software Engineer</i></h1>
                        </div>
                    </div>
                </div>
                <TechStack/>
            </div>
        </div>
        </section>;
    
    
    
    console.log(`Printing from navbar -- Value of isSmall: ${isSmall}`);
    if (props.isMobile) {
        return (mobilePage) ;
    }
    else{
        return(pcPage);
    }    
}
export default First;