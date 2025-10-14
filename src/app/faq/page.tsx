import Link from 'next/link';
import type { Metadata } from 'next';
import RequestCallbackPanel from '@/components/RequestCallbackPanel';

export const metadata: Metadata = {
  title: 'FAQ — Sinclair Restoration, New Orleans',
  description: 'Frequently asked questions about mold remediation, same-day service, clearance testing, and warranties.',
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-site">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 pt-10 pb-24 lg:pt-16 lg:pb-32">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 xl:gap-16 lg:gap-y-16">
          {/* LEFT COPY */}
          <section className="max-w-[600px]">
            <h1 className="text-[clamp(38px,4vw,44px)] font-bold tracking-[-0.01em] leading-[1.1] text-heading">FAQ</h1>
            
            <div className="mt-8 space-y-8">
              {/* Q&A 1 */}
              <div>
                <h3 className="text-[18px] font-semibold text-heading mb-2">Same-day service?</h3>
                <p className="text-[17px] leading-[1.5] text-[var(--sin-neutral-500)]">
                  Yes—especially in core zones. During storms, we&apos;ll give a realistic ETA.
                </p>
              </div>

              {/* Q&A 2 */}
              <div>
                <h3 className="text-[18px] font-semibold text-heading mb-2">Who does clearance testing?</h3>
                <p className="text-[17px] leading-[1.5] text-[var(--sin-neutral-500)]">
                  An independent third-party assessor (never us) when applicable.
                </p>
              </div>

              {/* Q&A 3 */}
              <div>
                <h3 className="text-[18px] font-semibold text-heading mb-2">Can you remediate without removing materials?</h3>
                <p className="text-[17px] leading-[1.5] text-[var(--sin-neutral-500)]">
                  Sometimes for minor surface growth on non-porous materials. Porous/water-damaged materials usually require removal.
                </p>
              </div>

              {/* Q&A 4 */}
              <div>
                <h3 className="text-[18px] font-semibold text-heading mb-2">How long does it take?</h3>
                <p className="text-[17px] leading-[1.5] text-[var(--sin-neutral-500)]">
                  Small: 1–2 days. Larger/complex: 3–5+ days depending on scope.
                </p>
              </div>

              {/* Q&A 5 */}
              <div>
                <h3 className="text-[18px] font-semibold text-heading mb-2">How do I prep?</h3>
                <p className="text-[17px] leading-[1.5] text-[var(--sin-neutral-500)]">
                  Clear the work area, secure pets, plan for temporary containment.
                </p>
              </div>

              {/* Q&A 6 */}
              <div>
                <h3 className="text-[18px] font-semibold text-heading mb-2">Do you clean HVAC?</h3>
                <p className="text-[17px] leading-[1.5] text-[var(--sin-neutral-500)]">
                  No. We don&apos;t provide HVAC services.
                </p>
              </div>

              {/* Q&A 7 */}
              <div>
                <h3 className="text-[18px] font-semibold text-heading mb-2">What&apos;s your warranty?</h3>
                <p className="text-[17px] leading-[1.5] text-[var(--sin-neutral-500)]">
                  6-month workmanship warranty (labor). New leaks, high humidity (&gt;60% RH), events after our work, items not in scope, persistent odors from unresolved sources, or hidden structural issues aren&apos;t covered.
                </p>
              </div>
            </div>
          </section>

          {/* RIGHT PANEL */}
          <aside className="lg:sticky lg:top-8">
            <RequestCallbackPanel />
          </aside>
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
