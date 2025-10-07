'use client';

import React from 'react';

interface MarqueeProps {
  items: string[];
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
}

export default function Marquee({ 
  items, 
  speed = "normal", 
  direction = "left" 
}: MarqueeProps) {
  const speedMap = {
    slow: "50s",
    normal: "35s", 
    fast: "22s"
  };

  const animationDuration = speedMap[speed];

  return (
    <section 
      className="w-full border-y"
      style={{ 
        backgroundColor: "#EEE7DD",
        borderTopColor: "#F3EEE8",
        borderBottomColor: "#F3EEE8"
      }}
    >
      <div className="w-full py-10 lg:py-14">
        {/* Screen reader list */}
        <ul className="sr-only">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Marquee container */}
        <div 
          className="overflow-hidden relative"
          aria-label="How it works steps"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)"
          }}
        >
          <div 
            className="inline-flex whitespace-nowrap hover:pause-animation"
            style={{
              animation: `marquee-${direction} ${animationDuration} infinite linear`,
              animationPlayState: "running"
            }}
          >
            {/* Create multiple identical tracks for seamless loop */}
            {[1, 2, 3].map((trackNum) => (
              <div key={trackNum} className="inline-flex items-center">
                {items.map((item, index) => (
                  <React.Fragment key={`track${trackNum}-${index}`}>
                    <span 
                      className="text-[clamp(28px,5vw,56px)] font-semibold tracking-[-0.01em] leading-none text-[#0F0F10]"
                      aria-hidden="true"
                    >
                      {item}
                    </span>
                    {index < items.length - 1 && (
                      <span 
                        className="mx-12 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <svg 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          className="text-[#0F0F10] opacity-60"
                        >
                          <path 
                            d="M9 18L15 12L9 6" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )}
                  </React.Fragment>
                ))}
                {/* Break after Prevent */}
                <span className="mx-12 text-[#0F0F10] opacity-40 text-[clamp(28px,5vw,56px)] font-semibold" aria-hidden="true">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .hover\\:pause-animation {
            animation: none !important;
          }
          
          .hover\\:pause-animation > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
