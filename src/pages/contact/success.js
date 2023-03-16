import React from 'react';
import Layout from "../../components/layout"
import Confetti from 'react-confetti'


const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};


export default function SuccessPage() {

  const { width, height } = useWindowSize(100); // wait 100ms for the resize
  
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
