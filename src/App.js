import './App.css';
import React, { useRef, useState , useEffect } from 'react'
import { extend, Canvas, useFrame, useLoader } from 'react-three-fiber'
import Menu from './Components/menu';
import Intro from './Components/intro';
import Request from './api/requests';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Trainer from './assets/trainer/1.gltf'

import * as THREE from 'three';


function Asset() {
  const gltf = useLoader(GLTFLoader, Trainer)
  return <primitive object={gltf.scene} position={[0, 0, 0]} />
}

function KeyLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        color={color}
        intensity={brightness}
        position={[-2, 0, 5]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
    );
  }

  function Home() {

    const params = {
      method: 'GET',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    Request(`http://localhost:8002/api/index`, params, (response) => {
        console.log(response.shapes.circle)
       //  this.setState({ ranNumb: response });
      
      });

    const ref = useRef()

    useFrame(() => (ref.current.rotation.x += 0.02, ref.current.rotation.y += 0.01 
       // console.log(ref.current)  
        ))
      
      
    return (
        <mesh ref={ref} userData={{ test: 'copy' }} position={[0, 0, 0]} >
          <boxBufferGeometry attach="geometry" args={[9,10,1]}/>
          <meshNormalMaterial attach="material" wireframe={true} />
        </mesh>
    );
  }


  function Sphere() {


    const ref = useRef()

    useFrame(() => (ref.current.rotation.x += 0.03, ref.current.rotation.y += 0.01 ,
        ref.current.rotation.z += 0.01, ref.current.scale.y = 0.28  
          
        ))
        
    return (
      
      <mesh ref={ref} userData={{ test: "hello" }} position={[0, 0, 0]} >
        <boxBufferGeometry attach="geometry" args={[1,1,1]}/>
        <meshNormalMaterial attach="material" wireframe={true} />
      </mesh>
    );
  }

  function Circle() {

    const ref = useRef()

    // eslint-disable-next-line no-sequences
    useFrame(() => (ref.current.rotation.x += 0.03, ref.current.rotation.y += 0.01 ,
        ref.current.rotation.z += 0.01, ref.current.scale.y = 0.18  
        
        ))
        
    return (
      
      <mesh ref={ref}  userData={{ test: "hello" }} position={[0, 0, 0]} >
        <boxBufferGeometry attach="geometry" args={[50, 100, 1]} />
        <meshNormalMaterial attach="material" wireframe={true} />
      </mesh>
    );
  }
 

function Playground() {
 
    return (
      <>
      <Canvas 
       className={'main'}
        userData={'dwaynedd'}
        camera={{ fov: 5, position: [0, 0, 30] }} 
        style={{ width: window.innerWidth, height: window.innerHeight }}>
       <Home /> 
       <Asset />
      </Canvas>
      <Intro />

      {/* <Effect /> */}
      
      </>
    );
  }
    

export default Playground;