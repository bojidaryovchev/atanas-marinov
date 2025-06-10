"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Modern animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-orange-500/5 to-amber-500/5 blur-3xl"></div>
        <div className="absolute right-20 bottom-20 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-3xl delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 h-64 w-64 animate-pulse rounded-full bg-gradient-to-r from-violet-500/3 to-purple-500/3 blur-2xl delay-500"></div>
      </div>

      {/* Modern grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 container mx-auto max-w-5xl px-6 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
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
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Свържете се с нас
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-lg border border-white/30 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:text-white hover:shadow-lg"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            >
              Вижте нашата работа
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
