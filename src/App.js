import React, { useState, useEffect, } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Navigation from './components/First/Navigation/Navigation.js';
import First from './components/First/First.js';
import ListwithImg from './components/Generic-Components/ListwithImg.js';
// import Fourth from './components/Experiences/Fourth.js';
import Footer from './components/Contact-Me/Footer.js';
import Loading from './Loading.js';
import Blog from './Blog.js';

import { hobbiesArr, projectsArr, experienceArr } from './Data.js';

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



 
  
  const experiencesArr = [
    {
      imgSrc: '',
      title: '',
      description: "",
    },
  ];
  
  return ( 
      <BrowserRouter >

        <Routes>
          <Route path='/' element={
            <>
              <Loading />
              <div className={`App flex-column aitems-center color-white`}  id='app'>
                <Navigation isMobile={isMobile} />
                <First id={'home'} isMobile={mobileState}/>
                <ListwithImg marker={"Hobbies"} category={"Hobbies"}  data={ hobbiesArr } isMobile={mobileState}/>
                <ListwithImg marker={"Projects"} category={"Projects"}  data={ projectsArr } isMobile={mobileState}/>
                <ListwithImg marker={"Experience"} category={"Experience"}  data={ experienceArr } isMobile={mobileState}/>
                <Footer isMobile={mobileState}/>
                <Outlet />
              </div>
            </>
          }></Route>

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