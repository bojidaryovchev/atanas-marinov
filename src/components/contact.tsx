import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type React from "react";
import ContactForm from "./contact-form";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Свържете се с нас</h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-300">
            Готови сме да обсъдим вашия проект и да ви предложим най-доброто решение
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-white">Контактна информация</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 rounded-lg bg-orange-600 p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Телефон</h4>
                    <p className="text-slate-300">+359 89 294 1814</p>
                    <p className="text-sm text-slate-400">Обадете се за безплатна консултация</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0 rounded-lg bg-orange-600 p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Имейл</h4>
                    <p className="text-slate-300">atanas.marinov@example.com</p>
                    <p className="text-sm text-slate-400">Отговаряме в рамките на 24 часа</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0 rounded-lg bg-orange-600 p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Обслужваме</h4>
                    <p className="text-slate-300">Пловдив и околността</p>
                    <p className="text-sm text-slate-400">Безплатен оглед на обекта</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0 rounded-lg bg-orange-600 p-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Работно време</h4>
                    <p className="text-slate-300">Понеделник - Петък: 8:00 - 18:00</p>
                    <p className="text-slate-300">Събота: 9:00 - 15:00</p>
                    <p className="text-sm text-slate-400">Неделя: По договаряне</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-slate-700 bg-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Безплатна оценка</CardTitle>
                <CardDescription className="text-slate-300">
                  Предлагаме безплатен оглед и оценка на вашия проект
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <div className="mr-3 h-2 w-2 shrink-0 rounded-full bg-orange-500"></div>
                    Безплатен оглед на обекта
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-2 w-2 shrink-0 rounded-full bg-orange-500"></div>
                    Детайлна оферта с цени
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-2 w-2 shrink-0 rounded-full bg-orange-500"></div>
                    Консултация за материали
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-2 w-2 shrink-0 rounded-full bg-orange-500"></div>
                    Планиране на сроковете
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
