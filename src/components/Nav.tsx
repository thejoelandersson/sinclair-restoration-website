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
      <div className="w-full bg-[#F5F0E8] border-b border-[#F3EEE8]">
        <div className="mx-auto max-w-[1440px] px-4 lg:px-6 h-16 lg:h-[72px] flex items-center justify-between">
          {/* Brand Left */}
          <Link 
            href="/" 
            className="flex items-baseline gap-1 group"
          >
            <span className="text-[18px] lg:text-[20px] font-semibold tracking-[-0.01em] text-black">
              Sinclair Restoration
            </span>
            <span className="hidden lg:block text-[10px] lg:text-[11px] font-medium tracking-[0.05em] text-black/60 uppercase ml-2">
              Complete Mold Remediation
            </span>
          </Link>

          {/* Nav Links Center */}
          <div className="hidden lg:flex items-center gap-8 ml-8">
            {/* Services Dropdown */}
            <div className="relative" data-dropdown>
              <button
                onClick={() => handleDropdownToggle('services')}
                onKeyDown={(e) => handleKeyDown(e, 'services')}
                className={`flex items-center gap-1 text-[15px] font-medium tracking-[-0.01em] transition-all underline-offset-4 hover:underline ${
                  pathname === '/services' ? 'text-black underline' : 'text-black/80 hover:text-black'
                }`}
                aria-expanded={openDropdown === 'services'}
              >
                Services
                <span className={`text-[12px] transition-transform duration-200 ${
                  openDropdown === 'services' ? 'rotate-180' : ''
                }`}>▾</span>
              </button>
              
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl border border-black/10 shadow-sm p-3 min-w-[220px]">
                  <Link href="/services/mold-inspection" className="block text-[14px] font-medium text-black/80 hover:text-black py-2">
                    Mold inspection & testing
                  </Link>
                  <Link href="/services/whole-home-remediation" className="block text-[14px] font-medium text-black/80 hover:text-black py-2">
                    Whole home mold remediation
                  </Link>
                  <Link href="/services/crawlspace-remediation" className="block text-[14px] font-medium text-black/80 hover:text-black py-2">
                    Crawlspace mold remediation
                  </Link>
                  <Link href="/services/hvac-mold-prevention" className="block text-[14px] font-medium text-black/80 hover:text-black py-2">
                    HVAC mold prevention
                  </Link>
                  <Link href="/services/water-damage-restoration" className="block text-[14px] font-medium text-black/80 hover:text-black py-2">
                    Water damage cleanup & restoration
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative" data-dropdown>
              <button
                onClick={() => handleDropdownToggle('about')}
                onKeyDown={(e) => handleKeyDown(e, 'about')}
                className={`flex items-center gap-1 text-[15px] font-medium tracking-[-0.01em] transition-all underline-offset-4 hover:underline ${
                  pathname === '/about' ? 'text-black underline' : 'text-black/80 hover:text-black'
                }`}
                aria-expanded={openDropdown === 'about'}
              >
                About
                <span className={`text-[12px] transition-transform duration-200 ${
                  openDropdown === 'about' ? 'rotate-180' : ''
                }`}>▾</span>
              </button>
              
              {openDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl border border-black/10 shadow-sm p-3 min-w-[160px]">
                  <Link href="/team" className="block text-[14px] font-medium text-black/80 hover:text-black py-2">
                    Our Team
                  </Link>
                  <Link href="/process" className="block text-[14px] font-medium text-black/80 hover:text-black py-2">
                    Our Process
                  </Link>
                  <Link href="/certifications" className="block text-[14px] font-medium text-black/80 hover:text-black py-2">
                    Certifications
                  </Link>
                </div>
              )}
            </div>


            {/* Learning Dropdown */}
            <div className="relative" data-dropdown>
              <button
                onClick={() => handleDropdownToggle('learning')}
                onKeyDown={(e) => handleKeyDown(e, 'learning')}
                className={`flex items-center gap-1 text-[15px] font-medium tracking-[-0.01em] transition-all underline-offset-4 hover:underline ${
                  pathname === '/learning' ? 'text-black underline' : 'text-black/80 hover:text-black'
                }`}
                aria-expanded={openDropdown === 'learning'}
              >
                Learning
                <span className={`text-[12px] transition-transform duration-200 ${
                  openDropdown === 'learning' ? 'rotate-180' : ''
                }`}>▾</span>
              </button>
              
              {openDropdown === 'learning' && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl border border-black/10 shadow-sm p-3 min-w-[160px]">
                  <Link href="/blog" className="block text-[14px] font-medium text-black/80 hover:text-black py-2">
                    Blog
                  </Link>
                  <Link href="/guides" className="block text-[14px] font-medium text-black/80 hover:text-black py-2">
                    Guides
                  </Link>
                  <Link href="/faq" className="block text-[14px] font-medium text-black/80 hover:text-black py-2">
                    FAQ
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/service-area" 
              className={`text-[15px] font-medium tracking-[-0.01em] transition-all underline-offset-4 hover:underline ${
                pathname === '/service-area' ? 'text-black underline' : 'text-black/80 hover:text-black'
              }`}
            >
              Service Area
            </Link>
          </div>

          {/* Mobile CTA + Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <CTA href="/book-inspection" ariaLabel="Book an inspection">
              Book inspection
            </CTA>
            
            {/* Hamburger Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="relative w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-black transition-all duration-200 ease-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block h-0.5 bg-black transition-all duration-200 ease-out ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 bg-black transition-all duration-200 ease-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <CTA href="/book-inspection" ariaLabel="Book an inspection">
              Book inspection
            </CTA>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-x-0 top-[70px] bottom-0 bg-white border-t border-[#F3EEE8] shadow-lg lg:hidden z-40"
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
                  className="w-full flex items-center justify-between py-4 text-[16px] font-semibold text-black/80 hover:text-black transition-colors"
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
                    <Link href="/services/mold-inspection" className="block text-[14px] font-medium text-black/70 hover:text-black py-2 transition-colors">
                      Mold inspection & testing
                    </Link>
                    <Link href="/services/whole-home-remediation" className="block text-[14px] font-medium text-black/70 hover:text-black py-2 transition-colors">
                      Whole home mold remediation
                    </Link>
                    <Link href="/services/crawlspace-remediation" className="block text-[14px] font-medium text-black/70 hover:text-black py-2 transition-colors">
                      Crawlspace mold remediation
                    </Link>
                    <Link href="/services/hvac-mold-prevention" className="block text-[14px] font-medium text-black/70 hover:text-black py-2 transition-colors">
                      HVAC mold prevention
                    </Link>
                    <Link href="/services/water-damage-restoration" className="block text-[14px] font-medium text-black/70 hover:text-black py-2 transition-colors">
                      Water damage cleanup & restoration
                    </Link>
                  </div>
                )}
              </div>

              {/* About Accordion */}
              <div>
                <button
                  onClick={() => handleMobileAccordionToggle('about')}
                  className="w-full flex items-center justify-between py-4 text-[16px] font-semibold text-black/80 hover:text-black transition-colors"
                  aria-expanded={openMobileAccordion === 'about'}
                  aria-controls="about-mobile-panel"
                >
                  About
                  <span className={`text-[12px] transition-transform duration-200 ${
                    openMobileAccordion === 'about' ? 'rotate-180' : ''
                  }`}>▾</span>
                </button>
                {openMobileAccordion === 'about' && (
                  <div id="about-mobile-panel" className="pl-4 space-y-2 pb-2">
                    <Link href="/team" className="block text-[14px] font-medium text-black/70 hover:text-black py-2 transition-colors">
                      Our Team
                    </Link>
                    <Link href="/process" className="block text-[14px] font-medium text-black/70 hover:text-black py-2 transition-colors">
                      Our Process
                    </Link>
                    <Link href="/certifications" className="block text-[14px] font-medium text-black/70 hover:text-black py-2 transition-colors">
                      Certifications
                    </Link>
                  </div>
                )}
              </div>


              {/* Learning Accordion */}
              <div>
                <button
                  onClick={() => handleMobileAccordionToggle('learning')}
                  className="w-full flex items-center justify-between py-4 text-[16px] font-semibold text-black/80 hover:text-black transition-colors"
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
                    <Link href="/blog" className="block text-[14px] font-medium text-black/70 hover:text-black py-2 transition-colors">
                      Blog
                    </Link>
                    <Link href="/guides" className="block text-[14px] font-medium text-black/70 hover:text-black py-2 transition-colors">
                      Guides
                    </Link>
                    <Link href="/faq" className="block text-[14px] font-medium text-black/70 hover:text-black py-2 transition-colors">
                      FAQ
                    </Link>
                  </div>
                )}
              </div>

              {/* Service Area */}
              <Link 
                href="/service-area" 
                className="block py-4 text-[16px] font-semibold text-black/80 hover:text-black transition-colors"
              >
                Service Area
              </Link>

              {/* Divider */}
              <div className="border-t border-black/10 my-4"></div>

              {/* Secondary Book Inspection Link */}
              <Link 
                href="/book-inspection" 
                className="block py-4 text-[16px] font-semibold text-black/80 hover:text-black transition-colors"
              >
                Book inspection
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