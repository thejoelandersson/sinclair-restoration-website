import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Area — Sinclair Restoration, New Orleans',
  description: 'Same-day service in core zones. Scheduling available across surrounding areas including Orleans, Jefferson, St. Tammany, and Baton Rouge Metro.',
};

export default function ServiceAreaPage() {
  return (
    <main className="min-h-screen bg-site py-16 lg:py-24">
      <div className="mx-auto max-w-[900px] px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-[clamp(36px,5vw,56px)] font-bold tracking-[-0.02em] leading-[1.1] text-heading mb-4">
            Service Area
          </h1>
          <p className="text-xl text-[var(--sin-neutral-500)]">
            Same-day in core zones. Scheduling available across surrounding areas.
          </p>
        </div>

        {/* Core Areas Section */}
        <div className="space-y-8 mb-12">
          <div>
            <h2 className="text-lg font-semibold text-heading mb-3">Orleans Parish:</h2>
            <p className="text-[17px] text-[var(--sin-neutral-700)] leading-relaxed">
              Lakeview, Mid-City, Uptown, Audubon, Carrollton, CBD/Warehouse District, Gentilly
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-heading mb-3">Jefferson Parish:</h2>
            <p className="text-[17px] text-[var(--sin-neutral-700)] leading-relaxed">
              Metairie, Harahan, River Ridge, Kenner
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-heading mb-3">St. Tammany:</h2>
            <p className="text-[17px] text-[var(--sin-neutral-700)] leading-relaxed">
              Mandeville, Covington, Madisonville
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-heading mb-3">Baton Rouge Metro:</h2>
            <p className="text-[17px] text-[var(--sin-neutral-700)] leading-relaxed">
              Baton Rouge, Prairieville, Denham Springs
            </p>
          </div>
        </div>

        {/* Note */}
        <p className="text-sm text-[var(--sin-neutral-500)] mb-12">
          During major storms, ETAs may vary.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <a 
            href="tel:+15044901624"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--sin-blue-700)] text-white font-medium hover:bg-[var(--sin-blue-600)] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call 24/7 • (504) 490-1624
          </a>
        </div>
      </div>
    </main>
  );
}
