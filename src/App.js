import React, { useState, useEffect, useRef } from 'react';


import First from './components/First/First.js';
import Second from './components/Second/Second.js';
import Third from './components/Third/Third.js';
import Fourth from './components/Fourth/Fourth.js';
import Footer from './components/Footer/Footer.js';

import './App.css';
// import './fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'



function App() {
  let windowWidth = window.innerWidth;
  let mobileWidth = 1025; //jsx marker to swap to mobile
  let isMobile = undefined;
  
  if (windowWidth < mobileWidth) {
    isMobile = true;
  }
  else {
    isMobile = false;
  }

  const [mobileState, setIsMobile] = useState(isMobile);

  // Troubleshooting whether in mobile mode or not.
  // console.log(`This is initial width: ${windowWidth}px. Mobile: ${isMobile}.`);


  useEffect(() => {
    window.addEventListener("resize", () =>{
      windowWidth = window.innerWidth;
      if(windowWidth<mobileWidth)
      {
        isMobile=true;
      }
      else
      {
        isMobile=false
      }
      console.log(`Window width is ${windowWidth}px. Are we in mobile mode: ${isMobile}.`); 
      setIsMobile(isMobile);
    });
  }, [windowWidth, isMobile]);



  return ( 
    <div className="App" id='app'  >
      <First isMobile={mobileState}/>
      <Second isMobile={mobileState}/>
      <Third isMobile={mobileState}/>
      <Fourth isMobile={mobileState}/>
      <Footer isMobile={mobileState}/>
    </div>
  );
}

export default App;