import React, {Suspense } from "react";
import { Stars  } from "@react-three/drei"
import History from '../Hooks/history'

import {Canvas } from '@react-three/fiber'
import DPM from './dpm-head'

function Threedee() {
  return <>


<section className="container-app">
                    <h1>Project 3D</h1>

                    <section className="container">
                    <section className="project-info">
                            <h3>Project overview</h3>
                            <h4>
                                The purpose of this project is to explore how 3D assets will enhance a user experience.
                            </h4>
                            
                           
                            <h3>Technology breakdown</h3>
                            <h4> A few elements/packages have been used to implement the various elements.
                                @react-three/drei has a Stars component which I've implement to give the out of world feel.
                            </h4>
                        

                            <h3>Output</h3>
                            <Canvas rotate={true} shadows
      gl={{ alpha: false }}
      camera={{ fov: 10 }}
      raycaster={{
        computeOffsets: (e) => ({ offsetX: e.target.width / 2, offsetY: e.target.height / 2 }),
      }}   dpr={[1, 2]} style={{backgroundColor: "white" , display: "block" , height: "50vh", width: "50vw"}}>
        

          <ambientLight />
          
          <pointLight position={[10, 10, 10]} />
         
          <Suspense fallback={null} >
           
          <Stars
  radius={100} // Radius of the inner sphere (default=100)
  depth={50} // Depth of area where stars should fit (default=50)
  count={5000} // Amount of stars (default=5000)
  factor={10} // Size factor (default=4)
  saturation={0} // Saturation 0-1 (default=0)
  fade // Faded dots (default=false)
/>
                      <DPM position={[ 0, -0.8, -4]} />
              
          </Suspense>

                            </Canvas>

                        </section>
                       
                        
                </section> 
                <History />      </section>

     
  </>;
}

export default Threedee;
