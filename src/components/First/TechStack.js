import React from 'react';
import '../../App.css';

import csharpPng from '../../assets/tech-stack-images/csharp.png';
import jsPng from '../../assets/tech-stack-images/JS-icon.png';
import pythonPng from '../../assets/tech-stack-images/Python-logo.png';
import reactPng from '../../assets/tech-stack-images/React-icon.png';
import sqlPng from '../../assets/tech-stack-images/SQL-icon.png';


function TechStack( props ){

    return(
        <div className='tech-stack-container flex-column aitems-center jcontent-center wrap'>
            <div classname='flex-row aitems-center jcontent-center'>
                <img className='stackPng' src={reactPng} alt='react framework'></img>
                <img className='stackPng' src={jsPng} alt='javascript'></img>
                <img className='stackPng' src={pythonPng} alt='python'></img>
            </div>
            <div classname='flex-row aitems-center jcontent-center'>
                <img className='stackPngSQL' src={sqlPng} alt='SQL'></img>
                <img className='stackPng' src={csharpPng} alt='c-sharp'></img>
            </div>
        </div>
    );
}

export default TechStack;