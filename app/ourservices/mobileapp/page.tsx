"use client";
import Header from "@/components/header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaApple,
  FaAndroid,
  FaBolt,
  FaMobileAlt,
  FaPalette,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function MobileAppService() {
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
          Custom Mobile App Development for Your Business
        </motion.h1>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
          Build **high-performance, user-friendly, and scalable** mobile apps
          for iOS and Android. We create **apps that engage users and drive
          growth**.
        </p>
      </div>

      {/* Why Choose Us? */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl font-semibold text-snow"
        >
          Why Our Mobile Apps Stand Out?
        </motion.h2>
        <p className="text-gray-300 mt-4">
          Our apps **blend performance, security, and stunning UI** to give your
          users the best experience.
        </p>
      </div>

      {/* Features */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          {
            icon: <FaMobileAlt className="text-5xl text-purple-400" />,
            title: "iOS & Android Development",
            description:
              "We build apps for both platforms using native and cross-platform technologies.",
          },
          {
            icon: <FaPalette className="text-5xl text-blue-400" />,
            title: "Intuitive UI/UX",
            description:
              "We create visually stunning and easy-to-use interfaces for seamless user experience.",
          },
          {
            icon: <FaBolt className="text-5xl text-pink-400" />,
            title: "High Performance",
            description:
              "Optimized apps for speed, smooth animations, and fast response times.",
          },
          {
            icon: <FaShieldAlt className="text-5xl text-green-400" />,
            title: "Robust Security",
            description:
              "End-to-end encryption and secure coding practices to protect user data.",
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

      {/* What We Build */}
      <div className="max-w-6xl mx-auto mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl font-semibold text-center text-snow"
        >
          We Build Apps for Every Industry
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "E-Commerce Apps",
              icon: <FaApple className="text-5xl text-purple-400" />,
            },
            {
              title: "Fintech & Banking Apps",
              icon: <FaAndroid className="text-5xl text-green-400" />,
            },
            {
              title: "Healthcare & Fitness Apps",
              icon: <FaCode className="text-5xl text-blue-400" />,
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 * index }}
              className="p-6 bg-header rounded-lg shadow-lg text-center hover:scale-105 transition-all duration-500"
            >
              {category.icon}
              <h3 className="text-xl font-semibold mt-2">{category.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Development Process */}
      <div className="max-w-5xl mx-auto mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl font-semibold text-center text-snow"
        >
          How We Develop Your App
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-6">
          {[
            {
              step: "1",
              title: "Strategy & Wireframing",
              desc: "We plan your app’s features and structure.",
            },
            {
              step: "2",
              title: "UI/UX Design",
              desc: "We create a beautiful and user-friendly interface.",
            },
            {
              step: "3",
              title: "Development & Testing",
              desc: "We build, test, and optimize your app for launch.",
            },
          ].map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 * index }}
              className="p-6 bg-header rounded-lg shadow-lg text-center hover:scale-105 transition-all duration-500"
            >
              <div className="text-5xl font-bold text-purple-400">
                {phase.step}
              </div>
              <h3 className="text-xl font-semibold mt-2">{phase.title}</h3>
              <p className="text-gray-300 mt-2">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-16">
        <Link
          href="/contact"
          className="flex items-center bg-purple-600 px-6 py-3 rounded-full text-white font-semibold text-lg transition-all transform duration-500 hover:scale-105 hover:bg-purple-700 shadow-lg"
        >
          Start Your Mobile App Project{" "}
          <IoIosArrowRoundForward className="text-2xl ml-2" />
        </Link>
      </div>
    </section>
  );
}
