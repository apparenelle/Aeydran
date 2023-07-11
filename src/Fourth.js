import './App.css';
import React from 'react';
import bayernlbJobLogo from './assets/bayernlb2.jpg';
import nysJobLogo from './assets/nys.png';
import anaDataJobLogo from './assets/anadata.jpeg';
import sculptorJobLogo from './assets/sculptor.png';
import Footer from './Footer';


function Fourth(props) {
    let pcPage = <div className='fourth-sectional'>
            <div className='fourth-sectional-container'>
                <h2>Experiences</h2>
                <div className='experience-links'>
                    <div className='experience-items-flex-container'>
                        <img className='experience-image' src={sculptorJobLogo}></img>
                        <div className='experience-label'><p>Sculptor Capital</p></div>
                    </div>
                    <div className='experience-items-flex-container'>
                        <img className='experience-image' src={bayernlbJobLogo}></img>
                        <div className='experience-label'><p>Bayerische LandesBank</p></div>
                    </div>
                    <div className='experience-items-flex-container'>
                        <img className='experience-image' src={anaDataJobLogo}></img>
                        <div className='experience-label'><p>Ana Data Consulting</p></div>
                    </div>
                    <div  className='experience-items-flex-container'>
                        <img className='experience-image' src={nysJobLogo}></img>
                        <div className='experience-label'><p>State of New York</p></div>
                    </div>
                </div>
                <div className='experience-text'>
                    <p>I am an accomplished software engineer with a strong background in Computer Science. Having gained extensive experience in <span id='highlight'>system engineering</span> and <span id='highlight'>administration</span>. Currently, I am working at Sculptor Capital Management, where I excel in managing complex IT infrastructures, troubleshooting technologies, and deploying software solutions. My previous roles as a <span id='highlight'>Full Stack C# Developer</span> at Ana Data Consulting and an IT Support Specialist at the State of New York have allowed me to develop a proven track record in creating innovative applications and delivering high-quality software products. With my expertise in multiple programming languages and a strong passion for staying updated with emerging technologies, I am eagerly seeking new software engineering opportunities to contribute to cutting-edge projects and drive technological advancements.
                    </p>
                </div>
            </div>
        </div>;

    let mobilePage = <div className='fourth-sectional'>
    <div className='fourth-sectional-container'>
        <h2>Experiences</h2>
        <div className='experience-links'>
            <div className='experience-items-flex-container'>
                <img className='experience-image' src={sculptorJobLogo}></img>
            </div>
            <div className='experience-items-flex-container'>
                <img className='experience-image' src={bayernlbJobLogo}></img>
            </div>
            <div className='experience-items-flex-container'>
                <img className='experience-image' src={anaDataJobLogo}></img>
            </div>
            <div  className='experience-items-flex-container'>
                <img className='experience-image' src={nysJobLogo}></img>
            </div>
        </div>
        <div className='experience-text'>
            <p>I am an accomplished software engineer with a strong background in Computer Science. Having gained extensive experience in <span id='highlight'>system engineering</span> and <span id='highlight'>administration</span>. Currently, I am working at Sculptor Capital Management, where I excel in managing complex IT infrastructures, troubleshooting technologies, and deploying software solutions. My previous roles as a <span id='highlight'>Full Stack C# Developer</span> at Ana Data Consulting and an IT Support Specialist at the State of New York have allowed me to develop a proven track record in creating innovative applications and delivering high-quality software products. With my expertise in multiple programming languages and a strong passion for staying updated with emerging technologies, I am eagerly seeking new software engineering opportunities to contribute to cutting-edge projects and drive technological advancements.
            </p>
        </div>
    </div>
</div>;
    
    if(!props.isMobile){
        return(pcPage);
    }
    else{
        return(mobilePage);
    }
}
export default Fourth;