"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from "react";

export default function SliderSix() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  // Auto-play configuration
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     instanceRef.current?.next();
  //   }, 40000);

  //   return () => clearInterval(interval);
  // }, [instanceRef]);

  // Slide text content
  const slideTexts = [
    "Summer Collection 2023",
    "New Arrivals Just In",
    "Limited Edition Styles",
    "Fall Favorites",
    "Winter Preview",
  ];
  const slidePara = [
    "Summer Collection 2023",
    "New Arrivals Just In",
    "Limited Edition Styles",
    "Fall Favorites",
    "Winter Preview",
  ];

  return (
    <div className="relative h-screen ">
      {/* Slider Container */}
      <div ref={sliderRef} className="keen-slider h-full">
        {/* Slide 1 */}
        <div className="keen-slider__slide">
          <div className=" grid grid-cols-2">
            
            <Image
            src="/BannerOne/play2.jpg"
             alt="Play image 1"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Text at bottom left */}
            <div className="absolute flex bottom-8 left-8 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                {slideTexts[0]}
              </h2>
              <p className=" text-MD mt-4 ml-4 font-bold text-white drop-shadow-lg">
                {slidePara[0]}
              </p>
            </div>
          </div>
        </div>

      

        {/* Slide 2 */}
        <div className="keen-slider__slide">
          <div className="grid grid-cols-2 h-full relative">
            <Image
              src="/BannerOne/play5.jpg"
              alt="Play image 5"
              width={400} // Add appropriate width
              height={800} // Add appropriate height
              className="object-cover mx-auto my-24"
              priority
              sizes="50vw"
            />
            <Image
              src="/BannerOne/play2.jpg"
              alt="Play image 2"
              width={640} // Add appropriate width
              height={663} // Add appropriate height
              className="object-cover w-full h-full"
              priority
              sizes="50vw"
            />

            {/* Text at bottom left */}
            <div className="absolute flex bottom-8 left-8 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold drop-shadow-lg">
                {slideTexts[3]}
              </h2>
              <p className="text-MD mt-4 ml-4 font-bold  drop-shadow-lg">
                {slideTexts[3]}
              </p>
            </div>
          </div>
        </div>
       

        
      </div>

      {/* Navigation Dots - Positioned at bottom right */}
      {loaded && instanceRef.current && (
        <div className="absolute bottom-8 right-8 flex space-x-2">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === idx
                  ? "bg-white scale-125"
                  : "bg-gray-300 bg-opacity-50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
