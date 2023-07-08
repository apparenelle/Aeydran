import './App.css';
import React from 'react';

export class Third extends React.Component{
    render(){
        return(
        <section className='third-sectional'>
            <div className='third-sectional-container'>
                <h2>Projects</h2>
                
                <div className='projects-links'>
                <div className='projects-text'>
                        <p className='projects-text-p'>
                        Welcome to my portfolio website! Here, you'll find the perfect blend of my four passions: coding, engineering, photography, and trading. Through coding, I bring ideas to life and solve complex problems. Engineering bridges imagination with practicality, allowing me to create lasting structures and technologies. Photography freezes moments and shares unique perspectives. Trading offers an exhilarating world of numbers and patterns. Explore my projects and witness the fusion of these passions. Let's inspire and leave a lasting impact together. Enjoy your visit!
                        </p>
                    </div>
                    <div className='collective-projects-flex-container'>
                        <a href='#' className='projects-box-layout'>
                            <img className='projects-image' src='https://media.giphy.com/media/1569RvwRjejO2IcueA/giphy-downsized-large.gif'></img>
                            <div className='projects-label'><p>Trading</p></div>
                        </a>
                        <a className='projects-box-layout'href='#'>
                            <img className='projects-image' src='https://media.giphy.com/media/1569RvwRjejO2IcueA/giphy-downsized-large.gif'></img>
                            <div className='projects-label'><p>Coding</p></div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>
        );
    }
}