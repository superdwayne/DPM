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
                            <p>Constructivism is my learning style, I learn by doing.</p>
                            <p>Current stack: React/VR/AR/XR , Node.js, Blender/Snap/Spark, HTML/CSS, Javascript</p>
                            <p>Always open for collobrations </p>
                        </section>

                        <section className="project-info mob">
                      
                           <Canvas>   
                           <ambientLight />
                           <spotLight intensity={3} position={[20,20,20]}  />     
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