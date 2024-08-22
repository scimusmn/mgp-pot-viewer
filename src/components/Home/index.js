import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';

function Scene() {
  const fbx = useFBX('pot.fbx');
  return <primitive object={fbx} scale={0.005} />;
}

function Home() {
  const controlsRef = useRef();
  const resetControls = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="wrapper">
      <button type="button" onClick={resetControls}>Reset Controls</button>

      <Canvas>
        <ambientLight intensity={1.5} />
        <directionalLight color="white" position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls ref={controlsRef} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Home;
