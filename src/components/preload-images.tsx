"use client";

import Head from "next/head";
import type React from "react";

const images: string[] = Array.from({ length: 5 }, (_, i) => `/images/${i}.jpg`);

const PreloadImages: React.FC = () => {
  return (
    <Head>
      {images.map((image) => (
        <link key={image} rel="preload" as="image" href={`/images/${image}`} type="image/jpeg" />
      ))}
    </Head>
  );
};

export default PreloadImages;
