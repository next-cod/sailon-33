import { AutomationDepth } from "@/components/product/AutomationDepth";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AutomationSection() {
  return <section className="section-space"><div className="container-shell"><Reveal><SectionHeading eyebrow="Глубина автоматизации" title="Решите сами, сколько общения отдать Сейлону" copy="Простой диалог можно автоматизировать почти целиком. В сложной продаже AI заберёт первую линию и подготовит контекст для эксперта."/></Reveal><Reveal delay={.08}><AutomationDepth/></Reveal></div></section>;
}
