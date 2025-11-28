"use client"; // <--- Required for framer-motion

import { CertificateCard } from "@/components/sub/certificate-card";
import { CERTIFICATES } from "@/constants";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

export const Certificates = () => {
  return (
    <section
      id="certificates" 
      className="flex flex-col items-center justify-center py-20"
    >
      {/* === Start of Added Header Content === */}
      <div className="w-full h-auto flex flex-col items-center justify-center mb-5">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Continuous Learning & Validation
          </h1>
        </motion.div>
      </div>
      {/* === End of Added Header Content === */}

      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5 md:py-5">
        Certifications and  Licenses
      </h1>
      
      {/* MODIFIED: Reverted to grid layout to remove horizontal scroll */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 max-w-[1400px]">
        {CERTIFICATES.map((cert) => (
          <CertificateCard
            key={cert.title}
            // className prop removed here to let the grid determine sizing
            images={cert.images} 
            title={cert.title}
            issuer={cert.issuer}
            verificationLink={cert.verificationLink}
            dateOfIssue={cert.dateOfIssue}
          />
        ))}
      </div>
    </section>
  );
};