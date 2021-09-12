import React, { useRef, Suspense } from 'react'
import Loader from '../Loader';
import { extend, Canvas, useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Close from '../Close'
import Intro from '../intro';
import * as THREE from 'three';




function Trainer() {
  const gltf1 = useLoader(GLTFLoader, 'https://farfetch-cors.herokuapp.com/http://dwaynep-marshall.co.uk/1.gltf')
  const gltf2 = useLoader(GLTFLoader, 'https://farfetch-cors.herokuapp.com/http://dwaynep-marshall.co.uk/2.gltf')
  const gltf3 = useLoader(GLTFLoader, 'https://farfetch-cors.herokuapp.com/http://dwaynep-marshall.co.uk/3.gltf')
  const gltf4 = useLoader(GLTFLoader, 'https://farfetch-cors.herokuapp.com/http://dwaynep-marshall.co.uk/4.gltf')
  const gltf5 = useLoader(GLTFLoader, 'https://farfetch-cors.herokuapp.com/http://dwaynep-marshall.co.uk/5.gltf')
  const gltf6 = useLoader(GLTFLoader, 'https://farfetch-cors.herokuapp.com/http://dwaynep-marshall.co.uk/6.gltf')
  const gltf7 = useLoader(GLTFLoader, 'https://farfetch-cors.herokuapp.com/http://dwaynep-marshall.co.uk/7.gltf')
  return (
    <>
      <primitive object={gltf1.scene} scale={0.2} position={0} />
      <primitive object={gltf2.scene} scale={0.2} position={0} />
      <primitive object={gltf3.scene} scale={0.2} position={0} />
      <primitive object={gltf4.scene} scale={0.2} position={0} />
      <primitive object={gltf5.scene} scale={0.2} position={[0.5, -0.8, 0]} />
      <primitive object={gltf6.scene} scale={0.2} position={[0.5, -0.7, 0]} />
      <primitive object={gltf7.scene} scale={0.2} position={0} />
      </>
    
    );
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
function Box() {
    const myMesh = React.useRef()

    useFrame(() => {
      myMesh.current.rotation.y += 0.01
    })

    return (
      <mesh ref={myMesh}  scale={[4, 4, 4]} wireframe="true">
        <boxBufferGeometry attach="geometry"  args={[0.90, 0.90, 0.90]} />
        <meshStandardMaterial attach="material"  wireframe={true} color={"#fff"} />
      </mesh>
      
    )
  }


function Playground() {

    return (
      <>
      <Close />
      <Canvas 
        camera={{ fov: 5, position: [0, 0, 30] }} 
        style={{ width: window.innerWidth, height: window.innerHeight }}>
       <Suspense fallback={<Loader />}>
        <Box/>
        <ambientLight args={[0xffffff]} intensity={0.97}  />
        <Trainer />
     </Suspense>  
        <KeyLight brightness={5.6} color="#fff" />
      <Sphere />
      </Canvas>
     
      </>
    );
  }
    

export default Playground;