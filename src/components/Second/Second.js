// import './App.css';
import './Second.Stylesheet.css'
import React from 'react';


function Second(props) {
        return(
            <section className='second-sectional' id='second-sectional'>
                <div className='second-sectional-container'>
                    <h2>Passions</h2>
                    <div className='passion-links'>
                        <div className='collective-passions-flex-container'>
                            <a href='#' className='passion-box-layout'>
                                <img className='passion-image' src='https://media.giphy.com/media/1569RvwRjejO2IcueA/giphy-downsized-large.gif'></img>
                                <div className='passion-label'><p>Trading</p></div>
                            </a>
                            <a className='passion-box-layout' href='#'>
                                <img className='passion-image' src='https://media.giphy.com/media/3oEduKi6hUgSVAay4M/giphy.gif'></img>
                                <div className='passion-label'><p>Engineering</p></div>
                            </a>
                            <a className='passion-box-layout' href='#'>
                                <img className='passion-image' src='https://media.giphy.com/media/26gshn9NXKOMrnysU/giphy.gif'></img>
                                <div className='passion-label'><p>Photography</p></div>
                            </a>
                            <a className='passion-box-layout'href='#'>
                                <img className='passion-image' src='https://media.giphy.com/media/wwg1suUiTbCY8H8vIA/giphy-downsized-large.gif'></img>
                                <div className='passion-label'><p>Coding</p></div>
                            </a>
                        </div>
                        <div className='passion-text'>
                            <p className='passion-text-p'>
                            Welcome to my portfolio website! Here, you'll find the perfect blend of my four passions: coding, engineering, photography, and trading. Through coding, I bring ideas to life and <span id='highlight'>solve complex problems</span>. Engineering bridges imagination with practicality, allowing me to create lasting structures and technologies. Photography freezes moments and shares unique perspectives. Trading offers an exhilarating world of <span id='highlight'>numbers</span> and <span id='highlight'>patterns</span>. Explore my projects and witness the fusion of these passions. Let's inspire and leave a lasting impact together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default Second;


