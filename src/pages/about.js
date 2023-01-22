import * as React from "react"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "./music/mixes/styles.css";
import { StaticImage } from "gatsby-plugin-image"

const easing = [.6, -.05, .01, .99];

const fadeInUp = {
  initial:{
    x: 30,
    opacity: 0
  },
  animate:{
    x: 0,
    opacity: 1,
    transition:{
      duration: .6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <Layout>
      <Helmet>
        <title>About Me • DJ & Producer – Official Website</title>
        <meta name="description" content="From the Dominican Republic based in NYC." />
        <link rel="canonical" href="https://montas.nyc/about" />
      </Helmet>
      <svg width="50" height="50" viewBox="0 0 50 50" className="transform-[rotate(-90deg)] fixed z-50">
        <circle cx="17" cy="17" r="15" pathLength="1" className="stroke-[yellow]" />
        <motion.circle
          cx="17"
          cy="17"
          r="15"
          pathLength="1"
          className="stroke-[#888]"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={stagger} ref={ref} className="sm:h-[75vh] lg:h-[85vh] flex flex-col overflow-y-scroll ...">

          <motion.p variants={fadeInUp} className="sm:text-xl lg:text-5xl lg:leading-[5rem] sm:leading-[2.2rem] text-[#facc15] font-bold pt-[2.5rem]">
            As a DJ specializing in minimal electronic music, my goal is to create a unique and immersive listening experience for my audience. In my sets, I focus on using a stripped-down, minimalist production style and repetitive, hypnotic rhythms to build a subtle, atmospheric vibe. I try to avoid relying on big drops or overt melodies, and instead aim to create a sense of atmosphere and immersion.
          </motion.p>

          <motion.p variants={fadeInUp} className="sm:text-lg lg:text-4xl lg:leading-[4rem] sm:leading-[1.8rem] text-[#fde047] font-medium pt-0 pb-3">
            I always try to select tracks that will engage and energize the audience. Whether I'm playing at a club or a private event, my goal is always to create a memorable and enjoyable listening experience for my audience.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <StaticImage
              src="../images/landlordsxPocion_7-2-22-75.jpg"
              alt="A dinosaur"
              placeholder="dominantColor"
              layout="constrained"
              quality="50"
            />
          </motion.div>

          <motion.small variants={fadeInUp} className="sm:text-[14px] text-[#fef08a] pt-4 pb-3">
            Photography by <a href="https://www.instagram.com/digitalonly.jpeg/?hl=en" target="_blank" rel="noreferrer" className="text-[#facc15] hover:text-[#facc25] transition-all duration-400">
              @digitalonly.jpeg
            </a>
          </motion.small>

          <motion.p variants={fadeInUp} className="sm:text-s lg:text-xl lg:leading-[2rem] sm:leading-[1.7rem] text-[#fef08a] font-light pb-5">
            On <a href="https://soundcloud.com/juliomontas" target="_blank" rel="noreferrer" className="text-[#facc15] hover:text-[#facc25] transition-all duration-400">
              SoundCloud
            </a>, you can find my latest tracks and remixes, as well as recordings of my live sets. I also use the platform to share behind-the-scenes glimpses of my production process and to connect with other DJs and fans of music.
          </motion.p>

        </motion.div>
      </motion.div>
    </Layout>
  )
}
