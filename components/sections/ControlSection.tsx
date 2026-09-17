import { KnowledgeContext } from "@/components/product/KnowledgeContext";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ControlSection() {
  return <section id="control" className="section-space border-y border-[var(--line)] bg-[var(--paper)]"><div className="container-shell"><Reveal><SectionHeading eyebrow="Контроль ответа" title="Не верить AI на слово. Настроить, за что он отвечает." copy="Сейлон использует знания компании, понимает этап клиента, следует инструкции и сохраняет заданный характер. Если ситуация выходит за рамки, диалог можно передать человеку."/></Reveal><Reveal delay={.08}><KnowledgeContext/></Reveal></div></section>;
}
