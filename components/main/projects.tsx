"use client";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

// Assuming these are available via standard imports (like in hero-content.tsx)
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
// You will need to ensure 'slideInFromTop' is imported from your motion utilities
import { slideInFromTop } from "@/lib/motion"; 

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center "
    >
      {/* === Start of Added Header Content === */}
      <div className="w-full h-auto flex flex-col items-center justify-center">
        
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Showcasing My Core Skill Application
          </h1>
        </motion.div>
      </div>
      {/* === End of Added Header Content === */}

      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-5">
        Projects
      </h1>
      
      <div className="h-full w-full flex flex-col items-center justify-center gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};