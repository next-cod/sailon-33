import { JourneyDemo } from "@/components/product/JourneyDemo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function JourneySection() {
  return <section className="section-space bg-[var(--cream)]"><div className="container-shell"><Reveal><SectionHeading eyebrow="Главное отличие" title="На каждом этапе — своя цель разговора" copy="Человек только заинтересовался, сравнивает варианты, сомневается или готов действовать. Для каждого состояния можно задать отдельную задачу, знания, follow-up и условие передачи сотруднику."/></Reveal><Reveal delay={.08}><JourneyDemo/></Reveal></div></section>;
}
