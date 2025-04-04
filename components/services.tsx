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
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const hoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <section className="px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 flex flex-col justify-center items-center min-h-screen bg-transparent">
      <motion.div
        className="flex flex-col md:flex-row w-full justify-center items-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center md:items-start">
          <motion.div
            className="w-18 h-1 bg-gradient-to-r from-desert to-snow mb-2 flex items-center"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.h2
            className="text-snow text-2xl sm:text-3xl font-peachi mb-4 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Services We Offer
          </motion.h2>
        </div>
      </motion.div>

      <motion.div
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 py-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative border border-snow w-full h-[280px] p-4 bg-darkblue rounded-lg cursor-pointer flex flex-col group"
            onClick={() => handleNavigation(service.path)}
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-header to-purple opacity-0 group-hover:opacity-50 rounded-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="w-10 h-10 flex items-center justify-center rounded-full mb-4 z-10"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {service.icon}
            </motion.div>

            <motion.h3
              className="text-xl font-semibold mb-2 text-desert z-10"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {service.name}
            </motion.h3>
            <motion.p
              className="text-sm text-snow font-malevi overflow-y-auto flex-1 z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {service.description}
            </motion.p>
            <motion.p
              className="text-snow font-semibold mt-2 z-10"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {service.text}
            </motion.p>
          </motion.div>
        ))}
        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={"/moreservices"}
              className="flex flex-row items-center h-[50px] w-[180px] bg-header rounded-r-full p-2"
            >
              <motion.h2
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                See all services
              </motion.h2>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IoIosArrowRoundForward className="text-3xl" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
