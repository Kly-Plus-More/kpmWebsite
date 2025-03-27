"use client";
import Header from "../components/header";
import Services from "../components/services";
import Project from "../components/project";
import Image from "next/image";
import Technologies from "@/components/technologies";
import Footer from "@/components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Getintouch from "@/components/getintouch";
import AboutUs from "@/components/aboutus";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="min-h-screen bg-darkblue">
      <section>
        <Header isScrolled={false} />
      </section>
      <main
        data-aos="fade-up"
        className="relative flex flex-col sm:flex-col lg:flex-row md:flex-col items-center justify-center min-h-screen py-24 sm:py-32 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-24 overflow-x-hidden"
      >
        {/* Content (Right Side) */}
        <div className="relative z-10 w-full md:w-[700px] text-center mt-8 md:mt-0 md:pl-8">
          <p className=" text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-peachi leading-normal mb-5">
            <span className="text-snow">Great </span>
            <span className="text-desert font-bold">product </span>
            <span className="text-snow">is</span> <br />
            <span className="text-purple font-bold">built</span>
            <span className="text-snow font-extrabold"> by great </span>
            <span className="text-header font-bold">teams</span>.
          </p>
          <p className="text-darkblue font-malevi sm:text-lg lg:text-lg xl:text-xl text-gray-400">
            We build custom software that drives innovation and accelerates
            business growth, delivering excellence in every line of code.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="font-peachi px-6 py-2 font-diphy bg-snow text-header rounded-xl transition-all transform duration-500 hover:scale-110 hover:bg-purple hover:text-snow"
            >
              Let's get started
            </a>
          </div>
        </div>
        {/* Background Image (Left Side) */}
        <div
          className="relative w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center"
          style={{
            backgroundImage: `url('images/image10.png')`,
            width: "500px",
            height: "500px",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full h-[80px] overflow-hidden">
          <Image
            src="/images/Ellipse1.png"
            alt="Ellipse"
            width={70}
            height={70}
            className="overflow-hidden absolute bottom-0 left-1/2 transform -translate-x-[300px] translate-y-[10px]"
          />
        </div>
      </main>

      <Services />
      <AboutUs />

      <Project />

      <Technologies />

      <Getintouch />
      {/* <Contact /> */}

      <Footer />
    </div>
  );
}
