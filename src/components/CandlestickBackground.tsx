import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export const CandlestickMesh = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.0002
      groupRef.current.rotation.y += 0.0003
    }
  })

  const candlesticks = Array.from({ length: 8 }).map((_, i) => ({
    x: (i - 3.5) * 3,
    z: Math.sin(i * 0.5) * 3,
    scale: 0.8 + Math.random() * 0.4,
  }))

  return (
    <group ref={groupRef}>
      {candlesticks.map((stick, i) => (
        <group key={i} position={[stick.x, 0, stick.z]}>
          {/* Candlestick body - thin rectangle */}
          <mesh position={[0, 1.5, 0]}>
            <boxGeometry args={[0.3, 3, 0.2]} />
            <meshStandardMaterial
              color="#ff7f00"
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>

          {/* Green candle (up) */}
          <mesh position={[0, 3.5, 0]}>
            <boxGeometry args={[0.5, 0.8, 0.3]} />
            <meshStandardMaterial
              color="#10b981"
              metalness={0.3}
              roughness={0.5}
            />
          </mesh>

          {/* Wick */}
          <mesh position={[0, 4, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
            <meshStandardMaterial
              color="#fbbf24"
              metalness={0}
              roughness={1}
            />
          </mesh>
        </group>
      ))}
    </group>
  )
}