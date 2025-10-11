"use client";

import React, { useState } from "react";

// Constants
const PHONE_MAIN = "(504) 490-1624";
const MAIL_TO = "hello@sinclairrestoration.com";

interface RequestCallbackPanelProps {
  title?: string;
  subtitle?: string;
}

export default function RequestCallbackPanel({ 
  title = "Call or text our team and we can help asap.",
  subtitle = "This goes to a cell phone. We pick up or respond fast"
}: RequestCallbackPanelProps) {
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
      <div 
        className="bg-card rounded-[20px] p-6 sm:p-8 lg:p-16 antialiased border-subtle"
        style={{
          boxShadow: "0 10px 25px rgba(14, 53, 111, 0.08)"
        }}
      >
        <div className="text-center">
          <p className="text-lg text-[var(--sin-neutral-700)]">Thanks — we&apos;ll text or call soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-card rounded-[20px] p-6 sm:p-8 lg:p-16 antialiased border-subtle"
      style={{
        boxShadow: "0 10px 25px rgba(14, 53, 111, 0.08)"
      }}
    >
      <div className="text-center">
        <p className="text-[clamp(28px,3vw,32px)] leading-[1.2] tracking-[-0.01em] font-bold text-heading mb-6">
          {title}
        </p>

        <a href={`tel:${PHONE_MAIN.replace(/\D/g,"")}`}
           aria-label={`Call or text us at ${PHONE_MAIN}`}
           className="inline-block text-heading font-semibold tracking-[-0.01em] leading-[0.98] whitespace-nowrap my-6"
           style={{ fontSize: "clamp(30px, 6.5vw, 64px)" }}>
          <span className="inline-block border-b border-current pb-1">{PHONE_MAIN}</span>
        </a>

        <p className="text-[15px] text-[var(--sin-neutral-500)] mb-8">{subtitle}</p>
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
            className="btn-primary rounded-full h-12 px-8 font-bold text-[16px] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sin-blue-600)]"
          >
            Book Inspection
          </button>
        </div>
      </form>
    </div>
  );
}
