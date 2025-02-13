import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Script from "next/script";

export const metadata = {
  title: "Study MBBS Abroad",
  description: "Explore your journey to studying MBBS abroad with the best opportunities and guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Study MBBS, MBBS abroad, International Medical Studies"
        />
        <meta name="author" content="Khadiza" />

        {/* Open Graph (OG) Metadata */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://businessmoves.com/media/0mxpj5ue/hospital.jpg"
        />
        <meta
          property="og:url"
          content="https://study-mbbs-abroad-insights.netlify.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://businessmoves.com/media/0mxpj5ue/hospital.jpg"
        />

        {/* Viewport for Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SY8E9607XM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SY8E9607XM'); // Replace with your Tracking ID
          `}
        </Script>
      </head>
      <body
        className={``}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
