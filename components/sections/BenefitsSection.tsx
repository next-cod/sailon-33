import { Gauge, MessageSquareMore, Moon, RefreshCcw, Scale, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  [Gauge, "Быстрее подхватывать входящие", "Клиент получает первый содержательный ответ, пока интерес ещё не остыл."],
  [MessageSquareMore, "Снять с команды повторы", "Цены, условия, выбор и типовые вопросы не требуют ручного ответа каждый раз."],
  [Scale, "Держать единый стандарт", "Знания, правила и характер задаются централизованно — ответ не зависит от настроения смены."],
  [RefreshCcw, "Не забывать follow-up", "На нужном этапе можно задать повторное касание после паузы."],
  [Moon, "Продолжать разговор вне графика", "Типовая коммуникация не останавливается вечером или в выходной."],
  [Users, "Оставить людям сложное", "Сотрудник подключается там, где нужен опыт, ответственность или нестандартное решение."],
] as const;

export function BenefitsSection() {
  return (
    <section className="section-space bg-[var(--paper)]">
      <div className="container-shell">
        <Reveal><SectionHeading eyebrow="Что получает бизнес" title="Быстрый ответ клиенту. Подготовленный диалог менеджеру."/></Reveal>
        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([Icon, title, copy], index) => <Reveal key={title} delay={index * .04} className="border-t border-[var(--line)] pt-6"><Icon className="text-[var(--signal-strong)]" size={22}/><h3 className="mt-6 text-xl font-bold leading-tight">{title}</h3><p className="muted mt-3 leading-relaxed">{copy}</p></Reveal>)}
        </div>
        <p className="mt-12 max-w-3xl rounded-2xl bg-[var(--cream)] px-5 py-4 text-sm leading-relaxed text-[var(--muted)]"><b className="text-[var(--ink)]">Начните с одного повторяющегося сценария.</b> Проверьте качество ответов на реальных обращениях, затем постепенно расширяйте автоматизацию.</p>
      </div>
    </section>
  );
}
