import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { RoundedBox } from "@react-three/drei";
import { Text } from "@react-three/drei"

function Box() {

  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.00;
    meshRef.current.rotation.y += 0.00;
  });

  return (
    <mesh ref={meshRef}>
      <RoundedBox
  args={[2, 0.3, 2]}
  radius={0.12}
>
  <meshStandardMaterial
    color="#475569"
  />
</RoundedBox>
<Text
  position={[0, 0.16, 0]}
  rotation={[-Math.PI / 2, 0, 0]}
  fontSize={0.3}
  color="white"
>
  W
</Text>
    </mesh>
  );
}

function Keyboard3D() {
  return (
    <div style={{ height: "500px" }}>
        <Canvas camera={{position: [0 , 4, 4] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]} />
        <Box />
        <OrbitControls
  minPolarAngle={0}
  maxPolarAngle={Math.PI / 2.2}
/>
      </Canvas>
    </div>
  );
}

export default Keyboard3D;