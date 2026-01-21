import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Stylized geometric developer figure
const DeveloperFigure = ({ scrollProgress, sectionIndex }) => {
  const groupRef = useRef();
  const headRef = useRef();
  const bodyRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  
  // Idle animation (breathing effect)
  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      
      // Subtle breathing animation
      const breathe = Math.sin(t * 0.5) * 0.02;
      groupRef.current.position.y = breathe;
      
      // Very subtle head tilt
      if (headRef.current) {
        headRef.current.rotation.x = Math.sin(t * 0.3) * 0.05;
      }
      
      // Subtle arm movement (typing posture)
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.x = -0.3 + Math.sin(t * 0.4) * 0.05;
        rightArmRef.current.rotation.x = -0.3 + Math.sin(t * 0.4 + 0.5) * 0.05;
      }
      
      // Shift position based on section (left or right)
      // Even sections: figure moves left, Odd sections: figure moves right
      const targetX = sectionIndex % 2 === 0 ? -0.5 : 0.5;
      const currentX = groupRef.current.position.x;
      groupRef.current.position.x = THREE.MathUtils.lerp(currentX, targetX, 0.05);
    }
  });
  
  // Create materials
  const materials = useMemo(() => ({
    body: new THREE.MeshStandardMaterial({ 
      color: '#e0e0e0',
      roughness: 0.3,
      metalness: 0.1
    }),
    accent: new THREE.MeshStandardMaterial({ 
      color: '#ffffff',
      roughness: 0.2,
      metalness: 0.2
    }),
    dark: new THREE.MeshStandardMaterial({ 
      color: '#666666',
      roughness: 0.4,
      metalness: 0.1
    })
  }), []);
  
  return (
    <group ref={groupRef} position={[0, -0.5, 0]} scale={0.8}>
      {/* Head */}
      <group ref={headRef} position={[0, 1.4, 0]}>
        <mesh material={materials.body}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
        </mesh>
        {/* Glasses */}
        <mesh position={[0, 0.05, 0.21]} material={materials.dark}>
          <boxGeometry args={[0.35, 0.12, 0.02]} />
        </mesh>
      </group>
      
      {/* Body/Torso */}
      <mesh ref={bodyRef} position={[0, 0.7, 0]} material={materials.body}>
        <boxGeometry args={[0.6, 0.8, 0.3]} />
      </mesh>
      
      {/* Laptop (on lap) */}
      <group position={[0, 0.2, 0.2]}>
        <mesh rotation={[-0.3, 0, 0]} material={materials.dark}>
          <boxGeometry args={[0.5, 0.02, 0.35]} />
        </mesh>
        <mesh position={[0, 0.15, -0.1]} rotation={[-0.6, 0, 0]} material={materials.accent}>
          <boxGeometry args={[0.5, 0.3, 0.02]} />
        </mesh>
      </group>
      
      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.35, 0.9, 0]}>
        <mesh position={[0, -0.25, 0]} rotation={[0, 0, 0.1]} material={materials.body}>
          <boxGeometry args={[0.12, 0.5, 0.12]} />
        </mesh>
        {/* Forearm */}
        <mesh position={[-0.05, -0.6, 0.15]} rotation={[-0.5, 0, 0.1]} material={materials.body}>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
        </mesh>
      </group>
      
      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.35, 0.9, 0]}>
        <mesh position={[0, -0.25, 0]} rotation={[0, 0, -0.1]} material={materials.body}>
          <boxGeometry args={[0.12, 0.5, 0.12]} />
        </mesh>
        {/* Forearm */}
        <mesh position={[0.05, -0.6, 0.15]} rotation={[-0.5, 0, -0.1]} material={materials.body}>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
        </mesh>
      </group>
      
      {/* Legs (sitting position) */}
      <group position={[0, 0, 0]}>
        <mesh position={[-0.15, -0.15, 0]} material={materials.dark}>
          <boxGeometry args={[0.15, 0.5, 0.15]} />
        </mesh>
        <mesh position={[0.15, -0.15, 0]} material={materials.dark}>
          <boxGeometry args={[0.15, 0.5, 0.15]} />
        </mesh>
      </group>
    </group>
  );
};

export default DeveloperFigure;
