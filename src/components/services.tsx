"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Hammer, Layers, PaintBucket, Star, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Layers,
    title: "Гипсов картон",
    description: "Монтаж на гипсокартонени конструкции, преградни стени, окачени тавани и декоративни елементи.",
    features: ["Преградни стени", "Окачени тавани", "Декоративни елементи", "Звукоизолация"],
  },
  {
    icon: PaintBucket,
    title: "Шпакловки и боядисване",
    description: "Професионални шпакловки, грундиране и боядисване с висококачествени латексови бои.",
    features: ["Фина шпакловка", "Латексови бои", "Грундиране", "Декоративни техники"],
  },
  {
    icon: Hammer,
    title: "Довършителни работи",
    description: "Пълен спектър от довършителни строителни работи за жилищни и офис сгради.",
    features: ["Подови настилки", "Плочки", "Електрически инсталации", "ВиК работи"],
  },
  {
    icon: Wrench,
    title: "Ремонти и поддръжка",
    description: "Цялостни ремонти на апартаменти, офиси и търговски обекти с гаранция за качество.",
    features: ["Цялостни ремонти", "Частични ремонти", "Поддръжка", "Спешни ремонти"],
  },
];

const Services: React.FC = () => {
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
    <section id="services" className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="mb-8 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
            Нашите{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">услуги</span>
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed font-light text-slate-600/80">
            Предлагаме пълен спектър от професионални строителни услуги с гаранция за качество и надеждност
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`group h-full overflow-hidden rounded-3xl border-2 border-slate-100 bg-white transition-all duration-700 hover:-translate-y-3 hover:border-orange-200 hover:shadow-2xl ${
                visibleCards.includes(index) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
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

        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full bg-white px-6 py-3 shadow-lg">
            <Star className="mr-2 h-5 w-5 text-yellow-500" />
            <span className="font-semibold text-slate-700">Над 10 години опит в строителството</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
