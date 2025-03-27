import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GetInTouch() {
  return (
    <section className="relative flex justify-center items-center px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 my-16 sm:my-24 md:my-32">
      {/* Floating Decorative Element */}
      <motion.div
        className="absolute top-10 right-10 sm:top-20 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-50"
        animate={{ y: [0, -10, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/Ellipse.png"
          alt="Decorative Circle"
          width={80}
          height={80}
          className="object-cover"
        />
      </motion.div>

      {/* Main Content Box */}
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px rgba(147, 112, 219, 0.4)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex flex-col md:flex-row items-center justify-between border border-purple w-full max-w-4xl rounded-xl sm:rounded-2xl px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 text-white bg-gray-900/90 shadow-lg sm:shadow-xl backdrop-blur-md"
      >
        {/* Left Side: Text */}
        <div className="text-center md:text-left">
          <span className="text-base sm:text-lg md:text-xl font-medium opacity-80 font-peachi">
            We are here for you.
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 mt-2 font-malevi">
            Let's work together!
          </h2>
        </div>

        {/* Right Side: Call-to-Action Button */}
        <div className="relative flex items-center mt-6 md:mt-0">
          <Image
            src="/images/highlight.png"
            alt="Highlight"
            width={80}
            height={80}
            className="absolute -top-12 sm:-top-2 xl:-top-10 lg:-top-10 md:-top-10 sm:-top-14 left-1/2 transform -translate-x-1/2 opacity-70"
          />
          <Link
            href="/contact"
            className="relative z-10 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white text-base sm:text-lg md:text-xl font-semibold font-peachi py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all transform duration-300 hover:scale-105 shadow-md sm:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
