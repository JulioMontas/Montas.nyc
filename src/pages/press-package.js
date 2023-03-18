import * as React from "react"
import Layout from "../components/layout"
import { SeoHead } from "../components/seo"

export default function PressPackage() {
  return (
    <Layout>
      <h2>Press Package</h2>
    </Layout>
  )
}

export const Head = () => (
  <SeoHead 
    title="Press Package"
  />
)