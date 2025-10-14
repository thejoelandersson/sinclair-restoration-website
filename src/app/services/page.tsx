import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Sinclair Restoration, New Orleans',
  description: 'Mold remediation, water damage restoration, and crawlspace moisture control. Same-day service in core zones.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-site py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h1 className="text-[clamp(36px,5vw,56px)] font-bold tracking-[-0.02em] leading-[1.1] text-heading mb-4">
            Services
          </h1>
          <p className="text-xl text-[var(--sin-neutral-500)]">
            Get help fast—same-day in core zones.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8 mb-16">
          {/* Mold Remediation */}
          <div className="bg-card border border-[var(--sin-border)] rounded-2xl p-6 lg:p-8 hover:shadow-md transition-shadow">
            <Link href="/services/mold-remediation" className="block group">
              <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-3 group-hover:text-[var(--sin-blue-700)] transition-colors">
                Mold Remediation
              </h2>
              <p className="text-[17px] text-[var(--sin-neutral-700)] leading-relaxed">
                Source-first. Proper containment. HEPA cleaning. Independent clearance when needed.
              </p>
            </Link>
          </div>

          {/* Water Damage Restoration */}
          <div className="bg-card border border-[var(--sin-border)] rounded-2xl p-6 lg:p-8 hover:shadow-md transition-shadow">
            <Link href="/services/water-damage-restoration" className="block group">
              <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-3 group-hover:text-[var(--sin-blue-700)] transition-colors">
                Water Damage Restoration
              </h2>
              <p className="text-[17px] text-[var(--sin-neutral-700)] leading-relaxed">
                Extraction, dry-out, moisture logs, demo if needed.
              </p>
            </Link>
          </div>

          {/* Crawlspace & Moisture Control */}
          <div className="bg-card border border-[var(--sin-border)] rounded-2xl p-6 lg:p-8 hover:shadow-md transition-shadow">
            <Link href="/services/crawlspace-moisture-control" className="block group">
              <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-3 group-hover:text-[var(--sin-blue-700)] transition-colors">
                Crawlspace & Moisture Control
              </h2>
              <p className="text-[17px] text-[var(--sin-neutral-700)] leading-relaxed">
                Moisture assessment, vapor barrier, targeted remediation as indicated.
              </p>
            </Link>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            Book Same-Day Inspection
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}

