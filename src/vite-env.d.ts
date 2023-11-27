/// <reference types="vite/client" />
declare module '*.glb' {
    const src: GLTF | GLTF[]
    export default src
}