import { LiveDemo } from "@/components/product/LiveDemo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DemoSection() {
  return <section id="demo" className="section-space bg-[var(--cream)]"><div className="container-shell"><Reveal><SectionHeading eyebrow="Живая демонстрация" title="Посмотрите не отрасль, а логику разговора" copy="Переключайте сценарии: вместе с нишей меняются этап, цель, характер и следующий шаг. Именно так один продукт адаптируется под разные модели бизнеса."/></Reveal><Reveal delay={.08}><LiveDemo/></Reveal></div></section>;
}
