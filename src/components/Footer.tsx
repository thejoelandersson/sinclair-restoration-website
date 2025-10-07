import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Logo */}
          <div className="lg:col-span-1">
            <Link href="/" className="block">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-1">Sinclair Restoration</h3>
                <p className="text-sm text-black/70">Complete Mold Remediation</p>
              </div>
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/mold-inspection" className="text-black/80 hover:text-black transition-colors">
                  Mold inspection & testing
                </Link>
              </li>
              <li>
                <Link href="/services/whole-home-remediation" className="text-black/80 hover:text-black transition-colors">
                  Whole home mold remediation
                </Link>
              </li>
              <li>
                <Link href="/services/hvac-mold-prevention" className="text-black/80 hover:text-black transition-colors">
                  HVAC mold prevention
                </Link>
              </li>
              <li>
                <Link href="/services/water-damage-restoration" className="text-black/80 hover:text-black transition-colors">
                  Water damage cleanup
                </Link>
              </li>
              <li>
                <Link href="/services/crawlspace-remediation" className="text-black/80 hover:text-black transition-colors">
                  Crawlspace mold treatment
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Info */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Additional info</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-black/80 hover:text-black transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/service-area" className="text-black/80 hover:text-black transition-colors">
                  Service area
                </Link>
              </li>
              <li>
                <Link href="/learning" className="text-black/80 hover:text-black transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-black/80 hover:text-black transition-colors">
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-black/80 hover:text-black transition-colors">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@sinclairrestoration.com" className="text-black/80 hover:text-black transition-colors">
                  hello@sinclairrestoration.com
                </a>
              </li>
              <li>
                <span className="text-black/80">
                  Greater New Orleans Area
                </span>
              </li>
              <li>
                <a href="tel:(000)000-0000" className="text-black/80 hover:text-black transition-colors">
                  (000) 000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}