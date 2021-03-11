import ReactDOM from "react-dom";
import React from "react-dom";
import { Canvas } from "react-three-fiber";
import Plane from "./components/Plane";
import Cubes from "./components/Cubes";
import Logo from "./components/Logo";
import { Suspense } from "react";

function App() {
  const SCALE = 1;

  return (
    <Canvas camera={{ position: [0, 30, 45] }}>
      <ambientLight intensity={1} />
      <pointLight position={[50, 50, 50]} />
      <Plane position={[0, -20, 0]} />
      <Cubes />
      <Suspense fallback={null}>
        <Logo />
      </Suspense>
    </Canvas>
  );
}

export default App;
