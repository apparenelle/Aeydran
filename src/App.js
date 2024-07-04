import React, { useState, useEffect, } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Navigation from './components/First/Navigation/Navigation.js';
import First from './components/First/First.js';
import ListwithImg from './components/Generic-Components/ListwithImg.js';
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

  const hobbiesArr = [
    {
        imgSrc: 'https://media.giphy.com/media/1569RvwRjejO2IcueA/giphy-downsized-large.gif',
        title: 'Trading',
        description: 'Started trading in 2017, mostly stocks and crypto.'
    },
    {
        imgSrc: 'https://media.giphy.com/media/3oEduKi6hUgSVAay4M/giphy.gif',
        title: 'Engineering',
        description: "Old friends introduced me into engineering, started small w/ fixing laptops. " +
                    "Progressing to building custom pc's and working on cars. " + 
                    "In future, I want to get into 3D printing and arduino's."
    },
    {
        imgSrc: 'https://media.giphy.com/media/26gshn9NXKOMrnysU/giphy.gif',
        title: 'Photography',
        description: "Started up this hobby during Covid-19 pandemic, " + 
                    "it was great to be able to document what life was like " + 
                    "during the first major pandemic of the 20th century."
    },
    {
        imgSrc: 'https://media.giphy.com/media/wwg1suUiTbCY8H8vIA/giphy-downsized-large.gif',
        title: 'Coding',
        description: "Picked up this skill back in 2016 when I was researching different career paths. " +
                    "I love the development process, creating new technologies and the ownership of each project. "
    },];

  const projectsArr = [
    {
      imgSrc: '',
      title: '',
      description: "",
    },
    {
      imgSrc: '',
      title: '',
      description: "",
    },
    {
      imgSrc: '',
      title: '',
      description: "",
    },
  ];
  
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
                <ListwithImg isMobile={mobileState}/>
                <Third isMobile={mobileState}/>
                <Fourth isMobile={mobileState}/>
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