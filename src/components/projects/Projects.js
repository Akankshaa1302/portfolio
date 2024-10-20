import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Ed Tech platform"
          des="  SeekhLo is the learning platform that gets you Skills for your present(and your future) accessible to both college and
                 school students.You Get all the skills you needed at one place.!"
                 src={projectOne}
        />
        <ProjectsCard
          title="Speech Recognition react"
          des="  Designed a Speech to Text Converter using reactjs and utilized the npm packages. It has Copy to Clipborad functionality i.e. the converted text can be copt to clipboard"
          src={projectTwo}
        />
        <ProjectsCard
          title="Job Portal Website"
          des="  Designed a sample Job Portal Website using MERN Stack to simulate the common functions of using a Job Portal. It connect job seekers with employers. It allows job seekers to search and apply for jobs, while employers can post job
                openings and manage applications!"
          src={projectThree}
        />
        
      </div>
    </section>
  );
}

export default Projects