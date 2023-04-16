import { OrbitControls, PresentationControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Box } from '@react-three/drei'

function BasicCarScene(props) {
  function Porsche(props) {
    let gltf = useGLTF('./porsche.glb')
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
          console.log('No porsche')
        )}
      </Canvas>
    </>
  )
}

export default BasicCarScene
