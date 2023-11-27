 /*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: NORBERTO-3D (https://sketchfab.com/norberto3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
Title: phoenix bird
*/

import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import birdScene from "@assets/3d/bird.glb";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

const Bird = () => {
  const birdRef = useRef<typeof birdScene>();
  const { scene, animations } = useGLTF(birdScene) as GLTF;
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions['Take 001']?.play()
  }, [])

  useFrame(({ clock, camera }) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.25 + 1;

    if (birdRef.current.position.x > camera.position.x + 5) {
        birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
        birdRef.current.rotation.y = 0
    }

    if (birdRef.current.rotation.y === 0) {
        birdRef.current.position.x += 0.01
        birdRef.current.position.z -= 0.01
    } else {
        birdRef.current.position.x -= 0.01
        birdRef.current.position.z += 0.01
    }
  })
  
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
        <primitive object={scene}/>
    </mesh>
  );
}

export default Bird