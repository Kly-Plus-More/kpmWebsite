"use client";
import { motion } from "framer-motion";
import Header from "@/components/header";

export default function Story() {
  return (
    <section className="relative flex flex-col items-center justify-center py-16 sm:py-24 md:py-32 bg-gradient-to-b from-darkblue to-header text-white overflow-hidden">
      <Header isScrolled={false} />

      {/* Floating Decorations */}
      <motion.div
        className="absolute top-20 sm:top-28 left-4 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 opacity-30 bg-purple-500 rounded-full blur-xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 sm:top-28 right-4 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 opacity-30 bg-pink-500 rounded-full blur-xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-darkblue/50 pointer-events-none" />

      {/* Title Section */}
      <div className="text-center max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-peachi bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Journey
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-6 font-malevi leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          From aspiring students to innovative entrepreneurs, our story is a
          testament to passion and perseverance.
        </motion.p>
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-16 sm:mt-20 w-full max-w-4xl px-6 sm:px-10 lg:px-16 space-y-16 relative z-10">
        {[
          {
            title: "Who We Are",
            content:
              "We are two Computer Science graduates from Gabon and Burkina Faso who came to Rwanda to expand our knowledge and chase our dreams. United by our passion for technology and design, we embarked on a mission to redefine digital experiences through innovation.",
          },
          {
            title: "Why We Started",
            content:
              "Frustrated by the lack of intuitive and visually compelling software solutions, we created this company to push the boundaries of UI/UX design and development. We believe that digital experiences should be seamless, engaging, and crafted with purpose.",
          },
          {
            title: "Our Vision",
            content:
              "We aim to set new standards in software design and development, delivering products that not only function flawlessly but also leave a lasting impression. Every project we take on is an opportunity to innovate and create meaningful digital experiences.",
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="space-y-6 pl-6">
              <h3 className="text-3xl sm:text-4xl font-semibold font-peachi bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                {section.title}
              </h3>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-malevi tracking-wide">
                {section.content}
              </p>
            </div>

            {index < 2 && (
              <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-darkblue to-transparent pointer-events-none" />
    </section>
  );
}
