import Link from 'next/link';
import BadgeRow from './BadgeRow';

export default function Footer() {
  return (
    <footer className="bg-[var(--sin-blue-900)] py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Logo */}
          <div className="lg:col-span-1">
            <Link href="/" className="block">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">Sinclair Restoration</h3>
                <p className="text-sm text-white/70">Complete Mold Remediation</p>
              </div>
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/mold-inspection" className="text-white/90 hover:text-white transition-colors">
                  Mold inspection & testing
                </Link>
              </li>
              <li>
                <Link href="/services/whole-home-remediation" className="text-white/90 hover:text-white transition-colors">
                  Whole home mold remediation
                </Link>
              </li>
              <li>
                <Link href="/services/hvac-mold-prevention" className="text-white/90 hover:text-white transition-colors">
                  HVAC mold prevention
                </Link>
              </li>
              <li>
                <Link href="/services/water-damage-restoration" className="text-white/90 hover:text-white transition-colors">
                  Water damage cleanup
                </Link>
              </li>
              <li>
                <Link href="/services/crawlspace-remediation" className="text-white/90 hover:text-white transition-colors">
                  Crawlspace mold treatment
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Additional info</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/90 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/service-area" className="text-white/90 hover:text-white transition-colors">
                  Service area
                </Link>
              </li>
              <li>
                <Link href="/learning" className="text-white/90 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/90 hover:text-white transition-colors">
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/90 hover:text-white transition-colors">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@sinclairrestoration.com" className="text-white/90 hover:text-white transition-colors">
                  hello@sinclairrestoration.com
                </a>
              </li>
              <li>
                <span className="text-white/90">
                  Greater New Orleans Area
                </span>
              </li>
              <li>
                <a href="tel:5044901624" className="text-white/90 hover:text-white transition-colors">
                  (504) 490-1624
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Brand Promise & Badge Row */}
        <div className="mt-12 pt-8 border-t border-white/10">
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
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Sinclair Restoration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}