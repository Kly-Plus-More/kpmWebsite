import Image from "next/image";
import { motion } from "framer-motion";
export default function AboutUs() {
  return (
    <section className="relative py-32 bg-darkblue text-white overflow-hidden">
      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 opacity-40"
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/Ellipse.png"
          alt="Decorative"
          width={90}
          height={90}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 opacity-50"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/Ellipse.png"
          alt="Decorative"
          width={130}
          height={130}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 flex flex-col md:flex-row items-center gap-y-12 md:gap-x-16">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-peachi bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Designing Tomorrow, Today.
          </motion.h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-quickly">
            We are a passionate team of designers and developers, creating
            seamless and engaging digital experiences. Our expertise spans UI/UX
            design, front-end and back-end development, ensuring every project
            is functional, beautiful, and user-friendly.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-malevi">
            At our core, we believe in crafting intuitive designs that merge
            aesthetics with usability. From idea to execution, we bring
            creativity and precision to every line of code and pixel.
          </p>
        </motion.div>

        {/* Image & Animated Background */}
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src="/images/SEO.png"
              alt="Our Team"
              width={500}
              height={500}
              className="rounded-lg shadow-xl w-full h-auto"
            />
            {/* Floating Glow Effect */}
            <motion.div
              className="absolute -top-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500 opacity-30 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
