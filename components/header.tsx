"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiX } from "react-icons/hi"; // HiX for close icon
import { SiGoogletranslate } from "react-icons/si";
import { CgMenuMotion } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ isScrolled }: { isScrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMenuOpen(!menuOpen);
  const closeMobileMenu = () => setMenuOpen(false);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-20 text-lg border border-transparent py-3 bg-darkblue shadow-sm"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      {/* Header Wrapper to keep everything on the same line */}
      <div className="flex justify-between items-center max-w-[1100px] mx-auto w-full px-5">
        {/* Logo Section */}
        <motion.div
          className="flex items-center pr-5"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/images/logotext-removebg-preview.png"
            alt="abomo logo"
            width={100}
            height={100}
            className="w-auto h-auto"
          />
          <Image
            src="/images/logoinfinity-removebg-preview.png"
            alt="infinity logo"
            width={50}
            height={50}
            className="w-auto h-auto"
          />
        </motion.div>

        {/* Mobile Menu Toggle Button */}
        <motion.button
          type="button"
          aria-label="Toggle mobile menu"
          onClick={toggleMobileMenu}
          className={`lg:hidden text-5xl text-purple ${
            menuOpen ? "hidden" : "block"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <CgMenuMotion />
        </motion.button>

        {/* Nav Section */}
        <nav className="max-w-[610px] flex-1 flex justify-between items-center px-16 bg-header py-3 rounded-full hidden lg:flex">
          {/* Desktop Navigation */}
          <div className="flex space-x-8">
            {[
              { href: "/", text: "Home" },
              { href: "/story", text: "About us" },
              { href: "/moreservices", text: "Services" },
              { href: "/moreprojects", text: "Projects" },
              { href: "/howitworks", text: "How it works" },
            ].map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link
                  href={link.href}
                  className="text-md font-peachi text-white hover:text-gray-300"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.text}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </nav>

        {/* Contact Us & Language Icon (Outside Nav) */}
        <div className="items-center gap-5 ml-5 hidden lg:flex">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="font-peachi py-2 bg-white rounded-xl text-header px-3 text-sm"
            >
              Contact us
            </Link>
          </motion.div>
          {/* Language Toggle Button */}
          <motion.button
            type="button"
            aria-label="Change language"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
          >
            <SiGoogletranslate className="text-3xl text-white" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-64 bg-header flex justify-center py-16 items-center text-white shadow-lg lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <motion.button
              type="button"
              aria-label="Close mobile menu"
              onClick={closeMobileMenu}
              className="absolute top-2 right-4 text-white text-3xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiX />
            </motion.button>

            <div className="flex flex-col space-y-4 mt-10 px-6">
              {[
                { href: "/", text: "Home" },
                { href: "/story", text: "About us" },
                { href: "/moreservices", text: "Services" },
                { href: "/moreprojects", text: "Projects" },
                { href: "/howitworks", text: "How it works" },
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="text-center border border-white px-10 py-2 text-sm rounded-full hover:bg-white hover:text-header font-malevi text-lg"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.text}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
