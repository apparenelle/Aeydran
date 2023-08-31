import React from 'react';
import ThreeDStructure from './ThreeDStructure';
import { Canvas } from '@react-three/fiber';

export default function ThreeD( props ){
    
    return (
        <Canvas>
        <ambientLight intensity={-4} />
        <pointLight position={ [10, 10, 10] }/>
        <ThreeDStructure scale={props.nScale} position = {[0, 0, 0]}/>
        </Canvas>
    );
}

