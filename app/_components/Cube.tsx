export const Cube = () => (
  <mesh rotation={[Math.PI * 0.25, Math.PI * 0.25, 0]}>
    <boxGeometry args={[1, 1, 1]} />
    <meshNormalMaterial />
  </mesh>
);
