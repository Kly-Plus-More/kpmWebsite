"use client";
import Header from "@/components/header";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaChartLine, FaCogs, FaRobot, FaCloud } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function DigitalTransformationService() {
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
          Future-Proof Your Business with Digital Transformation
        </motion.h1>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
          We help businesses **leverage technology, automation, and digital
          strategies** to stay competitive and efficient.
        </p>
      </div>

      {/* Why Digital Transformation? */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl font-semibold text-snow"
        >
          Why Embrace Digital Transformation?
        </motion.h2>
        <p className="text-gray-300 mt-4">
          Businesses that **embrace digital technologies** grow faster, serve
          customers better, and operate more efficiently.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          {
            icon: <FaChartLine className="text-5xl text-purple-400" />,
            title: "Enhanced Efficiency",
            description:
              "Automate processes and optimize operations for maximum productivity.",
          },
          {
            icon: <FaRobot className="text-5xl text-blue-400" />,
            title: "AI & Automation",
            description:
              "Leverage AI-driven insights and automation for smarter decision-making.",
          },
          {
            icon: <FaCloud className="text-5xl text-pink-400" />,
            title: "Cloud & Scalability",
            description:
              "Migrate to the cloud and scale effortlessly to meet business demands.",
          },
          {
            icon: <FaCogs className="text-5xl text-green-400" />,
            title: "Seamless Integration",
            description:
              "Integrate digital tools with your existing business ecosystem.",
          },
        ].map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 * index }}
            className="flex items-start p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-500"
          >
            <div className="mr-4">{benefit.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-300 mt-2">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Our Process */}
      <div className="max-w-5xl mx-auto mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl font-semibold text-center text-snow"
        >
          Our 4-Step Digital Transformation Approach
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-6">
          {[
            {
              step: "1",
              title: "Assessment",
              desc: "We analyze your current systems and identify areas for improvement.",
            },
            {
              step: "2",
              title: "Strategy",
              desc: "We create a tailored transformation roadmap with the right technologies.",
            },
            {
              step: "3",
              title: "Implementation",
              desc: "We deploy and integrate digital tools for seamless operations.",
            },
            {
              step: "4",
              title: "Optimization",
              desc: "We provide ongoing support to maximize long-term efficiency.",
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
          Start Your Digital Transformation{" "}
          <IoIosArrowRoundForward className="text-2xl ml-2" />
        </Link>
      </div>
    </section>
  );
}
