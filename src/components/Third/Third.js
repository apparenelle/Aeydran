// import './App.css';
import './Third.Stylesheet.css'
import React from 'react';
import tradingAi from '../../assets/crypto-trading.jpg';
import dataAi from '../../assets/data-ai.png';


function Third(props){
    return(
        <section className='third-sectional'>
            <div className='third-sectional-container'>
                <h2>Projects</h2>
                <div className='projects-links'>
                    <div className='projects-text'>
                        <p className='projects-text-p'>
                        I have undertaken exciting projects that have allowed me to showcase my skills and passion for innovative solutions. One notable project involved developing a Python-based Dogecoin <span id='highlight'>trading API</span>, which utilized moving averages for automated trading strategies. By integrating with the Robinhood API for real-time data and trade execution, I achieved <span id='highlight'>successful automation</span>, optimized algorithm performance, and validated the strategy through rigorous back-testing. Another significant project involved creating a classification <span id='highlight'>AI model</span> that analyzed a CSV dataset to predict cancer presence based on various patient attributes. Through data preprocessing, feature engineering, and machine learning techniques, I trained the model to accurately classify individuals, demonstrating my proficiency in leveraging AI for valuable insights. These projects highlight my dedication to pushing boundaries, leveraging cutting-edge technologies, and delivering impactful solutions.
                        </p>
                    </div>
                    <div className='collective-projects-flex-container'>
                        <a href='#' className='projects-box-layout'>
                            <img className='projects-image' src={tradingAi}></img>
                            <div className='projects-label'><p>Trading</p></div>
                        </a>
                        <a className='projects-box-layout'href='#'>
                            <img className='projects-image' src={dataAi}></img>
                            <div className='projects-label'><p>Coding</p></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Third;