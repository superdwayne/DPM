import React  from "react";
import {
 
  extend,

} from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import History from '../Hooks/history'


extend({ OrbitControls });

// const CameraControls = () => {
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();
//   // Ref to the controls, so that we can update them on every frame using useFrame
//   const controls = useRef();
//   useFrame((state) => controls.current.update());
//   return (
//     <orbitControls
//       ref={controls}
//       args={[camera, domElement]}
//       enableZoom={false}
//       position={[0.5, -0.7, 0]}
//     // maxAzimuthAngle={Math.PI / 4}
//     // maxPolarAngle={Math.PI}
//     // minAzimuthAngle={-Math.PI / 4}
//     // minPolarAngle={0}
//     />
//   );
// };



// const FakeSphereControls = () => {
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();
//   // Ref to the controls, so that we can update them on every frame using useFrame
//   const controls = useRef();
//   useFrame((state) => controls.current.update());
//   return (
//     <orbitControls
//       ref={controls}
//       args={[camera, domElement]}
//       enableZoom={false}
//       position={[0.5, -0.7, 4]}
//       maxAzimuthAngle={Math.PI / 4}
//       maxPolarAngle={Math.PI}
//       minAzimuthAngle={-Math.PI / 4}
//       minPolarAngle={0}
//     />
//   );
// };

// const FakeSphere = () => {
//   const [playing, setPlaying] = useState(false);
//   const [playing2, setPlaying2] = useState(false);

//   const [video2] = useState(() => {
//     const vid2 = document.createElement("video");
//     vid2.src = "https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Playground/FARFETCH_1.mp4";
//     vid2.crossOrigin = "Anonymous";
//     vid2.loop = false;
//     vid2.autoplay = false;
//     vid2.playsInline = true;
//     vid2.controls = true;
//     return vid2;
//   });

//   const [video] = useState(() => {
//     const vid = document.createElement("video");
//     vid.src = "https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Playground/FARFETCH.mp4";
//     vid.crossOrigin = "Anonymous";
//     vid.loop = false;
//     vid.autoplay = false;
//     vid.playsInline = true;
//     vid.controls = true;
//     return vid;
//   });


//   useEffect(() => {
//     console.log("Inside Video 2");
//     if (playing2)
//       video2.play()
//     else
//       video2.pause()

//   }, [playing2, video2]);

//   useEffect(() => {


//     console.log("Inside Video 1");
//     if (playing)
//       video.play()
//     else
//       video.pause()

//   }, [video, playing]);



//   useEffect(() => {
//     return () => {
//       console.log("cleaned up");
//     };
//   }, []);

//   const myMesh = React.useRef()
//   // useFrame(() => {// myMesh.current.rotation.y += 0.01})


//   return (
//     <group>
//       <mesh scale={[4, 4, 4]} position={[0, 0.5, 0]} >
//         <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
//         <meshStandardMaterial attach="material" transparent={true} wireframe={true} color={"#000"} />
//       </mesh>
//       <mesh ref={myMesh} position={[0.7, 0.7, 0.7]} scale={[2, 2, 2]} onPointerEnter={(e) => setPlaying(true)} onPointerLeave={(e) => setPlaying(false)}>

//         <boxBufferGeometry />
//         <meshBasicMaterial>
//           <videoTexture attach="map" args={[video]} />
//         </meshBasicMaterial>
//       </mesh>
//       <mesh ref={myMesh} position={[-1, 1, 2]} scale={[1, 1, 1]} onPointerEnter={(e) => setPlaying2(true)} onPointerLeave={(e) => setPlaying2(false)}>
//         <boxBufferGeometry />
//         <meshBasicMaterial>
//           <videoTexture attach="map" args={[video2]} />
//         </meshBasicMaterial>
//       </mesh>
//     </group>
//   );
// }

