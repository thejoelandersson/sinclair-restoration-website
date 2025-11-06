import Link from 'next/link';
import BadgeRow from './BadgeRow';

export default function Footer() {
  return (
    <footer className="bg-[var(--sin-blue-900)] border-t border-white/10">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Brand Promise & Badge Row */}
        <div className="mb-8 pb-8 border-b border-white/10">
          <div className="space-y-4">
            {/* Brand Promise */}
            <p className="text-lg font-medium text-white/90 text-center">
              Moisture-first. Ethical. Done right.
            </p>
            
            {/* Badge Row - adjusted for dark background */}
            <div className="flex justify-center">
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium text-white/70">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Licensed & Insured
                </span>
                <span className="hidden sm:inline text-white/50">•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Independent Clearance Testing
                </span>
                <span className="hidden sm:inline text-white/50">•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  6-Month Workmanship Warranty
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 text-center">
          <a 
            href="tel:+15044901624" 
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (504) 490-1624
          </a>
          <span className="hidden sm:inline text-white/50">•</span>
          <a 
            href="mailto:justin@sinclairrestoration.com" 
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            justin@sinclairrestoration.com
          </a>
          <span className="hidden sm:inline text-white/50">•</span>
          <a 
            href="https://maps.google.com/?q=4344+Earhart+Blvd+C,+New+Orleans,+LA+70125" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            4344 Earhart Blvd C, New Orleans, LA 70125
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/70 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link href="/services/mold-remediation" className="hover:text-white transition-colors">
            Mold Remediation
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link href="/services/water-damage-restoration" className="hover:text-white transition-colors">
            Water Damage
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link href="/services/crawlspace-moisture-control" className="hover:text-white transition-colors">
            Crawlspace
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link href="/service-area" className="hover:text-white transition-colors">
            Service Area
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link href="/faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link href="/terms-of-service" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Sinclair Restoration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}