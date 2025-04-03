"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiX } from "react-icons/hi"; // HiX for close icon
import { SiGoogletranslate } from "react-icons/si";
import { CgMenuMotion } from "react-icons/cg";

export default function Header({ isScrolled }: { isScrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMenuOpen(!menuOpen);
  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-20 text-lg border border-transparent py-3 bg-darkblue shadow-sm">
      {/* Header Wrapper to keep everything on the same line */}
      <div className="flex justify-between items-center max-w-[1100px] mx-auto w-full px-5">
        {/* Logo Section */}
        <div className="flex items-center pr-5">
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
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          aria-label="Toggle mobile menu"
          onClick={toggleMobileMenu}
          className={`lg:hidden text-5xl text-purple ${
            menuOpen ? "hidden" : "block"
          }`}
        >
          <CgMenuMotion />
        </button>

        {/* Nav Section */}
        <nav className="max-w-[515px] flex-1 flex justify-between items-center px-16 bg-header py-3 rounded-full hidden lg:flex">
          {/* Desktop Navigation */}
          <div className="flex space-x-8">
            {[
              { href: "/", text: "Home" },
              { href: "/story", text: "About us" },
               { href: "/services", text: "Services" },
              { href: "/howitworks", text: "How it works" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-md font-peachi text-white hover:text-gray-300 transition-transform duration-300 transform hover:scale-105"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </nav>

        {/* Contact Us & Language Icon (Outside Nav) */}
        <div className="items-center gap-5 ml-5 hidden lg:flex">
          <Link
            href="/contact"
            className="font-peachi py-2 bg-white rounded-xl text-header px-3 text-sm transition-transform duration-600 transform hover:scale-110 hover:bg-purple hover:text-snow"
          >
            Contact us
          </Link>
          {/* Language Toggle Button */}
          <button
            type="button"
            aria-label="Change language"
          >
            <SiGoogletranslate className="text-3xl text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-goldcolor text-white shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <button
          type="button"
          aria-label="Close mobile menu"
          onClick={closeMobileMenu}
          className="absolute top-2 right-4 text-white text-3xl"
        >
          <HiX />
        </button>

        <div className="flex flex-col space-y-4 mt-10 px-6">
          {[
            { href: "/", text: "Home" },
            { href: "/story", text: "About us" },
            { href: "/services", text: "Services" },
            { href: "/howitworks", text: "How it works" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="text-center border border-white px-4 py-2 text-sm rounded-full hover:bg-white hover:text-header font-malevi text-lg transition duration-300"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
