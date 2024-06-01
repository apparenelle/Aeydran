//import all images and documents and us js to call them.
import React from 'react';
import { Sandwich } from './Sandwich';
import { Outlet } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Navigation.Stylesheet.css'

function Navigation({ isMobile}){
    let isCrossed = false;

    return(
        <div className={`container-nav jcontent-space-around flex-grow-1 ${!isMobile ? 'flex-row aitems-center' : 'flex-column aitems-end'} `}>
            {!isMobile ? (
                <>
                    <HashLink to='/' className='navigation-links'>Home</HashLink>
                    <HashLink to='/blog' className='navigation-links'>Blog</HashLink>
                    <HashLink to='/#second-sectional' className='navigation-links'>Skills</HashLink>
                    <HashLink to='/#third-sectional' className='navigation-links'>Projects</HashLink>
                    <HashLink to='/#footer-sectional' className='navigation-links'>Contact</HashLink>
                    <Outlet/>
                </>
                ) : (
                    <Sandwich isCrossed={isCrossed} />
                )
            }
        </div>
    );
}

export default Navigation;