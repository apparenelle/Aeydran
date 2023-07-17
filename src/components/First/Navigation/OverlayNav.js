// import './App.css';
import './Navigation.Stylesheet.css';

import React from 'react';
// import { Sandwich } from './Sandwich';

function OverlayNav(props) {
    return(
        <div className="overlay" id='myNav'>
            <div className="overlay-content">
                <a href="#">Blog</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contacts</a>
            </div>
        </div>

    );
}
export default OverlayNav;
