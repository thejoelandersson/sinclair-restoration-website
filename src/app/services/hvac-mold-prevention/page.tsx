import { Metadata } from 'next';
import ServiceSplit from '../_components/ServiceSplit';

export const metadata: Metadata = {
  title: 'HVAC mold prevention & duct sanitation — Sinclair Restoration, New Orleans',
  description: 'Sanitize ducts and returns, change filters correctly, and set humidity targets so your air stays fresh without harsh fragrances.',
  openGraph: {
    title: 'HVAC mold prevention & duct sanitation — Sinclair Restoration, New Orleans',
    description: 'Sanitize ducts and returns, change filters correctly, and set humidity targets so your air stays fresh without harsh fragrances.',
    locale: 'en_US',
  },
};

export default function HVACMoldPreventionPage() {
  return (
    <ServiceSplit
      eyebrow="AIR & VENTILATION"
      title="HVAC mold prevention & duct sanitation"
      description="Dust, condensation, and slow leaks can seed mold inside the system. We sanitize ducts and returns, change filters correctly, and set humidity targets so your air stays fresh—without harsh fragrances."
    />
  );
}
