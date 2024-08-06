"use client";
import { Canvas } from "@react-three/fiber";

import { Experience } from "@components/Experience";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh]">
      <Canvas>
        <Experience />
      </Canvas>
    </main>
  );
}
