import React, { Suspense } from 'react';
import ThreeDStructure from './ThreeDStructure';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


export default function ThreeD( props ){
    
    return (
        <Suspense fallback={<span className="loading">loading ... </span>}>
            <Canvas className='ThreeD' id='ThreeD'>
                {/* <OrbitControls enableDamping={true}  /> */}
                {/* <OrbitControls enableZoom={true}  /> */}
                <ambientLight intensity={-4} />
                <pointLight position={ [10, 10, 10] }/>
                <ThreeDStructure scale={props.nScale} position = {[0, 0, 0]}/>
            </Canvas>
        </Suspense>
    );
}

