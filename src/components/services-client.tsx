"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

interface Props {
  services: Service[];
}

const ServicesClient: React.FC<Props> = ({ services }) => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <Card
          key={index}
          className="group h-full overflow-hidden rounded-3xl border-2 border-slate-100 bg-white transition-all duration-700 hover:-translate-y-3 hover:border-orange-200 hover:shadow-2xl"
        >
          <CardHeader className="pt-8 pb-6 text-center">
            <div className="mx-auto mb-6 w-fit rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 p-4 transition-transform duration-300 group-hover:scale-110">
              <service.icon className="h-10 w-10 text-orange-600" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">{service.title}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="mb-6 leading-relaxed text-slate-600">{service.description}</CardDescription>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServicesClient;
