import React from 'react';

interface BadgeRowProps {
  className?: string;
}

export default function BadgeRow({ className = '' }: BadgeRowProps) {
  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[var(--sin-neutral-500)] ${className}`}>
      <span className="flex items-center space-x-2">
        <svg className="w-4 h-4 text-[var(--sin-blue-700)]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>Licensed & Insured</span>
      </span>
      
      <span className="flex items-center space-x-2">
        <svg className="w-4 h-4 text-[var(--sin-blue-700)]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>Independent Clearance Testing</span>
      </span>
      
      <span className="flex items-center space-x-2">
        <svg className="w-4 h-4 text-[var(--sin-blue-700)]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>Same-day Service</span>
      </span>
      
      <span className="flex items-center space-x-2">
        <svg className="w-4 h-4 text-[var(--sin-blue-700)]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 1h2v2H7V5zm8 8v2h1v-2h-1zm-2-2h2v2h-2v-2zm-2 0h2v2h-2v-2zm-2 0h2v2H9v-2zm-2 0h2v2H7v-2z" clipRule="evenodd" />
        </svg>
        <span>Locally Owned & Operated</span>
      </span>
      
      <span className="flex items-center space-x-2">
        <svg className="w-4 h-4 text-[var(--sin-blue-700)]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
        <span>EPA-Compliant Procedures</span>
      </span>
    </div>
  );
}

