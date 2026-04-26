"use client";

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  Float,
  Center,
  Environment,
  MeshDistortMaterial,
} from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";

/* ── Mouse-driven scene rotation ───────────────────────────────────── */
function MouseRotator() {
  const { scene } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    current.current.x += (mouse.current.x - current.current.x) * 0.05;
    current.current.y += (mouse.current.y - current.current.y) * 0.05;
    scene.rotation.y = current.current.x * 0.4;
    scene.rotation.x = -current.current.y * 0.2;
  });

  return null;
}

/* ── Shape components ───────────────────────────────────────────────── */
function FloatingGeometry({
  position,
  scale = 1,
  color,
  speed = 2,
}: {
  position: [number, number, number];
  scale?: number;
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial color={color} speed={2} distort={0.3} radius={1} />
      </mesh>
    </Float>
  );
}

function FloatingTorus({
  position,
  color,
  scale = 1,
  speed = 1.5,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[0.8, 0.35, 16, 32]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function FloatingSphere({
  position,
  color,
  scale = 1,
  speed = 2.5,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={1}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshDistortMaterial color={color} speed={3} distort={0.4} radius={1} />
      </mesh>
    </Float>
  );
}

function FloatingBox({
  position,
  color,
  scale = 1,
  speed = 2,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
      </mesh>
    </Float>
  );
}

function FloatingOctahedron({
  position,
  color,
  scale = 1,
  speed = 2,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.25;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.35;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={0.9}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          speed={2.5}
          distort={0.2}
          radius={1}
        />
      </mesh>
    </Float>
  );
}

function FloatingCone({
  position,
  color,
  scale = 1,
  speed = 1.8,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.7} floatIntensity={0.7}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <coneGeometry args={[0.7, 1.4, 8]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.25} />
      </mesh>
    </Float>
  );
}

function FloatingTorusKnot({
  position,
  color,
  scale = 1,
  speed = 1.2,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
        <MeshDistortMaterial
          color={color}
          speed={1.5}
          distort={0.15}
          radius={1}
        />
      </mesh>
    </Float>
  );
}

function FloatingDodecahedron({
  position,
  color,
  scale = 1,
  speed = 2,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.18;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.28;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.7}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} metalness={0.75} roughness={0.2} />
      </mesh>
    </Float>
  );
}

