import React from "react";
import Basis from './Open_Sans_Bold.json'
import { Canvas,  } from 'react-three-fiber'
import * as THREE from 'three';
import './tree.css';

function Text() {

    const font = new THREE.FontLoader().parse(Basis);

    // configure font geometry
    const textOptions = {
        font,
        size: 1.7,
        height: 0.2
    };

   
    return (

        <mesh  position={[-10, -1, 5]} >
            <textBufferGeometry attach="geometry" args={['Interactive emails', textOptions]} />
            <meshNormalMaterial attach="material" wireframe={true} />
        </mesh>
    );
}


function tree() {
    return (
        <>

            <section className="intro">
                <h3>How might we ehance a user experence with an email
                by introducing a product slider?</h3>

                <h3>The technolgy used in emails isnt' as old as you may think
                by adding a litle bit of creative thinking to an email you can
                creative never before seen experiences in a user inbox
                </h3>
                <h3> Below is a working concept, there are three videos, one which is the triditonal email
                the others are the same email but enhanced and thus is now interactive </h3>
            </section>

            {/* <section className="width80">
                <div>
                    <video controls autoPlay className="width80">
                        <source src="./images/fallback.mov" ></source>
                    </video>
                </div>
            </section> */}

            <section className="tree">
                <div className="width100">
                    <h3>Normal version</h3>
                    <video controls autoPlay className="width80">
                        <source src="./images/fallback.mov" ></source>
                    </video>
                </div>

                <div className="width50">
                        <video controls className="width50">
                            <source src="./images/Gmail.mp4" ></source>
                        </video>
                    </div>

            </section>

            <section className="interactive">
                    <div className="width100">
                        <h3>Interactive version</h3>
                        <video controls autoPlay className="width80">
                            <source src="./images/Interative-email.mov" ></source>
                        </video>

                    </div>

                    <div className="width50">
                        <video controls className="width50">
                            <source src="./images/Interative-email-mobile.mp4" ></source>
                        </video>
                    </div>
                </section>


            <div className="yanaapp">
                <Canvas pixelRatio={window.devicePixelRatio} camera={{ fov: 6, position: [0, 0, 30] }} >
                    <Text />
                </Canvas>
            </div>

        </>


    )
}

export default tree;