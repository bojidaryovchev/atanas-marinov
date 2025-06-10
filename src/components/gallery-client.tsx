"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useEffect, useState } from "react";

interface Props {
  images: string[];
}

const GalleryClient: React.FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openModal = (index: number): void => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const nextModalImage = (): void => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevModalImage = (): void => {
    setModalImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle keyboard navigation in modal
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent): void => {
      if (!isModalOpen) return;

      if (e.key === "ArrowLeft") prevModalImage();
      if (e.key === "ArrowRight") nextModalImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isModalOpen]);

  return (
    <>
      {/* Main Carousel */}
      <div className="relative mx-auto mb-12 max-w-4xl">
        <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl md:h-[500px]">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Проект ${currentIndex + 1}`}
            fill
            className="object-cover transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
          />
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-4 -translate-y-1/2 transform bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-4 -translate-y-1/2 transform bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="mt-6 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "scale-125 bg-orange-600" : "bg-slate-400 hover:bg-slate-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square transform cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => openModal(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Проект ${index + 1}`}
              fill
              className="object-cover transition-all duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-h-full max-w-4xl">
            <Image
              src={images[modalImageIndex] || "/placeholder.svg"}
              alt={`Проект ${modalImageIndex + 1}`}
              width={1200}
              height={800}
              className="max-h-[80vh] max-w-full rounded-lg object-contain"
            />

            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation in modal */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-4 -translate-y-1/2 transform bg-black/50 text-white hover:bg-black/70"
              onClick={prevModalImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-4 -translate-y-1/2 transform bg-black/50 text-white hover:bg-black/70"
              onClick={nextModalImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Modal counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded-full bg-black/70 px-4 py-2 text-white">
              {modalImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryClient;
