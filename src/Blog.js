import React from 'react';

import Navigation from './components/First/Navigation/Navigation';
import Blog_Item from './Blog_Item';

import './Blog.css';


function Blog(props) {
    const day1Body = "Happy to say I've completed my react website. This site is hosted and ported on AWS Servers using Amplify and Port 443. The hardest part of this project was learning how to layout the CSS. Tracking the placements of different elements. Learning that some elements have pre-assigned css attributes from the html tag and overwriting them. The best part was incorporating three.js into the project to bring it to life with the spaceship. Why the render a spaceship? This year Congress started to openly address we might not be the only form of sentient life in the universe. So why not?";
    const day2Body = "Well, well, well, look whose working on a dating app. Tired of tinder and bumble I have been working on an alternative that will be ad-free. Centered around astrology, and will have a rating system for the people on it. Are you poor at texting back? This is not the app for you. I will discuss more on it later on. The goal is to have the Beta ready by December the latest. I've already gotten a few users to sign up and test.";

    return(
        <>
            <div className='main-window'>
                <div className="item-section-1">
                    <Blog_Item datePosted="September 7, 2023" title="Day 1 of Many" body={day1Body}/>
                    <Blog_Item datePosted="October 1, 2023" title="Creating is key." body={day2Body}/>
                </div>
                {/* <div className="item-section-1">
                    <Blog_Item datePosted="September 7, 2023" title="What I made Today" body="lee da lee lee dal deee"/>
                </div> */}
            </div>
        </>
    );
}
export default Blog;