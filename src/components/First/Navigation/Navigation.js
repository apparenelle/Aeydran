//import all images and documents and us js to call them.
import React from 'react';
import { Sandwich } from './Sandwich';
import OverlayNav from './OverlayNav';
import { Outlet, Link } from 'react-router-dom';

// import './App.css';
import './Navigation.Stylesheet.css'

function Navigation(props){
    let pcPage = 
    <div className='container-nav'>
        <Link to='/blog' className='navigation-links'>Blog</Link>
        <a href='#second-sectional' className='navigation-links'>Skills</a>
        <a href='#third-sectional' className='navigation-links'>Projects</a>
        <a href='#footer-sectional' className='navigation-links'>Contact</a>
        <Outlet/>
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