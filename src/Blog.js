import React from 'react';

import Navigation from './components/First/Navigation/Navigation';
import Blog_Item from './Blog_Item';

import './Blog.css';


function Blog(props) {
    let day1Body = "Happy to say I've completed my react website. This site is hosted and ported on AWS Servers using Amplify and Port 443. The hardest part of this project was learning how to layout the CSS. Tracking the placements of different elements. Learning that some elements have pre-assigned css attributes from the html tag and overwriting them. The best part was incorporating three.js into the project to bring it to life with the spaceship. Why the render a spaceship? This year Congress started to openly address we might not be the only form of sentient life in the universe. So why not?";
    let day2Body = "Looking back at this there's some changes I planned on making and now I have. I plan on cleaning up this blog item object. Overall for V4, this is good. Next, I want to add my years of experience with different tech and finish this object."
    return(
        <>
            <div className='main-window'>
                <div className="item-section-1">
                    <Blog_Item datePosted="September 7, 2023" title="Day 1 of Many" body={day1Body}/>
                </div>
                
                <div className="item-section-1">
                    <Blog_Item datePosted="July 7, 2024" title="Day 2?" body={day2Body}/>
                </div>
            </div>
        </>
    );
}
export default Blog;