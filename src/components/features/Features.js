import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Software Developer"
          des="I design and implement robust software solutions, focusing on functionality, performance, and scalability. From concept to deployment, I build applications that drive business success."
         
        />
        <Card
          title="Frontend Developer"
          des="Specializing in crafting interactive and user-friendly interfaces using modern web technologies like React, HTML, CSS, and JavaScript, ensuring seamless user experiences across all devices."
        
        />
        <Card
          title="Full Stack Developer"
          des="Proficient in both frontend and backend development, I build end-to-end web applications using the MERN stack, creating efficient, scalable, and maintainable systems from database to UI."
        />
        <Card
          title="Software Engineer"
          des="I apply engineering principles to solve complex problems, architecting reliable, high-performance software solutions that are tailored to meet the specific needs of users and businesses."
        />
        <Card
          title="Web Developer"
          des="I create visually appealing and responsive websites, ensuring fast load times, smooth navigation, and optimized user experiences, using the latest technologies like HTML, CSS, JavaScript, and React."
        />
        
      </div>
    </section>
  );
}

export default Features