import { Star } from "lucide-react";
import type React from "react";
import ServicesClient from "./services-client";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

// Convert component references to string identifiers
const services: ServiceItem[] = [
  {
    icon: "Layers",
    title: "Гипсов картон",
    description: "Монтаж на гипсокартонени конструкции, преградни стени, окачени тавани и декоративни елементи.",
    features: ["Преградни стени", "Окачени тавани", "Декоративни елементи", "Звукоизолация"],
  },
  {
    icon: "PaintBucket",
    title: "Шпакловки и боядисване",
    description: "Професионални шпакловки, грундиране и боядисване с висококачествени латексови бои.",
    features: ["Фина шпакловка", "Латексови бои", "Грундиране", "Декоративни техники"],
  },
  {
    icon: "Hammer",
    title: "Довършителни работи",
    description: "Пълен спектър от довършителни строителни работи за жилищни и офис сгради.",
    features: ["Подови настилки", "Плочки", "Електрически инсталации", "ВиК работи"],
  },
  {
    icon: "Wrench",
    title: "Ремонти и поддръжка",
    description: "Цялостни ремонти на апартаменти, офиси и търговски обекти с гаранция за качество.",
    features: ["Цялостни ремонти", "Частични ремонти", "Поддръжка", "Спешни ремонти"],
  },
];

const Services: React.FC = () => {
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

        <ServicesClient services={services} />

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
