"use client";
import Header from "../components/header";
import Services from "../components/services";
import Project from "../components/project";
import Image from "next/image";
import Technologies from "@/components/technologies";
import Footer from "@/components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import Getintouch from "@/components/getintouch";
import AboutUs from "@/components/aboutus";
import confetti from "canvas-confetti";

export default function Home() {
  const sectionRef = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
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
              href="/contact"
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-snow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* New Feature Badge */}
      <div
        data-aos="zoom-in"
        data-aos-delay="1200"
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple via-pink-500 to-desert text-white px-6 py-3 rounded-full shadow-2xl text-xl font-peachi z-30 flex items-center gap-2 animate-pulse"
      >
        <span className="text-lg">✨</span>
        <span>Just launched: Discover KPMAMS below!</span>
        <span className="text-lg">🚀</span>
      </div>

      {/* Section Curve Transition */}
      <div className="relative w-full overflow-hidden leading-none">
        <svg
          className="w-full h-28 md:h-32 lg:h-36"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#fdf6fb"
            d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* KPMAMS Promo Section */}
      <section
        ref={sectionRef}
        className="w-full bg-gradient-to-br from-[#fdf6fb] via-white to-blue-100 text-center py-20 px-6 sm:px-12 md:px-24 lg:px-32"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-header mb-6 font-peachi">
          <span className="text-darkblue text-5xl">Welcome to</span>
          <span className="font-peachi text-purple text-6xl"> KPM</span>
          <span className="font-peachi text-purple text-6xl"> A</span>
          <span className="text-6xl text-header">ctivities</span>
          <span className="font-peachi text-purple text-6xl"> M</span>
          <span className="text-6xl text-header">anagement</span>
          <span className="font-peachi text-purple text-6xl"> S</span>
          <span className="text-6xl text-header">ystem</span>
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-malevi">
          The ultimate free platform for students and entrepreneurs. Manage your
          university life and your business seamlessly in one powerful system.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://studio--datazen-amue4.us-central1.hosted.app/"
            className="font-peachi bg-desert hover:bg-[#d81b60] text-white font-semibold py-3 px-6 rounded-xl transition-transform transform hover:scale-105"
          >
            Get Started for Free →
          </a>
          <a
            href="https://studio--datazen-amue4.us-central1.hosted.app/#features"
            className="font-peachi bg-white border border-gray-300 text-gray-800 font-medium py-3 px-6 rounded-xl hover:bg-gray-100 transition-all"
          >
            Explore Features ↓
          </a>
        </div>
        <p className="mt-10 text-sm text-gray-500 underline">
          Powered by Kly Plus & More.
        </p>
      </section>

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
