// import './App.css';
import './Navigation.Stylesheet.css';

import { React, useState, } from 'react';
// import { openMobileNav, closeMobileNav, } from './Sandwich';
import { Outlet, Link } from 'react-router-dom';


function OverlayNav(props) {
    
    return(
        <div className="overlay" id='myNav'>
            <div  className="overlay-content">
                <Link to='/blog'  className='navigation-links'>Blog</Link>
                <a href='#second-sectional' onClick={closeMobileNav} className='navigation-links'>Skills</a>
                <a href='#third-sectional' onClick={closeMobileNav} className='navigation-links'>Projects</a>
                <a href='#footer-sectional' onClick={closeMobileNav} className='navigation-links'>Contact</a>
                <Outlet/>
            </div>
        </div>
    );
}
export default OverlayNav;



function closeMobileNav(){
    let x = document.getElementById("mobile-sandwich");
    x.classList.toggle("change");
    document.getElementById("myNav").style.width = "0%";
    console.log("nav was  closed");
}