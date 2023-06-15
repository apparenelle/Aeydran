import React, { useState, useEffect, useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';


import First from './First.js';
import Second from './Second.js';
import {Third} from './Third.js';
import {Fourth} from './Fourth.js';
import {Footer} from './Footer.js';
import './App.css';
import './Tablet.css';
import './Mobile.css';
import './fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'



function App() {
  let width = window.innerWidth;
  let mobileWidth = 1025; //in pixels swaps website over to mobile
  let isMobile = undefined;
  
  if (width < mobileWidth) {
    isMobile = true;
  }
  else {
    isMobile = false;
  }

  //use State could go here
  const [mobileState, setIsMobile] = useState(isMobile);

  console.log(`This is initial width: ${width}px. Mobile: ${isMobile}.`);


  useEffect(() => {
    window.addEventListener("resize", () =>{
      width = window.innerWidth;
      if(width<mobileWidth)
      {
        isMobile=true;
      }
      else
      {
        isMobile=false
      }
      console.log(`Window width is ${width}px. Are we in mobile mode: ${isMobile}.`); 
      setIsMobile(isMobile);
      // sleep(500);  //only use to slow down in production if necessary
    });
  }, [width, isMobile]);

  const scrollRef = useRef(null);
  useScrollSnap({ ref:scrollRef, duration:2, delay: 0});


  return ( 
    <div className="App" id='app' ref={scrollRef}>
      {/* <Bar isMobile={mobileState} /> */}
      <First isMobile={mobileState}/>
      <Second isMobile={mobileState}/>
      <Third isMobile={mobileState}/>
      <Fourth isMobile={mobileState}/>
      <Footer isMobile={mobileState}/>
      </div>
  );
}

function sleep(ms) {
  // console.log("I slept"); works -- supposed to slow down render calls
  // use just in case too many calls are occuring
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default App;
