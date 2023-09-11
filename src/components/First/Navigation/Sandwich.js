import './Navigation.Stylesheet.css';

import { React, useState } from 'react';

import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


export function Sandwich(props) {
    let [mobileNavIsOpen, setMobileNavState] = useState(false);


    function sandwichDance() {
        let x = document.getElementById("mobile-sandwich");
        let y = document.getElementById("app");
        
        if (typeof x !== "undefined") {
            if (mobileNavIsOpen!==true) {
                x.classList.toggle("change");
                y.classList.toggle("change");
                setMobileNavState(true);
                openMobileNav();
            }
            else {
                x.classList.toggle("change");
                y.classList.toggle("change");
                setMobileNavState(false);
                closeMobileNav();
            }   
        }
    }
    return(
        <>
            <div className='mobile-sandwich' id="mobile-sandwich" onClick={() => { sandwichDance();}}>
                <div className='mobile-sandwich-1'></div>
                <div className='mobile-sandwich-2'></div>
                <div className='mobile-sandwich-3'></div>
            </div> 
            <div className="overlay" id='myNav'>
                <div  className="overlay-content">
                    <HashLink onClick={() => { sandwichDance();}} to='/' className='navigation-links'>Home</HashLink>
                    <HashLink onClick={() => { sandwichDance();}} to='/blog' className='navigation-links'>Blog</HashLink>
                    <HashLink onClick={() => { sandwichDance();}} to='/#second-sectional' className='navigation-links'>Skills</HashLink>
                    <HashLink onClick={() => { sandwichDance();}} to='/#third-sectional' className='navigation-links'>Projects</HashLink>
                    <HashLink onClick={() => { sandwichDance();}} to='/#footer-sectional' className='navigation-links'>Contact</HashLink>
                    <Outlet/>
                </div>
            </div>

        </>           
    );   
}




function openMobileNav(){
    document.getElementById("myNav").style.width = "40%";
    // document.getElementById("root").style.marginLeft = "40%";
    document.getElementById("root").style.transition = "0.5s";

    console.log("nav was opened");
}

function closeMobileNav(){
    
    document.getElementById("myNav").style.width = "0%";
    // document.getElementById("root").style.marginLeft = "0%";

    console.log("nav was  closed");
}