import React, { useState, useEffect, } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Navigation from './components/First/Navigation/Navigation.js';
import First from './components/First/First.js';
import Second from './components/Second/Second.js';
import Third from './components/Third/Third.js';
import Fourth from './components/Fourth/Fourth.js';
import Footer from './components/Footer/Footer.js';

import Blog from './Blog.js';

import './App.css';
import './components/First/First.Stylesheet.css'


function App(props) {
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
      <BrowserRouter >
        <Navigation isMobile={isMobile} />

        <Routes>
          <Route path='/' element={
            <div className="App" id='app'>
              <First isMobile={mobileState}/>
              <Second isMobile={mobileState}/>
              <Third isMobile={mobileState}/>
              <Fourth isMobile={mobileState}/>
              <Footer isMobile={mobileState}/>
              <Outlet />
            </div>}>
          </Route>

          <Route path='blog' element={
            <>
              <div className='App' id='app'>
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