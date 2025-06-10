import type React from "react";
import AboutClient from "./about-client";

interface StatItem {
  iconName: string;
  number: string;
  label: string;
}

const stats: StatItem[] = [
  {
    iconName: "Award",
    number: "200+",
    label: "Завършени проекта",
  },
  {
    iconName: "Clock",
    number: "10+",
    label: "Години опит",
  },
  {
    iconName: "Users",
    number: "150+",
    label: "Доволни клиенти",
  },
  {
    iconName: "Shield",
    number: "100%",
    label: "Гаранция за качество",
  },
];

const About: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-slate-100 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <AboutClient stats={stats} />

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
        </div>
      </div>
    </section>
  );
};

export default About;
