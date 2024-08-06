"use client";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Cube } from "@components/Cube";

export const Experience = () => {
  const { gl } = useThree();
  // Limit renderer's pixel ratio to 2 for consistency
  gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  return (
    <>
      <color args={["black"]} attach="background" />
      <OrbitControls />
      <ambientLight />

      <Cube />
    </>
  );
};
