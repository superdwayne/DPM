import React, { useRef} from "react";
import { useFrame } from "@react-three/fiber";

export default

function Box(props) {
    const mesh = useRef();
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    return (
       <mesh {...props} ref={mesh}  scale={[1,2,2]}>
          <boxGeometry args={[3, 3, 3]}   />
          <meshStandardMaterial  color={"black"}  />
       </mesh>
    );
  }