import React, { useState, useEffect, } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Navigation from './components/First/Navigation/Navigation.js';
import First from './components/First/First.js';
import Second from './components/Hobbies/Second.js';
import Third from './components/Projects/Third.js';
import Fourth from './components/Experiences/Fourth.js';
import Footer from './components/Contact-Me/Footer.js';
import Loading from './Loading.js';
import Blog from './Blog.js';

import './App.css';
import './flex.css';
import './components/First/First.Stylesheet.css'


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

  useEffect(() => {
    window.addEventListener("resize", () =>{
      windowWidth = window.innerWidth;
      { windowWidth<mobileWidth ? (isMobile=true) : (isMobile=false) }
      
      console.log(`Window width is ${windowWidth}px. Are we in mobile mode: ${isMobile}.`); 
      setIsMobile(isMobile);
    });
  }, [windowWidth, isMobile]);

  
  
  
  return ( 
      <BrowserRouter >

        <Routes>
          <Route path='/' element={
            <>
              <Loading />
              <div className={`App flex-column aitems-center color-white jcontent-center`}  id='app'>
                <Navigation isMobile={isMobile} />
                <First id={'home'} isMobile={mobileState}/>
                <Second isMobile={mobileState}/>
                <Third isMobile={mobileState}/>
                <Fourth isMobile={mobileState}/>
                <Footer isMobile={mobileState}/>
                <Outlet />
              </div>
            </>
          }>
          </Route>

          <Route path='blog' element={
            <>
              <div className='App' id='app'>
                <Navigation isMobile={isMobile} />
                <Blog isMobile={mobileState} />
                <Outlet />
              </div>
            </>
          }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;