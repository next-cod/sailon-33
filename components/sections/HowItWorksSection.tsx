import { ArrowRight, BookOpen, BrainCircuit, Flag, MessageCircle, UserRoundCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const flow = [
  [BookOpen, "Знает бизнес", "Берёт факты из вашей базы знаний."],
  [BrainCircuit, "Понимает ситуацию", "Учитывает этап и контекст диалога."],
  [MessageCircle, "Отвечает уместно", "Следует правилам и характеру бренда."],
  [Flag, "Ведёт дальше", "Работает ради цели текущего этапа."],
  [UserRoundCheck, "Передаёт человеку", "Если сработало заданное условие."],
] as const;

export function HowItWorksSection() {
  return (
    <section id="how" className="section-space bg-[linear-gradient(180deg,#f5f7f5_0%,#edf5ef_100%)]">
      <div className="container-shell">
        <Reveal><SectionHeading eyebrow="Как это работает" title="От первого сообщения — к конкретному следующему шагу." copy="Сейлон не выдаёт случайные заготовки. Он учитывает знания компании, контекст разговора и цель этапа, чтобы каждый ответ двигал клиента дальше."/></Reveal>
        <div className="mt-14 grid gap-3 lg:grid-cols-5">
          {flow.map(([Icon, title, copy], index) => <Reveal key={title} delay={index * .06} className="surface relative rounded-[22px] p-5"><div className="flex items-center justify-between"><span className="grid size-10 place-items-center rounded-xl bg-[var(--cream)] text-[var(--forest)]"><Icon size={19}/></span>{index < flow.length - 1 && <ArrowRight className="hidden text-[var(--line)] lg:block" size={20}/>}</div><p className="mt-8 font-bold">{title}</p><p className="muted mt-2 text-sm leading-relaxed">{copy}</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}
