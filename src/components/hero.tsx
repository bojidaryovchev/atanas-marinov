import Image from "next/image";
import type React from "react";
import HeroClient from "./hero-client";

const Hero: React.FC = () => {
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

      {/* Logo in top left */}
      <div className="absolute top-8 left-8 z-20">
        <Image
          src="/images/logo.png"
          alt="Атанас Маринов - Довършителни ремонти"
          width={80}
          height={60}
          className="opacity-80 transition-opacity duration-300 hover:opacity-100"
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl px-6 text-center">
        <HeroClient />
      </div>
    </section>
  );
};

export default Hero;
