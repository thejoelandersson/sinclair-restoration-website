"use client";

import React, { useState } from "react";
import CTA from './CTA';

// Constants
const PHONE_MAIN = "(504) 490-1624";
const MAIL_TO = "justin@sinclairrestoration.com";

interface RequestCallbackPanelProps {
  title?: string;
  subtitle?: string;
}

export default function RequestCallbackPanel({ 
  title = "Contact",
  subtitle = "Call 24/7: (504) 490-1624 • Email: justin@sinclairrestoration.com"
}: RequestCallbackPanelProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    zipAddress: "",
    message: ""
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
    if (!form.zipAddress) newErrors.zipAddress = "This field is required";
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      const body = [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email || "—"}`,
        `ZIP/Address: ${form.zipAddress}`,
        `Message: ${form.message || "—"}`
      ].join("\n");
      
      const mailto = `mailto:${MAIL_TO}?subject=${encodeURIComponent("New contact request — Sinclair Restoration")}&body=${encodeURIComponent(body)}`;
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
          <p className="text-lg text-[var(--sin-neutral-700)]">Thanks—We&apos;ll call you within 1 hour.</p>
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
          Call or text our team and we can help asap.
        </p>

        <a href="tel:+15044901624"
           aria-label={`Call or text us at ${PHONE_MAIN}`}
           className="inline-block text-heading font-semibold tracking-[-0.01em] leading-[0.98] whitespace-nowrap my-6"
           style={{ fontSize: "clamp(30px, 6.5vw, 64px)" }}>
          <span className="inline-block border-b border-current pb-1">{PHONE_MAIN}</span>
        </a>

        <p className="text-[15px] text-[var(--sin-neutral-500)] mb-4">This goes to a cell phone. We pick up or respond fast</p>
        
        <a 
          href="https://maps.google.com/?q=4344+Earhart+Blvd+C,+New+Orleans,+LA+70125" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[15px] text-[var(--sin-neutral-500)] hover:text-heading transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          4344 Earhart Blvd C, New Orleans, LA 70125
        </a>
      </div>

      <hr className="border-subtle mb-6" />

      {/* CTA Band Text */}
      <h3 className="text-[18px] font-semibold text-heading text-center mb-6">
        Urgent? Call now. Or send your info—we call back within 1 hour.
      </h3>

      <form className="space-y-6" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name" className="block text-[16px] font-medium text-heading mb-3">Name*</label>
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
          <label htmlFor="phone" className="block text-[16px] font-medium text-heading mb-3">Phone*</label>
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
          <label htmlFor="zipAddress" className="block text-[16px] font-medium text-heading mb-3">ZIP/Address*</label>
          <input
            type="text"
            id="zipAddress"
            name="zipAddress"
            value={form.zipAddress}
            onChange={onChange}
            className="h-14 w-full rounded-[12px] border border-[var(--sin-border)] bg-white px-5 text-[16px] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[var(--sin-blue-600)]"
            placeholder="ZIP code or full address"
          />
          {errors.zipAddress && <p className="text-sm text-red-600 mt-2">{errors.zipAddress}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-[16px] font-medium text-heading mb-3">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={onChange}
            rows={4}
            className="min-h-[120px] w-full rounded-[12px] border border-[var(--sin-border)] bg-white px-5 py-4 text-[16px] placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[var(--sin-blue-600)] resize-none"
            placeholder="Tell us about your needs..."
          />
        </div>

        <div className="text-center mt-8">
          <button
            type="submit"
            className="btn-primary group relative inline-flex items-center gap-3 rounded-full px-6 py-3 h-12 font-medium transition-all duration-250 ease-out hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5 focus-visible:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sin-blue-600)] active:translate-y-0.5 active:shadow-sm"
          >
            <span className="transition-colors duration-200">
              Submit
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
          
          <p className="text-sm text-[var(--sin-neutral-500)] mt-4">We&apos;ll call you within 1 hour.</p>
          
          {/* Under-form Note */}
          <p className="text-sm text-[var(--sin-neutral-500)] mt-4">
            Urgent? Call now for fastest service.
          </p>
        </div>
      </form>
    </div>
  );
}
