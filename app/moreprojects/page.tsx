"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/header";

const projects = [
  {
    title: "SwiftPay Mobile App",
    category: "Mobile Application",
    description:
      "A seamless and secure digital wallet experience, designed for speed and convenience in everyday transactions.",
    image: "/images/mockup2.png",
    features: ["Secure Transactions", "Intuitive UI", "Cross-Platform Support"],
    link: "/swiftpay",
  },
  {
    title: "KPM Etudier au Rwanda",
    category: "Web Development",
    description:
      "A modern, visually appealing website designed to showcase Ferme Clement’s organic farming products and values.",
    image: "/images/kpmstudents.png",
    features: ["E-commerce Integration", "SEO Optimized", "Responsive Design"],
    link: "https://kpm-etude-au-rwanda.vercel.app/",
  },
  {
    title: "Ferme Clement",
    category: "Digital Transformation",
    description:
      "A powerful business platform that enables companies to digitalize their workflows efficiently.",
    image: "/images/mockup4.jpg",
    features: [
      "Automated Workflows",
      "User Analytics",
      "Scalable Architecture",
    ],
    link: "https://fermeclement.site/",
  },
  {
    title: "Urban Dental website",
    category: "Digital Transformation",
    description:
      "A powerful business platform that enables companies to digitalize their workflows efficiently.",
    image: "/images/dental.png",
    features: [
      "Automated Workflows",
      "User Analytics",
      "Scalable Architecture",
    ],
    link: "https://urban-dental-new.vercel.app/",
  },
];

export default function MoreProjects() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <section className="relative py-32 px-10 bg-darkblue text-white">
      <section>
        <Header isScrolled={false} />
      </section>
      <div className="text-center mb-16" data-aos="fade-up">
        <div className="w-12 h-1 bg-gradient-to-r from-desert to-snow mx-auto mb-4"></div>
        <h2 className="text-4xl font-peachi">Our Works</h2>
        <p className="text-gray-400 mt-2">
          Explore some of our latest projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="relative rounded-xl overflow-hidden bg-header hover:shadow-2xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="object-cover w-full h-60"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-purple text-sm mb-3">{project.category}</p>
              <p className="text-gray-300">{project.description}</p>
              <ul className="mt-3 text-gray-400 text-sm list-disc list-inside">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link
                href={project.link}
                className="inline-block mt-4 text-purple font-semibold hover:underline"
              >
                View Case Study →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
