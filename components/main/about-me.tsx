// about-me.tsx
"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const AboutMe = () => {
  return (
    <section
      id="about-me" // Use the ID from NAV_LINKS
      className="flex flex-col items-center justify-center pt-32 pb-20 w-full min-h-screen"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 w-full max-w-[1400px] z-[20] gap-10"
      >
        {/* === Left Side: Text Content === */}
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              Who I Am & What I Do
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
          >
            <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              About Me
            </h2>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            Hello! I&apos;m Shravan Kumar Deb, a passionate B.Tech undergrad in Computer Science with a specialization in AI at Assam Science and Technology University. 
            
            I thrive on building software and honing my development skills. My current focus areas include mastering Python for complex logic and data manipulation, and utilizing MySQL for robust data management. I actively develop full-stack projects using modern frameworks like Next.js and React to bring my ideas to life.

            <br /><br />
            As an enthusiastic coder and dedicated AI/ML enthusiast, I am committed to continuous learning, writing clean code, and transforming challenges into innovative, high-performance solutions. Explore my projects to see my work in action!
          </motion.p>
          
          <motion.a
            variants={slideInFromLeft(1)}
            href="#projects"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            View My Projects
          </motion.a>
        </div>

        {/* === Right Side: Image/Avatar === */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
        >
          {/* Replace 'about-me-avatar.png' with your actual image path */}
          <Image
            src="/My photo.jpg" 
            alt="About Me"
            height={400}
            width={400}
            draggable={false}
            className="select-none rounded-full border-4 border-purple-500 shadow-xl shadow-purple-500/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};