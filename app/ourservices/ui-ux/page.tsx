"use client";
import Header from "@/components/header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaPencilRuler, FaUserCheck, FaPalette, FaEye } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function UIUXDesignService() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-darkblue to-header text-white px-8 sm:px-20 py-32">
      <section>
        <Header isScrolled={false} />
      </section>
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-snow"
        >
          Designing Seamless & Engaging Digital Experiences
        </motion.h1>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
          We craft **visually stunning, user-friendly, and conversion-driven**
          interfaces that elevate brands and drive success.
        </p>
      </div>

      {/* What We Do Section */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl font-semibold text-snow"
        >
          What We Do
        </motion.h2>
        <p className="text-gray-300 mt-4">
          We specialize in **UI/UX design** that blends aesthetics with
          functionality. Our team ensures that every interaction is **intuitive,
          delightful, and engaging**.
        </p>
      </div>

      {/* Key Features */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          {
            icon: <FaPencilRuler className="text-5xl text-purple-400" />,
            title: "User-Centric Design",
            description:
              "Creating intuitive interfaces that enhance user satisfaction.",
          },
          {
            icon: <FaUserCheck className="text-5xl text-blue-400" />,
            title: "UX Research & Testing",
            description:
              "Understanding user behavior to optimize usability and experience.",
          },
          {
            icon: <FaPalette className="text-5xl text-pink-400" />,
            title: "Brand-Driven Aesthetics",
            description:
              "Designs that align with your brand identity and goals.",
          },
          {
            icon: <FaEye className="text-5xl text-green-400" />,
            title: "Accessibility & Inclusivity",
            description: "Ensuring designs are user-friendly for everyone.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 * index }}
            className="flex items-start p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-500"
          >
            <div className="mr-4">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300 mt-2">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Showcase Section */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl font-semibold text-snow"
        >
          Elevating Brands Through Design
        </motion.h2>
        <p className="text-gray-300 mt-4">
          Here are some **stunning UI/UX designs** we've crafted for our
          clients.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        {[
          { img: "/images/uiux1.jpg", title: "Mobile App Interface" },
          { img: "/images/uiux2.jpg", title: "SaaS Dashboard UI" },
          { img: "/images/uiux3.jpg", title: "E-commerce UI Design" },
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 * index }}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-all duration-500"
          >
            <Image
              src={project.img}
              alt={project.title}
              width={400}
              height={250}
              className="w-full object-cover transform group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {project.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-16">
        <Link
          href="/contact"
          className="flex items-center bg-purple-600 px-6 py-3 rounded-full text-white font-semibold text-lg transition-all transform duration-500 hover:scale-105 hover:bg-purple-700 shadow-lg"
        >
          Get a Free Consultation{" "}
          <IoIosArrowRoundForward className="text-2xl ml-2" />
        </Link>
      </div>
    </section>
  );
}
