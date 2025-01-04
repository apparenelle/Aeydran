// import './App.css';
import './ListwithImg.css'
import ImageTextHorizontalCard from './ImgTextHorizontalCard';
import React from 'react';


function ListwithImg({category, data, isMobile, marker}) {
    return(
        <section id={marker} className='sectional color-white flex-column jcontent-space-around'>
            <h2  className='aself-center'>{category}</h2>
            
            {data.map(({imgSrc, title, description}, index) => {
                return (<ImageTextHorizontalCard key={index} isMobile={isMobile} imgSrc={imgSrc} title={title} description={description} img2nd={false}/>);
            })}
            
        </section>
        );
}

export default ListwithImg;


