"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Project() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <section
      className="relative py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/paternimage.jpg')" }}
    >
      <div className="absolute inset-0 bg-opacity-30 backdrop-blur-[7px]"></div>

      <div
        data-aos="fade-up"
        className="flex flex-col items-center text-center text-2xl sm:text-3xl md:text-4xl font-peachi mb-6 sm:mb-10 relative"
      >
        <div className="w-12 h-1 bg-gradient-to-r from-desert to-snow"></div>
        <span className="text-white">Our recent</span>
        <span className="text-white font-bold">Case studies</span>
      </div>

      <div className="flex flex-col gap-16 sm:gap-24">
        {[
          {
            img: "/images/mockup2.png",
            title: 'Mobile application design "SwiftPay"',
          },
          {
            img: "/images/kpmstudents.png",
            title: 'Website Design for "Ferme Clement"',
          },
          {
            img: "/images/mockup4.jpg",
            title: 'Website Design for "Ferme Clement"',
          },
        ].map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`flex flex-col lg:flex-row items-center bg-opacity-75 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg gap-6 sm:gap-8 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={project.img}
                alt="Case Study Image"
                className="rounded-lg shadow-md"
                height={400}
                width={400}
              />
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left p-4 sm:p-6">
              <h4 className="font-peachi text-xl sm:text-2xl md:text-3xl font-bold text-gray-400">
                {project.title}
              </h4>
              <p className="text-snow mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-malevi">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center px-4 sm:px-8 py-6 sm:py-10">
        <Link
          href={"/moreprojects"}
          className="flex flex-row items-center justify-center bg-header px-4 sm:px-6 py-2 sm:py-3 font-peachi text-lg sm:text-xl rounded-full transition-all transform duration-500 hover:scale-110 hover:bg-purple hover:text-snow"
        >
          <h2>See all services</h2>
          <IoIosArrowRoundForward className="text-2xl sm:text-3xl" />
        </Link>
      </div>
    </section>
  );
}
