/* eslint-disable react/no-unknown-property */
/* eslint-disable no-sequences */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
  });

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      ref={ref}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'rebeccapurple'} />
    </mesh>
  );
}

function Home() {
  return (
    <div className="wrapper">
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Home;
