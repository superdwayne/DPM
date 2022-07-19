import React, { Suspense, useRef, useState, useEffect  } from "react"
import { Canvas } from "@react-three/fiber"
import { useProgress, Html, Environment } from "@react-three/drei"
 
import Overlay from "./overlay"
import './App.css'

function Loader(props) {
  const { active, progress, errors, item, loaded, total } = useProgress()
  console.log(progress + 'Progress loaded')
  
  return (
    <>

  <Html wrapperClass center> 
    <section className="intro">
      <header className="dpm">
      <h1 style={{opacity: `${progress / 200}`, color: '#fff', fontSize: '150px', fontWeight: 'bolder'}}><span className='highlight'>DPM</span> IS {Math.ceil(progress)} % {active ? null : ''} A <span className='highlight'>CREATIVE</span> TECHNOLOGIST</h1>
      </header>
      
    </section>
  </Html>
 
  </>
  )
}

export default function App(props) {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  const Avatar = React.lazy(() => import('./avatar'));
  const { active, progress, errors, item, loaded, total } = useProgress()
  return (
    
    <>
      <Canvas style={{backgroundColor: "black" , display: "block" , height: "100vh", width: "100vw"}}
        shadows
        onCreated={(state) => state.events.connect(overlay.current)}
        raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
        <ambientLight intensity={1} />
      


       <Suspense fallback={<Loader />}>

          <Avatar scroll={scroll} />
         
          <Environment preset="city" />
        </Suspense>
      </Canvas>
     
      <Overlay active={active} ref={overlay} caption={caption} scroll={scroll} />
     
    </>
  )
}
