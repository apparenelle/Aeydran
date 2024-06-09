//import all images and documents and us js to call them.
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
    const textArray = ["Software Engineer", "Data Engineer", "Problem Solver"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    
    useEffect(() => {
        let textArrayIndex = 0;
        let charIndex = 0;
        
        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                setTypedText(prev => prev + textArray[textArrayIndex].charAt(charIndex));
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setIsTyping(false);
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                setTypedText(prev => prev.substring(0, prev.length - 1));
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex = (textArrayIndex + 1) % textArray.length;
                setIsTyping(true);
                setTimeout(type, typingDelay + 1100);
            }
        }

        type();
    }, []);

    return (
        <section className='first-sectional flex-column aitems-center'>
            <div className='first-sectional-container'>
                <div className='home-container'>
                    <div className='home-info-container'>
                        <div className='photo-flex'>
                            {isMobile ? ( <ThreeD nScale={1.4}/> ) : ( <ThreeD nScale={1.4}/> )}
                        </div>
                        <div className='greetings-flex'>
                            <div className='greetings-box'>
                                <h1>Aeydran</h1>
                                <i>
                                    <span className="typed-text">{typedText}</span>
                                    <span className={`cursor ${isTyping ? 'typing' : ''}`}>&nbsp;</span>
                                </i>
                            </div>
                        </div>
                    </div>
                    <TechStack/>
                </div>
            </div>
        </section>
    );
}
export default First;