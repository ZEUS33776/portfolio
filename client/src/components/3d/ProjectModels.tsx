import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Box } from "@react-three/drei";
import * as THREE from "three";
import { projects } from "@/lib/portfolioData";

interface ProjectModelProps {
  project: typeof projects[0];
  position: [number, number, number];
  index: number;
}

function ProjectModel({ project, position, index }: ProjectModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      groupRef.current.rotation.y = time * 0.2 + index * Math.PI * 0.5;
      groupRef.current.position.y = position[1] + Math.sin(time + index) * 0.3;
    }

    if (boxRef.current) {
      boxRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
      boxRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3 + index) * 0.1;
    }
  });

  // Color based on project category
  const categoryColors = {
    web: "#3b82f6",
    ml: "#8b5cf6", 
    system: "#06b6d4",
    research: "#10b981",
    "web+ai": "#6366f1" // Indigo color representing the blend of web (blue) and AI (purple)
  };

  const color = categoryColors[project.category];

  return (
    <group ref={groupRef} position={position}>
      {/* Main project representation */}
      <Box ref={boxRef} args={[1.5, 1.5, 1.5]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.7}
        />
      </Box>

      {/* Project title */}
      <Text
        position={[0, 2, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter.json"
      >
        {project.title}
      </Text>

      {/* Technology indicators */}
      {project.technologies.slice(0, 3).map((tech, i) => (
        <mesh
          key={tech}
          position={[
            Math.cos((i / 3) * Math.PI * 2) * 2,
            0,
            Math.sin((i / 3) * Math.PI * 2) * 2
          ]}
        >
          <sphereGeometry args={[0.15, 8, 6]} />
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.6}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}

      {/* Connection lines */}
      {project.technologies.slice(0, 3).map((tech, i) => {
        const angle = (i / 3) * Math.PI * 2;
        const x = Math.cos(angle) * 2;
        const z = Math.sin(angle) * 2;
        
        return (
          <line key={`line-${tech}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([0, 0, 0, x, 0, z])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color={color} transparent opacity={0.5} />
          </line>
        );
      })}
    </group>
  );
}

export default function ProjectModels() {
  // Position projects in a circle
  const positions = useMemo(() => {
    return projects.map((_, index) => {
      const angle = (index / projects.length) * Math.PI * 2;
      const radius = 6;
      return [
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius
      ] as [number, number, number];
    });
  }, []);

  return (
    <group position={[0, 0, -5]}>
      {projects.map((project, index) => (
        <ProjectModel
          key={project.id}
          project={project}
          position={positions[index]}
          index={index}
        />
      ))}
      
      {/* Central hub */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
    </group>
  );
}
