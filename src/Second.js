import './App.css';
import React from 'react';

import {itemBalanceWidthCalculator} from './Scripts';


function Second(props) {
    // itemBalanceWidthCalculator("passion-box-layout");
    if(props.isMobile == false) {
        return(
            <section className='second-sectional'>
                <div className='second-sectional-container'>
                    <h2>Passions</h2>
                    <div className='passion-links'>
                        <div className='collective-passions-flex-container'>
                            <a href='#' className='passion-box-layout'>
                                <img className='passion-image' src='https://media.giphy.com/media/1569RvwRjejO2IcueA/giphy-downsized-large.gif'></img>
                                <div className='passion-label'><p>Trading</p></div>
                            </a>
                            <a className='passion-box-layout'href='#'>
                                <img className='passion-image' src='https://media.giphy.com/media/wwg1suUiTbCY8H8vIA/giphy-downsized-large.gif'></img>
                                <div className='passion-label'><p>Coding</p></div>
                            </a>
                            {/* <a className='passion-box-layout' href='#'></a> */}
                            <a className='passion-box-layout' href='#'>
                                <img className='passion-image' src='https://media.giphy.com/media/3oEduKi6hUgSVAay4M/giphy.gif'></img>
                                <div className='passion-label'><p>Engineering</p></div>
                            </a>
                            <a className='passion-box-layout' href='#'>
                                <img className='passion-image' src='https://media.giphy.com/media/26gshn9NXKOMrnysU/giphy.gif'></img>
                                <div className='passion-label'><p>Photography</p></div>
                            </a>
                            {/* <a className='passion-box-layout' href='#'></a>  */}

                        </div>
                        <div className='passion-text'>
                            <p className='passion-text-p'>
                            Welcome to my portfolio website! Here, you'll find the perfect blend of my four passions: coding, engineering, photography, and trading. Through coding, I bring ideas to life and solve complex problems. Engineering bridges imagination with practicality, allowing me to create lasting structures and technologies. Photography freezes moments and shares unique perspectives. Trading offers an exhilarating world of numbers and patterns. Explore my projects and witness the fusion of these passions. Let's inspire and leave a lasting impact together. Enjoy your visit!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    else { /*IsMobile = True */
        return(
            <section className='second-sectional'>
                <h2>Passions</h2>
                <div className='second-sectional-container'>
                    <div className='collective-passions-flex-container'>
                            <a href='#' className='passion-box-layout'>
                                <img className='passion-image' src='https://media.giphy.com/media/1569RvwRjejO2IcueA/giphy-downsized-large.gif'></img>
                                <div className='passion-label'><p>Trading</p></div>
                            </a>
                            
                            <a className='passion-box-layout'href='#'>
                                <img className='passion-image' src='https://media.giphy.com/media/wwg1suUiTbCY8H8vIA/giphy-downsized-large.gif'></img>
                                <div className='passion-label'><p>Coding</p></div>
                            </a>
                    </div>
                    <div className='collective-passions-flex-container'>
                        <a className='passion-box-layout' href='#'>
                            <img className='passion-image' src='https://media.giphy.com/media/3oEduKi6hUgSVAay4M/giphy.gif'></img>
                            <div className='passion-label'><p>Engineering</p></div>
                        </a>
                        <a className='passion-box-layout' href='#'>
                            <img className='passion-image' src='https://media.giphy.com/media/26gshn9NXKOMrnysU/giphy.gif'></img>
                            <div className='passion-label'><p>Photography</p></div>
                        </a>
                    </div>
                </div>
                
            </section>
        );
    }
}
export default Second;


