import React from 'react';
import Blog_Item from './Blog_Item';
import './Blog.css';


function Blog() {
    const day1Body = "Happy to say I've completed my react website. This site is hosted and ported on AWS Servers using Amplify and Port 443. The hardest part of this project was learning how to layout the CSS. Tracking the placements of different elements. Learning that some elements have pre-assigned css attributes from the html tag and overwriting them. The best part was incorporating three.js into the project to bring it to life with the spaceship. Why the render a spaceship? This year Congress started to openly address we might not be the only form of sentient life in the universe. So why not?";
    
    const day2Body = "Well, well, well, look whose working on a dating app. Tired of tinder and bumble I have been working on an alternative that will be ad-free. Centered around astrology, and will have a rating system for the people on it. Are you poor at texting back? This is not the app for you. I will discuss more on it later on. The goal is to have the Beta ready by December the latest. I've already gotten a few users to sign up and test.";

    let day3Body = "Looking back at this there's some changes I planned on making and now I have. I plan on cleaning up this blog item object. Overall for V4, this is good. Next, I want to add my years of experience with different tech and finish this object."
    
    const day4Body = [
        "Goodbye 2024, I'd love to say you'd be missed but *shrugs*. As for 2025, I am proud to announce that my app bonfire is now available! Feel free to check it out at ",
        <a key="link" href="https://www.meetatbonfire.com/" target="_blank" rel="noopener noreferrer">Bonfire</a>,
        ". This is the year of creativity. A year for taking on new projects. Chasing down dreams and seizing the day. I welcome you with open arms."
    ];
    
    return(
        <div className='main-window'>
            <div className="item-section-1">
                <Blog_Item datePosted="September 7, 2023" title="Day 1" body={day1Body}/>
            </div>
            
            <div className='item-section-1'>
                <Blog_Item datePosted="October 1, 2023" title="Day 2" body={day2Body}/>
            </div>
            
            <div className="item-section-1">
                <Blog_Item datePosted="July 7, 2024" title="Day 3" body={day3Body}/>
            </div>

            <div className="item-section-1">
                <Blog_Item datePosted="January 1, 2025" title="Day 4" body={day4Body}/>
            </div>
        </div>
    );
}

export default Blog;