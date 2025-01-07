"use client"

import { Canvas } from '@react-three/fiber'
import {ContactShadows, Environment, OrbitControls, PerspectiveCamera} from "@react-three/drei"
import {FerrariPremium} from "@/components/FerrariPremium";

export default function Home() {
  return (
      <div className="h-[100vh]">
        <h1 className="text-red-500">aaaaa</h1>
        <Canvas
            style={{
              width: "100%",
              height: "100%",
            }}
        >
          <color attach="background" args={["#eee"]}/>
          <Environment preset="studio"/>
          <PerspectiveCamera makeDefault position={[0, 0, 1]}/>
          <OrbitControls/>
          <FerrariPremium/>
          <ContactShadows/>
        </Canvas>
      </div>
  );
}
