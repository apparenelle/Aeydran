import './App.css';
import React from 'react';
import bayernlbJobLogo from './assets/bayernlb2.jpg';
import nysJobLogo from './assets/nys.png';
import anaDataJobLogo from './assets/anadata.jpeg';
import sculptorJobLogo from './assets/sculptor.png';
import Footer from './Footer';


function Fourth(props) {
    return(
        <div className='fourth-sectional'>
            <div className='fourth-sectional-container'>
                <h2>Experiences</h2>
                <div className='box-layout-flex-row-container'>
                    <div className='experience-items-flex-container'>
                        <img className='experience-image' src={sculptorJobLogo}></img>
                        <div className='experience-label'><p>Sculptor Capital Management</p></div>
                    </div>
                    <div className='experience-items-flex-container'>
                        <img className='experience-image' src={bayernlbJobLogo}></img>
                        <div className='experience-label'><p>Bayerische LandesBank</p></div>
                    </div>
                </div>
                <div className='box-layout-flex-row-container'>
                    <div className='experience-items-flex-container'>
                        <img className='experience-image' src={anaDataJobLogo}></img>
                        <div className='experience-label'><p>Ana Data Consulting</p></div>
                    </div>
                    <div  className='experience-items-flex-container'>
                        <img className='experience-image' src={nysJobLogo}></img>
                        <div className='experience-label'><p>State of New York</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Fourth;