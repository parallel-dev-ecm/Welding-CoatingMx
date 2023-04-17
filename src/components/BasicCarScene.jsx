import { OrbitControls, PresentationControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Box } from '@react-three/drei'

function BasicSceneWithObject(props) {
  function Porsche(props) {
    let gltf = useGLTF('./porsche.glb')
    return <primitive object={gltf.scene} {...props} />
  }
  function RoboticArm(props) {
    let gltf = useGLTF('./robotic_arm.glb')
    return <primitive object={gltf.scene} {...props} />
  }
  return (
    <>
      <Canvas>
        <OrbitControls setPolarAngle={'10'} />
        <ambientLight intensity={1} color={'white'} />
        <directionalLight color="white" intensity={1} position={[0, 0, 2]} />
        {props.carModel == 'porsche' ? (
          <Porsche
            scale={1.2}
            position={[0, -1, 0.9]}
            rotation={[0, 11, -0.5]}
          />
        ) : (
          <RoboticArm scale={3} />
        )}
      </Canvas>
    </>
  )
}

export default BasicSceneWithObject
