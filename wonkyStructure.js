import React from 'react';

import * as THREE from " three"; 

// import './App.css';

function wonkyStructure( props ){
    // run traditional js here

    return(
        <div></div>
    );
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000); // fov , aspect-ratio, closest visible object, farthest visibile object
const renderer= new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);