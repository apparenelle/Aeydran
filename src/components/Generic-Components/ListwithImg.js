// import './App.css';
import './ListwithImg.css'
import ImageTextHorizontalCard from './ImgTextHorizontalCard';
import React from 'react';


function ListwithImg({isMobile}) {
    
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
        },]
    
    return(
        <section className='sectional color-white flex-column jcontent-space-around' id='second-sectional'>
            <h2 className='aself-center'>Hobbies</h2>
            
            {hobbiesArr.map(({imgSrc, title, description}, index) => {
                return (<ImageTextHorizontalCard key={index} isMobile={isMobile} imgSrc={imgSrc} title={title} description={description} img2nd={false}/>);
            })}
            
        </section>
        );
}

export default ListwithImg;


