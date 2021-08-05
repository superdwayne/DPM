import React,  { useEffect, useState, useRef } from "react";
import "./Kids-edit.css";
import "./Kids.css";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
extend({ OrbitControls});  


const SphereControls = () => {
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
      position={[0.5, -0.7, 4]}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  );
};


  const FakeSphere = () => {
    const [playing, setPlaying] = useState(false);
    const [playing2, setPlaying2] = useState(false);
  
    const [video2] = useState(() => {
      const vid2 = document.createElement("video");
      vid2.src = "https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Playground/FARFETCH_1.mp4";
      vid2.crossOrigin = "Anonymous";
      vid2.loop = false;
      vid2.autoplay = false;
      vid2.playsInline = true;
      vid2.controls = true;
      return vid2;
    });

    const [video] = useState(() => {
      const vid = document.createElement("video");
      vid.src = "https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Playground/FARFETCH.mp4";
      vid.crossOrigin = "Anonymous";
      vid.loop = false;
      vid.autoplay = false;
      vid.playsInline = true;
      vid.controls = true;
      return vid;
    });

     

     useEffect(() => {
      console.log("Inside Video 2" );
      if (playing2)
      video2.play()
      else
      video2.pause()
      
    },[playing2, video2]);
    
    useEffect(() => {
        console.log("Inside Video 1" );
        if (playing)
        video.play()
        else
        video.pause()
        
      },[playing, video]);
    // useEffect(() => {
    //     video.load()
    // })
    const myMesh = React.useRef()
    // useFrame(() => {// myMesh.current.rotation.y += 0.01})


    return (
      <group>
      <mesh scale={[4, 4, 4]} position={[0,0.5,0]} >
        <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
        <meshStandardMaterial attach="material" transparent={true}  wireframe={true} color={"#000"} />
      </mesh>
      <mesh ref={myMesh} position={[0.7,0.7,0.7]} scale={[2, 2 ,2]}  onPointerEnter={(e) => setPlaying(true)}  onPointerLeave={(e) => setPlaying(false)}>
        
         <boxBufferGeometry  />
         <meshBasicMaterial>
            <videoTexture attach="map" args={[video]} />
        </meshBasicMaterial>
      </mesh>
      <mesh ref={myMesh} position={[-1,1,2]} scale={[1, 1 ,1]}  onPointerEnter={(e) => setPlaying2(true)}  onPointerLeave={(e) => setPlaying2(false)}>
      <boxBufferGeometry  />
         <meshBasicMaterial>
            <videoTexture attach="map" args={[video2]} />
        </meshBasicMaterial>
      </mesh>
      </group>
    );
   }


function Kids() {


  return (

<section className="mobile-shift" >
  <section className="Flex-box">

      <Canvas className="Video-container" pixelRatio={window.devicePixelRatio} style={{ backgroundColor: "#ccc",  height: "120vh", width: "120vw" }}>
      <SphereControls  />
        <FakeSphere />
      </Canvas>


      </section>

      

</section>    


  );
}

export default Kids;