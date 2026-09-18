import { JourneyDemo } from "@/components/product/JourneyDemo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function JourneySection() {
  return <section className="section-space bg-[var(--cream)]"><div className="container-shell"><Reveal><SectionHeading eyebrow="Путь клиента" title="У каждого этапа — своя задача" copy="Заинтересовать, помочь сравнить, снять сомнение или довести до действия. Вы задаёте, какого результата Сейлон должен добиться в каждой точке пути клиента."/></Reveal><Reveal delay={.08}><JourneyDemo/></Reveal></div></section>;
}
