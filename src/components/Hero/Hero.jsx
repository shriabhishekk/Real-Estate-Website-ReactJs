import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import {motion} from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper ">
      <div className="paddings innerWidth hero-container flexCenter">
        {/* left-side */}
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle" />

            <motion.h1
            initial={{y:"2rem", opacity:0}}
            animate={{y:0, opacity:1}}
            transition ={{
              duration:3,
              type:"spring"
           }}>

              Discover <br />
              Most Suitable
              <br /> Property
            </motion.h1>
          </div>
          <div className="hero-desc flexColStart secondaryText">
            <span>Find a variety of properties that suit you very easilty</span>
            Forget all difficulties in finding a residence for you<span></span>
          </div>
          <div className="search-bar flexCenter">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="stats flexCenter">

            <div className="flexColCenter stat">
            <span>
              <CountUp start={8800} end={9000} duration={4} />
              <span>+</span>
            </span>
            <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
            <span>
              <CountUp start={1950} end={2000} duration={4} />
              <span>+</span>
            </span>
            <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
            <span>
              <CountUp start={10} end={30} duration={4} />
              <span>+</span>
            </span>
            <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/* right side */}

        <div className="hero-right flexCenter">
          <motion.div 
          initial={{x:"7rem", opacity:0}}
          animate={{x:0, opacity:1}}
          transition ={{
            duration:3,
            type:"spring"
         }}
         className="image-container"
          >
            <img src="./hero-image.png" alt="hero-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
