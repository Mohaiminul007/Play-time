"use client";

import React, { JSX, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import galleryData from "./gallery.json";
import Navbar from "@/components/Navbar";

type GalleryItem = {
  title: string;
  category: string;
  image: string;
};

interface GalleryLightboxProps {
  className?: string;
}

export default function GalleryLightbox({
  className = "",
}: GalleryLightboxProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const gallery: GalleryItem[] = galleryData;

  const openLightbox = (imageIndex: number): void => {
    setIndex(imageIndex);
    setOpen(true);
  };

  const closeLightbox = (): void => {
    setOpen(false);
  };

  const prevIndex = () => (index === 0 ? gallery.length - 1 : index - 1);
  const nextIndex = () => (index === gallery.length - 1 ? 0 : index + 1);

  return (
    <div>
        <Navbar/>
    <div className={`w-full mt-20 ${className}`}>
      {/* Gallery Grid - Three Columns with Hover Text */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 p-4 space-y-6">
        {gallery.map((item: GalleryItem, i: number) => (
          <div
            key={i}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg  break-inside-avoid mb-6"
            onClick={() => openLightbox(i)}
          >
            <div className="relative h-auto">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Hover overlay with text */}
              <div className="absolute inset-0 hover:bg-black/40 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Lightbox */}
      <div className="relative">
        <Lightbox
          open={open}
          close={closeLightbox}
          index={index}
          slides={gallery.map((item: GalleryItem) => ({
            src: item.image,
            title: item.title,
            description: item.category,
            width: 1200,
            height: 800,
          }))}
          plugins={[Captions, Fullscreen, Slideshow, Zoom]}
          captions={{
            showToggle: true,
            descriptionTextAlign: "center",
            descriptionMaxLines: 2,
            hidden: true, // captions hidden by default
          }}
          slideshow={{
            autoplay: false,
            delay: 3000,
          }}
          zoom={{
            maxZoomPixelRatio: 3,
            scrollToZoom: true,
          }}
          carousel={{
            finite: false,
            preload: 2,
          }}
          controller={{
            closeOnBackdropClick: true,
            closeOnPullDown: true,
            closeOnPullUp: true,
          }}
          on={{
            view: ({ index }) => setIndex(index),
          }}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
            slide: { padding: "20px" },
          }}
        />

        {/* Custom Prev Button */}
        <button
          onClick={() => setIndex(prevIndex())}
          className="yarl__button yarl__button_prev absolute top-1/2 left-5 -translate-y-1/2 z-20"
          aria-label="Previous image"
        >
          <svg className="yarl__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        {/* Custom Next Button */}
        <button
          onClick={() => setIndex(nextIndex())}
          className="yarl__button yarl__button_next absolute top-1/2 right-5 -translate-y-1/2 z-20"
          aria-label="Next image"
        >
          <svg className="yarl__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
</div>
      {/* Custom Styles */}
      <style jsx global>{`
        .yarl__slide_title {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .yarl__slide_description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          text-align: center;
        }

        .yarl__button {
          background: rgba(0, 0, 0, 0.6);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: white;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          cursor: pointer;
        }

        .yarl__button:hover {
          background: rgba(0, 0, 0, 0.8);
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.1);
        }

        .yarl__button:active {
          transform: scale(0.95);
        }

        .yarl__icon {
          width: 28px;
          height: 28px;
        }

        .yarl__button_prev {
          left: 20px;
        }

        .yarl__button_next {
          right: 20px;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .yarl__button {
            width: 48px;
            height: 48px;
            background: rgba(0, 0, 0, 0.7);
          }

          .yarl__button_prev {
            left: 12px;
          }

          .yarl__button_next {
            right: 12px;
          }

          .yarl__icon {
            width: 24px;
            height: 24px;
          }
        }

        /* Touch gestures support */
        .yarl__container {
          touch-action: pan-x pan-y;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }

        .yarl__slide {
          touch-action: pan-x pan-y;
        }
      `}</style>
    </div>
  );
}