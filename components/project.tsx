"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Project() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-16 sm:gap-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {[
        {
          img: "/images/mockup2.png",
          title: 'Mobile application design "SwiftPay"',
          description:
            "SwiftPay is a revolutionary mobile payment application designed to offer seamless, secure, and fast transactions. With an intuitive UI and cutting-edge security features, it simplifies financial transactions for individuals and businesses alike.",
        },
        {
          img: "/images/kpmstudents.png",
          title: 'Website Design for "KPM Study in Rwanda"',
          description:
            "KPM Study in Rwanda is a modern and informative platform that helps international students find top-notch educational opportunities in Rwanda. The website features a user-friendly design, dynamic content, and interactive tools for effortless navigation.",
        },
        {
          img: "/images/mockup4.jpg",
          title: 'Website Design for "Ferme Clement"',
          description:
            "Ferme Clement is an agricultural website dedicated to sustainable farming solutions. The platform provides insights into organic farming, livestock management, and eco-friendly agricultural practices, helping farmers enhance productivity while preserving nature.",
        },
      ].map((project, index) => (
        <motion.div
          key={index}
          className={`flex flex-col lg:flex-row items-center bg-opacity-75 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg gap-6 sm:gap-8 ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
          variants={projectVariants}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src={project.img}
              alt={`Case Study Image - ${project.title}`}
              className="rounded-lg shadow-md"
              height={400}
              width={400}
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left p-4 sm:p-6"
            variants={contentVariants}
          >
            <motion.h4
              className="font-peachi text-xl sm:text-2xl md:text-3xl font-bold text-gray-400"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {project.title}
            </motion.h4>
            <motion.p
              className="text-snow mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-malevi"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {project.description}
            </motion.p>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-4"
            >
              <Link
                href="/moreprojects"
                className="inline-flex items-center text-desert hover:text-purple transition-colors duration-300"
              >
                <span className="mr-2">View Project</span>
                <IoIosArrowRoundForward className="text-2xl" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
