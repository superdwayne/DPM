
import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const color = new THREE.Color()

export default function Model({ scroll, ...props }) {
  const group = useRef()

  useFrame((state, delta) => {
    // console.log(delta)
    actions.STAND.play()
  
     });

  const { nodes, materials, animations } = useGLTF("./DPM-CT.gltf")
  const { actions } = useAnimations(animations, group)
  const [hovered, set] = useState()
  const extras = { receiveShadow: true, castShadow: true, "material-envMapIntensity": 0.2 }
  useEffect(() => void (actions["CAMERA"].play().paused = true), [])

  console.log(actions)
  useFrame((state) => {
    actions["CAMERA"].time = THREE.MathUtils.lerp(actions["CAMERA"].time, actions["CAMERA"].getClip().duration * scroll.current, 0.05)
    group.current.children[0].children.forEach((child, index) => {
      // child.material.color.lerp(color.set(hovered === child.name ? "tomato" : "#202020").convertSRGBToLinear(), hovered ? 0.1 : 0.05)
      // const et = state.clock.elapsedTime
      //Floating effect
      // child.position.y = Math.sin((et + index * 2000) / 2) * 1
      // child.rotation.x = Math.sin((et + index * 2000) / 3) / 10
      // child.rotation.y = Math.cos((et + index * 2000) / 2) / 10
      // child.rotation.z = Math.sin((et + index * 2000) / 3) / 10
      //frustumCulled={false}
    })
  })

  return (
  
    <group ref={group} {...props} dispose={null}>
    <group name="Scene">
      <group name="DPM1" position={[4.65, -5.96, -15.47]} rotation={[0, 0.02, 0]} scale={3.05}>
        <primitive object={nodes.Hips} />
        <skinnedMesh name="Wolf3D_Body001" frustumCulled={false} geometry={nodes.Wolf3D_Body001.geometry} material={materials['Wolf3D_Body.001']} skeleton={nodes.Wolf3D_Body001.skeleton} />
        <skinnedMesh name="Wolf3D_Hair001" frustumCulled={false} geometry={nodes.Wolf3D_Hair001.geometry} material={materials['Wolf3D_Hair.001']} skeleton={nodes.Wolf3D_Hair001.skeleton} />
        <skinnedMesh name="Wolf3D_Outfit_Bottom001" frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Bottom001.geometry} material={materials['Wolf3D_Outfit_Bottom.001']} skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton} />
        <skinnedMesh name="Wolf3D_Outfit_Top001" frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Top001.geometry} material={materials['Material.023']} skeleton={nodes.Wolf3D_Outfit_Top001.skeleton} />
        <skinnedMesh name="EyeLeft001" frustumCulled={false} geometry={nodes.EyeLeft001.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft001.skeleton} morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences} />
        <skinnedMesh name="EyeRight001" frustumCulled={false} geometry={nodes.EyeRight001.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight001.skeleton} morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences} />
        <skinnedMesh name="Wolf3D_Beard001" frustumCulled={false} geometry={nodes.Wolf3D_Beard001.geometry} material={materials['Wolf3D_Beard.001']} skeleton={nodes.Wolf3D_Beard001.skeleton} morphTargetDictionary={nodes.Wolf3D_Beard001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Beard001.morphTargetInfluences} />
        <skinnedMesh name="Wolf3D_Head001" frustumCulled={false} geometry={nodes.Wolf3D_Head001.geometry} material={materials['Wolf3D_Skin.001']} skeleton={nodes.Wolf3D_Head001.skeleton} morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences} />
        <skinnedMesh name="Wolf3D_Teeth001" frustumCulled={false} geometry={nodes.Wolf3D_Teeth001.geometry} material={materials['Wolf3D_Teeth.003']} skeleton={nodes.Wolf3D_Teeth001.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences} />
      </group>

      <group name="Portal" position={[6.05, -0.4, -23.42]} rotation={[-Math.PI / 2, 0, 0]} scale={0.08}>
        <mesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials['aiStandardSurface10SG.001']} position={[-20.18, 2.31, 3.5]} scale={0.78} />
      </group>
      <PerspectiveCamera name="Camera" makeDefault far={99.6} near={0.1} fov={26.3} position={[0.1, 1.86, 0.13]} rotation={[-0.13, 0.03, 0.02]} />
      <mesh name="Frame_1" geometry={nodes.Frame_1.geometry} material={materials['initialShadingGroup.001']} position={[3.68, 1.23, -15.16]} rotation={[-Math.PI, 0.01, -Math.PI]} scale={1.21} />
      <mesh name="Frame_1001" geometry={nodes.Frame_1001.geometry} material={materials['initialShadingGroup.001']} position={[3.74, 1.25, -19.3]} rotation={[-Math.PI, 0.01, -Math.PI]} scale={1.21} />
      <mesh name="Frame_1002" geometry={nodes.Frame_1002.geometry} material={materials['initialShadingGroup.001']} position={[-4.52, 0.81, -19.3]} rotation={[-Math.PI, 0.01, -Math.PI]} scale={1.21} />
      <mesh name="Frame_1003" geometry={nodes.Frame_1003.geometry} material={materials['initialShadingGroup.001']} position={[-4.77, 0.81, -23.7]} rotation={[-Math.PI, 0.01, -Math.PI]} scale={1.21} />
      <mesh name="Earth" geometry={nodes.Earth.geometry} material={materials['Scene_-_Root']} position={[-4.27, 0.68, -15.27]} scale={0.65} />
      <mesh name="Frame_1004" geometry={nodes.Frame_1004.geometry} material={materials['initialShadingGroup.001']} position={[-4.27, 0.75, -15.27]} rotation={[-Math.PI, 0.01, -Math.PI]} scale={1.21} />
      <mesh name="Frame_1005" geometry={nodes.Frame_1005.geometry} material={materials['initialShadingGroup.001']} position={[4.38, 0.95, -23.59]} rotation={[-Math.PI, 0.01, -Math.PI]} scale={1.21} />
      <mesh name="Human_Brain" geometry={nodes.Human_Brain.geometry} material={materials.material_0} position={[4.14, 0.99, -19.23]} rotation={[0, -1.53, 0]} scale={0.01} />
      <mesh name="Curve001" geometry={nodes.Curve001.geometry} material={materials['SVGMat.005']} position={[-4.53, 0.39, -18.88]} rotation={[Math.PI / 2, 0, -1.58]} scale={15.73} />
      <mesh name="Curve105" geometry={nodes.Curve105.geometry} material={materials['SVGMat.827']} position={[-4.81, 0.2, -23.14]} rotation={[1.58, 0, -1.48]} scale={3.09} />
    </group>
  </group>
   

  
    
  )
}

useGLTF.preload("./DPM-CT.gltf")
