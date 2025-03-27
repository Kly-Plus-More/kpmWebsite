"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const techStack = [
  { src: "/images/psql.png", alt: "PostgreSQL" },
  { src: "/images/react.png", alt: "React" },
  { src: "/images/nextjs.svg", alt: "Next.js" },
  { src: "/images/github.png", alt: "GitHub" },
  { src: "/images/ts.png", alt: "TypeScript" },
  { src: "/images/golang.png", alt: "Golang" },
  { src: "/images/js.png", alt: "JavaScript" },
  { src: "/images/chatgpt.png", alt: "chatgpt" },
  { src: "/images/figma.png", alt: "Figma" },
  { src: "/images/canva.png", alt: "Canva" },
  { src: "/images/windowsos.png", alt: "windows" },
  { src: "/images/miro.png", alt: "Miro" },
  { src: "/images/packoffice.jpg", alt: "Microsoft Office" },
  { src: "/images/hosting.jpg", alt: "Hosting" },
];

// Staggered Grid Layout
const rows = [
  [0, 1, 2, 3, 4, 5], // First row (longer)
  [6, 7, 8, 9, 10], // Second row (shorter)
  [11, 12, 13], // Third row (shortest)
];

export default function Technologies() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("tech-stack-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="tech-stack-section"
      className="relative bg-transparent py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 pb-16 sm:pb-24 md:pb-32 lg:pb-48 overflow-hidden"
    >
      {/* Floating Decorative Ellipses */}
      <motion.div
        className="absolute top-8 left-8 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-60"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/Ellipse.png"
          alt="Decorative Circle"
          width={50}
          height={50}
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute top-8 right-8 sm:right-10 md:right-20 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 opacity-60"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/Ellipse.png"
          alt="Decorative Circle"
          width={130}
          height={130}
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-1/4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-60"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/Ellipse.png"
          alt="Decorative Circle"
          width={100}
          height={100}
          className="object-cover"
        />
      </motion.div>

      {/* Title Section */}
      <div className="flex flex-col items-center text-center mb-6 sm:mb-8 md:mb-12 font-peachi">
        <div className="w-10 sm:w-12 md:w-16 h-1 bg-gradient-to-r from-desert to-snow mb-2 sm:mb-3"></div>
        <span className="text-gray-400 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Our
        </span>
        <span className="text-snow font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Tech Stack
        </span>
      </div>

      {/* Staggered Grid Layout */}
      <div className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-6">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 flex-wrap justify-center"
          >
            {row.map((index) => (
              <motion.div
                key={index}
                className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center 
                rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl shadow-sm sm:shadow-md md:shadow-lg bg-gray bg-opacity-30 backdrop-blur-md transition-transform transform
                hover:scale-110 hover:rotate-2 hover:shadow-md sm:hover:shadow-lg md:hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, delay: index * 0.1 }}
              >
                <Image
                  src={techStack[index].src}
                  alt={techStack[index].alt}
                  width={40}
                  height={40}
                  className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
