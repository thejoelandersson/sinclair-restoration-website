"use client";

import React, { useState, useRef, useEffect } from 'react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Inspect",
    description: "Our certified technicians perform a complete on-site inspection using moisture meters and thermal imaging. We identify visible and hidden mold, diagnose leaks, and locate the true source of moisture before any removal begins."
  },
  {
    number: 2,
    title: "Contain",
    description: "We isolate affected areas to prevent cross-contamination. Using professional containment barriers, air scrubbers, and negative air pressure, we ensure mold spores stay sealed in until cleanup is complete."
  },
  {
    number: 3,
    title: "Remove & HEPA Clean",
    description: "Contaminated materials are carefully removed and disposed of. All surfaces are then vacuumed using HEPA-grade filtration and antimicrobial cleaning to eliminate residual mold particles."
  },
  {
    number: 4,
    title: "Treat Surfaces",
    description: "After removal and HEPA cleaning, we apply targeted antimicrobial treatments and verify moisture control to help prevent regrowth and stabilize the environment."
  },
  {
    number: 5,
    title: "Independent Clearance",
    description: "When applicable, a licensed third-party assessor performs clearance testing to confirm the area is safe for re-entry and moisture is back to normal—full transparency, independent confirmation."
  }
];

export default function ProcessCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const cardsPerView = {
    desktop: 3,
    tablet: 2,
    mobile: 1
  };

  const maxIndex = processSteps.length - cardsPerView.desktop;

  const goToSlide = (index: number) => {
    if (index >= 0 && index <= maxIndex) {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, maxIndex]);

  // Handle touch/mouse drag
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    if (carouselRef.current) {
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - startX;
    
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - x;
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-8 lg:py-12" role="region" aria-label="Mold remediation process">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-heading leading-[1.1] mb-4">
            What Is the Mold Remediation Process?
          </h2>
          <p className="text-sm text-[var(--sin-neutral-500)]">
            Every project follows the same proven, moisture-first method.
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Previous step"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
              currentIndex === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-[#2E509F] shadow-lg hover:shadow-xl hover:scale-105'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            aria-label="Next step"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
              currentIndex === maxIndex 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-[#2E509F] shadow-lg hover:shadow-xl hover:scale-105'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="overflow-hidden mx-12"
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsPerView.desktop)}%)`,
                width: `${(processSteps.length / cardsPerView.desktop) * 100}%`
              }}
            >
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / processSteps.length}%` }}
                >
                  <div className="bg-white rounded-[16px] p-6 shadow-sm border border-[var(--sin-border)] h-full">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-[#2E509F] flex items-center justify-center">
                          <span className="text-lg font-bold text-white">{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-heading mb-3">{step.title}</h3>
                        <p className="text-[15px] leading-[1.5] text-[var(--sin-neutral-500)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to step ${index + 1}`}
                aria-current={index === currentIndex}
                className={`transition-all duration-200 rounded-full ${
                  index === currentIndex 
                    ? 'w-3 h-3 bg-[#2E509F]' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
