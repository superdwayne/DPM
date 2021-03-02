import React, { useRef, useState } from 'react'
import { extend, Canvas, useFrame } from 'react-three-fiber'
import Menu from '../menu';
import Intro from '../intro';
import * as THREE from 'three';


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
 

function Playground(props) {
    return (
      <>
      <Canvas 
        
        userData={'dwayne'}
        camera={{ fov: 5, position: [0, 0, 30] }} 
        style={{ width: window.innerWidth, height: window.innerHeight }}>
      
        
       {/* <Sphere /> */}
       <Home /> 
        {/* <KeyLight brightness={5.6} color="#fff" /> */}
      {/* <Circle /> */}
      </Canvas>
      <section className="overlay-main">
          <h1>Dwayne Paisley-Marshall</h1>
          <h2>Creative Front end developer</h2>
          {/* <h2><Menu /></h2> */}
        </section>
      </>
    );
  }
    

export default Playground;