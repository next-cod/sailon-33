import { legalDetails } from "@/config/legal-details";

const trialEmailSubject = encodeURIComponent("Заявка на бесплатный тест Сэйлона");

export const siteLinks = {
  signup: `${legalDetails.emailHref}?subject=${trialEmailSubject}`,
  login: "#pricing",
  contact: "/contacts",
  support: "/support",
  privacy: "/legal/privacy",
  terms: "/legal/terms",
} as const;

export const siteConfig = {
  name: "Сэйлон",
  canonicalUrl: "https://sailon-33.vercel.app",
  description:
    "Управляемый AI-продавец для входящих обращений. Задайте знания, характер и путь клиента — Сэйлон продолжит диалог и подключит человека там, где это нужно.",
} as const;
