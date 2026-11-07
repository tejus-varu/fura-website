import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/config/brand";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingInquiryCTA from "@/components/ui/FloatingInquiryCTA";
import { Playfair_Display, Inter } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: brand.seo.defaultTitle,
    template: `%s | ${brand.shortName}`,
  },
  description: brand.seo.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: brand.seo.defaultTitle,
    description: brand.seo.defaultDescription,
    url: brand.url,
    siteName: brand.seo.siteName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo/furaa-logo.png",
        width: 1200,
        height: 630,
        alt: brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.seo.defaultTitle,
    description: brand.seo.defaultDescription,
    images: ["/images/logo/furaa-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: brand.fullName,
    alternateName: brand.shortName,
    url: brand.url,
    logo: `${brand.url}${brand.logo.src}`,
    description: brand.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.contact.address,
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560002",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: brand.contact.phone,
      contactType: "admissions",
      email: brand.contact.email,
    },
    sameAs: [brand.social.instagram, brand.social.facebook].filter(Boolean),
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingInquiryCTA />
      </body>
    </html>
  );
}
