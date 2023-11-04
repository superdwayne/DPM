// src/components/Content.js
import React from "react";
import { OrbitControls, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Content = ({ position, onClick, htmlContent }) => {
  return (
    <mesh position={position} onClick={onClick}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
      {htmlContent && (
        <Html>
          <div className="overlay">
            {htmlContent}
          </div>
        </Html>
      )}
    </mesh>
  );
};

export default Content;
