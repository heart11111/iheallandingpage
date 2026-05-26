"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, Line, MeshTransmissionMaterial, PerspectiveCamera, Sphere } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { heroLabels } from "@/lib/ingredients";
import { useReducedMotion } from "@/lib/useReducedMotion";

function CapsuleCore() {
  const group = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();

  useFrame(({ pointer, clock }) => {
    if (!group.current || reduced) return;
    group.current.rotation.y = clock.elapsedTime * 0.18 + pointer.x * 0.12;
    group.current.rotation.x = pointer.y * -0.08;
  });

  const nodes = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => {
        const angle = (index / 28) * Math.PI * 2;
        const radius = 2.15 + (index % 4) * 0.18;
        const y = Math.sin(index * 1.7) * 0.85;
        return new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      }),
    [],
  );

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.28}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <capsuleGeometry args={[0.74, 2.25, 16, 36]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.6}
            chromaticAberration={0.04}
            anisotropy={0.12}
            distortion={0.08}
            distortionScale={0.18}
            temporalDistortion={0.05}
            transmission={0.96}
            roughness={0.12}
            color="#eaf8ff"
          />
        </mesh>
      </Float>

      <Line points={[[-3.1, -1.45, 0], [-0.92, -1.05, 0], [0, -0.92, 0], [1.05, -1.04, 0], [3.1, -1.42, 0]]} color="#2563eb" lineWidth={2} transparent opacity={0.78} />
      <Html position={[-3.25, -1.72, 0]} center className="scene-label">
        KOREA R&amp;D
      </Html>
      <Html position={[0, -1.25, 0]} center className="scene-label scene-label-center">
        BIOLAB
      </Html>
      <Html position={[3.25, -1.72, 0]} center className="scene-label">
        JAPAN B2B
      </Html>

      {nodes.map((node, index) => (
        <group key={`${node.x}-${index}`} position={node}>
          <Sphere args={[index % 5 === 0 ? 0.07 : 0.045, 12, 12]}>
            <meshStandardMaterial color={index % 3 === 0 ? "#0f766e" : index % 3 === 1 ? "#2563eb" : "#67e8f9"} roughness={0.45} metalness={0.08} />
          </Sphere>
          {index % 4 === 0 ? <Line points={[[0, 0, 0], [node.x * -0.18, node.y * -0.2, node.z * -0.18]]} color="#94a3b8" lineWidth={1} transparent opacity={0.42} /> : null}
        </group>
      ))}

      {heroLabels.map((label, index) => {
        const angle = (index / heroLabels.length) * Math.PI * 2;
        return (
          <Html key={label} position={[Math.cos(angle) * 2.65, Math.sin(index) * 1.02, Math.sin(angle) * 2.65]} center className="strain-label">
            {label}
          </Html>
        );
      })}

      <mesh position={[0, 0, -0.12]}>
        <torusGeometry args={[1.46, 0.006, 8, 96]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.42} />
      </mesh>
      <mesh position={[0, 0, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.04, 0.006, 8, 96]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.26} />
      </mesh>
    </group>
  );
}

export function BiolabScene() {
  return (
    <div className="scene-shell" aria-label="BIOLAB Japan ingredient platform 3D visualization">
      <Canvas dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0.4, 6]} fov={42} />
        <ambientLight intensity={0.72} />
        <directionalLight position={[4, 5, 4]} intensity={1.7} />
        <pointLight position={[-3, -2, 3]} intensity={0.9} color="#67e8f9" />
        <Suspense fallback={null}>
          <CapsuleCore />
        </Suspense>
      </Canvas>
    </div>
  );
}
