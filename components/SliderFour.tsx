"use client";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useEffect, useState, useRef,  } from "react";

// Define a more specific type for the slider instance
type SliderInstance = KeenSliderInstance<
  Record<string, unknown>,  // Options
  Record<string, unknown>  // Plugins
//   Record<string, unknown>   // Hooks
> & {
  moveToIdx: (index: number) => void;
  next: () => void;
};

export default function SliderFour() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Create a ref to hold the slider instance
  const sliderInstanceRef = useRef<SliderInstance | null>(null);
  
  // Initialize the slider
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider: KeenSliderInstance) {
      setCurrentSlide(slider.track.details.rel);
      
      // Pause video when not on first slide
      if (slider.track.details.rel !== 0 && videoRef.current) {
        videoRef.current.pause();
      }
    },
    created(slider: KeenSliderInstance) {
      setLoaded(true);
      // Store the slider instance in our ref with proper typing
      sliderInstanceRef.current = slider as SliderInstance;
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  // Play video when on first slide
  useEffect(() => {
    if (currentSlide === 0 && videoRef.current) {
      videoRef.current.play().catch((error: Error) => {
        console.log("Autoplay prevented:", error.message);
      });
    }
  }, [currentSlide]);

  const slideTexts: string[] = ["Water Tower", "Water Tower", "Water Tower"];
  const slidePara: string[] = ["ON-A", "ON-A", "ON-A"];

  return (
    <div className="relative h-screen">
      {/* Slider Container */}
      <div ref={sliderRef} className="keen-slider  bg-black text-white h-full">
        {/* Slide 1 - Video Slide */}
        <div className="keen-slider__slide">
          <div className="relative h-full w-full">
            <video
              ref={videoRef}
              className="object-cover w-full h-full"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/bannerFour/bannerVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-8 left-8 flex items-end max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                {slideTexts[0]}
              </h2>
              <p className="text-xl md:text-2xl mt-4 ml-4 font-bold text-white drop-shadow-lg">
                {slidePara[0]}
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="keen-slider__slide">
          <div className="relative h-full w-full grid grid-cols-2">
            <div className="relative">
              <Image
                src="/BannerFour/2.jpg"
                alt="Image 3"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative m-14 max-w-xl my-auto">
              <h1 className="mb-14 text-2xl font-semibold">X Anniversary</h1>
              <p className="font-semibold text-lg">In 2020 we celebrated our 10th anniversary with a fun gathering of clients and partners, where we showcased some of our most notable projects while enjoying food and drinks. It was a great opportunity to reflect on our success and express our gratitude to our clients for their trust in our work. We remain committed to providing top-notch renderings that bring our clients&quot; visions to life and look forward to many more years of partnership. Thank you for choosing Playtime!</p>
            </div>
            
            <div className="absolute bottom-8 left-8 flex items-end max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-black drop-shadow-lg">
                {slideTexts[1]}
              </h2>
              <p className="text-xl md:text-2xl mt-4 ml-4 font-bold text-black drop-shadow-lg">
                {slidePara[1]}
              </p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="keen-slider__slide">
                  <div className="grid grid-cols-2 h-full relative">
                    
                    <Image
                      src="/BannerFour/3.jpg"
                      alt="Play image 3"
                      width={400}
                      height={800}
                      className="object-cover mx-auto mt-52 "
                      priority
                    />
                    <Image
                      src="/BannerFour/4.jpg"
                      alt="Play image 2"
                      width={640} // Add appropriate width
                      height={663} // Add appropriate height
                      className="object-cover w-full h-full"
                      priority
                      sizes="50vw"
                    />
                    
                  </div>
                </div>
      </div>

      {/* Navigation Dots */}
      {loaded && sliderInstanceRef.current && (
        <div className="absolute bottom-8 right-8 flex space-x-2">
          {[0, 1, 2].map((idx: number) => (
            <button
              key={idx}
              onClick={() => sliderInstanceRef.current?.moveToIdx(idx)}
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