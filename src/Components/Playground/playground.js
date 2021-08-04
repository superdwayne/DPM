import React, { useRef, useState } from 'react'
import { extend, Canvas, useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Menu from '../menu';
import Intro from '../intro';
import * as THREE from 'three';


function Asset() {
  const gltf = useLoader(GLTFLoader, 'http://dwaynep-marshall.co.uk/1.gltf')
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

 



  function Home(_props) {

    const copy = 'hello'

    const ref = useRef()

    useFrame(() => (ref.current.rotation.x += 0.02, ref.current.rotation.y += 0.01 ,
        ref.current.rotation.z += 0.01, ref.current.scale.y = 0.38  
        //console.log(ref.current.userData)  
        ))
      

    return (

        <mesh ref={ref} userData={{ test: copy }} position={[0, 0, 0]} >
        <Intro  render={props => (
  <h1>Hello {props.target}</h1>
)} />
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



function Playgroundtest() {
    return (
      <>
      <Canvas 
        
        userData={'dwayne'}
        camera={{ fov: 5, position: [0, 0, 30] }} 
        style={{ width: window.innerWidth, height: window.innerHeight }}>
      
        
       <Asset /> 
       
        <KeyLight brightness={5.6} color="#fff" />
      {/* <Circle /> */}
      </Canvas>
     
      </>
    );
  }
    

export default Playgroundtest;