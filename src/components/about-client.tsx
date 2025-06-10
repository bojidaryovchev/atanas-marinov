"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Shield, Users } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface StatItem {
  iconName: string;
  number: string;
  label: string;
}

interface Props {
  stats: StatItem[];
}

// Map of icon names to components
const iconMap = {
  Award,
  Clock,
  Users,
  Shield,
};

const AboutClient: React.FC<Props> = ({ stats }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Function to get the icon component based on the icon name
  const getIconComponent = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="h-8 w-8 text-orange-600" /> : null;
  };

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      }`}
    >
      <div>
        <div className="mb-8 flex items-center">
          <Image src="/images/logo.png" alt="Атанас Маринов лого" width={60} height={45} className="mr-4 opacity-80" />
          <h2 className="text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
            За <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">нас</span>
          </h2>
        </div>
        <p className="mb-6 text-lg leading-relaxed text-slate-600">
          Атанас Маринов е опитен майстор с над 10 години опит в областта на довършителните строителни работи.
          Специализираме се в качествено изпълнение на проекти от всякакъв мащаб - от малки ремонти до цялостни
          реновации.
        </p>
        <p className="mb-8 text-lg leading-relaxed text-slate-600">
          Нашият подход се основава на професионализъм, точност и внимание към детайлите. Използваме само
          висококачествени материали и съвременни техники, за да гарантираме дълготрайност и естетичен вид на всеки
          проект.
        </p>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="rounded-2xl border-2 border-slate-100 bg-white text-center transition-all duration-700 hover:border-orange-200 hover:shadow-xl"
            >
              <CardContent className="p-8">
                <div className="mx-auto mb-4 w-fit rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 p-3">
                  {getIconComponent(stat.iconName)}
                </div>
                <div className="mb-2 text-3xl font-black text-slate-900">{stat.number}</div>
                <div className="text-sm font-medium text-slate-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutClient;
