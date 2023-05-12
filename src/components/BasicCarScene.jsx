import {
  OrbitControls,
  PresentationControls,
  useGLTF,
  useProgress,
  Html,
} from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Box } from '@react-three/drei'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion-3d'

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return (
    <Html className=" text-sm" center>
      {progress} % loaded
    </Html>
  )
}

function BasicSceneWithObject(props) {
  function Porsche(props) {
    let gltf = useGLTF('./porsche.glb')

    return (
      <motion.primitive
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }} // Adding a delay of 0.5 seconds
        object={gltf.scene}
        {...props}
      />
    )
  }
  function RoboticArm(props) {
    let gltf = useGLTF('./robotic_arm.glb')
    return <primitive object={gltf.scene} {...props} />
  }
  return (
    <>
      <Canvas>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </Canvas>
    </>
  )
}

export default BasicSceneWithObject
