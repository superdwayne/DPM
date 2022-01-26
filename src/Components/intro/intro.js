import Introbox from "../../Functions/introbox"
import { Canvas } from "@react-three/fiber";
import ScrollIntoView from 'react-scroll-into-view'
import './intro.css';
import arrow from "../../images/down.png"
import React from 'react';

function Intro (props) {
  
        return (
          <ScrollIntoView  selector="#homepage" smooth={true} onClick={() => props.setintro(!props.intro)}  >
      { props.intro ? 
          <>
               <Canvas style={{ backgroundColor: "#ffffff", position: "absolute", height: "100vh", width: "100vw" }}>
                  <ambientLight />
                  <Introbox position={[0, 0, 0]} />
                </Canvas>
                <section className="intro">
          
                <h1> Dwayne Paisley-Marshall</h1> 
              
                <img style={{width: "100px", height: "55px"}} src={arrow} alt="down" />
                <h1 className="ct">Creative Technologist</h1> 
        
          </section>
        )
               
          </> : null } 
      </ScrollIntoView>
        )
}

export default Intro;