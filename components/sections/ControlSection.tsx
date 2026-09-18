import { KnowledgeContext } from "@/components/product/KnowledgeContext";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ControlSection() {
  return <section id="control" className="section-space border-y border-[var(--line)] bg-[var(--paper)]"><div className="container-shell"><Reveal><SectionHeading eyebrow="Управление" title="Вы задаёте рамки. Сейлон работает внутри них." copy="База знаний определяет, что Сейлон знает. Инструкции — что он может обещать. Характер — как он разговаривает. А правила передачи — когда к диалогу подключается человек."/></Reveal><Reveal delay={.08}><KnowledgeContext/></Reveal></div></section>;
}
