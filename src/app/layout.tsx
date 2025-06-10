import PreloadImages from "@/components/preload-images";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import type { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Атанас Маринов - Довършителни ремонти | Пловдив",
  description:
    "Професионални довършителни ремонти, гипсов картон, окачени тавани, шпакловки и боядисване в Пловдив. Над 10 години опит. Безплатна оценка.",
  keywords:
    "довършителни ремонти, гипсов картон, окачени тавани, шпакловки, боядисване, Пловдив, строителство, ремонти",
  authors: [{ name: "Атанас Маринов" }],
  creator: "Атанас Маринов",
  publisher: "Атанас Маринов",
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
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://atanasmarinov-eood.com",
    title: "Атанас Маринов - Довършителни ремонти | Пловдив",
    description:
      "Професионални довършителни ремонти, гипсов картон, окачени тавани, шпакловки и боядисване в Пловдив. Над 10 години опит.",
    siteName: "Атанас Маринов",
    images: [
      {
        url: "https://atanasmarinov-eood.com/images/logo.png",
        width: 1024,
        height: 1024,
        alt: "Атанас Маринов - Довършителни ремонти",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Атанас Маринов - Довършителни ремонти | Пловдив",
    description: "Професионални довършителни ремонти в Пловдив. Над 10 години опит.",
    images: ["https://atanasmarinov-eood.com/images/logo.png"],
  },
  alternates: {
    canonical: "https://atanasmarinov-eood.com",
  },
  verification: {
    google: "0OhZpQnPCOuHK5KDSSMHIhCauph0csDFumDRheV7DCs",
  },
  category: "construction",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <PreloadImages />
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1e293b",
              color: "#fff",
              borderRadius: "12px",
              padding: "16px",
              fontSize: "16px",
              fontWeight: "500",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
              style: {
                border: "2px solid #10b981",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
              style: {
                border: "2px solid #ef4444",
              },
            },
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
