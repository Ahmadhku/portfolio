import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import heroAnimation from "../../../public/animation/hero animation.json";

import "./Hero.css";
import { motion } from "framer-motion";
function openInNewTab(url) {
  window.open(url, "_blank");
}
function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section border">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/Ahmet hero.png"
            className="avatar"
            alt=""
          />
          <span className="icon-verified"></span>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Graphic designer and full-stack developer
        </motion.h1>
        <p className="sub-title">
          I am Ahmet Awad, a graphic designer at a real estate and tourism
          marketing company. Currently, I am also studying software engineering
          at Hasan Kalyoncu University. I aspire to establish a specialized
          company in software development for educational and governmental
          institutions in the future.
        </p>
        <div className="all-icons flex">
          <div
            className="icon icon-twitter"
            onClick={() =>
              openInNewTab(
                "https://x.com/AhmadAw91563797?t=kn0Gw2DAln2zcS7muKMJbg&s=09"
              )
            }
          ></div>
          <div
            className="icon icon-instagram"
            onClick={() =>
              openInNewTab(
                "https://www.instagram.com/ahmad.awad9797?igsh=anNqejh5Yjc5Y3Bq"
              )
            }
          ></div>
          <div
            className="icon icon-github"
            onClick={() => openInNewTab("https://github.com/Ahmadhku")}
          ></div>
          <div
            className="icon icon-linkedin-square"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/ahmad-awad-539904235/")
            }
          ></div>
          <div
            className="icon icon-behance"
            onClick={() => openInNewTab("https://www.behance.net/ahmadawad1")}
          ></div>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie className="hero-animation" animationData={heroAnimation} />
      </div>
    </section>
  );
}

export default Hero;
