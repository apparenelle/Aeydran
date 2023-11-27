import React, { useRef } from 'react'
import { useGLTF, } from '@react-three/drei'
import {  useFrame } from '@react-three/fiber'

export default function ThreeDStructure(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('./assets/Eagle.glb');
  
    useFrame((state, delta) => ( group.current.rotation.y += delta/15)); 
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.Cube005.geometry} material={materials.Mat0} />
            <mesh geometry={nodes.Cube005_1.geometry} material={materials.Mat1} />
            <mesh geometry={nodes.Cube005_2.geometry} material={materials.Mat2} />
            <mesh geometry={nodes.Cube005_3.geometry} material={materials.Window_Frame} />
            <mesh geometry={nodes.Cube005_4.geometry} material={materials.Mat4} />
            <mesh geometry={nodes.Cube005_5.geometry} material={materials.Mat3} />
            <mesh geometry={nodes.Cube005_6.geometry} material={materials.Window} />
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf')




