import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedLegalPage } from "@/components/LocalizedLegalPage";

const documents = {
  offer: {
    ru: { title: "Публичная оферта", intro: "Условия приобретения и использования сервиса Сэйлон.", sections: ["Предмет оферты", "Порядок подключения и оплаты", "Права и обязанности сторон", "Ответственность", "Срок действия и расторжение"] },
    en: { title: "Public offer", intro: "Terms for purchasing and using the Saleon service.", sections: ["Subject of the offer", "Connection and payment", "Rights and obligations", "Liability", "Term and termination"] },
  },
  terms: {
    ru: { title: "Пользовательское соглашение", intro: "Правила использования сайта, личного кабинета и функций сервиса.", sections: ["Общие положения", "Учётная запись", "Правила использования", "Ограничения", "Изменение условий"] },
    en: { title: "Terms of use", intro: "Rules for using the website, account, and service features.", sections: ["General provisions", "Account", "Acceptable use", "Restrictions", "Changes to these terms"] },
  },
  privacy: {
    ru: { title: "Политика обработки персональных данных", intro: "Порядок сбора, использования, хранения и защиты персональных данных пользователей.", sections: ["Состав обрабатываемых данных", "Цели и правовые основания", "Сроки обработки и хранения", "Передача третьим лицам", "Права субъекта данных"] },
    en: { title: "Personal data policy", intro: "How user personal data is collected, used, stored, and protected.", sections: ["Data we process", "Purposes and legal grounds", "Processing and retention periods", "Third-party transfers", "Data-subject rights"] },
  },
  consent: {
    ru: { title: "Согласие на обработку персональных данных", intro: "Условия согласия пользователя на обработку данных, переданных через формы сайта.", sections: ["Перечень данных", "Цели обработки", "Разрешённые действия", "Срок действия согласия", "Порядок отзыва"] },
    en: { title: "Personal data consent", intro: "Terms of consent to process data submitted through website forms.", sections: ["Data covered", "Processing purposes", "Permitted actions", "Duration of consent", "Withdrawal procedure"] },
  },
  cookies: {
    ru: { title: "Политика использования файлов cookie", intro: "Какие файлы cookie могут использоваться сайтом и как пользователь может управлять ими.", sections: ["Необходимые cookie", "Аналитические cookie", "Срок хранения", "Настройки браузера", "Обновление политики"] },
    en: { title: "Cookie policy", intro: "Which cookies the website may use and how users can control them.", sections: ["Essential cookies", "Analytics cookies", "Retention period", "Browser settings", "Policy updates"] },
  },
} as const;

type DocumentSlug = keyof typeof documents;

export function generateStaticParams() {
  return Object.keys(documents).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const document = documents[slug as DocumentSlug];
  return { title: document ? `${document.ru.title} — Сэйлон` : "Документ — Сэйлон" };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const document = documents[slug as DocumentSlug];
  if (!document) notFound();

  return <LocalizedLegalPage document={document} />;
}
