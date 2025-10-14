import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Sinclair Restoration — New Orleans Mold & Water Damage Experts',
  description: 'Learn about Sinclair Restoration\'s moisture-first, ethical, and effective 5-step approach to mold remediation and water damage restoration in New Orleans.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-site py-16 lg:py-24">
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <h1 className="text-[clamp(40px,6vw,72px)] font-bold tracking-[-0.02em] leading-[1.05] text-heading text-center mb-4">
          About Sinclair Restoration
        </h1>
        <p className="text-lg text-[var(--sin-neutral-500)] text-center mb-12">
          Low friction, same-day help—done the right way.
        </p>

        <div className="prose prose-lg max-w-none text-[var(--sin-neutral-700)] leading-relaxed">
          <p className="mb-6">
            At <strong>Sinclair Restoration</strong>, we know that Louisiana&apos;s humidity, rainfall, and older housing stock make moisture control a constant challenge. Mold isn&apos;t just a surface issue—it&apos;s often a sign of deeper moisture imbalance. That&apos;s why we start every project with diagnostics, not demolition.
          </p>

          <p className="mb-6">
            Our approach is built on three principles: <strong>moisture-first</strong>, <strong>ethical</strong>, and <strong>done right</strong>. We take the time to locate the source of the problem, follow proper containment procedures, and restore your property according to industry standards. Every step is documented for clarity and transparency.
          </p>

          <p className="mb-4">
            <strong>Our 5-step process:</strong>
          </p>
          <p className="mb-6">
            Inspect → Contain → Remove/HEPA → Treat surfaces → Independent clearance testing (when applicable)
          </p>

          <p className="mb-6">
            We&apos;re <strong>licensed and insured</strong>, and we work closely with independent third-party assessors for unbiased clearance results. No scare tactics, no hidden upsells—just clear communication, detailed reports, and workmanship that lasts.
          </p>

          <p className="mb-6">
            We proudly serve <strong>Greater New Orleans and Baton Rouge</strong>, offering same-day service in core zones. Whether it&apos;s a small bathroom leak or full structural moisture damage, our goal is the same: restore your environment safely, efficiently, and to standard.
          </p>

          <p className="mb-6">
            Licensed & insured. Straight talk, clear estimates, no fluff.
          </p>
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