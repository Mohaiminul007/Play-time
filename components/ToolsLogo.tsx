"use client";
import React from "react";
import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  { src: "/logos/next-js.png", alt: "Next.js" },
  { src: "/logos/reactjs.png", alt: "React" },
  { src: "/logos/tailwindcss.png", alt: "Tailwind CSS" },
  { src: "/logos/TypeScript.webp", alt: "TypeScript" },
  { src: "/logos/nodejs.png", alt: "Node.js" },
  { src: "/logos/git.webp", alt: "Git" },
  { src: "/logos/next-js.png", alt: "Next.js" },
  { src: "/logos/reactjs.png", alt: "React" },
  { src: "/logos/tailwindcss.png", alt: "Tailwind CSS" },
  { src: "/logos/TypeScript.webp", alt: "TypeScript" },
  { src: "/logos/nodejs.png", alt: "Node.js" },
  { src: "/logos/git.webp", alt: "Git" },
];

const ToolsLogo: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Tools & Technologies I Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsLogo;
