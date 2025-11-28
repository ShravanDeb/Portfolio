// src/components/sub/certificate-card.tsx
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// Import necessary icons
import { 
    ChevronLeftIcon, 
    ChevronRightIcon, 
    MagnifyingGlassPlusIcon, // Icon for enlarge
    XMarkIcon // Icon for closing the modal
} from "@heroicons/react/24/solid";

type CertificateCardProps = {
  className?: string;
  images: readonly string[];
  title: string;
  issuer: string;
  verificationLink: string;
  dateOfIssue: string; 
};

export const CertificateCard = ({
  className = "",
  images,
  title,
  issuer,
  verificationLink,
  dateOfIssue,
}: CertificateCardProps) => {
  // 1. Carousel State: Tracks the currently displayed image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 2. Modal State: Controls the visibility of the enlarged image modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalImages = images.length;
  const hasMultipleImages = totalImages > 1;
  const currentImageUrl = images[currentImageIndex]; // The URL of the image currently being viewed

  // Carousel Logic (Used for both card view and modal view)
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Modal Logic
  const openModal = () => {
      setIsModalOpen(true);
  };
  
  const closeModal = () => {
      setIsModalOpen(false);
  };

  return (
    <>
      {/* Main Card */}
      <div 
          // max-w-sm is retained
          className={`relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] max-w-sm transition-transform duration-300 hover:scale-[1.02] ${className}`}
      >
        
        {/* Image Container for Carousel */}
        <div className="relative w-full h-[200px] flex justify-center items-center overflow-hidden">
          
          {/* Display only the current image */}
          <Image
              src={currentImageUrl}
              alt={`${title} image ${currentImageIndex + 1}`}
              width={350} 
              height={200}
              // object-contain ensures the full image is visible
              className="w-full h-full object-contain p-2 rounded-md transition-opacity duration-500" 
              priority={true} 
          />
          
          {/* 1. Enlarge Icon Button */}
          <button
            onClick={openModal}
            className="absolute top-2 right-2 bg-black bg-opacity-50 p-1 rounded-full text-white hover:bg-opacity-80 transition-all z-10"
            aria-label="Enlarge image"
          >
            <MagnifyingGlassPlusIcon className="h-5 w-5" />
          </button>
          
          {/* 2. Conditional Navigation Arrows (Card View) */}
          {hasMultipleImages && (
            <>
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80 transition-all z-10"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              
              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80 transition-all z-10"
                aria-label="Next image"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {/* Card Body */}
        <div className="relative p-4 text-center">
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-400 mb-1 italic">Issued by: {issuer}</p>
          <p className="text-sm text-gray-500 mb-4">Issued: {dateOfIssue}</p>
          
          <Link
            href={verificationLink}
            target="_blank"
            rel="noreferrer noopener"
            className="py-2 px-4 button-primary text-center text-sm text-white rounded-lg cursor-pointer transition hover:bg-purple-600"
          >
            Verify Credential
          </Link>
        </div>
      </div>
      
      {/* 3. Modal for Enlarged Image (Updated with Navigation) */}
      {isModalOpen && (
          <div 
              // Fixed full screen overlay
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
              onClick={closeModal} // Click outside closes the modal
          >
              <div 
                  className="relative max-w-6xl max-h-[90vh] w-full p-4"
                  onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on the image/content
              >
                  {/* Close Button */}
                  <button
                      onClick={closeModal}
                      className="absolute top-0 right-0 m-4 p-2 bg-gray-700 bg-opacity-80 rounded-full text-white hover:bg-red-600 transition z-20"
                      aria-label="Close modal"
                  >
                      <XMarkIcon className="h-8 w-8" />
                  </button>
                  
                  {/* Enlarged Image Container */}
                  <div className="relative w-full h-[90vh]">
                    <Image
                        src={currentImageUrl}
                        alt={`Enlarged ${title} image ${currentImageIndex + 1}`}
                        fill // fill ensures it stretches to container size
                        style={{objectFit: 'contain'}} // objectFit: 'contain' ensures the image fits inside
                        className="rounded-lg"
                    />
                  </div>
                  
                  {/* NEW: Navigation Buttons in Modal */}
                  {hasMultipleImages && (
                    <>
                      {/* Previous Button */}
                      <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 m-4 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-80 transition-all z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeftIcon className="h-8 w-8" />
                      </button>
                      
                      {/* Next Button */}
                      <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 m-4 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-80 transition-all z-10"
                        aria-label="Next image"
                      >
                        <ChevronRightIcon className="h-8 w-8" />
                      </button>
                    </>
                  )}
              </div>
          </div>
      )}
    </>
  );
};