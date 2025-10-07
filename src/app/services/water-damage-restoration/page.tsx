import { Metadata } from 'next';
import ServiceSplit from '../_components/ServiceSplit';

export const metadata: Metadata = {
  title: 'Water damage cleanup & restoration — Sinclair Restoration, New Orleans',
  description: 'Remove standing water, dry structural materials, and prevent secondary mold growth after leaks or storm events.',
  openGraph: {
    title: 'Water damage cleanup & restoration — Sinclair Restoration, New Orleans',
    description: 'Remove standing water, dry structural materials, and prevent secondary mold growth after leaks or storm events.',
    locale: 'en_US',
  },
};

export default function WaterDamageRestorationPage() {
  return (
    <ServiceSplit
      eyebrow="STORMS & LEAKS"
      title="Water damage cleanup & restoration"
      description="After a leak or storm event, timing matters. We remove standing water, dry structural materials, and prevent secondary mold growth—then coordinate repairs so you're back to normal quickly."
    />
  );
}
