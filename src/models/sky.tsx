import { useRef } from 'react'
import skyScene from '@assets/3d/sky.glb'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'

const Sky: React.FC<{ isRotating: boolean } & typeof skyScene> = ({ isRotating }) => {
  const sky = useGLTF(skyScene) as GLTF;
  const skyRef = useRef<typeof skyScene>()

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta 
    }
  })

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky