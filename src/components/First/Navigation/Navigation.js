//import all images and documents and us js to call them.
import React from 'react';
import { Sandwich } from './Sandwich';
import { Outlet } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// import './App.css';
import './Navigation.Stylesheet.css'

function Navigation(props){
    let isCrossed = false

    let pcPage = 
    <div className='container-nav'>
        <HashLink to='/' className='navigation-links'>Home</HashLink>
        <HashLink to='/blog' className='navigation-links'>Blog</HashLink>
        <HashLink to='/#second-sectional' className='navigation-links'>Skills</HashLink>
        <HashLink to='/#third-sectional' className='navigation-links'>Projects</HashLink>
        <HashLink to='/#footer-sectional' className='navigation-links'>Contact</HashLink>
        {/* <Link to='/' preventScrollReset={true} className='navigation-links'><a href="#second-sectional">Skillsa</a></Link> */}
        <Outlet/>
    </div>;

    let mobilePage = <div className='container-nav'>
        <Sandwich isCrossed={isCrossed} />
    </div>

    if(!props.isMobile) {
        return(pcPage);
    }
    else {
        return(mobilePage);
    }
}
export default Navigation;