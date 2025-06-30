'use client';
import { useState, useEffect, ReactNode, JSX } from 'react';
import { motion, Easing } from 'framer-motion';

interface SectionScrollerWrapperProps {
  children: ReactNode[];
  showNavigationDots?: boolean;
  transitionDuration?: number;
  transitionEase?: Easing | Easing[];
}

export default function SectionScrollerWrapper({
  children,
  showNavigationDots = true,
  transitionDuration = 0.8,
  transitionEase = "easeInOut"
}: SectionScrollerWrapperProps): JSX.Element {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const totalSections: number = children.length;

  useEffect(() => {
    const handleWheel = (e: WheelEvent): void => {
      e.preventDefault();
      
      if (e.deltaY > 0 && currentSection < totalSections - 1) {
        // Scroll down
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scroll up
        setCurrentSection(prev => prev - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'ArrowDown' && currentSection < totalSections - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    let touchStartY: number = 0;
    const handleTouchStart = (e: TouchEvent): void => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent): void => {
      const touchEndY: number = e.changedTouches[0].clientY;
      const diff: number = touchStartY - touchEndY;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentSection < totalSections - 1) {
          setCurrentSection(prev => prev + 1);
        } else if (diff < 0 && currentSection > 0) {
          setCurrentSection(prev => prev - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, totalSections]);

  return (
    <div className="h-screen w-full overflow-hidden relative">
      {/* Navigation dots */}
      {showNavigationDots && (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
          {children.map((_, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSection 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}

      {/* Sections */}
      <motion.div
        className="flex flex-col"
        animate={{ y: `-${currentSection * 100}vh` }}
        transition={{ duration: transitionDuration, ease: transitionEase }}
      >
        {children.map((child: ReactNode, index: number) => (
          <div key={index} className="h-screen w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}