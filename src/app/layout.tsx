import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sinclair Restoration — Mold Remediation & Testing",
  description: "Complete mold remediation that lasts. Inspection, testing, removal, and moisture control—done right the first time.",
  openGraph: {
    title: "Sinclair Restoration",
    description: "Complete mold remediation that lasts.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
