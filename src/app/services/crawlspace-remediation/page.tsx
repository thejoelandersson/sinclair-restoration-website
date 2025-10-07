import { Metadata } from 'next';
import ServiceSplit from '../_components/ServiceSplit';

export const metadata: Metadata = {
  title: 'Crawlspace mold remediation & moisture control — Sinclair Restoration, New Orleans',
  description: 'Clean, treat, and dry crawlspaces while addressing ongoing moisture to keep living spaces above clean and dry.',
  openGraph: {
    title: 'Crawlspace mold remediation & moisture control — Sinclair Restoration, New Orleans',
    description: 'Clean, treat, and dry crawlspaces while addressing ongoing moisture to keep living spaces above clean and dry.',
    locale: 'en_US',
  },
};

export default function CrawlspaceRemediationPage() {
  return (
    <ServiceSplit
      eyebrow="CRAWLSPACES & FOUNDATIONS"
      title="Crawlspace mold remediation & moisture control"
      description="High humidity and poor ventilation let mold take hold under the home. We clean, treat, and dry the crawlspace, then address ongoing moisture so the living space above stays clean and dry."
    />
  );
}
