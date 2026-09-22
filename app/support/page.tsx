"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useDocumentTitle, useSiteLanguage } from "@/lib/use-site-language";

export default function SupportPage() {
  const { language } = useSiteLanguage();
  const en = language === "en";
  useDocumentTitle(en ? "Support — Saleon" : "Поддержка — Сэйлон");
  return (
    <main className="legal-page">
      <div className="legal-toolbar"><Link className="legal-back" href="/" aria-label={en ? "Back to site" : "Вернуться на сайт"} title={en ? "Back to site" : "Вернуться на сайт"}><ArrowLeft size={21} strokeWidth={2.25} aria-hidden="true" /></Link></div>
      <article>
        <h1>{en ? "Support" : "Поддержка"}</h1>
        <p className="legal-intro">{en ? "We can help with connection, setup, and using your AI sales assistant." : "Поможем с подключением, настройками и работой AI-продавца."}</p>
        <div className="legal-notice">{en ? "The support address will go live after the company email is connected." : "Рабочий адрес поддержки будет добавлен после подключения корпоративной почты."}</div>
        <section><h2>{en ? "Contact support" : "Как обратиться"}</h2><p>{en ? "support@your-domain.com" : "support@ваш-домен.ru"}</p></section>
      </article>
    </main>
  );
}
