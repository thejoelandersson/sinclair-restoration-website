import Link from 'next/link';
import type { Metadata } from 'next';
import RequestCallbackPanel from '@/components/RequestCallbackPanel';

export const metadata: Metadata = {
  title: 'Mold Remediation — Sinclair Restoration, New Orleans',
  description: 'Source-first mold remediation with proper containment, HEPA cleaning, and independent clearance when needed.',
};

export default function MoldRemediationPage() {
  return (
    <main className="min-h-screen bg-site py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="max-w-[800px]">
            <h1 className="text-[clamp(36px,5vw,56px)] font-bold tracking-[-0.02em] leading-[1.1] text-heading mb-8">
              Mold Remediation
            </h1>
            
            <div className="space-y-6">
              <p className="text-[17px] text-[var(--sin-neutral-700)] leading-relaxed">
                <strong className="text-heading">What you get:</strong> Moisture diagnostics • Containment/negative air (as needed) • Removal where required • HEPA & surface treatment • Independent clearance available
              </p>
              
              <p className="text-[17px] text-[var(--sin-neutral-700)] leading-relaxed">
                <strong className="text-heading">Typical timeline:</strong> Small 1–2 days • Larger 3–5 days
              </p>
            </div>
          </div>

          {/* Right Column - Call/Text Panel */}
          <div className="lg:sticky lg:top-24">
            <RequestCallbackPanel />
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="tel:+15044901624"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--sin-blue-700)] text-white font-medium hover:bg-[var(--sin-blue-600)] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call 24/7 • (504) 490-1624
          </a>
          <Link
            href="/book-inspection"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--sin-blue-700)] text-white font-medium hover:bg-[var(--sin-blue-600)] transition-colors"
          >
            Book Same-Day
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}