/* ── Scene ──────────────────────────────────────────────────────────── */
export default function Scene3D() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 16], fov: 60 }}>
        <Suspense fallback={null}>
          <color attach="background" args={["#0f0f14"]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#a855f7" />
          <pointLight
            position={[-10, -10, -10]}
            intensity={1.2}
            color="#06b6d4"
          />
          <pointLight position={[0, 10, 5]} intensity={1.5} color="#f472b6" />
          <pointLight position={[-8, 5, -3]} intensity={1} color="#fbbf24" />
          <pointLight position={[8, -5, 3]} intensity={0.9} color="#14b8a6" />
          <pointLight position={[0, -10, 5]} intensity={1} color="#8b5cf6" />
          <spotLight
            position={[5, 8, 5]}
            angle={0.4}
            penumbra={1}
            intensity={1.5}
            color="#ec4899"
          />

          <MouseRotator />
          <Center />

          {/* ── TOP ROW — ML scale 1.2–1.5 ── */}
          <FloatingGeometry
            position={[-11, 6.5, -2]}
            color="#a855f7"
            scale={1.3}
            speed={1.5}
          />
          <FloatingTorusKnot
            position={[-6.5, 7, -3]}
            color="#06b6d4"
            scale={1.4}
            speed={1.0}
          />
          <FloatingOctahedron
            position={[-1.5, 7.5, -2]}
            color="#f472b6"
            scale={1.5}
            speed={1.8}
          />
          <FloatingDodecahedron
            position={[3.5, 7, -3]}
            color="#fbbf24"
            scale={1.3}
            speed={1.3}
          />
          <FloatingTorus
            position={[8.5, 6.5, -2]}
            color="#8b5cf6"
            scale={1.4}
            speed={1.6}
          />
          <FloatingBox
            position={[12, 7, -3]}
            color="#ec4899"
            scale={1.2}
            speed={1.4}
          />

          {/* ── UPPER-MID ROW ── */}
          <FloatingCone
            position={[-13, 3.5, -4]}
            color="#14b8a6"
            scale={1.4}
            speed={1.4}
          />
          <FloatingBox
            position={[-9, 4, -2]}
            color="#ec4899"
            scale={1.5}
            speed={2.0}
          />
          <FloatingSphere
            position={[-5, 4, -3]}
            color="#a855f7"
            scale={1.6}
            speed={1.7}
          />
          <FloatingGeometry
            position={[-0.5, 3.5, -4]}
            color="#06b6d4"
            scale={1.4}
            speed={1.2}
          />
          <FloatingTorusKnot
            position={[4.5, 4, -2]}
            color="#f97316"
            scale={1.3}
            speed={1.5}
          />
          <FloatingOctahedron
            position={[9, 3.5, -3]}
            color="#f472b6"
            scale={1.5}
            speed={1.9}
          />
          <FloatingDodecahedron
            position={[13, 4, -4]}
            color="#fbbf24"
            scale={1.2}
            speed={1.3}
          />

          {/* ── CENTER BAND ── */}
          <FloatingTorus
            position={[-13, 0, -3]}
            color="#ec4899"
            scale={1.5}
            speed={1.6}
          />
          <FloatingDodecahedron
            position={[-8.5, 0.5, -2]}
            color="#a855f7"
            scale={1.6}
            speed={1.3}
          />
          <FloatingGeometry
            position={[-4.5, 0, -4]}
            color="#14b8a6"
            scale={1.5}
            speed={1.8}
          />
          <FloatingTorusKnot
            position={[0, 0.5, -5]}
            color="#8b5cf6"
            scale={1.7}
            speed={1.1}
          />
          <FloatingCone
            position={[4.5, 0, -4]}
            color="#fbbf24"
            scale={1.4}
            speed={1.7}
          />
          <FloatingSphere
            position={[8.5, 0.5, -2]}
            color="#f472b6"
            scale={1.6}
            speed={2.0}
          />
          <FloatingBox
            position={[13, 0, -3]}
            color="#06b6d4"
            scale={1.4}
            speed={1.4}
          />

          {/* ── LOWER-MID ROW ── */}
          <FloatingGeometry
            position={[-13, -3.5, -4]}
            color="#8b5cf6"
            scale={1.3}
            speed={1.5}
          />
          <FloatingOctahedron
            position={[-9, -3, -2]}
            color="#f97316"
            scale={1.5}
            speed={1.8}
          />
          <FloatingTorus
            position={[-5, -3.5, -3]}
            color="#ec4899"
            scale={1.4}
            speed={1.2}
          />
          <FloatingBox
            position={[-0.5, -4, -4]}
            color="#a855f7"
            scale={1.6}
            speed={1.6}
          />
          <FloatingSphere
            position={[4.5, -3.5, -3]}
            color="#14b8a6"
            scale={1.5}
            speed={2.0}
          />
          <FloatingCone
            position={[9, -3, -2]}
            color="#fbbf24"
            scale={1.4}
            speed={1.4}
          />
          <FloatingTorusKnot
            position={[13, -3.5, -4]}
            color="#f472b6"
            scale={1.3}
            speed={1.7}
          />

          {/* ── BOTTOM ROW ── */}
          <FloatingBox
            position={[-12, -7, -3]}
            color="#06b6d4"
            scale={1.3}
            speed={1.5}
          />
          <FloatingOctahedron
            position={[-7.5, -7.5, -2]}
            color="#a855f7"
            scale={1.4}
            speed={1.8}
          />
          <FloatingTorusKnot
            position={[-2.5, -7, -3]}
            color="#f97316"
            scale={1.5}
            speed={1.2}
          />
          <FloatingGeometry
            position={[2.5, -7.5, -2]}
            color="#8b5cf6"
            scale={1.4}
            speed={1.6}
          />
          <FloatingDodecahedron
            position={[7.5, -7, -3]}
            color="#ec4899"
            scale={1.3}
            speed={2.0}
          />
          <FloatingCone
            position={[12, -7.5, -2]}
            color="#f472b6"
            scale={1.2}
            speed={1.4}
          />

          {/* ── DEEP BACKGROUND ── */}
          <FloatingGeometry
            position={[-9, 4, -9]}
            color="#a855f7"
            scale={2.2}
            speed={0.8}
          />
          <FloatingTorus
            position={[0, 0, -10]}
            color="#06b6d4"
            scale={2.5}
            speed={0.6}
          />
          <FloatingDodecahedron
            position={[9, -4, -9]}
            color="#fbbf24"
            scale={2.2}
            speed={0.9}
          />
          <FloatingSphere
            position={[-5, -6, -8]}
            color="#f472b6"
            scale={2.4}
            speed={0.7}
          />
          <FloatingOctahedron
            position={[6, 5, -8]}
            color="#14b8a6"
            scale={2.0}
            speed={1.0}
          />
          <FloatingTorusKnot
            position={[-2, 8, -9]}
            color="#8b5cf6"
            scale={2.0}
            speed={0.7}
          />
          <FloatingBox
            position={[4, -8, -8]}
            color="#ec4899"
            scale={2.1}
            speed={0.8}
          />

          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
