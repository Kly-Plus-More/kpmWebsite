"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  TbCloudComputing,
  TbDeviceDesktopCode,
  TbDeviceMobileCode,
} from "react-icons/tb";
import { FaCogs, FaGlobe } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SiGraphql } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import Link from "next/link";
import { MdAnalytics } from "react-icons/md";
import MoreProjects from "../moreprojects/page";

export default function MoreServices() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const services = [
    {
      icon: <TbDeviceDesktopCode className="w-10 h-10 text-desert-light" />,
      name: "Web Development",
      description:
        "Building responsive, high-performance websites tailored to your business needs.",
    },
    {
      icon: <BiPencil className="w-10 h-10 text-desert-light" />,
      name: "UI/UX Design",
      description:
        "Creating intuitive and user-friendly interfaces for an outstanding user experience.",
    },
    {
      icon: <TbCloudComputing className="w-10 h-10 text-desert-light" />,
      name: "Web Hosting",
      description:
        "Secure, fast, and reliable hosting solutions to keep your website online 24/7.",
    },
    {
      icon: <FaCogs className="w-10 h-10 text-desert-light" />,
      name: "Digital Transformation Consulting",
      description:
        "Helping businesses adopt modern digital technologies for growth and efficiency.",
    },
    {
      icon: <TbDeviceMobileCode className="w-10 h-10 text-desert-light" />,
      name: "Mobile App Development",
      description:
        "Developing high-quality, cross-platform mobile applications tailored to your needs.",
    },
    {
      icon: <SiGraphql className="w-10 h-10 text-desert-light" />,
      name: "IoT Solutions",
      description:
        "Connecting devices with smart technology to optimize processes and efficiency.",
    },
    {
      icon: <FaCogs className="w-10 h-10 text-desert-light" />,
      name: "Automation",
      description:
        "Automating workflows and tasks to enhance productivity and reduce costs.",
    },
    {
      icon: <FaSearch className="w-10 h-10 text-desert-light" />,
      name: "SEO Optimization",
      description:
        "Improving search rankings with targeted strategies for better online visibility.",
    },
    {
      icon: <FaBullhorn className="w-10 h-10 text-desert-light" />,
      name: "Digital Marketing",
      description:
        "Boosting your brand with powerful digital marketing strategies and campaigns.",
    },
    {
      icon: <FaGlobe className="w-10 h-10 text-desert-light" />,
      name: "Web",
      description: "Custom web solutions for businesses & enterprises.",
      path: "/ourservices/web",
    },
    {
      icon: <MdAnalytics className="w-10 h-10 text-desert-light" />,
      name: "Data Analysis",
      description:
        "Turn raw data into strategic insights for better decision-making.",
      path: "/ourservices/data-analysis",
    },
  ];

  return (
    <section className=" py-10 pt-32 flex flex-col justify-center items-center min-h-screen bg-darkblue text-snow">
      <div
        className="px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 text-center mb-16"
        data-aos="fade-up"
      >
        <div className="w-12 h-1 bg-gradient-to-r from-desert to-snow mx-auto mb-4"></div>
        <h2 className="text-4xl font-peachi">Our Services</h2>
        <p className="text-xl text-gray-300 text-center font-peachi max-w-[1500px] mt-20 mx-auto">
          Transform your ideas into reality with our cutting-edge digital
          solutions. From intuitive designs to powerful development and
          marketing strategies, we craft experiences that drive success. Explore
          our services and take your business to the next level.
          <br />
          <br />
          Whether you're a startup looking to establish a strong online
          presence, a growing business in need of automation, or a brand seeking
          to enhance visibility through SEO and digital marketing, we have the
          expertise to bring your vision to life.
          <br />
          <br />
          With a team of passionate professionals dedicated to innovation, we
          ensure every project is tailored to your unique needs, delivering
          seamless functionality, stunning designs, and impactful results. Let's
          create something extraordinary together!
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="relative border border-snow p-6 bg-gray-800 rounded-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl cursor-pointer flex flex-col items-center text-center group"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-desert">
              {service.name}
            </h3>
            <p className="text-sm text-snow font-light">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/contact"
          className="flex items-center bg-header text-white px-6 py-3 rounded-full transition-all transform duration-500 hover:scale-110 hover:bg-purple"
        >
          <span>Get in Touch</span>
          <IoIosArrowRoundForward className="text-3xl ml-2" />
        </Link>
      </div>
      <MoreProjects />
    </section>
  );
}
