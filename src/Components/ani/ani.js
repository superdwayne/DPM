import React from "react";
import Basis from '../tree/Open_Sans_Bold.json'
import { Canvas } from 'react-three-fiber'
import * as THREE from 'three';

function Text() {

    const font = new THREE.FontLoader().parse(Basis);

    // configure font geometry
    const textOptions = {
        font,
        size: 1.7,
        height: 0.1
    };

   

    return (

        <mesh  position={[-10, -1, 5]} >
            <textBufferGeometry attach="geometry" args={['Yana application ', textOptions]} />
            <meshNormalMaterial attach="material" wireframe={true} />
        </mesh>
    );
}


function ani() {
    return (

        <>
            
            <section className="intro">
                <h3>With the birth of our daughter I decided to build a booking application so people could meet her, virtually</h3>
                <h3>I used node.JS as the backend and mongoose and the database connector to mongo DB.</h3>
                <h3> Once a booking is made the information is sent to the back end and retrieved and displayed in the front end so that everyone can see what times have been booked.</h3>
                <a href="https://meet-yana.herokuapp.com/">Launch Application</a>
            </section>
                <div className="yanaapp">
                <Canvas pixelRatio={window.devicePixelRatio} camera={{ fov: 6, position: [0, 0, 30] }} >
                    <Text />
                </Canvas>
            </div>
        </>
    )
}

export default ani;