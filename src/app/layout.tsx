import PreloadImages from "@/components/preload-images";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import type { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Атанас Маринов - Довършителни ремонти",
  description: `Довършителни ремонти, гипсов картон, окачени тавани, шпакловки, латекс и много други услуги`,
  keywords: "Довършителни ремонти, гипсов картон, окачени тавани, шпакловки, латекс, други",
  authors: [{ name: "Атанас Маринов" }],
  openGraph: {
    title: "Атанас Маринов - Довършителни ремонти",
    description: `Довършителни ремонти, гипсов картон, окачени тавани, шпакловки, латекс и много други услуги`,
    type: "website",
  },
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
