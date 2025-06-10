import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Shield, Users } from "lucide-react";
import Image from "next/image";
import type React from "react";
import AboutClient from "./about-client";

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  number: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: Award,
    number: "200+",
    label: "Завършени проекта",
  },
  {
    icon: Clock,
    number: "10+",
    label: "Години опит",
  },
  {
    icon: Users,
    number: "150+",
    label: "Доволни клиенти",
  },
  {
    icon: Shield,
    number: "100%",
    label: "Гаранция за качество",
  },
];

const About: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-slate-100 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <AboutClient>
            <div>
              <div className="mb-8 flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Атанас Маринов лого"
                  width={60}
                  height={45}
                  className="mr-4 opacity-80"
                />
                <h2 className="text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
                  За{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    нас
                  </span>
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                Атанас Маринов е опитен майстор с над 10 години опит в областта на довършителните строителни работи.
                Специализираме се в качествено изпълнение на проекти от всякакъв мащаб - от малки ремонти до цялостни
                реновации.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Нашият подход се основава на професионализъм, точност и внимание към детайлите. Използваме само
                висококачествени материали и съвременни техники, за да гарантираме дълготрайност и естетичен вид на
                всеки проект.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="rounded-2xl border-2 border-slate-100 bg-white text-center transition-all duration-700 hover:border-orange-200 hover:shadow-xl"
                  >
                    <CardContent className="p-8">
                      <div className="mx-auto mb-4 w-fit rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 p-3">
                        <stat.icon className="h-8 w-8 text-orange-600" />
                      </div>
                      <div className="mb-2 text-3xl font-black text-slate-900">{stat.number}</div>
                      <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AboutClient>

          <AboutClient>
            <div className="relative">
              <div className="absolute inset-0 rotate-3 transform rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600"></div>
              <div className="relative rounded-2xl bg-white p-8 shadow-xl">
                <h3 className="mb-4 text-2xl font-bold text-slate-800">Защо да изберете нас?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></div>
                    <span className="text-slate-700">Професионално изпълнение с внимание към детайлите</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></div>
                    <span className="text-slate-700">Използване на висококачествени материали</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></div>
                    <span className="text-slate-700">Спазване на договорените срокове</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></div>
                    <span className="text-slate-700">Конкурентни цени и прозрачност</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></div>
                    <span className="text-slate-700">Гаранция за всички извършени работи</span>
                  </li>
                </ul>
              </div>
            </div>
          </AboutClient>
        </div>
      </div>
    </section>
  );
};

export default About;
