"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import type React from "react";
import { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

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
                  <div className="rounded-lg bg-orange-600 p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Телефон</h4>
                    <p className="text-slate-300">+359 XXX XXX XXX</p>
                    <p className="text-sm text-slate-400">Обадете се за безплатна консултация</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="rounded-lg bg-orange-600 p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Имейл</h4>
                    <p className="text-slate-300">atanas.marinov@example.com</p>
                    <p className="text-sm text-slate-400">Отговаряме в рамките на 24 часа</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="rounded-lg bg-orange-600 p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Обслужваме</h4>
                    <p className="text-slate-300">Пловдив и околността</p>
                    <p className="text-sm text-slate-400">Безплатен оглед на обекта</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="rounded-lg bg-orange-600 p-3">
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
                    <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                    Безплатен оглед на обекта
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                    Детайлна оферта с цени
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                    Консултация за материали
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                    Планиране на сроковете
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Изпратете запитване</CardTitle>
              <CardDescription>Попълнете формата и ще се свържем с вас в най-кратък срок</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Име *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Вашето име"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+359 XXX XXX XXX"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Имейл</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Съобщение *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Опишете вашия проект или въпрос..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-600 py-3 text-lg font-semibold text-white hover:bg-orange-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Изпращане..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Изпрати запитване
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="rounded-lg border border-green-400 bg-green-100 p-4 text-green-700">
                    Благодарим ви! Вашето съобщение беше изпратено успешно.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="rounded-lg border border-red-400 bg-red-100 p-4 text-red-700">
                    Възникна грешка при изпращането. Моля, опитайте отново.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
