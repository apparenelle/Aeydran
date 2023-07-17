import React from 'react';
import '../../App.css';

import csharpPng from '../../assets/tech-stack-images/csharp.png';
import jsPng from '../../assets/tech-stack-images/JS-icon.png';
import pythonPng from '../../assets/tech-stack-images/Python-logo.png';
import reactPng from '../../assets/tech-stack-images/React-icon.png';
import sqlPng from '../../assets/tech-stack-images/SQL-icon.png';



function TechStack( props ){
    // run traditional js here

    return(
        <div className='tech-stack-container'>
            <img className='stackPng' src={reactPng}></img>
            <img className='stackPng' src={jsPng}></img>
            <img className='stackPng' src={pythonPng}></img>
            <img className='stackPngSQL' src={sqlPng}></img>
            <img className='stackPng' src={csharpPng}></img>
        </div>
    );
}

export default TechStack;