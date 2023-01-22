import * as React from "react"
import { Canvas } from '@react-three/fiber'
import {Helmet} from "react-helmet";
import Layout from "../components/layout"
import { PerspectiveCamera, OrbitControls, Stars, Cone } from '@react-three/drei'

export default function IndexPage() {
  return (
    <Layout>
      <Helmet>
        <title>M O N T Á S • DJ & Producer – Official Website</title>
        <meta name="description" content="From the Dominican Republic based in NYC." />
        <link rel="canonical" href="https://montas.nyc/" />
      </Helmet>
      {/* <div className="grid grid-cols-1 place-items-center bg-[#333] h-[100%] w-full absolute">
        <div className="container">
          <h2 className="text-[#fef08a] font-bold lg:text-4xl m-0 p-0">
            Lorem ipsum dolor sit amet, adipisdcing NYC, sed do eiusmod tempor incididunt Brooklyn dolore aliqua. Imperdiet nulla malesuada pellentesque elit eget.
          </h2>
        </div>
      </div> */}
      <Canvas className="w-[100vw] h-[100vh]">
        <PerspectiveCamera makeDefault fox={75} position={[0,0,5]} />
        <OrbitControls autoRotate />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10,15,10]} angle={0.3} />
        <Cone>
          <meshBasicMaterial color="yellow" wireframe />
        </Cone>
      </Canvas>
    </Layout>
  )
}
