//import all images and documents and us js to call them.
import React from 'react';

import './App.css';

function Navigation(props){
return (
        <div className='container-nav'>
            <a className='navigation-links'>Blog</a>
            <a className='navigation-links'>Skills</a>
            <a className='navigation-links'>Projects</a>
            <a className='navigation-links'>Contact</a>
        </div>
    );

}
export default Navigation;