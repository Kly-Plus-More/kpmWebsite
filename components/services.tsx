"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  TbCloudComputing,
  TbDeviceDesktopCode,
  TbDeviceMobileCode,
} from "react-icons/tb";
import { FaCogs } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

export default function Services() {
  const router = useRouter();

  const services = [
    {
      icon: <TbDeviceDesktopCode className="w-10 h-10 text-desert-light" />,
      name: "Web Development",
      description:
        "We build responsive and modern websites tailored to your needs.",
      text: "Read More",
      path: "/ourservices/webdev",
    },
    {
      icon: <BiPencil className="w-10 h-10 text-desert-light" />,
      name: "UI/UX Design",
      description:
        "Designing user-friendly interfaces for seamless experiences.",
      text: "Read More",
      path: "/ourservices/ui-ux",
    },
    {
      icon: <TbCloudComputing className="w-10 h-10 text-desert-light" />,
      name: "Web Hosting",
      description:
        "Boost your online presence with our strategic marketing solutions.",
      text: "Read More",
      path: "/ourservices/webhosting",
    },
    {
      icon: <FaCogs className="w-10 h-10 text-desert-light" />,
      name: "Digital Transformation Consulting",
      description:
        "Adopt digital technologies and processes to improve your operations.",
      text: "Read More",
      path: "/ourservices/consulting",
    },
    {
      icon: <TbDeviceMobileCode className="w-10 h-10 text-desert-light" />,
      name: "Mobile Apps",
      description:
        "Crafting intuitive and high-performance mobile applications.",
      text: "Read More",
      path: "/ourservices/mobileapp",
    },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <section className="px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 flex flex-col justify-center items-center min-h-screen bg-transparent">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row w-full justify-center items-center mb-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="w-18 h-1 bg-gradient-to-r from-desert to-snow mb-2 flex items-center"></div>
          <h2
            data-aos="fade-up"
            className="text-snow text-2xl sm:text-3xl font-peachi mb-4 md:mb-8"
          >
            Services We Offer
          </h2>
        </div>
        {/* <Link
          href={"#"}
          className="flex flex-row items-center bg-header rounded-r-full p-2 transition-all transform duration-500 hover:scale-110 hover:bg-purple hover:text-snow"
        >
          <h2>See all services</h2>
          <IoIosArrowRoundForward className="text-3xl" />
        </Link> */}
      </div>

      {/* Services Grid */}
      <div
        data-aos="fade-up"
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 py-8"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="relative border border-snow w-full h-[230px] p-4 bg-darkblue rounded-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-header cursor-pointer flex flex-col group"
            onClick={() => handleNavigation(service.path)}
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-header to-purple opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-500"></div>

            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full mb-4 z-10">
              {service.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-2 text-desert z-10">
              {service.name}
            </h3>
            <p className="text-sm text-snow font-malevi overflow-y-auto flex-1 z-10">
              {service.description}
            </p>
            <p className="text-snow font-semibold mt-2 z-10">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
