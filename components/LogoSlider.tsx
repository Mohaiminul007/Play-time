"use client";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
const logos = [
  { src: '/logos/next-js.png', alt: 'Next.js' },
  { src: '/logos/reactjs.png', alt: 'React' },
  { src: '/logos/tailwindcss.png', alt: 'Tailwind CSS' },
  { src: '/logos/TypeScript.webp', alt: 'TypeScript' },
  { src: '/logos/nodejs.png', alt: 'Node.js' },
  { src: '/logos/git.webp', alt: 'Git' },
];
export const LogoSlider = ({ speed = 30 }: { speed?: number }) => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        translateX: "-50%",
        transition: {
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }
      });
    }
  }, [isPaused, controls, speed]);
  return (
    <section 
      className="pb-10 mt-5"
      onMouseEnter={() => {
        setIsPaused(true);
        controls.stop();
      }}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container px-0 mx-auto">
        <div
          className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
        >
         
          <motion.div
            animate={controls}
            className="flex flex-none gap-14 pr-14"
          >
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={80}
                  className="h-32 w-auto object-contain transition-opacity"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};