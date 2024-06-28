// import './App.css';
import './Footer.Stylesheet.css'
import React from 'react';
import { Outlet } from 'react-router-dom';

function Footer(props){
    return(
        <>
            <div id='footer-sectional' className='footer-sectional'>
            <h2>Contact Me</h2>
            <div className='footer-links-flex'>
                <a href='mailto:aeydran@gmail.com' >Email</a>
                <a href='https://www.linkedin.com/in/adrian-francis-a0aa39181/' target={"_blank"}>LinkedIn</a>
                <a href='https://github.com/apparenelle' target="_blank" rel='noreferrer'>Github</a>
            </div>
            </div>
            < Outlet />
        </>
    );
}

export default Footer;