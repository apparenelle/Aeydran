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
            <div className='mobile-sandwich flex-column aitems-center jcontent-space-around' id="mobile-sandwich" onClick={() => { sandwichDance();}}>
                <div className='mobile-sandwich-1'></div>
                <div className='mobile-sandwich-2'></div>
                <div className='mobile-sandwich-3'></div>
            </div> 
            <div className="overlay" id='myNav'>
                <div  className="overlay-content">
                    <HashLink onClick={() => { sandwichDance()}} to='/#' className='navigation-links'>Home</HashLink>
                    <HashLink onClick={() => { sandwichDance()}} to='/blog' className='navigation-links'>Blog</HashLink>
                    <HashLink onClick={() => { sandwichDance()}} to='/#Hobbies' className='navigation-links'>Hobbies</HashLink>
                    <HashLink onClick={() => { sandwichDance()}} to='/#Projects' className='navigation-links'>Projects</HashLink>
                    <HashLink onClick={() => { sandwichDance()}} to='/#footer-sectional' className='navigation-links'>Contact</HashLink>
                    <Outlet/>
                </div>
            </div>

        </>           
    );   
}




function openMobileNav(){
    document.getElementById("myNav").style.width = "100vw";
    document.getElementById("root").style.transition = "0.3s";
    document.body.style.overflow = 'hidden';
    // console.log("nav was opened");
}

function closeMobileNav(){
    document.getElementById("myNav").style.width = "0vw";
    document.body.style.overflow = '';
    console.log("nav was  closed");
}