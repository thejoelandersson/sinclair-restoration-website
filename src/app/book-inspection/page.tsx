import RequestCallbackPanel from '@/components/RequestCallbackPanel';

export default function BookInspection() {
  return (
    <main className="min-h-screen bg-site">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 pt-10 pb-24 lg:pt-16 lg:pb-32">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 xl:gap-16 lg:gap-y-16">
        {/* LEFT COPY */}
        <section className="max-w-[600px]">
          <p className="text-sm tracking-[0.08em] text-[var(--sin-neutral-500)]">SERVING GREATER NEW ORLEANS</p>
          <h1 className="mt-2 text-[clamp(38px,4vw,44px)] font-bold tracking-[-0.01em] leading-[1.1] text-heading">Book Your Mold or Water Damage Inspection</h1>
          <p className="mt-4 text-[17px] leading-[1.5] text-[var(--sin-neutral-500)]">
            Fast, professional in-person inspections—same-day in core zones.
          </p>
          <div className="mt-6 space-y-6 text-[17px] leading-[1.5] text-[var(--sin-neutral-500)]">
            <p>Our licensed technicians provide detailed on-site inspections to identify moisture sources, visible mold, and hidden damage. You&apos;ll receive a clear assessment, honest recommendations, and a written estimate before any work begins.</p>
            <p>If you choose to move forward with remediation, your inspection fee is credited toward the total project cost.</p>
          </div>
        </section>

        {/* RIGHT PANEL */}
        <aside className="lg:sticky lg:top-8">
          <RequestCallbackPanel />
        </aside>
        </div>
      </div>

    </main>
  );
}