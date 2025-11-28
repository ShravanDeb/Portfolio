import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/shravnnn.d/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/share/1BdrhyPdW7/",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/shravan-kumar-deb-577b1037a/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const PROJECTS = [
  {
    title: "Projects Coming Soon!",
    description:
      "I'm currently working hard on exciting new projects. Check back soon to see my latest work and portfolio pieces!",
    image: "public\projects\Coming Soon.jpg", // Use a placeholder image or set to null
    link: null, // No link needed for a coming soon message
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/ShravanDeb",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/shravnnn.d/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/ShravanDeb",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/shravan-kumar-deb-577b1037a/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:shravandeb@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  // ADDED: Certificates link for easy access in Navbar component
  {
    title: "Certificates",
    link: "#certificates",
  },
] as const;


// UPDATED: Standardized all certificate entries to use the 'images' array property.
export const CERTIFICATES = [
  {
    title: "Certified in Machine Learning Algorithms! ",
    issuer: "UniAthena and Cambridge International Qualifications (CIQ),UK",
    // Uses the array of two images
    images: [ 
        "/Certification/Shravan Kumar_CR640_certificate-1.png", 
        "/Certification/Shravan Kumar_CR640_transcript-1.png" 
    ],
    verificationLink: "https://uniathena.com/verify/certificate?certID=4066-8649-1543",
    dateOfIssue: "Nov 2025", 
},
  {
    title: "Member of International Association of Engineers (IAENG)",
    issuer: "International Association of Engineers (IAENG)",
    // Updated to use the 'images' array (even if it only contains one image)
    images: ["/Certification/IAENG_membership_542471-1.png"], 
    verificationLink: "https://drive.google.com/file/d/1WLSCkjX1U-HplFY1RbNRiVQ8_DsWMwCX/view?usp=sharing",
    dateOfIssue: "Nov 2025", 
  },

  {
    title: "Academy Accreditation - AI Agent Fundamentals",
    issuer: "Databricks Academy",
    // Updated to use the 'images' array (even if it only contains one image)
    images: ["/Certification/1763102205567.jpg"], 
    verificationLink: "https://credentials.databricks.com/d23a112b-d74f-42a9-81ea-b94202eb16b8",
    dateOfIssue: "Nov 2025", 
  },
  // Note: Add more certificates here as needed.
] as const;