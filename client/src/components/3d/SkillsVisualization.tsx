import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { skills } from "@/lib/portfolioData";

interface SkillNodeProps {
  skill: string;
  position: [number, number, number];
  color: string;
  size: number;
}

function SkillNode({ skill, position, color, size }: SkillNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }

    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 16, 12]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>
      
      <group ref={textRef} position={[0, size + 0.5, 0]}>
        <Text
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter.json"
        >
          {skill}
        </Text>
      </group>
    </group>
  );
}

interface SkillCategoryProps {
  category: typeof skills[0];
  centerPosition: [number, number, number];
  index: number;
}

function SkillCategory({ category, centerPosition, index }: SkillCategoryProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1 + index * Math.PI * 0.3;
    }
  });

  const categoryColors = useMemo(() => ({
    "Programming Languages": "#ef4444",
    "Frontend Development": "#3b82f6", 
    "Backend Development": "#10b981",
    "Databases & Cloud": "#8b5cf6",
    "AI & Machine Learning": "#f59e0b",
    "Tools & Technologies": "#06b6d4"
  }), []);

  const color = categoryColors[category.category as keyof typeof categoryColors] || "#6b7280";

  // Arrange skills in a circle around the category center
  const skillPositions = useMemo(() => {
    return category.skills.map((_, skillIndex) => {
      const angle = (skillIndex / category.skills.length) * Math.PI * 2;
      const radius = 2 + category.skills.length * 0.1;
      return [
        Math.cos(angle) * radius,
        Math.sin(skillIndex * 0.5) * 0.5,
        Math.sin(angle) * radius
      ] as [number, number, number];
    });
  }, [category.skills]);

  return (
    <group ref={groupRef} position={centerPosition}>
      {/* Category center */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Category title */}
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter.json"
      >
        {category.category}
      </Text>

      {/* Individual skills */}
      {category.skills.map((skill, skillIndex) => (
        <SkillNode
          key={skill}
          skill={skill}
          position={skillPositions[skillIndex]}
          color={color}
          size={0.15 + Math.random() * 0.1}
        />
      ))}

      {/* Connection lines from center to skills */}
      {skillPositions.map((pos, skillIndex) => (
        <line key={`connection-${skillIndex}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([0, 0, 0, pos[0], pos[1], pos[2]])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={color} transparent opacity={0.3} />
        </line>
      ))}
    </group>
  );
}

export default function SkillsVisualization() {
  // Position skill categories in 3D space
  const categoryPositions = useMemo(() => {
    return skills.map((_, index) => {
      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      const radius = 8;
      
      return [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi) * 0.5,
        radius * Math.cos(phi)
      ] as [number, number, number];
    });
  }, []);

  return (
    <group position={[0, 0, -10]}>
      {skills.map((skillCategory, index) => (
        <SkillCategory
          key={skillCategory.category}
          category={skillCategory}
          centerPosition={categoryPositions[index]}
          index={index}
        />
      ))}

      {/* Central core */}
      <mesh position={[0, 0, 0]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
    </group>
  );
}
