/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';

function Scene() {
  const fbx = useFBX('pot.fbx');

  return <primitive object={fbx} scale={0.005} />;
}

function Home() {
  return (
    <div className="wrapper">
      <Canvas>
        <ambientLight intensity={0.9} />
        <directionalLight color="white" position={[2, 3, 5]} />
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Home;
