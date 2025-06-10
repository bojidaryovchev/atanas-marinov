import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { PropsWithChildren } from "react";
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
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
