import React from 'react';
import ThreeDStructure from './ThreeDStructure';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


export default function ThreeD( props ){
    
    return (
        <Canvas>
            <OrbitControls enableDamping={true} />
            <ambientLight intensity={-4} />
            <pointLight position={ [10, 10, 10] }/>
            <ThreeDStructure scale={props.nScale} position = {[0, 0, 0]}/>
        </Canvas>
    );
}

