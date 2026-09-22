"use client";

import Link from "next/link";
import { useDocumentTitle, useSiteLanguage } from "@/lib/use-site-language";

export default function ContactsPage() {
  const { language } = useSiteLanguage();
  const en = language === "en";
  useDocumentTitle(en ? "Contacts — Saleon" : "Контакты — Сэйлон");
  return (
    <main className="legal-page">
      <div className="legal-toolbar"><Link className="legal-back" href="/">{en ? "Saleon" : "Сэйлон"}</Link></div>
      <article>
        <h1>{en ? "Contacts" : "Контакты"}</h1>
        <p className="legal-intro">{en ? "Contact us about the product, implementation, or partnerships." : "Связаться по вопросам продукта, внедрения и сотрудничества."}</p>
        <section><h2>{en ? "Email" : "Электронная почта"}</h2><p>{en ? "support@your-domain.com" : "support@ваш-домен.ru"}</p></section>
        <section><h2>{en ? "Company details" : "Реквизиты"}</h2><p>{en ? "Sole proprietor or LLC “Company name”" : "ИП или ООО «Название»"}<br />{en ? "Tax ID 0000000000 · Registration No. 0000000000000" : "ИНН 0000000000 · ОГРН или ОГРНИП 0000000000000"}</p></section>
      </article>
    </main>
  );
}
