import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";

export default

function Boxmain(props) {
    const cubeone = useRef();
    const cubetwo = useRef();
    const cubethree = useRef();
    const mesh = useRef();
    useFrame(() => (
      cubeone.current.rotation.x = cubeone.current.rotation.y += 0.01,
      cubetwo.current.rotation.z += 0.01,
      cubethree.current.rotation.x += 0.01, cubethree.current.rotation.z += 0.01
      )
    );
    return (
  
      <group>
       <mesh {...props} ref={cubeone}  scale={[0.2,0.2,0.2]} position={[1, 0, 0]}  >
        
          <RoundedBox args={[3, 3, 3]} radius={0.5} >
            <meshLambertMaterial color={"orange"} attach="material"  />
          </RoundedBox>
       </mesh>
  
       <mesh {...props} ref={cubetwo} scale={[0.2,0.2,0.2]} position={[-1, 1 , 1]} >
          <RoundedBox args={[3, 3, 3]} radius={0.5} >
             <meshLambertMaterial  color={"blue"}  />
          </RoundedBox>
       </mesh>
  
       <mesh {...props} ref={cubethree} scale={[0.2,0.2,0.2]} position={[1, 2.3 , 1]} >
          <RoundedBox args={[3, 3, 3]} radius={0.5} >
             <meshLambertMaterial  color={"#6AABF1"}  />
          </RoundedBox>
       </mesh>
  

  </group>
       
    );
  }