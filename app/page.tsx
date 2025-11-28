// page.tsx
import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

// Add imports for the new components
import { AboutMe } from "@/components/main/about-me";
import { Certificates } from "@/components/main/certificates";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <AboutMe />      {/* <--- Added AboutMe */}
        <Skills />
        <Encryption />
        <Projects />
        <Certificates /> {/* <--- Renders the section with id="certificates" */}
      </div>
    </main>
  );
};