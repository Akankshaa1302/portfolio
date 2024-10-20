import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiExpress } from "react-icons/si";
import { DiMongodb, DiNodejs } from "react-icons/di";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "Web Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Akanksha Gupta</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I specialize in crafting full-stack web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). With a passion for clean, efficient, and scalable code, I build dynamic, user-friendly interfaces with React, while ensuring robust backend functionality through Node.js and Express.js. MongoDB empowers my data management, allowing me to handle complex datasets seamlessly. 
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Akankshaa1302" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            
            
            <a href="https://www.linkedin.com/in/akanksha-gupta-a7245322a" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <DiNodejs />
            </span>
            <span className="bannerIcon">
              <SiExpress/>
            </span>
            <span className="bannerIcon">
              <DiMongodb />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
