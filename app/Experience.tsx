"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <Canvas>
      <color args={["black"]} attach="background" />
      <OrbitControls />
      <ambientLight />

      <mesh rotation={[Math.PI * 0.25, Math.PI * 0.25, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
};
