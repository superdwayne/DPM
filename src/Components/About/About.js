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
                            is my ability to create beautiful experiences from a single concept.</p>
                            <p>I enjoy employing the use of "smoke and mirrors" I create things where a user persives something is happening which is different to their normal Web 2.0 experience </p>
                            <p>My skillset is vast expanding I pick up new technologies and skills really fast, current my stack is React/VR/AR/XR Node etc//</p>
                            <p>I'm currently obsesssed with 3D and VR. </p>
                        </section>

                        <section className="project-info mob">
                      
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