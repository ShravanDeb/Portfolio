import Image from "next/image";
import Link from "next/link";
import React from "react"; // Explicitly import React

// Update the type definition to allow the 'link' to be null
type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string | null; // Allows string URL or null
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  
  // Common CSS classes for the card wrapper
  const wrapperClasses =
    "relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] max-w-md"; // Added max-w-md for size control

  // The visual content of the card (Image and Text)
  const cardContent = (
    <>
      <Image
        src={"/projects/Coming Soon.jpg"}
        alt={title}
        width={1000}
        height={1000}
        // Ensure the image path is correct, including protocol if external
        className="w-full object-contain"
      />

      <div className="relative p-4 text-center"> {/* Added text-center */}
  <h1 className="text-2xl font-semibold text-white">{title}</h1>
  <p className="mt-2 text-gray-300">{description}</p>
</div>
    </>
  );

  // Check if a valid link exists (link is not null)
  if (link) {
    // Renders as a clickable Link component
    return (
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className={wrapperClasses}
      >
        {cardContent}
      </Link>
    );
  } else {
    // Renders as a non-clickable Div, avoiding the 'href' error
    // 'cursor-default' gives a visual cue that it's not a link
    return <div className={`${wrapperClasses} cursor-default`}>{cardContent}</div>;
  }
};