"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type SubmitStatus = "idle" | "success" | "error";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
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
  );
};

export default ContactForm;
