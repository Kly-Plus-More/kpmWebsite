import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-transparent text-gray-400 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row flex-wrap justify-between gap-8 sm:gap-12">
        {/* Left Section */}
        <div className="flex flex-row justify-center sm:flex-row items-center sm:items-start sm:gap-8">
          <div className="flex items-center">
            <Image
              src="/images/logotext-removebg-preview.png"
              alt="abomo logo"
              width={120}
              height={120}
              className="w-24 sm:w-32 md:w-40"
            />
          </div>
          <div className="flex items-center gap-5">
            <Image
              src="/images/logoinfinity-removebg-preview.png"
              alt="abomo logo"
              width={50}
              height={50}
              className="w-12 sm:w-16 md:w-20"
            />
          </div>
        </div>
        {/* Links Section */}

        <div className="text-center sm:text-left">
          <h3 className="font-semibold mb-3 sm:mb-4 underline text-purple">
            Links
          </h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start">
            {[
              { name: "About Us", href: "/story" },
              { name: "Services", href: "/moreservices" },
              { name: "How it works", href: "/howitworks" },
              { name: "Case Studies", href: "/moreprojects" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Section */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold mb-3 sm:mb-4 underline text-purple">
            Contact us
          </h3>
          <p className="max-w-xs mx-auto sm:mx-0 mb-10">
            Ready to start your project? Contact KPM today for innovative
            digital solutions.
          </p>
          <p className="mt-2 font-semibold">
            <a href="tel:+250780409312" className="hover:underline">
              +250 780 409 312
            </a>{" "}
            /
            <a href="tel:+250791207043" className="hover:underline">
              {" "}
              +250 791 207 043
            </a>
          </p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 sm:mt-12 flex justify-center sm:justify-end sm:pr-16 lg:pr-32 space-x-4">
        {[
          {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/share/1E1s136BBL/",
          },
          {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/klyplusandmore/profilecard/?igsh=MnRsMHI3Zms1MnAz",
          },
          {
            icon: <FaTiktok />,
            link: "https://www.tiktok.com/@klyplusandmore?_t=ZM-8vEYQfT8K7K&_r=1",
          },
          { icon: <FaWhatsapp />, link: "https://wa.me/250780409312" },
          {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/kly-plus-and-more-1b993a257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
        ].map(({ icon, link }, index) => (
          <a
            key={index}
            href={link}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-purple text-darkblue rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="mt-8 sm:mt-10 text-center border-t border-gray-700 pt-6 px-1 text-sm">
        © 2025 Copyright by KPM. All rights reserved.
      </div>
    </footer>
  );
}
