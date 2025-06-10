import type React from "react";
import GalleryClient from "./gallery-client";

const images: string[] = Array.from({ length: 5 }, (_, i) => `/images/${i}.jpg`);

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-slate-100 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-slate-800 md:text-5xl">Нашата работа</h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Разгледайте някои от нашите най-успешни проекти и се убедете в качеството на нашата работа
          </p>
        </div>

        <GalleryClient images={images} />
      </div>
    </section>
  );
};

export default Gallery;
