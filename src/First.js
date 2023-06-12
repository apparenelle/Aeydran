//import all images and documents and us js to call them.
import React, { useEffect } from 'react';
import { NewsLetter } from './News.js';
import { Sandwich } from './Sandwich';
import { OverlayNav } from './OverlayNav';
import greetingPhoto from './assets/gerald.png';

import './App.css';

function First(props) {
    
        let isSmall = props.isMobile;
    console.log(`Printing from navbar -- Value of isSmall: ${isSmall}`);
    if(!isSmall) {
        return (
            <div className='first-sectional'>
                <div className="upper-sectional">
                    <div className="nav-flex-container">
                        <div className="nav-logo-container">
                            <h4>Aeydran</h4>
                        </div>  
                        <ul className="nav-links">
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Projects</a></li>
                            <li><a href='#'>About Me</a></li>
                            <li><a href='#'>Skills</a></li>
                        </ul>
                    </div>
                    <div className="nav-news-container">
                        <div className='nav-news'>
                            <NewsLetter text="EUS Engineer @ Sculptor Capital Management"/>
                        </div>
                    </div>
                </div>
                <div className='first-item-box'>
                    <div className='first-sectional-container'>
                        <div className='photo-flex'>
                            <img className='photo-selfie' src={greetingPhoto} alt=""></img>
                        </div>
                        <div className='greeting-flex'>
                            <div className='greetings-box'>
                                <h1>Aeydran</h1>
                                <h2>N.Y.C</h2>
                                <h2>Software Engineer</h2>
                            </div>
                            {/* <h2>"Believe you can and you're halfway there."</h2> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return(
            <div className='first-sectional'>
                <div className="upper-sectional">
                    <div className="nav-flex-container">
                        <div className="nav-logo-container">
                            <h4>Aeydran</h4>
                        </div>  
                        <div className="nav-link-flex-container">
                            < Sandwich />
                            < OverlayNav/>
                        </div>           
                    </div>
                    <div className="nav-news-container">
                        <div className='nav-news'>
                            <NewsLetter text="EUS Engineer @ Sculptor Capital Management"/>
                        </div>
                        
                    </div>
                </div>
                <div className='first-sectional-container'>
                    <div className='photo-flex'>
                        <img className='photo-selfie' src={greetingPhoto} alt=""></img>
                    </div>
                    <div className='greeting-flex'>
                        <div className='greetings-box'>
                            <h1>Aeydran</h1>
                            <h2>N.Y.C</h2>
                            <h2>Software Engineer</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
    
    
}

export default First;