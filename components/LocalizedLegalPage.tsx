"use client";

import Link from "next/link";
import { useDocumentTitle, useSiteLanguage } from "@/lib/use-site-language";

type LocalizedDocument = {
  ru: { title: string; intro: string; sections: readonly string[] };
  en: { title: string; intro: string; sections: readonly string[] };
};

export function LocalizedLegalPage({ document }: { document: LocalizedDocument }) {
  const { language } = useSiteLanguage();
  const copy = document[language];

  useDocumentTitle(`${copy.title} — ${language === "ru" ? "Сэйлон" : "Saleon"}`);

  return (
    <main className="legal-page">
      <div className="legal-toolbar">
        <Link className="legal-back" href="/">{language === "ru" ? "Сэйлон" : "Saleon"}</Link>
      </div>
      <article>
        <h1>{copy.title}</h1>
        <p className="legal-intro">{copy.intro}</p>
        <div className="legal-notice">{language === "ru"
          ? "Черновик структуры. Перед публикацией необходимо заменить реквизиты и утвердить текст с юристом с учётом фактической схемы работы сервиса."
          : "Draft structure. Before publication, replace the company details and have the text reviewed by legal counsel to reflect how the service actually operates."}</div>
        {copy.sections.map((section, index) => (
          <section key={section}>
            <h2>{index + 1}. {section}</h2>
            <p>{language === "ru"
              ? "Раздел будет заполнен после утверждения юридических реквизитов, условий оказания услуг и фактического порядка обработки данных."
              : "This section will be completed after the legal details, service terms, and actual data-processing procedures have been approved."}</p>
          </section>
        ))}
        <footer>
          <p>{language === "ru" ? "ИП или ООО «Название»" : "Sole proprietor or LLC “Company name”"}</p>
          <p>{language === "ru" ? "ИНН 0000000000 · ОГРН или ОГРНИП 0000000000000" : "Tax ID 0000000000 · Registration No. 0000000000000"}</p>
          <p>{language === "ru" ? "support@ваш-домен.ru" : "support@your-domain.com"}</p>
        </footer>
      </article>
    </main>
  );
}
