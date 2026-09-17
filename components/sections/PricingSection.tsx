import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { siteLinks } from "@/config/links";

const plans = [
  { name: "Минимальный", price: "10 000 ₽", note: "Для небольшого входящего потока", featured: false },
  { name: "Средний", price: "20 000 ₽", note: "Для растущего объёма диалогов", featured: true },
  { name: "Премиум", price: "30 000 ₽", note: "Для высокой нагрузки", featured: false },
] as const;

export function PricingSection() {
  return (
    <section id="pricing" className="section-space bg-[var(--cream)]">
      <div className="container-shell">
        <Reveal><SectionHeading eyebrow="30 дней на проверку" title="Сначала проверьте на своих обращениях. Потом выбирайте тариф." copy="После регистрации аккаунт получает 10 000 тестовых кредитов. Этого достаточно, чтобы собрать базовые настройки и проверить работу Сейлона в реальных сценариях."/></Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => <Reveal key={plan.name} delay={index * .06} className={`relative rounded-[28px] border p-6 sm:p-8 ${plan.featured ? "border-[var(--forest)] bg-[var(--forest)] text-white" : "border-[var(--line)] bg-[var(--paper)]"}`}>
            {plan.featured && <span className="absolute right-5 top-5 rounded-full bg-[var(--signal)] px-3 py-1 text-[10px] font-bold uppercase tracking-[.1em] text-[var(--forest-deep)]">Средняя нагрузка</span>}
            <p className={`text-sm font-bold ${plan.featured ? "text-white/60" : "text-[var(--muted)]"}`}>{plan.name}</p><p className="mt-8 text-4xl font-bold tracking-tight">{plan.price}</p><p className={`mt-1 text-sm ${plan.featured ? "text-white/50" : "text-[var(--muted)]"}`}>в месяц</p><p className={`mt-8 border-t pt-5 ${plan.featured ? "border-white/15 text-white/70" : "border-[var(--line)] text-[var(--muted)]"}`}>{plan.note}</p><ul className="mt-6 grid gap-3 text-sm"><li className="flex gap-2"><Check size={16}/>Знания, характер и путь клиента</li><li className="flex gap-2"><Check size={16}/>Подключение доступных каналов</li><li className="flex gap-2"><Check size={16}/>Единое окно диалогов</li></ul><TrackedLink href={siteLinks.signup} event="pricing_signup_click" variant={plan.featured ? "light" : "primary"} className="mt-8 w-full">Начать бесплатный тест</TrackedLink>
          </Reveal>)}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="surface rounded-[22px] p-5"><p className="font-bold">Более 100 диалогов в день</p><p className="muted mt-2 text-sm">Индивидуальный тариф: 1 ₽ за каждый ответ Сейлона.</p></div>
          <div className="surface rounded-[22px] p-5"><p className="font-bold">Настройка командой — 40 000 ₽</p><p className="muted mt-2 text-sm">Если не хотите собирать путь клиента самостоятельно.</p></div>
        </div>
      </div>
    </section>
  );
}
