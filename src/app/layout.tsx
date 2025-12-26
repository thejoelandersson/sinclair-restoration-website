import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

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
      <head>
        
  {/* Google Tag Manager */}
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WMHHVLMC');
      `,
    }}
  />
       {/* Google Tag */}
  <script async src={`https://www.googletagmanager.com/gtag/js?id=G-2BLVM2HGKM`}></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-2BLVM2HGKM');
      `,
    }}
  />
</head>


      <body className="antialiased min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
         <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-WMHHVLMC"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
