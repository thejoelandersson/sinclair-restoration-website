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
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  // Responsive breakpoints
  const getVisibleSlides = () => {
    if (windowWidth >= 1024) return 3; // lg
    if (windowWidth >= 768) return 2;  // md
    return 1; // sm
  };

  const totalSlides = processSteps.length;
  const visibleSlides = getVisibleSlides();
  const pageCount = visibleSlides === 3 ? 3 : Math.ceil(totalSlides / visibleSlides);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage(1); // Animate to next page
    setTimeout(() => {
      setStartIndex((prev) => (prev + visibleSlides) % totalSlides);
      setCurrentPage(0); // Reset for next animation
      setIsAnimating(false);
    }, 500);
  };

  const prevPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage(-1); // Animate to prev page
    setTimeout(() => {
      setStartIndex((prev) => (prev - visibleSlides + totalSlides) % totalSlides);
      setCurrentPage(0); // Reset for next animation
      setIsAnimating(false);
    }, 500);
  };

  const goToPage = (pageIndex: number) => {
    if (isAnimating) return;
    const currentPageIndex = Math.floor(startIndex / visibleSlides) % pageCount;
    if (pageIndex === currentPageIndex) return;
    
    setIsAnimating(true);
    setCurrentPage(pageIndex > currentPageIndex ? 1 : -1);
    setTimeout(() => {
      setStartIndex((pageIndex * visibleSlides) % totalSlides);
      setCurrentPage(0);
      setIsAnimating(false);
    }, 500);
  };

  // Calculate active dot
  const activeDot = Math.floor(startIndex / visibleSlides) % pageCount;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevPage();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextPage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle touch/mouse drag
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isAnimating) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - startX;
    setDragOffset(offset);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = windowWidth * 0.2; // 20% of page width
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevPage();
      } else {
        nextPage();
      }
    }
    setDragOffset(0);
  };

  // Build rotated queue for infinite loop
  const queue = [...processSteps.slice(startIndex), ...processSteps.slice(0, startIndex)];
  const visibleCards = queue.slice(0, visibleSlides);

  return (
    <section className="py-6 lg:py-8" role="region" aria-label="Mold remediation process">
      <div className="w-screen px-6 md:px-8 lg:px-12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-heading leading-[1.1] mb-4">
            What Is the Mold Remediation Process?
          </h2>
          <p className="text-sm text-[var(--sin-neutral-500)]">
            Every project follows the same proven, moisture-first method.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container with Edge Fade */}
          <div className="relative">
            {/* Left Edge Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[var(--sin-blue-050)] to-transparent z-10 pointer-events-none"></div>
            
            {/* Right Edge Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[var(--sin-blue-050)] to-transparent z-10 pointer-events-none"></div>

            <div 
              ref={carouselRef}
              className="overflow-hidden w-full"
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
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{ 
                  transform: `translateX(${currentPage * 100 + dragOffset}%)`,
                  width: `${visibleSlides * 100}%`
                }}
              >
                {/* Render only visible cards from queue */}
                {visibleCards.map((step, cardIndex) => (
                  <div 
                    key={`${startIndex}-${cardIndex}`}
                    className="flex-shrink-0"
                    style={{ 
                      flex: `0 0 ${visibleSlides === 1 
                        ? '100%' 
                        : visibleSlides === 2 
                        ? 'calc((100% - 24px)/2)'
                        : 'calc((100% - 48px)/3)'}`,
                      width: visibleSlides === 1 
                        ? '100%' 
                        : visibleSlides === 2 
                        ? 'calc((100% - 24px)/2)'
                        : 'calc((100% - 48px)/3)'
                    }}
                  >
                    <div className="bg-white rounded-[16px] p-6 shadow-sm border border-[var(--sin-border)] h-full min-h-[200px]">
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
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {/* Left Arrow */}
            <button
              onClick={prevPage}
              aria-label="Previous steps"
              className="w-10 h-10 rounded-full bg-white text-[#2E509F] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                  aria-current={index === activeDot}
                  className={`transition-all duration-200 rounded-full ${
                    index === activeDot 
                      ? 'w-3 h-3 bg-[#2E509F]' 
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextPage}
              aria-label="Next steps"
              className="w-10 h-10 rounded-full bg-white text-[#2E509F] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
