import React, {Suspense, useRef} from "react";
import './About.css'
import { Canvas } from "@react-three/fiber";
import { useFrame, useThree} from '@react-three/fiber'
import DPMX from './Avatars/dpmX'

const Controls = () => {
    const {
      camera,
      gl: { domElement },
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame((state) => controls.current.update());
    return (
      <orbitControls
        ref={controls}
        args={[camera, domElement]}
        enableZoom={false}
        minPolarAngle={0}
      />
    );
  };

function about() {
    return (         
            <section className="container-app">
                    <section className="container">
                    <section className="project-info">
                            <h1 className="abouth1">Hi there, I'm Dwayne Paisley-Marshall</h1>
                            <p>One of the most intersting things you'll find about me, is my 
                            ability to creatively write code, alongside my passion for users.</p>
                            <p>My skillset is vast spanning from back-end to front end, from React/VR applications right the way to interactive HTML emails.</p>
                            <p>I'm currently obsesssed with 3D and VR I have a fun playground where you can see some of my exploits. </p>
                        </section>

                        <section className="project-info">
                      
                           <Canvas>   
                           <ambientLight />
                           <spotLight intensity={20}  />     
                                <Suspense fallback={null}>
                                    <Controls />
                                        <DPMX />
                                </Suspense>
                            </Canvas>                           
                        </section>
                       
                        
                </section> 
               
      </section>

    )
}

export default about;