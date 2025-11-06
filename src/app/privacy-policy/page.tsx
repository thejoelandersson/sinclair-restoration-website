import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Sinclair Restoration, New Orleans',
  description: 'Privacy policy for Sinclair Restoration. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-site py-16 lg:py-24">
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <h1 className="text-[clamp(40px,6vw,72px)] font-bold tracking-[-0.02em] leading-[1.05] text-heading text-center mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-[var(--sin-neutral-500)] text-center mb-12">
          Last updated: December 2024
        </p>

        <div className="prose prose-lg max-w-none text-[var(--sin-neutral-700)] leading-relaxed">
          <p className="mb-6">
            At Sinclair Restoration, we respect your privacy and are committed to protecting your personal information. This policy explains what we collect, how we use it, and the measures we take to keep it secure.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Information We Collect</h2>
          <p className="mb-6">
            We only collect the details necessary to schedule and complete your project. This may include your name, phone number, email, service address or ZIP code, messages you send us, and basic site usage data such as analytics. Payment details are handled securely by trusted third-party processors—we do not store full card numbers.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To schedule appointments and provide quotes</li>
            <li>To communicate about your project and send invoices or receipts</li>
            <li>To improve our website and customer experience</li>
          </ul>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Data Retention</h2>
          <p className="mb-6">
            We retain your information for up to three (3) years from your last interaction, unless a longer period is required by law.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Information Sharing</h2>
          <p className="mb-6">
            We share limited data only with trusted service partners who help us operate—such as scheduling tools, payment processors, storage providers, analytics platforms, and, when necessary, independent assessors or subcontractors.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Cookies & Analytics</h2>
          <p className="mb-6">
            Our website uses basic analytics tools and cookies to understand usage patterns. You can adjust cookie preferences through your browser settings.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Children&apos;s Privacy</h2>
          <p className="mb-6">
            Our services are intended for adults and property owners. We do not knowingly collect personal data from children under the age of 13.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Security</h2>
          <p className="mb-6">
            We take reasonable precautions to protect your data. However, no system is entirely immune from risk, and we cannot guarantee absolute security.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Third-Party Links</h2>
          <p className="mb-6">
            Our site may link to external websites. Their privacy policies apply to your interactions on those sites.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Policy Updates</h2>
          <p className="mb-6">
            If this policy changes, we will update the &quot;Last updated&quot; date above to reflect the revision.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Contact</h2>
          <p className="mb-6">
            For any privacy questions or data requests, contact us at:
          </p>
          <div className="space-y-3 mb-6">
            <p>
              <strong>
                <a href="mailto:justin@sinclairrestoration.com" className="text-link hover:underline">
                  justin@sinclairrestoration.com
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a href="tel:+15044901624" className="text-link hover:underline">
                  (504) 490-1624
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://maps.google.com/?q=4344+Earhart+Blvd+C,+New+Orleans,+LA+70125" target="_blank" rel="noopener noreferrer" className="text-link hover:underline">
                  4344 Earhart Blvd C, New Orleans, LA 70125
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
