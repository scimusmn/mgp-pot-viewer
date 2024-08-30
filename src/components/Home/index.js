import React, {
  Suspense, useRef, useState, useEffect,
} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';

function Scene() {
  // Set the FBX file to load
  const fbx = useFBX('pot.fbx');
  return <primitive object={fbx} scale={0.005} />;
}

function Home() {
  const controlsRef = useRef();
  const [lastActivity, setLastActivity] = useState(Date.now());
  const resetControls = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  // resetControls function to be called when the user is inactive
  useEffect(() => {
    const handleActivity = () => setLastActivity(Date.now());
    const checkInactivity = () => {
      if (Date.now() - lastActivity > 60000) {
        resetControls();
      }
    };

    document.addEventListener('mousemove', handleActivity);
    document.addEventListener('keydown', handleActivity);

    const interval = setInterval(checkInactivity, 1000);

    return () => {
      document.removeEventListener('mousemove', handleActivity);
      document.removeEventListener('keydown', handleActivity);
      clearInterval(interval);
    };
  }, [lastActivity]);

  return (
    <div className="wrapper">
      <Canvas style={{ background: '#000000' }}>
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
