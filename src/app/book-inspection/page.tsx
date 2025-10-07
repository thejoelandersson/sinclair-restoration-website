"use client";

import React, { useState } from "react";
import CTA from '@/components/CTA';

// Constants
const PHONE_MAIN = "(000) 000-0000";
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
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 pt-10 pb-24 lg:pt-16 lg:pb-32">
          <div className="text-center">
            <p className="text-lg text-black">Thanks — we&apos;ll text or call soon.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 pt-10 pb-24 lg:pt-16 lg:pb-32">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 xl:gap-16 lg:gap-y-16">
        {/* LEFT COPY */}
        <section className="max-w-[600px]">
          <p className="text-sm tracking-[0.08em] text-black/70">SERVING GREATER NEW ORLEANS</p>
          <h1 className="mt-2 text-[clamp(38px,4vw,44px)] font-bold tracking-[-0.01em] leading-[1.1] text-[#111]">Book your free virtual mold inspection or test</h1>
          <div className="mt-4 space-y-6 text-[17px] leading-[1.5] text-[#4A4A4A]">
            <p>Send us a short video of the areas you&apos;re concerned about, and we&apos;ll share what we see—no site visit required.</p>
            <p>If a professional in-person inspection or lab test is needed, we apply the inspection cost toward your total project price. That means if you decide to move forward with remediation, the inspection becomes fully deductible—essentially free.</p>
          </div>
        </section>

        {/* RIGHT PANEL */}
        <aside className="lg:sticky lg:top-8">
          <div 
            className="rounded-[20px] p-6 sm:p-8 lg:p-16 antialiased"
            style={{
              backgroundColor: "#EEE7DE",
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
            }}
          >
            <div className="text-center">
              <p className="text-[clamp(28px,3vw,32px)] leading-[1.2] tracking-[-0.01em] font-bold text-black mb-6">
                Call or text our team and we can help asap.
              </p>

              <a href={`tel:${PHONE_MAIN.replace(/\D/g,"")}`}
                 aria-label={`Call or text us at ${PHONE_MAIN}`}
                 className="inline-block text-black font-semibold tracking-[-0.01em] leading-[0.98] whitespace-nowrap my-6"
                 style={{ fontSize: "clamp(30px, 6.5vw, 64px)" }}>
                <span className="inline-block border-b border-current pb-1">{PHONE_MAIN}</span>
              </a>

              <p className="text-[15px] text-black/70 mb-8">This goes to a cell phone. We pick up or respond fast</p>
            </div>

            <hr className="border-[#DAD2C9] mb-6" />

            <h2 className="text-[18px] font-medium tracking-[-0.01em] text-black text-center mb-6">Request a call back</h2>

            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block text-[16px] font-medium text-[#2C2C2C] mb-3">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="h-14 w-full rounded-[12px] border border-black/10 bg-white px-5 text-[16px] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Enter full name"
                />
                {errors.name && <p className="text-sm text-red-600 mt-2">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-[16px] font-medium text-[#2C2C2C] mb-3">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  className="h-14 w-full rounded-[12px] border border-black/10 bg-white px-5 text-[16px] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="(615) 555-5555"
                />
                {errors.phone && <p className="text-sm text-red-600 mt-2">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-[16px] font-medium text-[#2C2C2C] mb-3">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="h-14 w-full rounded-[12px] border border-black/10 bg-white px-5 text-[16px] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-[16px] font-medium text-[#2C2C2C] mb-3">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={onChange}
                  className="h-14 w-full rounded-[12px] border border-black/10 bg-white px-5 text-[16px] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="City name"
                />
                {errors.city && <p className="text-sm text-red-600 mt-2">{errors.city}</p>}
              </div>

              <div>
                <label htmlFor="problem" className="block text-[16px] font-medium text-[#2C2C2C] mb-3">What&apos;s your mold problem?</label>
                <textarea
                  id="problem"
                  name="problem"
                  value={form.problem}
                  onChange={onChange}
                  rows={4}
                  className="min-h-[120px] w-full rounded-[12px] border border-black/10 bg-white px-5 py-4 text-[16px] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
                  placeholder="Tell us about your mold problem..."
                />
                {errors.problem && <p className="text-sm text-red-600 mt-2">{errors.problem}</p>}
              </div>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="bg-black text-white rounded-full h-12 px-8 font-bold text-[16px] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Book Inspection
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