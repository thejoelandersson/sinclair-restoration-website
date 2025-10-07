'use client';

import React from 'react';
import Link from 'next/link';

interface CTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function CTA({ href, children, className = '', ariaLabel }: CTAProps) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-3 bg-white border border-black/10 rounded-full px-6 py-3 h-12 font-medium text-black transition-all duration-250 ease-out hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5 focus-visible:shadow-md focus-visible:outline-none active:translate-y-0.5 active:shadow-sm ${className}`}
      aria-label={ariaLabel}
    >
      <span className="transition-colors duration-200 group-hover:text-black/90 group-focus-visible:text-black/90">
        {children}
      </span>
      
      <div className="relative">
        {/* Trail effect */}
        <div className="absolute inset-0 rounded-full bg-white/50 blur-sm scale-0 group-hover:scale-150 group-hover:opacity-0 group-focus-visible:scale-150 group-focus-visible:opacity-0 transition-all duration-250 ease-out motion-reduce:scale-0 motion-reduce:opacity-0"></div>
        
        {/* Arrow badge */}
        <span className="relative grid place-items-center h-6 w-6 rounded-full bg-black text-white text-[14px] leading-none transition-transform duration-200 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2 group-active:translate-x-1 motion-reduce:translate-x-0">
          ↗
        </span>
      </div>
    </Link>
  );
}
