import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Solved over 200+ coding problems on various Platforms like leetcode and geekforgeeks"
            
            result="Solved"
            
          />
          <ResumeCard
            title="Got Python Programming Certificate by IIT kanpur(Jan. 2022)"
            
            result="Certificate"
            
          />
          <ResumeCard
            title="Got Deep Learning NPTEL Online Certificate- IIT Madras(May 2024)"
            
            result="Certificate"
            
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;
