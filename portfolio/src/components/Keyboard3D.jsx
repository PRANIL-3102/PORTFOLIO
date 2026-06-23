import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { RoundedBox } from "@react-three/drei";
import { Text } from "@react-three/drei"
import { useState } from "react";
import { useEffect } from "react";

function Key({ letter, position, waveDelay }) {

  const meshRef = useRef();
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [wave, setWave] = useState(false);
  useEffect(() => {

  const interval = setInterval(() => {

    setWave(true);

    setTimeout(() => {
      setWave(false);
    }, 500);

  }, 4000 + waveDelay);

  return () => clearInterval(interval);

}, [waveDelay]);

useEffect(() => {

  const handleKeyDown = (event) => {
    if (event.key.toLowerCase() === letter.toLowerCase()) {
      setPressed(true);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key.toLowerCase() === letter.toLowerCase()) {
      setPressed(false);
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
  };

}, [letter]);

  useFrame(() => {
    meshRef.current.rotation.x += 0.00;
    meshRef.current.rotation.y += 0.00;
  });

  return (
    <mesh
  ref={meshRef}
  position={[
  position[0],
  pressed ? -0.15 : hovered ? 0.12 : 0,
  position[2]
]}
  onPointerDown={() => setPressed(true)}
onPointerUp={() => setPressed(false)}
onPointerOver={() => setHovered(true)}
onPointerOut={() => setHovered(false)}
>
      <RoundedBox
  args={[2, 0.3, 2]}
  radius={0.12}
>
<meshStandardMaterial
  color={
  pressed
    ? "#38bdf8"
    : wave
    ? "#38bdf8"
    : hovered
    ? "#64748b"
    : "#475569"
}

emissive={
  pressed || wave
    ? "#38bdf8"
    : "#000000"
}

emissiveIntensity={
  pressed || wave
    ? 2
    : 0
}
  metalness={0.6}
  roughness={0.2}
/>
</RoundedBox>
<Text
  position={[0, 0.16, 0]}
  rotation={[-Math.PI / 2, 0, 0]}
  fontSize={0.3}
  fontfamily="arial"
  color={pressed ? "#38bdf8" : "white"}
>
  {letter}
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
        <Key
  letter="W"
  position={[0, 0, -2.2]}
  waveDelay={0}
/>

<Key
  letter="A"
  position={[-2.2, 0, 0]}
  waveDelay={500}
/>

<Key
  letter="S"
  position={[0, 0, 0]}
  waveDelay={1000}
/>

<Key
  letter="D"
  position={[2.2, 0, 0]}
  waveDelay={1500}
/>
        <OrbitControls
  minPolarAngle={0}
  maxPolarAngle={Math.PI / 2.2}
/>
      </Canvas>
    </div>
  );
}

export default Keyboard3D;