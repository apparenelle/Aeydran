import { useRef, useState, useEffect } from 'react';
import Navigation from './Navigation/Navigation.js';
import TechStack from './TechStack.js';
import ThreeD from '../../ThreeD.js';

// import './App.css';
import './First.Stylesheet.css';

function First(props) {
    let isMobile = props.isMobile;

    const [typedText, setTypedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const textArray = ["Master of Arms", "Software Engineer", "Big Data Savant", "Problem Solver", , ""];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    const [charIndex, setCharIndex] = useState(0);
    const [textArrayIndex, setTextArrayIndex] = useState(0);
    
    useEffect(() => {
        if (isTyping) {
            if (charIndex < textArray[textArrayIndex]?.length) {
                const timeout = setTimeout(() => {
                    setTypedText((prev) => prev + textArray[textArrayIndex].charAt(charIndex));
                    setCharIndex((prev) => prev + 1);
                }, typingDelay);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => setIsTyping(false), newTextDelay);
                return () => clearTimeout(timeout);
            }
        } else {
            if (charIndex > 0) {
                const timeout = setTimeout(() => {
                    setTypedText((prev) => prev.substring(0, prev?.length - 1));
                    setCharIndex((prev) => prev - 1);
                }, erasingDelay);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setTextArrayIndex((prev) => (prev + 1) % textArray?.length);
                    setIsTyping(true);
                }, typingDelay + 1100);
                return () => clearTimeout(timeout);
            }
        }
    }, [charIndex, isTyping, textArrayIndex]);

    return (
        <section className='sectional flex-column aitems-center jcontent-center'>
            <div className='first-sectional-container flex-column aitems-center jcontent-center'>
                <div className='home-container'>
                    <div className='home-info-container'>
                        <div className='photo-flex'>
                            {isMobile ? <ThreeD nScale={1.4}/> : <ThreeD nScale={1.4}/>}
                        </div>
                        <br></br>
                        <div className='greetings-flex'>
                            <div className='greetings-box'>
                                <h1>Adrian</h1>
                            {/* <h6 className='white'>Sometimes a...</h6> */}
                                <i className='flex-row'>
                                    <span className="dont-wrap-text">{typedText}</span>
                                    <span className={`cursor ${isTyping ? 'typing' : ''}`}>&nbsp;</span>
                                </i>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <TechStack/>
                </div>
            </div>
        </section>
    );
}

export default First;