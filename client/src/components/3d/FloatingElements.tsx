import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingElementProps {
  position: [number, number, number];
  geometry: THREE.BufferGeometry;
  color: string;
  scale?: number;
  rotationSpeed?: [number, number, number];
  floatSpeed?: number;
  floatRange?: number;
}

function FloatingElement({
  position,
  geometry,
  color,
  scale = 1,
  rotationSpeed = [0.01, 0.01, 0.01],
  floatSpeed = 1,
  floatRange = 0.5
}: FloatingElementProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Rotation
      meshRef.current.rotation.x += rotationSpeed[0];
      meshRef.current.rotation.y += rotationSpeed[1];
      meshRef.current.rotation.z += rotationSpeed[2];
      
      // Floating motion
      meshRef.current.position.y = initialY + Math.sin(time * floatSpeed) * floatRange;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <primitive object={geometry} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.7}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export default function FloatingElements() {
  // Pre-generate geometries and positions to avoid re-creation on each render
  const elements = useMemo(() => {
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.3, 8, 6),
      new THREE.ConeGeometry(0.3, 0.8, 6),
      new THREE.CylinderGeometry(0.2, 0.2, 0.6, 8),
      new THREE.OctahedronGeometry(0.4),
      new THREE.TetrahedronGeometry(0.4),
    ];

    const colors = [
      "#3b82f6", // Blue
      "#8b5cf6", // Purple  
      "#06b6d4", // Cyan
      "#10b981", // Emerald
      "#f59e0b", // Amber
      "#ef4444", // Red
    ];

    return Array.from({ length: 20 }, (_, i) => {
      const geometry = geometries[i % geometries.length];
      const color = colors[i % colors.length];
      
      // Distribute elements in a rough sphere around the origin
      const phi = Math.acos(-1 + (2 * i) / 20);
      const theta = Math.sqrt(20 * Math.PI) * phi;
      const radius = 8 + Math.random() * 4;
      
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      return {
        id: i,
        position: [x, y, z] as [number, number, number],
        geometry,
        color,
        scale: 0.5 + Math.random() * 0.5,
        rotationSpeed: [
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
        ] as [number, number, number],
        floatSpeed: 0.5 + Math.random() * 1.5,
        floatRange: 0.3 + Math.random() * 0.4,
      };
    });
  }, []);

  return (
    <group>
      {elements.map((element) => (
        <FloatingElement
          key={element.id}
          position={element.position}
          geometry={element.geometry}
          color={element.color}
          scale={element.scale}
          rotationSpeed={element.rotationSpeed}
          floatSpeed={element.floatSpeed}
          floatRange={element.floatRange}
        />
      ))}
    </group>
  );
}
