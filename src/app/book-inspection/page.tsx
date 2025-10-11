"use client";

import React, { useState } from "react";
import CTA from '@/components/CTA';

// Constants
const PHONE_MAIN = "(504) 490-1624";
const MAIL_TO = "hello@sinclairrestoration.com";

export default function BookInspection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    problem: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    
    if (!form.name) newErrors.name = "This field is required";
    if (!form.phone) newErrors.phone = "This field is required";
    if (!form.city) newErrors.city = "This field is required";
    if (!form.problem) newErrors.problem = "This field is required";
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      const body = [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email || "—"}`,
        `City: ${form.city}`,
        `Problem: ${form.problem}`
      ].join("\n");
      
      const mailto = `mailto:${MAIL_TO}?subject=${encodeURIComponent("New callback request — Sinclair Restoration")}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      setSent(true);
    }
  };

  if (sent) {
    return (
      <main className="min-h-screen bg-site">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 pt-10 pb-24 lg:pt-16 lg:pb-32">
          <div className="text-center">
            <p className="text-lg text-[var(--sin-neutral-700)]">Thanks — we&apos;ll text or call soon.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-site">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 pt-10 pb-24 lg:pt-16 lg:pb-32">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 xl:gap-16 lg:gap-y-16">
        {/* LEFT COPY */}
        <section className="max-w-[600px]">
          <p className="text-sm tracking-[0.08em] text-[var(--sin-neutral-500)]">SERVING GREATER NEW ORLEANS</p>
          <h1 className="mt-2 text-[clamp(38px,4vw,44px)] font-bold tracking-[-0.01em] leading-[1.1] text-heading">Book your free virtual mold inspection or test</h1>
          <div className="mt-4 space-y-6 text-[17px] leading-[1.5] text-[var(--sin-neutral-500)]">
            <p>Send us a short video of the areas you&apos;re concerned about, and we&apos;ll share what we see—no site visit required.</p>
            <p>If a professional in-person inspection or lab test is needed, we apply the inspection cost toward your total project price. That means if you decide to move forward with remediation, the inspection becomes fully deductible—essentially free.</p>
          </div>
        </section>

        {/* RIGHT PANEL */}
        <aside className="lg:sticky lg:top-8">
          <div 
            className="bg-card rounded-[20px] p-6 sm:p-8 lg:p-16 antialiased border-subtle"
            style={{
              boxShadow: "0 10px 25px rgba(14, 53, 111, 0.08)"
            }}
          >
            <div className="text-center">
              <p className="text-[clamp(28px,3vw,32px)] leading-[1.2] tracking-[-0.01em] font-bold text-heading mb-6">
                Call or text our team and we can help asap.
              </p>

              <a href={`tel:${PHONE_MAIN.replace(/\D/g,"")}`}
                 aria-label={`Call or text us at ${PHONE_MAIN}`}
                 className="inline-block text-heading font-semibold tracking-[-0.01em] leading-[0.98] whitespace-nowrap my-6"
                 style={{ fontSize: "clamp(30px, 6.5vw, 64px)" }}>
                <span className="inline-block border-b border-current pb-1">{PHONE_MAIN}</span>
              </a>

              <p className="text-[15px] text-[var(--sin-neutral-500)] mb-8">This goes to a cell phone. We pick up or respond fast</p>
            </div>

            <hr className="border-subtle mb-6" />

            <h2 className="text-[18px] font-medium tracking-[-0.01em] text-heading text-center mb-6">Request a call back</h2>

            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block text-[16px] font-medium text-heading mb-3">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="h-14 w-full rounded-[12px] border border-[var(--sin-border)] bg-white px-5 text-[16px] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[var(--sin-blue-600)]"
                  placeholder="Enter full name"
                />
                {errors.name && <p className="text-sm text-red-600 mt-2">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-[16px] font-medium text-heading mb-3">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  className="h-14 w-full rounded-[12px] border border-[var(--sin-border)] bg-white px-5 text-[16px] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[var(--sin-blue-600)]"
                  placeholder="(615) 555-5555"
                />
                {errors.phone && <p className="text-sm text-red-600 mt-2">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-[16px] font-medium text-heading mb-3">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="h-14 w-full rounded-[12px] border border-[var(--sin-border)] bg-white px-5 text-[16px] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[var(--sin-blue-600)]"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-[16px] font-medium text-heading mb-3">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={onChange}
                  className="h-14 w-full rounded-[12px] border border-[var(--sin-border)] bg-white px-5 text-[16px] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[var(--sin-blue-600)]"
                  placeholder="City name"
                />
                {errors.city && <p className="text-sm text-red-600 mt-2">{errors.city}</p>}
              </div>

              <div>
                <label htmlFor="problem" className="block text-[16px] font-medium text-heading mb-3">What&apos;s your mold problem?</label>
                <textarea
                  id="problem"
                  name="problem"
                  value={form.problem}
                  onChange={onChange}
                  rows={4}
                  className="min-h-[120px] w-full rounded-[12px] border border-[var(--sin-border)] bg-white px-5 py-4 text-[16px] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[var(--sin-blue-600)] resize-none"
                  placeholder="Tell us about your mold problem..."
                />
                {errors.problem && <p className="text-sm text-red-600 mt-2">{errors.problem}</p>}
              </div>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="btn-primary group relative inline-flex items-center gap-3 rounded-full px-6 py-3 h-12 font-medium transition-all duration-250 ease-out hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5 focus-visible:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sin-blue-600)] active:translate-y-0.5 active:shadow-sm"
                >
                  <span className="transition-colors duration-200">
                    Book inspection
                  </span>
                  
                  <div className="relative">
                    {/* Trail effect */}
                    <div className="absolute inset-0 rounded-full bg-white/50 blur-sm scale-0 group-hover:scale-150 group-hover:opacity-0 group-focus-visible:scale-150 group-focus-visible:opacity-0 transition-all duration-250 ease-out motion-reduce:scale-0 motion-reduce:opacity-0"></div>
                    
                    {/* Arrow badge */}
                    <span className="relative grid place-items-center h-6 w-6 rounded-full bg-white text-[var(--sin-blue-700)] text-[14px] leading-none transition-transform duration-200 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2 group-active:translate-x-1 motion-reduce:translate-x-0">
                      ↗
                    </span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </aside>
        </div>
      </div>

    </main>
  );
}