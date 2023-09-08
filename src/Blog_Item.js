import React from "react";
import './Blog_Item.css'

function Blog_Item(props){
    return(
        <div className='blog-item'>
            <h2>{props.title}</h2>
            <h5>{props.datePosted}</h5>
            <p>{props.body}</p>
        </div>
    );
} export default Blog_Item;