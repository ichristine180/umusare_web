import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

// METADATA
export const metadata: Metadata = {
  title: "Umusare - Motorbike Deliveries, Safe Rides & Moving Trucks",
  description:
    "Umusare offers fast motorbike deliveries, safe ride services with trusted drivers, and reliable moving trucks for your transport needs.",
  openGraph: {
    title: "Umusare - Motorbike Deliveries, Safe Rides & Moving Trucks",
    description:
      "From small package deliveries by motorbike, to safe rides home with a sober driver, to reliable moving trucks — Umusare has you covered.",
    url: "https://www.umusar.com",
    siteName: "Umusare",
    images: [
      {
        url: "https://www.umusar.com/UMUSARE.png", 
        width: 1200,
        height: 630,
        alt: "Umusare - Motorbike Deliveries, Safe Rides & Moving Trucks",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umusare - Motorbike Deliveries, Safe Rides & Moving Trucks",
    description:
      "Need a delivery, a safe ride home, or a moving truck? Umusare makes it easy, fast, and secure.",
    images: ["https://www.umusar.com/UMUSARE.png"], 
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
       <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Umusare",
      url: "https://www.umusar.com",
      description:
        "Umusare offers motorbike deliveries, safe ride services with trusted drivers, and reliable moving trucks for households and businesses.",
      publisher: {
        "@type": "Organization",
        name: "Umusare",
        url: "https://www.umusar.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.umusar.com/logo.png", 
        },
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.umusar.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  }}
/>
      </head>
      <body suppressHydrationWarning={true}>
        <LanguageProvider>
          {children}
        </LanguageProvider>

        {/* Google Analytics via Script Component */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HFVYEF0PS4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HFVYEF0PS4');
          `}
        </Script> */}
      </body>
    </html>
  );
}