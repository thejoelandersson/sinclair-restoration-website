import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Sinclair Restoration, New Orleans',
  description: 'Terms of service for Sinclair Restoration. Learn about our service terms, payment policies, warranties, and legal agreements.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-site py-16 lg:py-24">
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <h1 className="text-[clamp(40px,6vw,72px)] font-bold tracking-[-0.02em] leading-[1.05] text-heading text-center mb-4">
          Terms of Service
        </h1>
        <p className="text-lg text-[var(--sin-neutral-500)] text-center mb-12">
          Last updated: December 2024
        </p>

        <div className="prose prose-lg max-w-none text-[var(--sin-neutral-700)] leading-relaxed">
          <p className="mb-6">
            These Terms govern all services provided by <strong>Sinclair Restoration LLC</strong> within the state of Louisiana. By engaging our services, you agree to the terms below.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Scope of Services</h2>
          <p className="mb-6">
            Sinclair Restoration provides professional mold remediation, water damage restoration, and related environmental services in accordance with applicable state and industry standards.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Estimates & Payment</h2>
          <p className="mb-4">
            We provide clear written estimates before beginning work.
          </p>
          <p className="mb-4">
            A <strong>50% deposit</strong> is required to schedule; the remaining balance is due upon completion.
          </p>
          <p className="mb-4">
            Accepted payment methods include major credit cards (processed securely by a third party), bank transfer, or check.
          </p>
          <p className="mb-6">
            Balances past due by more than 15 days may incur a <strong>1.5% monthly interest charge</strong>.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Cancellations</h2>
          <p className="mb-6">
            Cancellations with less than 24 hours&apos; notice—or unprepared sites—may result in a <strong>$149 trip fee</strong>.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Workmanship Warranty</h2>
          <p className="mb-4">
            All labor is covered under a <strong>6-month workmanship warranty</strong> from the final invoice date.
          </p>
          <p className="mb-2">
            <strong>Exclusions:</strong>
          </p>
          <p className="mb-6">
            New leaks, humidity above 60% RH, post-service events, items not included in the work scope, persistent odors from unresolved sources, and hidden or pre-existing structural issues.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Standards & Clearance Testing</h2>
          <p className="mb-4">
            All containment, removal, and cleaning are performed according to applicable state and industry standards.
          </p>
          <p className="mb-4">
            When clearance testing is required, it is conducted by an independent third-party assessor.
          </p>
          <p className="mb-6">
            If an area fails clearance, Sinclair Restoration will re-perform the failed scope items at no additional labor cost, provided the underlying moisture issue has been corrected.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Documentation & Photos</h2>
          <p className="mb-4">
            We document projects with photos and notes for reporting and quality assurance.
          </p>
          <p className="mb-6">
            Use of these materials for marketing (website, social media, etc.) requires your express opt-in consent.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Communications & E-Signatures</h2>
          <p className="mb-4">
            You consent to receive SMS or email updates for scheduling, quotes, and invoices.
          </p>
          <p className="mb-4">
            You may reply &quot;STOP&quot; to opt out of non-essential texts at any time.
          </p>
          <p className="mb-6">
            Electronic signatures are valid and legally binding for approvals and contracts.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Limitation of Liability & Force Majeure</h2>
          <p className="mb-4">
            Our liability is limited to the amount you paid for the specific service in question.
          </p>
          <p className="mb-4">
            Sinclair Restoration is not responsible for indirect, special, or consequential damages.
          </p>
          <p className="mb-6">
            We are not liable for delays or interruptions caused by circumstances beyond our control, including but not limited to severe weather, utility outages, or supply disruptions.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Website Terms</h2>
          <p className="mb-4">
            All website content is owned or licensed by Sinclair Restoration.
          </p>
          <p className="mb-4">
            Reproduction or distribution without permission is prohibited.
          </p>
          <p className="mb-4">
            We may link to third-party sites for reference; we are not responsible for their content or privacy practices.
          </p>
          <p className="mb-6">
            Website information is provided &quot;as is&quot; without warranties of any kind.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Governing Law & Venue</h2>
          <p className="mb-4">
            These Terms are governed by the laws of the State of Louisiana.
          </p>
          <p className="mb-6">
            The exclusive venue for any dispute shall be <strong>Orleans Parish, Louisiana</strong>.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Changes to These Terms</h2>
          <p className="mb-6">
            We may update these Terms periodically. Continued use of our website or services after updates constitutes acceptance of the revised Terms.
          </p>

          <hr className="border-subtle my-8" />

          <h2 className="text-[24px] font-semibold text-heading mb-4">Contact</h2>
          <p className="mb-6">
            For questions about these Terms, contact us at:
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
