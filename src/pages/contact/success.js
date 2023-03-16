import React from 'react';
import Layout from "../../components/layout"
import useWindowSize from "use-window-size-v2";
import Confetti from 'react-confetti'

export default function SuccessPage() {

  
  const { width, height } = useWindowSize(100); // wait 100ms for the resize
  console.log(height);
  
  return (
    <Layout>
      
      <Confetti
        width={width}
        height={height}
      />
     
      <div>
        <h2 className="text-[#FFEA00] sm:text-4xl">Thank You For Subscribing!</h2>
        <p className="text-[#FFEA10] sm:text-lg">"You gotta water your plants. Nobody can water them for you." - DJ Khaled</p>
      </div>
    </Layout>
  )
}
