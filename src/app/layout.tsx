import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sinclair Restoration — Mold Remediation in NOLA",
  description: "Complete mold remediation that lasts. Inspection, removal, and moisture control—done right the first time.",
  openGraph: {
    title: "Sinclair Restoration — Mold Remediation in NOLA",
    description: "Complete mold remediation that lasts.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sinclair Restoration",
    "description": "Complete mold remediation that lasts. Inspection, removal, and moisture control—done right the first time.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4344 Earhart Blvd C",
      "addressLocality": "New Orleans",
      "addressRegion": "LA",
      "postalCode": "70125",
      "addressCountry": "US"
    },
    "telephone": "+15044901624",
    "email": "justin@sinclairrestoration.com",
    "url": "https://www.sinclairrestoration.com",
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "New Orleans"
    }
  };

  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
