// import './App.css';
import './Navigation.Stylesheet.css';

import { React, useState, } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



function OverlayNav(props) {
    
    return(
        <div className="overlay" id='myNav'>
            <div  className="overlay-content">
                <HashLink onClick={() => { closeMobileNav();}} to='/blog' className='navigation-links'>Blog</HashLink>
                <HashLink onClick={() => { closeMobileNav();}} to='/#second-sectional' className='navigation-links'>Skills</HashLink>
                <HashLink onClick={() => { closeMobileNav();}} to='/#third-sectional' className='navigation-links'>Projects</HashLink>
                <HashLink onClick={() => { closeMobileNav();}} to='/#footer-sectional' className='navigation-links'>Contact</HashLink>
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