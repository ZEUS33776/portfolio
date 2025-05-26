import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import * as THREE from "three";

// Import 3D components
import FloatingElements from "./FloatingElements";
import ProjectModels from "./ProjectModels";
import SkillsVisualization from "./SkillsVisualization";

// Store
import { usePortfolio } from "@/lib/stores/usePortfolio";

export default function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const { sceneRotation, currentSection } = usePortfolio();

  // Rotate the entire scene slowly
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = sceneRotation + state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <>
      {/* Environment and lighting */}
      <Environment preset="city" />
      <Stars radius={300} depth={60} count={1000} factor={7} />
      
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Directional light */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Point lights for dynamic lighting */}
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />

      {/* Main scene group */}
      <group ref={groupRef}>
        {/* Floating geometric elements */}
        <FloatingElements />
        
        {/* Project-specific 3D models */}
        {(currentSection === "projects" || currentSection === "hero") && (
          <ProjectModels />
        )}
        
        {/* Skills visualization */}
        {(currentSection === "skills" || currentSection === "hero") && (
          <SkillsVisualization />
        )}
        
        {/* Background geometric shapes */}
        <BackgroundGeometry />
      </group>
    </>
  );
}

// Background geometric shapes for visual interest
function BackgroundGeometry() {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (meshRef1.current) {
      meshRef1.current.rotation.x = time * 0.5;
      meshRef1.current.rotation.z = time * 0.3;
      meshRef1.current.position.y = Math.sin(time) * 2;
    }
    
    if (meshRef2.current) {
      meshRef2.current.rotation.y = time * 0.4;
      meshRef2.current.rotation.x = time * 0.2;
      meshRef2.current.position.x = Math.cos(time * 0.5) * 3;
    }
    
    if (meshRef3.current) {
      meshRef3.current.rotation.z = time * 0.6;
      meshRef3.current.position.z = Math.sin(time * 0.3) * 2;
    }
  });

  return (
    <group position={[0, 0, -20]}>
      {/* Wireframe icosahedron */}
      <mesh ref={meshRef1} position={[-15, 5, 0]}>
        <icosahedronGeometry args={[3, 0]} />
        <meshBasicMaterial color="#3b82f6" wireframe />
      </mesh>
      
      {/* Glowing torus */}
      <mesh ref={meshRef2} position={[15, -5, 0]}>
        <torusGeometry args={[2, 0.5, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" />
      </mesh>
      
      {/* Rotating octahedron */}
      <mesh ref={meshRef3} position={[0, 10, 0]}>
        <octahedronGeometry args={[2, 0]} />
        <meshBasicMaterial color="#06b6d4" wireframe />
      </mesh>
    </group>
  );
}
