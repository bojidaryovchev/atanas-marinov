"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import type React from "react";
import { useEffect, useState } from "react";

const HeroClient: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      {/* Logo above the main title */}
      <div className="mb-8">
        <Image
          src="/images/logo.png"
          alt="Атанас Маринов - Довършителни ремонти"
          width={120}
          height={90}
          className="mx-auto opacity-90"
        />
      </div>

      <h1 className="mb-8 text-6xl leading-tight font-black tracking-tight text-white md:text-8xl">
        <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
          Атанас Маринов
        </span>
      </h1>
      <h2 className="mb-6 text-xl font-medium tracking-wide text-slate-300/90 md:text-2xl">
        Довършителни ремонти и строителство
      </h2>
      <p className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed font-light text-slate-400/80 md:text-xl">
        Професионални услуги за довършителни ремонти, гипсов картон, окачени тавани, шпакловки и боядисване.
        <br className="hidden md:block" />
        <span className="text-orange-400/80">Качество и прецизност в всеки проект.</span>
      </p>

      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Button
          size="lg"
          className="transform rounded-lg border-0 bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:from-orange-600 hover:to-amber-600 hover:shadow-xl hover:shadow-orange-500/20"
          onClick={scrollToContact}
        >
          Свържете се с нас
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-lg border border-white/30 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:text-white hover:shadow-lg"
          onClick={scrollToGallery}
        >
          Вижте нашата работа
        </Button>
      </div>
    </div>
  );
};

export default HeroClient;
