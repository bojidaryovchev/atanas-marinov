"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import type React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Изпращане на съобщението...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Dismiss loading toast and show success
        toast.dismiss(loadingToast);
        toast.success(
          "Благодарим ви! Вашето съобщение беше изпратено успешно. Ще се свържем с вас в най-кратък срок.",
          {
            duration: 6000,
          },
        );

        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch {
      // Dismiss loading toast and show error
      toast.dismiss(loadingToast);
      toast.error(
        "Възникна грешка при изпращането на съобщението. Моля, опитайте отново или се свържете с нас директно по телефона.",
        {
          duration: 6000,
        },
      );
    } finally {
      setIsSubmitting(false);
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-600 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                Изпращане...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Изпрати запитване
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
