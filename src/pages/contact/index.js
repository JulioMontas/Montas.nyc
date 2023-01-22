import * as React from "react"
import { navigate } from "gatsby-link";
import Layout from "../../components/layout"
import { motion } from "framer-motion"

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

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={stagger} className="flex sm:gap-1 lg:gap-10 items-center items-baseline sm:flex-col tracking-widest">
        <div className="sm:w-[90vw] lg:w-[45vw] grid gap-20">
          <ul variants={fadeInUp} className="socialMediaLinks">
            <motion.li className="mb-2" variants={fadeInUp}>
              <h2 className="justify-self-end text-[#fde047] sm:text-sm lg:text-[18px]">
                Follow Me
              </h2>
            </motion.li>
            {/* <motion.li variants={fadeInUp}>
              <a href="https://ra.co/dj/montas" 
                 target="_blank" 
                 rel="noreferrer" 
                 className="block bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-lg rounded-[10px] pl-3 pt-4 pb-3 hover:border-[#333] transition-all duration-700"
              >
                Resident Advisor
              </a>
            </motion.li> */}
            <motion.li className="mt-[1rem]" variants={fadeInUp}>
              <a href="https://soundcloud.com/juliomontas" 
                 target="_blank" 
                 rel="noreferrer" 
                 className="block bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-lg rounded-[10px] pl-3 pt-4 pb-3 hover:border-[#333] transition-all duration-700"
              >
                SoundCloud
              </a>
            </motion.li>
            <motion.li className="mt-[1rem]" variants={fadeInUp}>
              <a href="https://instagram.com/juliomontas" 
                 target="_blank" 
                 rel="noreferrer" 
                 className="block bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-lg rounded-[10px] pl-3 pt-4 pb-3 hover:border-[#333] transition-all duration-700"
              >
                Instagram
              </a>
            </motion.li>
            {/* <motion.li className="mt-[1rem]" variants={fadeInUp}>
              <a href="https://www.twitch.tv/montasmusic" 
                 target="_blank" 
                 rel="noreferrer" 
                 className="block bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-lg rounded-[10px] pl-3 pt-4 pb-3 hover:border-[#333] transition-all duration-700"
              >
                Twitch
              </a>
            </motion.li> */}
          </ul>
          <ul variants={fadeInUp} className="socialMediaLinks">
            <motion.li className="mb-2" variants={fadeInUp}>
              <h2 className="justify-self-end text-[#fde047] sm:text-sm lg:text-[18px]">
                Contact Me
              </h2>
            </motion.li>
            <motion.li variants={fadeInUp}>
            <a variants={fadeInUp}
              href="https://forms.gle/BFRcoQSZryhp3dWz6"
              target="_blank"
              rel="noreferrer" 
              className="mt-[1rem] block bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-lg rounded-[10px] pl-3 pt-4 pb-3 hover:border-[#333] transition-all duration-700"
            >
              Booking
            </a>
            </motion.li>
          </ul>
          {/*
          <motion.form variants={fadeInUp}
            name="contact"
            method="post"
            action="/contact/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <h2 variants={fadeInUp} className="justify-self-end mb-3 text-[#fde047] sm:text-sm lg:text-[18px]">Stay Updated 🎉</h2>
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <div className="flex">
              <div className="field">
                <div className="control w-full">
                  <input
                    placeholder="Email"
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    required={true}
                    className="bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-sm rounded-tl-[10px] rounded-bl-[10px] pl-3 pt-[1.2rem] pb-[0.8rem] tracking-widest w-[200px]"
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="bg-[rgba(150,150,150,0.10)] bg-[#ECD905] text-[#333] text-lg rounded-br-[10px] rounded-tr-[10px] w-full pt-4 pb-3 w-[120px]">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.form>
          */}
        </div>
        </motion.div>
      </motion.div>
      </Layout>
    );
  }
}
