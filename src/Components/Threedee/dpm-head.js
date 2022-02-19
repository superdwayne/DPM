import React, { useRef, useEffect } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'


export default function Model({ ...props }) {

const leftEye = useRef()

const group = useRef()
const { nodes, materials } = useGLTF('https://cdn-static.farfetch-contents.com/Content/UP/EXPERIENCE/Metaverse/dpm-head.glb')


useEffect(() => {

    group.current.scale.x = 5
    group.current.scale.y = 5
    group.current.scale.z = 5
    
     },[]); 

    
  return (
    <>
      <OrbitControls />
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        position={[0, -2.11, 0.52]}
        scale={1.47}
      />
      
      <mesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={nodes.EyeLeft.material}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        position={[0, -2.11, 0.52]}
        scale={1.47}
        ref={leftEye} 
        className="test"
      />
      <mesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={nodes.EyeRight.material}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        position={[0, -2.11, 0.52]}
        scale={1.47}
      />
      <mesh
        name="Wolf3D_Beard"
        geometry={nodes.Wolf3D_Beard.geometry}
        material={materials.Wolf3D_Beard}
        morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
        position={[0, -2.11, 0.52]}
        scale={1.47}
      
      />
      <mesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        position={[0, -2.11, 0.52]}
        scale={1.47}
      />
      <mesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        position={[0, -2.11, 0.52]}
        scale={1.47}
      />
    </group>



      </>
  )
}
