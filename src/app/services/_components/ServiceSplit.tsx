import React from 'react';
import RequestCallbackPanel from '@/components/RequestCallbackPanel';

interface ServiceSplitProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function ServiceSplit({ eyebrow, title, description, children }: ServiceSplitProps) {
  return (
    <main className="min-h-screen bg-white">
      <section 
        className="py-16 lg:py-24"
        style={{ backgroundColor: "#F5F0E8" }}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-10 xl:gap-16 lg:gap-y-16">
            
            {/* LEFT CONTENT */}
            <div className="max-w-[760px]">
              <p className="text-sm tracking-[0.08em] text-black/70 uppercase">{eyebrow}</p>
              <h1 className="mt-2 text-[clamp(38px,4vw,44px)] font-bold tracking-[-0.01em] leading-[1.1] text-[#111]">
                {title}
              </h1>
              <div className="mt-4 space-y-6">
                <p className="text-[17px] leading-[1.6] text-[#4A4A4A]">
                  {description}
                </p>
                {children}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <aside className="lg:sticky lg:top-8">
              <RequestCallbackPanel />
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
