import Link from 'next/link';
import type { Metadata } from 'next';
import RequestCallbackPanel from '@/components/RequestCallbackPanel';

export const metadata: Metadata = {
  title: 'Water Damage Restoration — Sinclair Restoration, New Orleans',
  description: 'Fast water extraction, structural dry-out, moisture readings, and targeted demo. Emergencies prioritized same day.',
};

export default function WaterDamageRestorationPage() {
  return (
    <main className="min-h-screen bg-site">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 pt-10 pb-24 lg:pt-16 lg:pb-32">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 xl:gap-16 lg:gap-y-16">
          {/* LEFT COPY */}
          <section className="max-w-[600px]">
            <h1 className="text-[clamp(38px,4vw,44px)] font-bold tracking-[-0.01em] leading-[1.1] text-heading">Water Damage Restoration</h1>
            <div className="mt-4 space-y-6 text-[17px] leading-[1.5] text-[var(--sin-neutral-500)]">
              <p><strong className="text-heading">What you get:</strong> Fast extraction • Structural dry-out • Moisture readings/logs • Targeted demo if needed • Clear estimate before work</p>
              <p><strong className="text-heading">Priority:</strong> Emergencies prioritized same day</p>
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
