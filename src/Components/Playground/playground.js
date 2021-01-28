import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'


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



  function Sphere() {

    const ref = useRef()

    useFrame(() => (ref.current.rotation.x += 0.03, ref.current.rotation.y += 0.01 ,
        ref.current.rotation.z += 0.01, ref.current.scale.y = 0.28  

        ))
        
    return (
      
      <mesh ref={ref} userData={{ test: "hello" }} position={[0, 0, 0]} >
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
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
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshNormalMaterial attach="material" wireframe={true} />
      </mesh>
    );
  }
 

function Playground() {
    return (
       
      <Canvas 
        camera={{ fov: 0.3, position: [0, 0, 100] }} 
        style={{ width: window.innerWidth, height: window.innerHeight }}>
       <Sphere />
        <KeyLight brightness={5.6} color="#fff" />
      {/* <Circle /> */}
      </Canvas>
    );
  }
    

export default Playground;