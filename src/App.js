import './App.css';
import React, { useRef} from 'react'
import {Canvas, useFrame } from 'react-three-fiber'
import Intro from './Components/intro';
import Request from './api/requests';

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

    // eslint-disable-next-line no-sequences
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


function Playground() {
 
    return (
      <>
      <Canvas 
       className={'main'}
        
        camera={{ fov: 5, position: [0, 0, 30] }} 
        style={{ width: window.innerWidth, height: window.innerHeight }}>
       <Home /> 
      </Canvas>
      <Intro />      
      </>
    );
  }
    

export default Playground;