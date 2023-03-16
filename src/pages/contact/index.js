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
            <motion.li variants={fadeInUp}>
              <a href="https://ra.co/dj/montas" 
                 target="_blank" 
                 rel="noreferrer" 
                 className="block bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-lg rounded-[10px] pl-3 pt-4 pb-3 hover:border-[#333] transition-all duration-700"
              >
                Resident Advisor
              </a>
            </motion.li>
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
          {/* <ul variants={fadeInUp} className="socialMediaLinks">
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
          </ul> */}

          <form 
            name="contact"
            method="post"
            action="/contact/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            className="w-full"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="justify-self-end mb-3 text-[#fde047] sm:text-sm lg:text-[18px]">
                Contact Me 🎉
            </motion.h2>


            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <div>
               
         {/* <div className="grid grid-cols-3 gap-3">
             <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="control">
                  <label>
                    <p className="block text-gray-700 text-sm font-bold mb-2 color-white">Date:</p>
                    <input 
                      type="date" 
                      id="date" 
                      name="Date" 
                      value="2023-03-16" 
                      min="2023-03-01" 
                      max="2025-12-31" 
                      onChange={this.handleChange} 
                      required={true} className="bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-sm rounded-tl-[10px] rounded-bl-[10px] pl-3 pt-[1.2rem] pb-[0.8rem] w-[288px]" ></input>
                  </label>
                </div>
             </div>
             <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="control">
                  <label for="appt-start" className="block text-gray-700 text-sm font-bold mb-2 color-white">Start:</label>
                  <input 
                    id="appt-start" 
                    type="time" 
                    name="Start" 
                    min="02:00" 
                    max="18:00" 
                    onChange={this.handleChange} 
                    className="bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-sm rounded-tl-[10px] rounded-bl-[10px] pl-3 pt-[1.2rem] pb-[0.8rem] w-[288px]" />
                </div>
             </div>
             <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="control">
                  <label for="appt-end" className="block text-gray-700 text-sm font-bold mb-2 color-white" for="appt-end">Ends:</label>
                  <input 
                    type="time" 
                    id="appt-end" 
                    name="End" 
                    min="02:00" 
                    max="18:00" 
                    onChange={this.handleChange} 
                    className="bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-sm rounded-tl-[10px] rounded-bl-[10px] pl-3 pt-[1.2rem] pb-[0.8rem w-[288px]"/>
                </div>
             </div>
             </div> */}


            {/* <div class="grid grid-cols-3 gap-3">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="inline-block relative">
                <label for="budget" className="block text-gray-700 text-sm font-bold mb-2 color-white">Location:</label>
                  <select id="location" name="Location" onChange={this.handleChange} className="block appearance-none w-full bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-sm rounded-tl-[10px] rounded-bl-[10px] pl-3 pt-[1.2rem] pb-[0.8rem] tracking-widest w-[288px] focus:outline-none focus:shadow-outline"> 
                    <option value="private">Private party</option>
                    <option value="restaurant">Lounge</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="restaurant">Club</option>
                    <option value="restaurant">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="control">
                    <label for="budget" className="block text-gray-700 text-sm font-bold mb-2 color-white">Overall budget:</label>
                    <input 
                      type={"number"}
                      id="budget" 
                      name="Budget" 
                      min="250" 
                      max="10000" 
                      step="5" 
                      onChange={this.handleChange} 
                      className="bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-sm rounded-tl-[10px] rounded-bl-[10px] pl-3 pt-[1.2rem] pb-[0.8rem] tracking-widest w-[288px]"
                    />
                  </div>
              </div>
              <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="control">
                    <label for="guests" className="block text-gray-700 text-sm font-bold mb-2 color-white">Total Guests:</label>
                    <input 
                      type={"number"} 
                      id="guests" 
                      name="Guests" 
                      min="1" 
                      max="10000" 
                      onChange={this.handleChange} 
                      className="bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-sm rounded-tl-[10px] rounded-bl-[10px] pl-3 pt-[1.2rem] pb-[0.8rem] w-[288px]"
                    />
                  </div>
              </div>
            </div> */}

            <div className="grid grid-cols-2 gap-2">

                <div className="field mb-2" variants={fadeInUp} >
                  <div className="control">
                    <motion.input
                      variants={fadeInUp}
                      className="bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-sm rounded-tl-lg pl-3 pt-[1.2rem] pb-[0.8rem] tracking-widest w-full"
                      placeholder="Name"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                      minlength="4" 
                      maxlength="18"
                    />
                  </div>
                </div>
              
                <div className="field mb-2">
                  <div className="control">
                    <motion.input
                      variants={fadeInUp}
                      placeholder="Email"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      required={true}
                      className="bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-sm rounded-tr-lg pl-3 pt-[1.2rem] pb-[0.8rem] tracking-widest w-full"
                    />
                  </div>
                </div>


              </div>

              <div className="field mb-1">
                <div className="control">
                <motion.textarea
                    variants={fadeInUp} 
                    className="bg-[rgba(150,150,150,0.10)] border-[#ECD905] border-2 text-[#facc15] text-sm pl-3 pt-[1.2rem] pb-[0.8rem] tracking-widest w-full h-[10rem]"
                    placeholder="Message"
                    name={"message"}
                    onChange={this.handleChange}
                    id={"message"}
                    required={true}
                    />
                </div>
              </div>

              <div className="field">
                <motion.button
                  variants={fadeInUp}
                  type="submit" 
                  className="bg-[rgba(150,150,150,0.10)] bg-[#ECD905] text-[#333] text-lg rounded-b-lg w-full pt-4 pb-3 w-full">
                  Submit
                </motion.button>
              </div>

            </div>
          </form>

        </div>
        </motion.div>
      </motion.div>
      </Layout>
    );
  }
}
