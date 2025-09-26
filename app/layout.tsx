import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import Script from "next/script";

// METADATA
export const metadata: Metadata = {
  title: "Umusare Rwanda - Motorbike Deliveries, Safe Rides & Moving Trucks",
  description:
    "Umusare is a Rwanda-based platform offering fast motorbike deliveries, safe ride services with trusted drivers, and reliable moving trucks for your transport needs.",
  openGraph: {
    title: "Umusare Rwanda - Motorbike Deliveries, Safe Rides & Moving Trucks",
    description:
      "From small package deliveries by motorbike, to safe rides home with a sober driver, to reliable moving trucks — Umusare is here for you in Rwanda.",
    url: "https://www.umusaree.com",
    siteName: "Umusare Rwanda",
    images: [
      {
        url: "https://www.umusaree.com/UMUSARE.png",
        width: 1200,
        height: 630,
        alt: "Umusare - Transport & Delivery Services in Rwanda",
      },
    ],
    type: "website",
    locale: "en_RW", // specify region
  },
  twitter: {
    card: "summary_large_image",
    title: "Umusare Rwanda - Motorbike Deliveries, Safe Rides & Moving Trucks",
    description:
      "Need a delivery, a safe ride home, or a moving truck in Rwanda? Umusare makes it easy, fast, and secure.",
    images: ["https://www.umusaree.com/UMUSARE.png"],
  },
};


// ROOT LAYOUT
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="p0peu1m38q3o0fu4aa2u669fnu2aa6"
        />
        <meta
          name="google-site-verification"
          content="ZVP3PoO1QjQdYrlRRf9m566B4Y0LauI67NgQTxMhk1U"
        />
        <link
          rel="alternate"
          href="https://www.umusaree.com/"
          hrefLang="en-rw"
        />
        <link
          rel="alternate"
          href="https://www.umusaree.com/rw/"
          hrefLang="rw-rw"
        />

        <link
          rel="alternate"
          href="https://www.umusaree.com/"
          hrefLang="x-default"
        />

        <meta name="geo.region" content="RW" />
        <meta name="geo.placename" content="Rwanda" />
        <meta name="geo.position" content="-1.9403;29.8739" />
        <meta name="ICBM" content="-1.9403, 29.8739" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Umusare Rwanda",
              url: "https://www.umusaree.com",
              description:
                "Umusare offers motorbike deliveries, safe ride services, and moving trucks in Rwanda.",
              logo: "https://www.umusaree.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+250 788 123 456",
                contactType: "customer service",
                areaServed: "RW",
                availableLanguage: ["en", "rw"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "RW",
                addressLocality: "Kigali",
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <LanguageProvider>{children}</LanguageProvider>

        {/* Google Analytics via next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-895XJDYKRR"
          strategy="afterInteractive"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-895XJDYKRR');
          `}
        </Script>
      </body>
    </html>
  );
}
