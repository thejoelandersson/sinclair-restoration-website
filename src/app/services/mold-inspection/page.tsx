import { Metadata } from 'next';
import ServiceSplit from '../_components/ServiceSplit';

export const metadata: Metadata = {
  title: 'Professional mold inspection & testing — Sinclair Restoration, New Orleans',
  description: 'Professional mold inspection and independent lab testing to identify what\'s present, how serious it is, and what needs to happen next.',
  openGraph: {
    title: 'Professional mold inspection & testing — Sinclair Restoration, New Orleans',
    description: 'Professional mold inspection and independent lab testing to identify what\'s present, how serious it is, and what needs to happen next.',
    locale: 'en_US',
  },
};

export default function MoldInspectionPage() {
  return (
    <ServiceSplit
      eyebrow="SERVING GREATER NEW ORLEANS"
      title="Professional mold inspection & testing"
      description="If you're noticing a musty odor, spots on walls, or you're sensitive to indoor air, the first step is data—not demolition. Our inspections and independent lab testing give a clear picture of what's present, how serious it is, and what needs to happen next."
    />
  );
}
