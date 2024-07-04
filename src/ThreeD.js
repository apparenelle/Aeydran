import React, { Suspense } from 'react';
import ThreeDStructure from './ThreeDStructure';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


export default function ThreeD( {nScale} ){
    return (
        <div className='three-d'>
            <Canvas>
                <ambientLight intensity={-4} />
                <pointLight position={ [10, 10, 10] }/>
                <ThreeDStructure scale={nScale} position = {[0, 0, 0]}/>
            </Canvas>
        </div>
    );
}



// _________________Spare Parts_________________//
// <Suspense fallback={<span className="loading">loading ... </span>}>
{/* <OrbitControls enableDamping={true}  /> */}