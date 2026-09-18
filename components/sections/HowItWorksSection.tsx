import { ArrowRight, BookOpen, BrainCircuit, Flag, MessageCircle, UserRoundCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const flow = [
  [BookOpen, "Берёт факты", "Использует вашу базу знаний, цены и условия."],
  [BrainCircuit, "Понимает контекст", "Учитывает вопрос и историю разговора."],
  [MessageCircle, "Отвечает по правилам", "Сохраняет характер и не обещает лишнего."],
  [Flag, "Предлагает шаг", "Направляет к записи, брони, заказу или заявке."],
  [UserRoundCheck, "Подключает человека", "Если ситуация требует сотрудника."],
] as const;

export function HowItWorksSection() {
  return (
    <section id="how" className="section-space bg-[linear-gradient(180deg,#f5f7f5_0%,#edf5ef_100%)]">
      <div className="container-shell">
        <Reveal><SectionHeading eyebrow="Механика диалога" title="От первого сообщения — к конкретному действию" copy="Сейлон берёт факты из базы знаний, понимает контекст, отвечает по вашим правилам и предлагает клиенту следующий шаг. Это базовая механика каждого разговора."/></Reveal>
        <div className="mt-14 grid gap-3 lg:grid-cols-5">
          {flow.map(([Icon, title, copy], index) => <Reveal key={title} delay={index * .06} className="surface relative rounded-[22px] p-5"><div className="flex items-center justify-between"><span className="grid size-10 place-items-center rounded-xl bg-[var(--cream)] text-[var(--forest)]"><Icon size={19}/></span>{index < flow.length - 1 && <ArrowRight className="hidden text-[var(--line)] lg:block" size={20}/>}</div><p className="mt-8 font-bold">{title}</p><p className="muted mt-2 text-sm leading-relaxed">{copy}</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}
