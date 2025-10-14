'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import CTA from './CTA';

// Constants

export default function Nav() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleKeyDown = (e: React.KeyboardEvent, dropdown: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDropdownToggle(dropdown);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileAccordion(null);
  };

  const handleMobileAccordionToggle = (accordion: string) => {
    setOpenMobileAccordion(openMobileAccordion === accordion ? null : accordion);
  };

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu and dropdowns on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          setOpenMobileAccordion(null);
        }
        if (openDropdown) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen, openDropdown]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      // Check if click is outside any dropdown
      if (!target.closest('[data-dropdown]') && openDropdown) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openDropdown]);

  return (
    <nav className="sticky top-0 z-50">
      {/* Main nav bar */}
      <div className="w-full bg-[var(--sin-blue-900)] border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-4 lg:px-6 h-16 lg:h-[72px] flex items-center justify-between">
          {/* Brand Left */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <img 
              src="/pics/justinlogo.png" 
              alt="Sinclair Restoration Logo" 
              className="h-10 lg:h-12 w-auto"
            />
            <div className="flex items-baseline gap-1">
              <span className="text-[18px] lg:text-[20px] font-semibold tracking-[-0.01em] text-white">
                Sinclair Restoration
              </span>
              <span className="hidden lg:block text-[10px] lg:text-[11px] font-medium tracking-[0.05em] text-white/70 uppercase ml-2">
                Complete Mold Remediation
              </span>
            </div>
          </Link>

          {/* Nav Links Center */}
          <div className="hidden lg:flex items-center gap-8 ml-8">
            {/* Services Dropdown */}
            <div className="relative" data-dropdown>
              <button
                onClick={() => handleDropdownToggle('services')}
                onKeyDown={(e) => handleKeyDown(e, 'services')}
                className={`flex items-center gap-1 text-[15px] font-medium tracking-[-0.01em] transition-all underline-offset-4 hover:underline ${
                  pathname === '/services' ? 'text-white underline' : 'text-white/90 hover:text-white'
                }`}
                aria-expanded={openDropdown === 'services'}
              >
                Services
                <span className={`text-[12px] transition-transform duration-200 ${
                  openDropdown === 'services' ? 'rotate-180' : ''
                }`}>▾</span>
              </button>
              
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 bg-card rounded-2xl border-subtle shadow-sm p-3 min-w-[240px]">
                  <Link href="/services/mold-remediation" className="block text-[14px] font-medium text-[var(--sin-neutral-700)] hover:text-link py-2">
                    Mold Remediation
                  </Link>
                  <Link href="/services/water-damage-restoration" className="block text-[14px] font-medium text-[var(--sin-neutral-700)] hover:text-link py-2">
                    Water Damage Restoration
                  </Link>
                  <Link href="/services/crawlspace-moisture-control" className="block text-[14px] font-medium text-[var(--sin-neutral-700)] hover:text-link py-2">
                    Crawlspace & Moisture Control
                  </Link>
                </div>
              )}
            </div>

            {/* About Link */}
            <Link 
              href="/about" 
              className={`text-[15px] font-medium tracking-[-0.01em] transition-all underline-offset-4 hover:underline ${
                pathname === '/about' ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </Link>


            {/* Learning Dropdown */}
            <div className="relative" data-dropdown>
              <button
                onClick={() => handleDropdownToggle('learning')}
                onKeyDown={(e) => handleKeyDown(e, 'learning')}
                className={`flex items-center gap-1 text-[15px] font-medium tracking-[-0.01em] transition-all underline-offset-4 hover:underline ${
                  pathname === '/learning' ? 'text-white underline' : 'text-white/90 hover:text-white'
                }`}
                aria-expanded={openDropdown === 'learning'}
              >
                Learning
                <span className={`text-[12px] transition-transform duration-200 ${
                  openDropdown === 'learning' ? 'rotate-180' : ''
                }`}>▾</span>
              </button>
              
              {openDropdown === 'learning' && (
                <div className="absolute top-full left-0 mt-2 bg-card rounded-2xl border-subtle shadow-sm p-3 min-w-[160px]">
                  <Link href="/blog" className="block text-[14px] font-medium text-[var(--sin-neutral-700)] hover:text-link py-2">
                    Blog
                  </Link>
                  <Link href="/guides" className="block text-[14px] font-medium text-[var(--sin-neutral-700)] hover:text-link py-2">
                    Guides
                  </Link>
                  <Link href="/faq" className="block text-[14px] font-medium text-[var(--sin-neutral-700)] hover:text-link py-2">
                    FAQ
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/service-area" 
              className={`text-[15px] font-medium tracking-[-0.01em] transition-all underline-offset-4 hover:underline ${
                pathname === '/service-area' ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              Service Area
            </Link>
          </div>

          {/* Mobile CTAs + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <CTA href="/book-inspection" ariaLabel="Book an Inspection">
              Book Inspection
            </CTA>
            
            {/* Hamburger Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="relative w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-white transition-all duration-200 ease-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block h-0.5 bg-white transition-all duration-200 ease-out ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 bg-white transition-all duration-200 ease-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Call 24/7 Text Link (Desktop) */}
            <a 
              href="tel:+15044901624"
              className="text-[15px] font-semibold text-white/90 hover:text-white transition-colors whitespace-nowrap"
              aria-label="Call 24/7 at (504) 490-1624"
              data-cta="header-call-24-7"
            >
              Call 24/7 • (504) 490-1624
            </a>
            
            <CTA href="/book-inspection" ariaLabel="Book an Inspection">
              Book Inspection
            </CTA>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-x-0 top-[70px] bottom-0 bg-card border-t border-subtle shadow-lg lg:hidden z-40"
          style={{ 
            animation: 'slideDown 250ms ease-out',
            paddingBottom: 'env(safe-area-inset-bottom)'
          }}
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-end p-4 border-b border-black/10">
              <button
                onClick={handleMobileMenuToggle}
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-black/5 transition-colors"
                aria-label="Close menu"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <span className="block w-4 h-0.5 bg-black rotate-45"></span>
                  <span className="block w-4 h-0.5 bg-black -rotate-45 -ml-4"></span>
                </div>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => handleMobileAccordionToggle('services')}
                  className="w-full flex items-center justify-between py-4 text-[16px] font-semibold text-[var(--sin-neutral-700)] hover:text-link transition-colors"
                  aria-expanded={openMobileAccordion === 'services'}
                  aria-controls="services-mobile-panel"
                >
                  Services
                  <span className={`text-[12px] transition-transform duration-200 ${
                    openMobileAccordion === 'services' ? 'rotate-180' : ''
                  }`}>▾</span>
                </button>
                {openMobileAccordion === 'services' && (
                  <div id="services-mobile-panel" className="pl-4 space-y-2 pb-2">
                    <Link href="/services/mold-remediation" className="block text-[14px] font-medium text-[var(--sin-neutral-500)] hover:text-link py-2 transition-colors">
                      Mold Remediation
                    </Link>
                    <Link href="/services/water-damage-restoration" className="block text-[14px] font-medium text-[var(--sin-neutral-500)] hover:text-link py-2 transition-colors">
                      Water Damage Restoration
                    </Link>
                    <Link href="/services/crawlspace-moisture-control" className="block text-[14px] font-medium text-[var(--sin-neutral-500)] hover:text-link py-2 transition-colors">
                      Crawlspace & Moisture Control
                    </Link>
                  </div>
                )}
              </div>

              {/* About Link */}
              <Link 
                href="/about" 
                className="block py-4 text-[16px] font-semibold text-[var(--sin-neutral-700)] hover:text-link transition-colors"
              >
                About
              </Link>


              {/* Learning Accordion */}
              <div>
                <button
                  onClick={() => handleMobileAccordionToggle('learning')}
                  className="w-full flex items-center justify-between py-4 text-[16px] font-semibold text-[var(--sin-neutral-700)] hover:text-link transition-colors"
                  aria-expanded={openMobileAccordion === 'learning'}
                  aria-controls="learning-mobile-panel"
                >
                  Learning
                  <span className={`text-[12px] transition-transform duration-200 ${
                    openMobileAccordion === 'learning' ? 'rotate-180' : ''
                  }`}>▾</span>
                </button>
                {openMobileAccordion === 'learning' && (
                  <div id="learning-mobile-panel" className="pl-4 space-y-2 pb-2">
                    <Link href="/blog" className="block text-[14px] font-medium text-[var(--sin-neutral-500)] hover:text-link py-2 transition-colors">
                      Blog
                    </Link>
                    <Link href="/guides" className="block text-[14px] font-medium text-[var(--sin-neutral-500)] hover:text-link py-2 transition-colors">
                      Guides
                    </Link>
                    <Link href="/faq" className="block text-[14px] font-medium text-[var(--sin-neutral-500)] hover:text-link py-2 transition-colors">
                      FAQ
                    </Link>
                  </div>
                )}
              </div>

              {/* Service Area */}
              <Link 
                href="/service-area" 
                className="block py-4 text-[16px] font-semibold text-[var(--sin-neutral-700)] hover:text-link transition-colors"
              >
                Service Area
              </Link>

              {/* Divider */}
              <div className="border-t border-subtle my-4"></div>

              {/* Call 24/7 Link */}
              <a 
                href="tel:+15044901624"
                className="flex items-center gap-2 py-4 text-[16px] font-semibold text-[var(--sin-blue-700)] hover:text-[var(--sin-blue-600)] transition-colors"
                aria-label="Call 24/7 at (504) 490-1624"
                data-cta="mobile-menu-call-24-7"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 24/7 • (504) 490-1624
              </a>

              {/* Secondary Book Inspection Link */}
              <Link 
                href="/book-inspection" 
                className="block py-4 text-[16px] font-semibold text-[var(--sin-neutral-700)] hover:text-link transition-colors"
              >
                Book Inspection
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 lg:hidden z-30"
          onClick={handleMobileMenuToggle}
          style={{ top: '70px' }}
        ></div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          #mobile-menu {
            animation: none !important;
          }
        }
      `}</style>
    </nav>
  );
}