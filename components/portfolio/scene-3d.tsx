"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text, Center, Environment, MeshDistortMaterial } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

function FloatingGeometry({ position, scale, color }: { 
  position: [number, number, number]
  scale?: number
  color: string 
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial color={color} speed={2} distort={0.3} radius={1} />
      </mesh>
    </Float>
  )
}

function FloatingTorus({ position, color }: { 
  position: [number, number, number]
  color: string 
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })
  
  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.8, 0.35, 16, 32]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  )
}

function FloatingSphere({ position, color }: { 
  position: [number, number, number]
  color: string 
}) {
  return (
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshDistortMaterial color={color} speed={3} distort={0.4} radius={1} />
      </mesh>
    </Float>
  )
}

function FloatingBox({ position, color }: { 
  position: [number, number, number]
  color: string 
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
      </mesh>
    </Float>
  )
}

function Name3D() {
  return (
    <Center>
      {/* <Text
        fontSize={2.2}
        color="#e0e0e0"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
        letterSpacing={0.1}
      >
        AYUSH
      </Text> */}
    </Center>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <color attach="background" args={["#0f0f14"]} />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#a855f7" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#06b6d4" />
          <pointLight position={[0, 10, 5]} intensity={1} color="#f472b6" />
          <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1} color="#8b5cf6" />
          
          <Name3D />
          
          {/* Purple / Violet shapes */}
          <FloatingGeometry position={[-5, 2.5, -3]} color="#a855f7" scale={0.7} />
          <FloatingGeometry position={[5.5, -2, -4]} color="#8b5cf6" scale={0.9} />
          
          {/* Cyan / Teal shapes */}
          <FloatingTorus position={[-4, -2.5, -2]} color="#06b6d4" />
          <FloatingSphere position={[4.5, 3, -3]} color="#14b8a6" />
          
          {/* Pink / Rose shapes */}
          <FloatingBox position={[6, 0.5, -3]} color="#f472b6" />
          <FloatingSphere position={[-6, 0, -4]} color="#ec4899" />
          
          {/* Orange / Amber accents */}
          <FloatingBox position={[-3, 3.5, -5]} color="#f97316" />
          <FloatingGeometry position={[3, -3.5, -4]} color="#fbbf24" scale={0.5} />
          
          <Environment preset="night" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
