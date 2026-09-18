import { LiveDemo } from "@/components/product/LiveDemo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DemoSection() {
  return <section id="demo" className="section-space bg-[var(--cream)]"><div className="container-shell"><Reveal><SectionHeading eyebrow="Сценарии бизнеса" title="Один AI-продавец — разные сценарии продаж" copy="Для каждого бизнеса меняются цель, тон и следующий шаг. Сейлон может довести до брони, помочь выбрать услугу, снять сомнение или подготовить передачу менеджеру."/></Reveal><Reveal delay={.08}><LiveDemo/></Reveal></div></section>;
}
