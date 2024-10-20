import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024- 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="Octanet Services Pvt ltd.(July 2024-Aug 2024)"
            result="Remote"
            des=" Master the structure of web pages, learn styling , responsive design, learn to clone repositories.Received guidance and feedback from experienced developers.Explored ways to visualize and send a daily report to team members using HTML, Javascript, and CSS."
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle="IBM SkillsBuild(Jun 2024-Aug 2024)"
            result="Remote"
            des="Assisted in development of the front end of a Web application using HTML, CSS, JavaScript and Bootstrap.Collaborating with a team to create a concept note and develop a project on theme Sustainable Development Goals,enhancing group work and technical skills.Collaborated with team members using version control systems such as Git to organize modifications and assign tasks."
          />
          
        </div>
      </div>

    </motion.div>
  );
};

export default Experience;
