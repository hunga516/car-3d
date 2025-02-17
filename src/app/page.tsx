"use client"

import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, PerspectiveCamera, Plane, Sphere, Cylinder } from "@react-three/drei"
import { FerrariPremium } from "@/components/FerrariPremium";

export default function Home() {
    return (
        <div className="h-[100vh]">
            <h1 className="text-red-500">aaaaa</h1>
            <Canvas
                shadows
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <color attach="background" args={["#eee"]} />

                {/* Thêm ánh sáng */}
                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={1.5}
                    castShadow
                />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                {/* Thêm mặt phẳng làm nền */}
                <Plane
                    args={[100, 100]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -0.5, 0]}
                    receiveShadow
                >
                    <meshStandardMaterial color="#eee" />
                </Plane>


                <Plane
                    args={[4, 50]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -0.49, 0]}
                    receiveShadow
                >
                    <meshStandardMaterial color="#555" />
                </Plane>

                {/* Cây cối */}
                <group>
                    {/* Thân cây */}
                    <Cylinder args={[0.2, 0.2, 3]} position={[-5, 1, -3]} castShadow>
                        <meshStandardMaterial color="#8B4513" />
                    </Cylinder>
                    {/* Tán cây */}
                    <Sphere args={[1.5, 32, 32]} position={[-5, 3, -3]} castShadow>
                        <meshStandardMaterial color="#228B22" />
                    </Sphere>
                </group>

                <group>
                    <Cylinder args={[0.2, 0.2, 3]} position={[5, 1, -5]} castShadow>
                        <meshStandardMaterial color="#8B4513" />
                    </Cylinder>
                    <Sphere args={[1.5, 32, 32]} position={[5, 3, -5]} castShadow>
                        <meshStandardMaterial color="#228B22" />
                    </Sphere>
                </group>

                <Environment preset="studio" />
                <PerspectiveCamera makeDefault position={[0, 2, 5]} />
                <OrbitControls />

                {/* Chiếc xe */}
                <FerrariPremium scale={[50, 50, 50]} castShadow />

                {/* Bóng tiếp xúc */}
                <ContactShadows position={[0, -0.5, 0]} opacity={0.5} scale={10} blur={1} far={10} />
            </Canvas>
        </div>
    );
}
