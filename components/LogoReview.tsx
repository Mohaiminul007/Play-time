"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import {
  FaStar,
  FaRegStar,
  FaUserCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

type Review = {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  profilePic?: string;
};

interface StarRatingProps {
  rating: number;
}

const logos = [
  { src: "/logos/next-js.png", alt: "Next.js" },
  { src: "/logos/reactjs.png", alt: "React" },
  { src: "/logos/tailwindcss.png", alt: "Tailwind CSS" },
  { src: "/logos/TypeScript.webp", alt: "TypeScript" },
  { src: "/logos/nodejs.png", alt: "Node.js" },
  { src: "/logos/git.webp", alt: "Git" },
];

const StarRating: React.FC<StarRatingProps> = ({ rating }) => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) =>
      i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
    )}
  </div>
);

export const LogoReview = ({ logoSpeed = 20 }: { logoSpeed?: number }) => {
  const logosControls = useAnimationControls();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Alex Johnson",
      rating: 5,
      date: "May 15, 2023",
      comment: "This product is amazing! The quality exceeded my expectations.",
      profilePic: "/avatars/user1.jpg",
    },
    {
      id: 2,
      name: "Sarah Miller",
      rating: 4,
      date: "April 28, 2023",
      comment:
        "Very good product overall. The color is slightly different than shown but still nice.",
    },
    {
      id: 3,
      name: "Michael Chen",
      rating: 5,
      date: "June 10, 2023",
      comment:
        "Perfect! Exactly what I was looking for. Will definitely buy again.",
      profilePic: "/avatars/user2.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      rating: 5,
      date: "July 2, 2023",
      comment: "Outstanding quality and fast delivery. Highly recommended!",
    },
    {
      id: 5,
      name: "David Wilson",
      rating: 4,
      date: "June 20, 2023",
      comment: "Great value for money. The product works as advertised.",
      profilePic: "/avatars/user3.jpg",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      rating: 5,
      date: "May 30, 2023",
      comment:
        "Excellent customer service and product quality. Will order again!",
    },
  ];

  useEffect(() => {
    logosControls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: logoSpeed,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [logosControls, logoSpeed]);

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-12 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Reviews Section */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
              <p className="text-lg text-gray-600 mb-8">
                Hear what our customers say about our products and services
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  key={currentReviewIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                        {reviews[currentReviewIndex].profilePic ? (
                          <Image
                            src={reviews[currentReviewIndex].profilePic}
                            alt={reviews[currentReviewIndex].name}
                            width={48}
                            height={48}
                            className="object-cover h-full w-full"
                          />
                        ) : (
                          <FaUserCircle className="text-gray-400 text-3xl" />
                        )}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-gray-900">
                          {reviews[currentReviewIndex].name}
                        </h3>
                        <div className="flex items-center">
                          <StarRating rating={reviews[currentReviewIndex].rating} />
                          <span className="text-sm text-gray-500 ml-2">
                            {reviews[currentReviewIndex].rating}.0
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {reviews[currentReviewIndex].comment}
                    </p>
                    <p className="text-xs text-gray-400">
                      {reviews[currentReviewIndex].date}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-end mt-6">
                <div className="flex space-x-2">
                  <button
                    onClick={prevReview}
                    className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-gray-800"
                  >
                    <FaChevronLeft className="text-lg" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-gray-800"
                  >
                    <FaChevronRight className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Logos Section - Heading aligned, logos centered */}
          <div className="flex flex-col space-y-6 h-full">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4">Trusted Technologies</h3>
              <p className="text-lg text-gray-600 mb-8">
                Built with industry-leading tools and frameworks
              </p>
            </div>

            <div className="flex-1 flex items-center">
              <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                <motion.div
                  animate={logosControls}
                  className="flex gap-14 pr-14 min-w-max"
                  initial={{ x: "0%" }}
                >
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
                        className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                        draggable={false}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
