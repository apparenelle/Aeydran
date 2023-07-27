//import all images and documents and us js to call them.
import React from 'react';
import { Sandwich } from './Sandwich';
import OverlayNav from './OverlayNav';

// import './App.css';
import './Navigation.Stylesheet.css'

function Navigation(props){
    let pcPage = <div className='container-nav'>
    <a className='navigation-links'>Blog</a>
    <a className='navigation-links' href=''>Skills</a>
    <a className='navigation-links'>Projects</a>
    <a className='navigation-links'>Contact</a>
    </div>;

    let mobilePage = <div className='container-nav'>
        <Sandwich />
        <OverlayNav />
    </div>

    if(!props.isMobile) {
        return(pcPage);
    }
    else {
        return(mobilePage);
    }
}
export default Navigation;