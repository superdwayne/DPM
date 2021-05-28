// import React from "react";
// import Basis from './Open_Sans_Bold.json'
// import { Canvas } from 'react-three-fiber'
// import * as THREE from 'three';
// import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

// function Text() {

//     const font = new THREE.FontLoader().parse(Basis);

//     // configure font geometry
//     const textOptions = {
//         font,
//         size: 1.7,
//         height: 0.2
//     };

  

//     return (

//         <mesh  position={[-10, -1, 5]} >
//             <textBufferGeometry attach="geometry" args={['Elixir', textOptions]} />
//             <meshNormalMaterial attach="material" wireframe={true} />
//         </mesh>
//     );
// }

// function slider() {
//     return (
//         <div className="width100">
//             <section className="intro">
//                 <h3 className="productdesign">Problem</h3>
//                 <h3>We have observed that the push too isn't effective when we build a new push campaign it isn’t now meeting the demands of more personalised and segmentation content for our user which is causing the technology of our push campaign to be behind. </h3>
//                 <h3>How might we improve our current push tool so that our customers are more successful based on improving open rates and repeat customer purchases</h3>

//                 <h3 className="productdesign">Hypotheses</h3>
//                 <h3>We believe that with our current push tool isn’t scalable enough to allow for true customer-centricity.</h3>

//                 <h3 className="productdesign">Assumptions</h3>
//                 <h3>There are mutiple issues when entering date into the current solution, and mistakes are hard to find and correct, 
//                 Alongside this there isn't any vasibility on how the final push message will look so translations take longer to sign off</h3>

//             </section>

//             <section>
//             <h3>Old tool</h3>
//                  <img src="../images/currentsystem.png" alt="Old push tool" />
//             </section>


//             <section className="intro">
//             <h3>Proccesses</h3>
//             <h3>I needed to validate our assumptions as a team, so I decided to conduct some user research via inetrviews with some of the users of the tool</h3>
//             <h3>I asked a series of questions which crovered their expecations of the tool and also their experiences thus far, the questions(below) were open so that I could capture insights</h3>
//             <li>Tell me a story about the last time you had to make amends to a campaign?</li>
//             <li>Tell me about how you’d set up a campaign?</li>
//             <li>Tell me about the last time the tool didn’t work as expected?</li>
//             </section>

//             <h3>Low fi mocks </h3>
//             <AwesomeSlider fillParent={false} cssModule={AwesomeSliderStyles} bullets={false}>
//                 <div data-src="../images/login.png" />
//                 <div data-src="../images/dashboard.png" />
//                 <div data-src="../images/campaign_creation.png" />
//                 <div data-src="../images/campaign_main.png" />
//                 <div data-src="../images/campaign.png" />                
//                 {/* <div data-src="../images/v1.mov" /> */}
//             </AwesomeSlider>

//             <h3>Mid fi mocks </h3>
//             <AwesomeSlider fillParent={false} cssModule={AwesomeSliderStyles} bullets={false}>
//                 <div data-src="../images/midfi-dashboard.png" />
//                 <div data-src="../images/midfi-campaign.png" />
//             </AwesomeSlider>

//             <Canvas pixelRatio={window.devicePixelRatio} camera={{ fov: 6, position: [0, 0, 30] }} >
//                 <Text />
//             </Canvas>
//         </div>
//     )
// }

// export default slider;
