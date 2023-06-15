import './App.css';
import React from 'react';

function Second(props) {
    if(props.isMobile == false) {
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