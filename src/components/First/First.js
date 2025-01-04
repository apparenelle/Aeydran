import { useRef, useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation.js';
import TechStack from './TechStack.js';
import ThreeD from '../../ThreeD.js';
import './First.Stylesheet.css';
import me from "../../assets/adrian-3.jpg"

function First({isMobile}) {
    // let isMobile = props.isMobile;

    const [typedText, setTypedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const textArray = ["", "( Software Engineer )", "( Trader )", "( Photographer )", "( Dreamer )", "( Me )", ""];
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
        <section className='sectional flex-column aitems-center jcontent-center color-white'>
            <div className= {`jcontent-space-around ${isMobile ? 'flex-column aitems-center':'flex-row aitems-center'} `}>
                    <img src={me} alt="picture of creator" className="my-pic"/>
                <div className={`greetings-flex flex-column  jcontent-center ${isMobile ? '' : ''}`}>
                    <div>
                        <br/>
                        <h1>Adrian Francis</h1>
                        <p className='white font-small'>Master of The Universe</p>
                        
                        <br/>
                        <p className='flex-row jcontent-center'>
                            <span className="dont-wrap-text">{typedText}</span>
                            <span className={`cursor ${isTyping ? 'typing' : ''}`}>&nbsp;</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* <br></br> */}
            {/* <br></br> */}
            {/* <TechStack isMobile={isMobile}/> */}
        </section>
    );
}

export default First;