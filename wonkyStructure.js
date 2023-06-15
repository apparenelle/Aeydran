//https://www.tutorialspoint.com/threejs/threejs_responsive_design.htm
import React from 'react';

import * as THREE from " three"; 
import * as dat from "dat-gui"
import './App.css';
import { Third } from './src/Third';

function wonkyStructure( props ){
    // run traditional js here
    let width = window.innerWidth;
    let height = window.innerHeight;

    const gui = new dat.gui();
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x262626);
    
    const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000); // fov , aspect-ratio, closest visible object, farthest visibile object
    camera.position.set(0, 0, 10);

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        wireframe: true,
    });
    const cube = new THREE.MESH(geometry, material);

    scene.add(cube);


    const renderer= new THREE.WebGLRenderer( {alpha:true} );

    renderer.setSize(window.innerWidth, window.innerHeight);


    return(
        <canvas></canvas>
    );
}

