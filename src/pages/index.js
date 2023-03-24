import * as React from "react"
import { Canvas } from '@react-three/fiber'
import Layout from "../components/layout"
import { PerspectiveCamera, OrbitControls, Stars, Cone } from '@react-three/drei'
import { SeoHead } from "../components/seo"

export default function IndexPage() {
  return (
    <Layout>
      {/* <div className="grid grid-cols-1 place-items-center bg-[#333] h-[100%] w-full absolute">
        <div className="container">
          <h2 className="text-[#fef08a] font-bold lg:text-4xl m-0 p-0">
            Lorem ipsum dolor sit amet, adipisdcing NYC, sed do eiusmod tempor incididunt Brooklyn dolore aliqua. Imperdiet nulla malesuada pellentesque elit eget.
          </h2>
        </div>
      </div> */}
      <Canvas className="w-[100vw] h-[100vh]">
        <PerspectiveCamera makeDefault fox={75} position={[0,1,7]} />
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.4}
          enablePan={false}
          enableRotate={false}
          enableZoom={false}
        />
        <Stars />
        {/* <ambientLight intensity={0.5} />
        <spotLight position={[10,15,10]} angle={0.3} /> */}
        <Cone>
          <meshBasicMaterial color="yellow" wireframe />
        </Cone>
      </Canvas>
    </Layout>
  )
}

export const Head = () => (
  <SeoHead />
)