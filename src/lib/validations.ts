import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Името трябва да съдържа поне 2 символа")
    .max(50, "Името не може да съдържа повече от 50 символа")
    .regex(/^[а-яА-Яa-zA-Z\s]+$/, "Името може да съдържа само букви и интервали"),

  email: z.string().email("Моля, въведете валиден имейл адрес").optional().or(z.literal("")),

  phone: z
    .string()
    .min(10, "Телефонният номер трябва да съдържа поне 10 цифри")
    .regex(
      /^(\+359|0)[\s-]?[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{3}$/,
      "Моля, въведете валиден български телефонен номер (напр. +359 XXX XXX XXX или 0XXX XXX XXX)",
    ),

  message: z
    .string()
    .min(10, "Съобщението трябва да съдържа поне 10 символа")
    .max(1000, "Съобщението не може да съдържа повече от 1000 символа"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
