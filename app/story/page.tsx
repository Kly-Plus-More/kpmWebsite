"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/header";

export default function Story() {
  return (
    <section className="relative flex flex-col items-center justify-center py-16 sm:py-24 md:py-32 bg-gradient-to-b from-darkblue to-header text-white overflow-hidden">
      <section className="relative w-full">
        <Header isScrolled={false} />
      </section>

      {/* Floating Decorations */}
      <motion.div
        className="absolute top-20 sm:top-28 left-4 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 opacity-30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/Ellipse.png"
          alt="Decor"
          width={70}
          height={70}
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute top-20 sm:top-28 right-4 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/Ellipse.png"
          alt="Decor"
          width={100}
          height={100}
          className="object-cover"
        />
      </motion.div>

      {/* Title Section */}
      <div className="text-center max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-peachi bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Our Journey
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-4 font-malevi">
          From aspiring students to innovative entrepreneurs, our story is a
          testament to passion and perseverance.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center mt-12 sm:mt-16 gap-8 sm:gap-12 lg:gap-24 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 space-y-4 sm:space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-purple font-semibold font-peachi">
            Who We Are
          </h3>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-malevi">
            We are two Computer Science graduates from Gabon and Burkina Faso
            who came to Rwanda to expand our knowledge and chase our dreams.
            United by our passion for technology and design, we embarked on a
            mission to redefine digital experiences through innovation.
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-purple font-semibold font-peachi">
            Why We Started
          </h3>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-malevi">
            Frustrated by the lack of intuitive and visually compelling software
            solutions, we created this company to push the boundaries of UI/UX
            design and development. We believe that digital experiences should
            be seamless, engaging, and crafted with purpose.
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-purple font-semibold font-peachi">
            Our Vision
          </h3>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-malevi">
            We aim to set new standards in software design and development,
            delivering products that not only function flawlessly but also leave
            a lasting impression. Every project we take on is an opportunity to
            innovate and create meaningful digital experiences.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-row sm:flex-row gap-4 md:gap-20 sm:gap-20">
            {/* Kerly Mvongo */}
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/kly.jpg"
                  alt="Founders"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex items-center text-pink-300">
                <h4 className="text-md sm:text-xl md:text-2xl">KERLY MVONGO</h4>
              </div>
            </div>

            {/* Ben Aziz */}
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/ben.jpg"
                  alt="Founders"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex items-center text-pink-300">
                <h4 className="text-md sm:text-xl md:text-2xl">BEN AZIZ</h4>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
