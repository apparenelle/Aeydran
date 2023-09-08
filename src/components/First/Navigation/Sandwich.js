import './Navigation.Stylesheet.css';
import React, {useState} from 'react';

import OverlayNav from '../Navigation/OverlayNav'

export function Sandwich(props) {
    let [mobileNavIsOpen, setMobileNavState] = useState(false);
    const [sandwichIsCrossed, setSandwichToCross] = useState(false)


    function sandwichDance() {
        let x = document.getElementById("mobile-sandwich");
        if (typeof x !== "undefined") {
            if (mobileNavIsOpen!==true) {
                x.classList.toggle("change");
                setMobileNavState(true);
                openMobileNav();
                setSandwichToCross(!sandwichIsCrossed);
            }
            else {
                x.classList.toggle("change");
                setMobileNavState(false);
                closeMobileNav();
                // setSandwichToCross(!sandwichIsCrossed);
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
            <OverlayNav isCrossed={sandwichIsCrossed} />

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