export default function Threedee() {

  return (
    <section className="container-app">

      <h1>Project Playground</h1>
      <section className="container">
        <section className="project-info">
          <h3>Project overview</h3>
          <h4>Here are a few POC'S these experments are here to showcase what 
          is possible with technology.</h4>

          <iframe src="https://player.vimeo.com/video/679282427?h=39ee1bca17&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="720" height="387" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Avatar follow mouse"></iframe>


          <iframe src="https://player.vimeo.com/video/670128012?h=0330efa6c7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&muted=1" width="720" height="554" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="3D trainer"></iframe>

          <iframe src="https://player.vimeo.com/video/670127441?h=de7110a54d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="720" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="3D Video - AR"></iframe>
          
          
          {/* <svg shape-rendering="crispEdges" height="100%" width="100%" viewBox="0 0 37 37">
    <path fill="#FFFFFF" d="M0,0 h37v37H0z"></path>
    <path fill="#000000" d="M0,0h7v1H0zM8 0h1v1H8zM10 0h1v1H10zM12 
    0h2v1H12zM15 0h1v1H15zM18 0h6v1H18zM25 0h1v1H25zM30,0 h7v1H30zM0 
    1h1v1H0zM6 1h1v1H6zM9 1h5v1H9zM16 1h2v1H16zM22 1h2v1H22zM30 
    1h1v1H30zM36,1 h1v1H36zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 
    2h3v1H8zM15 2h2v1H15zM18 2h1v1H18zM20 2h1v1H20zM22 2h6v1H22zM30 
    2h1v1H30zM32 2h3v1H32zM36,2 h1v1H36zM0 3h1v1H0zM2 3h3v1H2zM6 
    3h1v1H6zM8 3h3v1H8zM12 3h1v1H12zM14 3h1v1H14zM17 3h1v1H17zM22 
    3h5v1H22zM30 3h1v1H30zM32 3h3v1H32zM36,3 h1v1H36zM0 4h1v1H0zM2 
    4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM11 4h2v1H11zM14 4h6v1H14zM22 
    4h1v1H22zM24 4h1v1H24zM27 4h2v1H27zM30 4h1v1H30zM32 4h3v1H32zM36,4 
    h1v1H36zM0 5h1v1H0zM6 5h1v1H6zM10 5h2v1H10zM13 5h1v1H13zM16 
    5h1v1H16zM18 5h5v1H18zM24 5h1v1H24zM30 5h1v1H30zM36,5 h1v1H36zM0 
    6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 
    6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 
    6h1v1H26zM28 6h1v1H28zM30,6 h7v1H30zM10 7h1v1H10zM12 7h1v1H12zM15 
    7h1v1H15zM17 7h1v1H17zM20 7h1v1H20zM22 7h1v1H22zM24 7h1v1H24zM26 
    7h1v1H26zM28 7h1v1H28zM0 8h4v1H0zM6 8h1v1H6zM8 8h1v1H8zM10 
    8h4v1H10zM17 8h2v1H17zM21 8h1v1H21zM23 8h1v1H23zM26 8h1v1H26zM28 
    8h2v1H28zM32 8h3v1H32zM36,8 h1v1H36zM1 9h4v1H1zM9 9h2v1H9zM12 
    9h3v1H12zM16 9h5v1H16zM23 9h1v1H23zM25 9h1v1H25zM28 9h2v1H28zM31 9h1v1H31zM33 
    9h3v1H33zM1 10h1v1H1zM5 10h3v1H5zM11 10h3v1H11zM16 10h2v1H16zM20 
    10h1v1H20zM23 10h1v1H23zM26 10h1v1H26zM29 10h3v1H29zM34 10h2v1H34zM1 
    11h1v1H1zM3 11h2v1H3zM10 11h1v1H10zM16 11h1v1H16zM18 11h1v1H18zM20 
    11h1v1H20zM23 11h6v1H23zM32 11h1v1H32zM34,11 h3v1H34zM0 12h1v1H0zM3
     12h2v1H3zM6 12h1v1H6zM9 12h1v1H9zM12 12h1v1H12zM14 12h2v1H14zM17 
     12h1v1H17zM20 12h1v1H20zM22 12h1v1H22zM24 12h3v1H24zM28 12h1v1H28zM30
      12h1v1H30zM32 12h3v1H32zM36,12 h1v1H36zM0 13h1v1H0zM2 13h1v1H2zM4 
      13h1v1H4zM7 13h2v1H7zM10 13h3v1H10zM14 13h3v1H14zM19 13h1v1H19zM21 
      13h2v1H21zM24 13h1v1H24zM27 13h8v1H27zM36,13 h1v1H36zM0 14h1v1H0zM3
       14h4v1H3zM11 14h1v1H11zM13 14h1v1H13zM16 14h7v1H16zM24 14h3v1H24zM29
        14h5v1H29zM35 14h1v1H35zM1 15h1v1H1zM3 15h1v1H3zM5 15h1v1H5zM7 
        15h5v1H7zM14 15h3v1H14zM21 15h1v1H21zM23 15h1v1H23zM28 15h1v1H28zM33
         15h1v1H33zM36,15 h1v1H36zM1 16h1v1H1zM3 16h1v1H3zM5 16h2v1H5zM8
          16h3v1H8zM12 16h1v1H12zM14 16h1v1H14zM18 16h1v1H18zM20 16h3v1H20zM24
           16h2v1H24zM27 16h1v1H27zM34 16h2v1H34zM3 17h1v1H3zM7 17h2v1H7zM10
            17h1v1H10zM14 17h2v1H14zM17 17h1v1H17zM20 17h1v1H20zM22 17h2v1H22zM25 
            17h1v1H25zM27 17h2v1H27zM30 17h1v1H30zM33 17h1v1H33zM35,17 h2v1H35zM0
             18h3v1H0zM5 18h2v1H5zM9 18h2v1H9zM13 18h5v1H13zM21 18h2v1H21zM25 
             18h1v1H25zM27 18h1v1H27zM34,18 h3v1H34zM5 19h1v1H5zM8 19h2v1H8zM11
              19h1v1H11zM13 19h2v1H13zM16 19h2v1H16zM19 19h1v1H19zM22 19h2v1H22zM28 19h1v1H28zM31 19h3v1H31zM35 19h1v1H35zM0 20h2v1H0zM4 20h4v1H4zM9 20h2v1H9zM13 20h3v1H13zM17 20h1v1H17zM21 20h4v1H21zM26 20h1v1H26zM28 20h2v1H28zM31 20h2v1H31zM35 20h1v1H35zM7 21h1v1H7zM17 21h1v1H17zM19 21h2v1H19zM22 21h4v1H22zM28 21h1v1H28zM31 21h1v1H31zM33 21h1v1H33zM35 21h1v1H35zM1 22h1v1H1zM3 22h1v1H3zM5 22h3v1H5zM10 22h1v1H10zM14 22h1v1H14zM16 
              22h3v1H16zM22 22h3v1H22zM26 22h1v1H26zM28 22h1v1H28zM30 22h1v1H30zM33 22h2v1H33zM2 23h4v1H2zM7 23h2v1H7zM11 23h4v1H11zM18 23h3v1H18zM25 23h1v1H25zM29 23h2v1H29zM32 23h3v1H32zM4 24h3v1H4zM8 24h4v1H8zM15 24h1v1H15zM17 24h2v1H17zM25 24h3v1H25zM30 
              24h1v1H30zM32,24 h5v1H32zM1 25h1v1H1zM3 25h3v1H3zM7 25h1v1H7zM11 25h1v1H11zM13 25h1v1H13zM15 25h5v1H15zM22 25h1v1H22zM24 25h11v1H24zM36,25 h1v1H36zM1 26h6v1H1zM8 26h1v1H8zM10 26h1v1H10zM12 26h1v1H12zM14 26h1v1H14zM19 26h1v1H19zM22 26h1v1H22zM24 26h2v1H24zM28 26h3v1H28zM33 26h1v1H33zM35 26h1v1H35zM0 27h1v1H0zM2 27h2v1H2zM7 27h2v1H7zM12 27h2v1H12zM15 27h2v1H15zM20 27h3v1H20zM24 27h1v1H24zM26 27h1v1H26zM29 27h1v1H29zM36,27 h1v1H36zM2 28h2v1H2zM6 28h1v1H6zM9 28h3v1H9zM15 28h1v1H15zM20 28h2v1H20zM25 28h1v1H25zM28 28h5v1H28zM34,28 h3v1H34zM8 29h1v1H8zM10 29h1v1H10zM12 29h2v1H12zM15 29h1v1H15zM20 29h1v1H20zM23 29h3v1H23zM28 29h1v1H28zM32 29h3v1H32zM36,29 h1v1H36zM0 30h7v1H0zM9 30h1v1H9zM11 30h2v1H11zM15 30h3v1H15zM20 30h3v1H20zM26 30h1v1H26zM28 30h1v1H28zM30 30h1v1H30zM32 30h2v1H32zM35,30 h2v1H35zM0 31h1v1H0zM6 31h1v1H6zM9 31h1v1H9zM12 31h1v1H12zM16 31h2v1H16zM20 31h1v1H20zM27 31h2v1H27zM32 31h2v1H32zM35,31 h2v1H35zM0 32h1v1H0zM2 32h3v1H2zM6 32h1v1H6zM9 32h5v1H9zM16 32h3v1H16zM21 32h2v1H21zM28 32h5v1H28zM35 32h1v1H35zM0 33h1v1H0zM2 33h3v1H2zM6 33h1v1H6zM8 33h2v1H8zM12 33h3v1H12zM16 33h1v1H16zM19 33h3v1H19zM23 33h1v1H23zM25 33h1v1H25zM29 33h2v1H29zM32 33h1v1H32zM35,33 h2v1H35zM0 34h1v1H0zM2 34h3v1H2zM6 34h1v1H6zM8 34h6v1H8zM17 34h2v1H17zM20 34h4v1H20zM27 34h7v1H27zM0 35h1v1H0zM6 35h1v1H6zM8 35h1v1H8zM16 35h1v1H16zM19 35h1v1H19zM22 35h1v1H22zM24 35h3v1H24zM29 35h1v1H29zM32 35h3v1H32zM0 36h7v1H0zM8 36h1v1H8zM10 36h1v1H10zM12 36h1v1H12zM14 36h1v1H14zM17 36h1v1H17zM19 36h1v1H19zM22 36h1v1H22zM25 36h2v1H25zM29 36h2v1H29zM34,36 h3v1H34z"></path>
</svg> */}


          <iframe src="https://player.vimeo.com/video/670000140?h=044b0c5854&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="720" height="381" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Immersive web 3.0"></iframe>

          <iframe src="https://player.vimeo.com/video/663497017?h=6ed15c7d69&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="720" height="720" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Ready player me in VR"></iframe>

          <iframe src="https://player.vimeo.com/video/669994332?h=a158d858c8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="720" height="594" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="3D world"></iframe>

          <iframe src="https://player.vimeo.com/video/683364015?h=584539de16&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="720" height="1320" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="DPM - Ready player me - Snap filter"></iframe>


          {/* <Canvas className="Video-container" pixelRatio={window.devicePixelRatio} style={{ backgroundColor: "#ccc", height: "50vh", width: "50vw" }}>
            <FakeSphereControls />
            <Suspense fallback={<Loader />}>
              <FakeSphere />
            </Suspense>
          </Canvas> */}

        </section>

      </section>
      <History />
    </section>





  )
}