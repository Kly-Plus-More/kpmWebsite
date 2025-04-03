"use client";
import Header from "@/components/header";
import Image from "next/image";
import { FaLaptopCode, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert("Message sent successfully!");
    }
  };

  return (
    <section
      className="relative bg-cover bg-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-16 sm:py-20 md:py-24 flex justify-center items-center"
      style={{ backgroundImage: `url(/images/abstractbg5.jpg)` }}
    >
      <Header isScrolled={false} />
      <div className="absolute inset-0 bg-opacity-30 backdrop-blur-[5px]"></div>
      {/* <div className="relative text-center mb-12">
        <div className="w-12 h-1 bg-gradient-to-r from-desert to-snow mx-auto mb-2"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-snow font-peachi font-bold">
          Leave us a Message
        </h2>
      </div> */}

      <div className="my-12 relative flex flex-col md:flex-col lg:flex-row w-full max-w-5xl border border-purple rounded-3xl shadow-lg shadow-madder overflow-hidden bg-opacity-80 backdrop-blur-lg p-4 sm:p-6 md:p-8">
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4 sm:gap-6 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-purple">
          <Image
            src="/images/calling.png"
            alt="Contact Image"
            height={200}
            width={200}
            className="rounded-lg shadow-md"
          />
          <div className="text-white space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-blue p-2 sm:p-3 rounded-full text-white">
                <FaLaptopCode className="text-base sm:text-lg" />
              </div>
              <p className="text-base sm:text-lg">Gisozi, Gasabo, Kigali City</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-blue p-2 sm:p-3 rounded-full text-white">
                <FaPhone className="text-base sm:text-lg" />
              </div>
              <p className="mt-2 font-semibold">
            <a href="tel:+2507804099312" className="hover:underline">+250 780 4099 312</a> / 
            <a href="tel:+250791207043" className="hover:underline"> +250 791 207 043</a>
          </p>            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-blue p-2 sm:p-3 rounded-full text-white">
                <FaEnvelope className="text-base sm:text-lg" />
              </div>
              <p className="text-base sm:text-lg">klyplusandmore@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-peachi text-snow font-bold text-center">
            Get in Touch
          </h3>
          <p className="text-gray-400 text-center mb-4 sm:mb-6 font-malevi">
            Any questions or remarks? Let us know!
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:gap-5"
          >
            <div className="flex flex-col">
              <label className="text-snow mb-1 font-malevi">Your Name</label>
              <input
                className="w-full border border-blue bg-transparent text-snow p-2 sm:p-3 text-base sm:text-lg rounded-lg focus:ring-2 focus:ring-blue outline-none"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-snow mb-1 font-malevi">Your Email</label>
              <input
                className="w-full border border-blue bg-transparent text-snow p-2 sm:p-3 text-base sm:text-lg rounded-lg focus:ring-2 focus:ring-blue outline-none"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-snow mb-1 font-malevi">Your Message</label>
              <textarea
                className="w-full border border-blue bg-transparent text-snow p-2 sm:p-3 text-base sm:text-lg rounded-lg focus:ring-2 focus:ring-blue outline-none resize-none h-24 sm:h-28"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple text-white py-2 sm:py-3 text-base sm:text-lg font-peachi rounded-lg hover:bg-header transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
