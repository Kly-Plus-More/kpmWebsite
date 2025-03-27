"use client";
import Header from "@/components/header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaServer,
  FaLock,
  FaRocket,
  FaCloud,
  FaCheckCircle,
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function WebHostingService() {
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
          Secure, Fast & Scalable Web Hosting
        </motion.h1>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
          We provide **high-performance, secure, and scalable hosting** so your
          website never goes down.
        </p>
      </div>

      {/* What We Offer */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl font-semibold text-snow"
        >
          Why Choose Our Hosting?
        </motion.h2>
        <p className="text-gray-300 mt-4">
          Our **ultra-fast servers** and **99.99% uptime guarantee** ensure your
          website is always accessible.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          {
            icon: <FaRocket className="text-5xl text-purple-400" />,
            title: "Blazing Fast Speeds",
            description:
              "We optimize performance to ensure your website loads in milliseconds.",
          },
          {
            icon: <FaLock className="text-5xl text-blue-400" />,
            title: "Ironclad Security",
            description:
              "SSL, DDoS protection, and daily backups keep your site safe.",
          },
          {
            icon: <FaCloud className="text-5xl text-pink-400" />,
            title: "Scalability & Flexibility",
            description:
              "Our hosting adapts as your business grows, handling any traffic spikes.",
          },
          {
            icon: <FaServer className="text-5xl text-green-400" />,
            title: "99.99% Uptime",
            description:
              "Your website stays online 24/7 with our ultra-reliable hosting.",
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

      {/* Hosting Comparison Table */}
      <div className="max-w-5xl mx-auto mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl font-semibold text-center text-snow"
        >
          Traditional Hosting vs. Our Hosting
        </motion.h2>
        <div className="grid grid-cols-2 mt-8 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold text-red-400">
              Traditional Hosting
            </h3>
            <ul className="mt-4 text-gray-300 space-y-2">
              <li>❌ Slow loading times</li>
              <li>❌ Security vulnerabilities</li>
              <li>❌ Frequent downtime</li>
              <li>❌ Poor scalability</li>
              <li>❌ No customer support</li>
            </ul>
          </div>
          <div className="p-6 bg-header rounded-lg">
            <h3 className="text-xl font-semibold text-green-400">
              Our Hosting
            </h3>
            <ul className="mt-4 text-gray-300 space-y-2">
              <li>✅ Lightning-fast speeds</li>
              <li>✅ Advanced security & encryption</li>
              <li>✅ 99.99% uptime guarantee</li>
              <li>✅ Scalable for any traffic</li>
              <li>✅ 24/7 expert support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-16">
        <Link
          href="/contact"
          className="flex items-center bg-purple-600 px-6 py-3 rounded-full text-white font-semibold text-lg transition-all transform duration-500 hover:scale-105 hover:bg-purple-700 shadow-lg"
        >
          Get Started with Reliable Hosting{" "}
          <IoIosArrowRoundForward className="text-2xl ml-2" />
        </Link>
      </div>
    </section>
  );
}
