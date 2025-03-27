"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUser,
  FaClipboardCheck,
  FaLaptopCode,
  FaRocket,
  FaBug,
  FaChalkboardTeacher,
  FaTools,
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { FaComments } from "react-icons/fa6";
import Header from "@/components/header";

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const steps = [
    {
      number: "01",
      icon: <FaUser className="text-4xl text-white" />,
      title: "Get in Touch",
      description: "Contact us to discuss your project needs.",
    },
    {
      number: "02",
      icon: <FaClipboardCheck className="text-4xl text-white" />,
      title: "Understanding Your Idea",
      description: "We analyze your goals and propose solutions.",
    },
    {
      number: "03",
      icon: <FaLaptopCode className="text-4xl text-white" />,
      title: "Development",
      description: "Our team builds a tailored solution for you.",
    },
    {
      number: "04",
      icon: <FaBug className="text-4xl text-white" />,
      title: "Testing & QA",
      description: "We ensure a flawless and efficient product.",
    },
    {
      number: "05",
      icon: <FaComments className="text-4xl text-white" />,
      title: "Feedback & Revisions",
      description: "Your feedback refines and finalizes the product.",
    },
    {
      number: "06",
      icon: <FaChalkboardTeacher className="text-4xl text-white" />,
      title: "Training & Handover",
      description: "We guide you through using your new product.",
    },
    {
      number: "07",
      icon: <FaRocket className="text-4xl text-white" />,
      title: "Launch & Deployment",
      description: "Your project goes live with full support.",
    },
    {
      number: "08",
      icon: <FaTools className="text-4xl text-white" />,
      title: "Post-Launch Support",
      description: "We provide maintenance and updates for longevity.",
    },
  ];

  return (
    <section className="relative flex flex-col items-center min-h-screen px-6 md:px-20 py-32 bg-gradient-to-br from-darkblue to-header">
      <Header isScrolled={false} />
      <div className="relative w-full max-w-6xl text-center z-10">
        <h2 className="text-5xl font-bold text-white mb-6">How It Works</h2>
        <p className="text-gray-400 text-lg">
          A seamless journey from concept to success.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mt-12 z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center space-x-6 p-6 bg-purple-300 rounded-lg shadow-xl relative ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            data-aos="fade-up"
          >
            <div className="absolute -top-6 -left-6 text-6xl font-bold text-purple-700 opacity-30">
              {step.number}
            </div>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500">
              {step.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold font-peachi text-white">
                {step.title}
              </h3>
              <p className="text-header font-malevi mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-12 z-10">
        <Link
          href="/contact"
          className="flex items-center font-peachi bg-purple-600 px-6 py-3 rounded-full text-white font-semibold text-lg transition-all transform duration-500 hover:scale-105 hover:bg-purple-700"
        >
          Contact Us <IoIosArrowRoundForward className="text-3xl ml-2" />
        </Link>
      </div>
    </section>
  );
}
