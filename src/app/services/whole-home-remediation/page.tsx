import { Metadata } from 'next';
import ServiceSplit from '../_components/ServiceSplit';

export const metadata: Metadata = {
  title: 'Whole-home mold remediation that lasts — Sinclair Restoration, New Orleans',
  description: 'Complete mold remediation with isolation, safe removal, and air/surface treatment to prevent return in New Orleans humidity.',
  openGraph: {
    title: 'Whole-home mold remediation that lasts — Sinclair Restoration, New Orleans',
    description: 'Complete mold remediation with isolation, safe removal, and air/surface treatment to prevent return in New Orleans humidity.',
    locale: 'en_US',
  },
};

export default function WholeHomeRemediationPage() {
  return (
    <ServiceSplit
      eyebrow="COMPLETE REMEDIATION"
      title="Whole-home mold remediation that lasts"
      description="We isolate the affected areas, remove contaminated materials safely, and treat both air and surfaces. From containment to moisture control, our method targets the source so the problem doesn't return in New Orleans humidity."
    />
  );
}
