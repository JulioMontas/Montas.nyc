import React from 'react'
import { Canvas } from '@react-three/fiber'
import Layout from "../../../components/layout"
import { PerspectiveCamera, OrbitControls, Stars, Text3D, Float, Center } from '@react-three/drei'
import Liquido from "../../../assets/LIQUIDO_Fluid_Regular.json"
import ReactSoundcloud from 'react-soundcloud-embed';

export default function MusicPage() {
  return (
    <Layout>
      <div className="w-[100vw] fixed z-50 opacity-25 hover:opacity-100 transition-all duration-700">
        <ReactSoundcloud url="https://soundcloud.com/juliomontas/half-and-half-raw-studio-mix"/>
      </div>
      <Canvas className="w-[100vw] h-[100vh]">
      <PerspectiveCamera makeDefault fox={75} position={[0,0,5]} />
        <OrbitControls autoRotate />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10,15,10]} angle={0.3} />
        <Center>
          <Float floatIntensity={5} speed={2}>
           <Text3D font={Liquido} bevelEnabled bevelSize={0.06}>
              Half And Half ( Raw Studio Mix )
              <meshNormalMaterial />
            </Text3D>
          </Float>
        </Center>
      </Canvas>
    </Layout>
  )
}
