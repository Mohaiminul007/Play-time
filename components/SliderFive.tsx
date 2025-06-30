"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from "react";

export default function SliderFive() {
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
  const slideTexts = ["Water Tower", "Water Tower", "TITAN","Tengbom"];
  const slidePara = ["ON-A", "ON-A", "Sketch"];

  return (
    <div className="relative h-screen ">
      {/* Slider Container */}
      <div ref={sliderRef} className="keen-slider h-full">
        {/* Slide 1 */}
        <div className="keen-slider__slide">
          <div className=" grid grid-cols-2">
            <Image
              src="/BannerThree/1.jpg"
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
              src="/BannerThree/2.jpg"
              alt="Play image 3"
              width={400}
              height={400}
              className="object-cover mx-auto my-auto "
              priority
            />
            <div className="h-full flex flex-col items-center justify-center">
              <h1 className="text-2xl mb-4 font-semibold">
               The Magic of Sketching
              </h1>
              <h1 className="text-xl font-semibold ">
                Sketching is a crucial part of our creative process. We love to challenge ourselves, push boundaries and experiment with impactful imagery. Through sketches, we can freely explore different ideas and visualize the most effective ones. It&apos;s where we make the magic happen and transform our ideas into reality.


              </h1>
            </div>
            {/* Text at bottom left */}
            <div className="absolute flex bottom-8 left-8 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-black drop-shadow-lg">
                {slideTexts[0]}
              </h2>
              <p className=" text-MD mt-4 ml-4 font-bold text-inherit drop-shadow-lg">
                {slidePara[0]}
              </p>
            </div>
          </div>
        </div>
        {/* Slider 3 */}
        <div className="keen-slider__slide">
                  <div className="grid grid-cols-2 h-full relative">
  {/* Left column with background */}
  <div className="bg-[#f4e6db] flex items-center justify-center">
    <Image
      src="/BannerOne/play4.jpg"
      alt="Play image 4"
      width={400}
      height={800}
      className="object-cover mx-auto my-auto"
      priority
      sizes="50vw"
    />
  </div>
  
  {/* Right column with different background */}
  <div className="bg-[#e1f6ec] flex items-center justify-center">
    <Image
      src="/BannerOne/play5.jpg"
      alt="Play image 5"
      width={400}
      height={800}
      className="object-cover mx-auto my-auto"
      priority
      sizes="50vw"
    />
  </div>
  
  {/* Text at bottom left */}
  <div className="absolute flex bottom-8 left-8 max-w-2xl">
    <h2 className="text-3xl md:text-4xl font-semibold drop-shadow-lg">
      {slideTexts[2]}
    </h2>
    <p className="text-lg mt-4 ml-4 font-semibold drop-shadow-lg">
      {slidePara[2]}
    </p>
  </div>
  
  <div className="absolute flex bottom-8 right-80 max-w-2xl">
    <h2 className="text-3xl md:text-4xl font-semibold drop-shadow-lg">
      {slideTexts[3]}
    </h2>
    <p className="text-lg mt-4 ml-4 font-semibold drop-shadow-lg">
      {slidePara[2]}
    </p>
  </div>
</div>
                </div>
      </div>

      {/* Navigation Dots - Positioned at bottom right */}
      {loaded && instanceRef.current && (
        <div className="absolute bottom-8 right-8 flex space-x-2">
          {[0, 1, 2].map((idx) => (
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
