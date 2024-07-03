import React, { Suspense } from 'react';
import ThreeDStructure from './ThreeDStructure';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


export default function ThreeD( {nScale} ){
    return (
        <Suspense>
            <Canvas className='three-d-canvas flex-grow-1'>
                {/* <OrbitControls enableZoom={true}  /> */}
                <ambientLight intensity={-4} />
                <pointLight position={ [10, 10, 10] }/>
                <ThreeDStructure scale={nScale} position = {[0, 0, 0]}/>
            </Canvas>
        </Suspense>
    );
}


// <Suspense fallback={<span className="loading">loading ... </span>}>
{/* <OrbitControls enableDamping={true}  /> */}