"use client";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SwiftPayPage() {
  const screenshots = [
    "/images/swiftpay1.jpg",
    "/images/swiftpay3.jpg",
    "/images/swiftpay.jpg",
    "/images/swiftpay2.jpg",
    "/images/swiftpay4.jpg",
    "/images/swiftpay5.jpg",
    "/images/swiftpay6.jpg",
    "/images/swiftpay7.jpg",
    "/images/swiftpay8.jpg",
  ];

  const features = [
    {
      title: "Secure Transactions",
      description: "End-to-end encryption for all financial operations",
    },
    {
      title: "Intuitive UI",
      description:
        "Thoughtfully designed interface that makes digital payments effortless",
    },
    {
      title: "Cross-Platform Support",
      description: "Consistent experience across iOS and Android devices",
    },
    {
      title: "Instant Transfers",
      description:
        "Send and receive money in seconds with our optimized processing",
    },

    {
      title: "Bill Payments",
      description: "Automate all your recurring payments",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-darkblue to-gray-900 text-white">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-8">
        <Link href="/moreprojects" className="inline-flex items-center group">
          <ChevronLeft className="h-6 w-6 mr-1 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
                SwiftPay Mobile App
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                A seamless and secure digital wallet experience, designed for
                speed and convenience in everyday transactions.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Fintech",
                  "Mobile App",
                  "UI/UX Design",
                  "React Native",
                  "GoLang",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 relative">
              <div className="relative aspect-[9/16] w-full max-w-xs mx-auto">
                <Image
                  src="/images/mockup2.png"
                  alt="SwiftPay App Mockup"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            App{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Screens
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-5">
            {" "}
            {/* Flex instead of grid */}
            {screenshots.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-gray-800/50 border border-white/10 p-1"
              >
                <div className="relative w-[190px] h-[320px]">
                  {" "}
                  {/* Adjusted size */}
                  <Image
                    src={src}
                    alt={`SwiftPay Screen ${index + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    quality={90}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <span className="text-white text-xs font-medium">
                    Screen {index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Key{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Features
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-colors"
            >
              <div className="text-purple-400 text-2xl mb-3 font-bold">
                {index + 1}.
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-20 py-3 border border-white text-white rounded-full font-semiboldtransition-transform duration-600 transform hover:scale-110 hover:bg-purple hover:text-sno">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
