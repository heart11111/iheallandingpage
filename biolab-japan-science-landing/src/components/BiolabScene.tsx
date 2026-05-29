"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, Line, PerspectiveCamera, Sphere } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { heroLabels } from "@/lib/ingredients";
import { useReducedMotion } from "@/lib/useReducedMotion";

const particlePalette = ["#c8324a", "#c5964b", "#6d8f72", "#f8dbe4", "#fffaf7"];

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const reduced = useReducedMotion();

  const particles = useMemo(() => {
    const count = 112;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = particlePalette.map((color) => new THREE.Color(color));

    for (let index = 0; index < count; index += 1) {
      const ring = index / count;
      const angle = ring * Math.PI * 10.8;
      const radius = 0.45 + Math.sqrt(ring) * 3.35 + Math.sin(index * 1.7) * 0.18;
      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = Math.sin(index * 2.13) * 1.42;
      positions[index * 3 + 2] = Math.sin(angle) * radius * 0.55 + Math.cos(index) * 0.18;

      const color = palette[index % palette.length];
      colors[index * 3] = color.r;
      colors[index * 3 + 1] = color.g;
      colors[index * 3 + 2] = color.b;
    }

    return { colors, positions };
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!points.current || reduced) return;
    points.current.rotation.y = clock.elapsedTime * 0.055 + pointer.x * 0.045;
    points.current.rotation.x = Math.sin(clock.elapsedTime * 0.22) * 0.035 + pointer.y * -0.035;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[particles.colors, 3]} />
      </bufferGeometry>
      <pointsMaterial vertexColors size={0.032} sizeAttenuation transparent opacity={0.7} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function OrbitSystem() {
  const group = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();

  useFrame(({ clock }) => {
    if (!group.current || reduced) return;
    group.current.rotation.z = Math.sin(clock.elapsedTime * 0.18) * 0.08;
    group.current.rotation.y = clock.elapsedTime * 0.055;
  });

  return (
    <group ref={group}>
      <mesh rotation={[0.18, 0.2, 0.04]}>
        <torusGeometry args={[1.55, 0.004, 6, 144]} />
        <meshBasicMaterial color="#c8324a" transparent opacity={0.28} />
      </mesh>
      <mesh rotation={[Math.PI / 2.25, 0.05, -0.16]}>
        <torusGeometry args={[1.12, 0.004, 6, 128]} />
        <meshBasicMaterial color="#c5964b" transparent opacity={0.26} />
      </mesh>
      <mesh rotation={[0.95, -0.28, 0.28]}>
        <torusGeometry args={[2.02, 0.003, 6, 160]} />
        <meshBasicMaterial color="#6d8f72" transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

function FlowBead({ index, total }: { index: number; total: number }) {
  const bead = useRef<THREE.Mesh>(null);
  const reduced = useReducedMotion();
  const color = index % 3 === 0 ? "#c8324a" : index % 3 === 1 ? "#c5964b" : "#6d8f72";

  useFrame(({ clock }) => {
    if (!bead.current || reduced) return;
    const t = (index / total + clock.elapsedTime * 0.052) % 1;
    const x = -2.52 + t * 5.04;
    const y = -1.46 + Math.sin(t * Math.PI) * 0.32 + Math.sin(clock.elapsedTime * 1.4 + index) * 0.025;
    const z = Math.sin(t * Math.PI * 2) * 0.12;
    const scale = 0.72 + Math.sin(clock.elapsedTime * 1.2 + index) * 0.16;
    bead.current.position.set(x, y, z);
    bead.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={bead}>
      <sphereGeometry args={[0.026, 10, 10]} />
      <meshBasicMaterial color={color} transparent opacity={0.78} />
    </mesh>
  );
}

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
      Array.from({ length: 18 }, (_, index) => {
        const angle = (index / 18) * Math.PI * 2;
        const radius = 1.88 + (index % 4) * 0.16;
        const y = Math.sin(index * 1.7) * 0.7;
        return new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      }),
    [],
  );

  const displayLabels = useMemo(() => heroLabels.filter((label) => ["MED01", "MED02", "NVP-2106", "BGN4", "BORI", "ThinkGIN"].includes(label)), []);

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.28}>
        <mesh rotation={[0, 0, Math.PI / 2]} scale={[0.6, 0.6, 0.6]}>
          <capsuleGeometry args={[0.58, 2.18, 18, 40]} />
          <meshPhysicalMaterial
            color="#fffaf7"
            roughness={0.08}
            metalness={0.02}
            transparent
            opacity={0.16}
            transmission={0.45}
            thickness={0.22}
            clearcoat={1}
            clearcoatRoughness={0.04}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]} scale={[0.64, 0.64, 0.64]}>
          <capsuleGeometry args={[0.6, 2.22, 18, 40]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.08} side={THREE.DoubleSide} depthWrite={false} />
        </mesh>
      </Float>

      <Sphere args={[0.105, 24, 24]} position={[0, 0.02, 0.04]}>
        <meshBasicMaterial color="#fff4f6" transparent opacity={0.56} blending={THREE.AdditiveBlending} depthWrite={false} />
      </Sphere>
      <Sphere args={[0.28, 32, 32]} position={[0, 0.02, 0.04]}>
        <meshBasicMaterial color="#f8dbe4" transparent opacity={0.1} blending={THREE.AdditiveBlending} depthWrite={false} />
      </Sphere>

      <ParticleField />
      <OrbitSystem />

      <Line points={[[-2.42, -1.45, 0], [-0.92, -1.1, 0], [0, -0.98, 0], [1.05, -1.1, 0], [2.42, -1.42, 0]]} color="#c8324a" lineWidth={1.15} transparent opacity={0.46} />
      {Array.from({ length: 9 }, (_, index) => (
        <FlowBead key={index} index={index} total={9} />
      ))}
      <Html position={[-1.82, -1.62, 0]} center className="scene-label scene-label-side">
        KOREA R&amp;D
      </Html>
      <Html position={[0, -1.26, 0]} center className="scene-label scene-label-center">
        BIOLAB
      </Html>
      <Html position={[1.82, -1.62, 0]} center className="scene-label scene-label-side">
        JAPAN B2B
      </Html>

      {nodes.map((node, index) => (
        <group key={`${node.x}-${index}`} position={node}>
          <Sphere args={[index % 5 === 0 ? 0.043 : 0.028, 12, 12]}>
            <meshStandardMaterial color={index % 3 === 0 ? "#6d8f72" : index % 3 === 1 ? "#c8324a" : "#c5964b"} roughness={0.34} metalness={0.1} transparent opacity={0.86} />
          </Sphere>
          {index % 4 === 0 ? <Line points={[[0, 0, 0], [node.x * -0.15, node.y * -0.18, node.z * -0.15]]} color="#c5964b" lineWidth={0.6} transparent opacity={0.28} /> : null}
        </group>
      ))}

      {displayLabels.map((label, index) => {
        const angle = (index / displayLabels.length) * Math.PI * 2 + 0.34;
        const mobileHide = index > 2;
        return (
          <Html key={label} position={[Math.cos(angle) * 1.42, Math.sin(index * 1.35) * 0.56, Math.sin(angle) * 1.28]} center className={`strain-label${mobileHide ? " strain-label-mobile-hide" : ""}`}>
            {label}
          </Html>
        );
      })}
    </group>
  );
}

export function BiolabScene() {
  return (
    <div className="scene-shell" aria-label="BIOLAB Japan ingredient platform 3D visualization">
      <Canvas dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0.4, 6.45]} fov={42} />
        <ambientLight intensity={0.72} />
        <directionalLight position={[4, 5, 4]} intensity={1.7} />
        <pointLight position={[-3, -2, 3]} intensity={0.9} color="#ffd6df" />
        <Suspense fallback={null}>
          <CapsuleCore />
        </Suspense>
      </Canvas>
    </div>
  );
}
