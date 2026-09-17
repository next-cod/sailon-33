import { CharacterSwitcher } from "@/components/product/CharacterSwitcher";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CharacterSection() {
  return <section className="section-space"><div className="container-shell"><Reveal><SectionHeading eyebrow="Характер" title="Пусть AI разговаривает так, как принято у вас" copy="Один и тот же вопрос не должен звучать одинаково в цветочном магазине, фитнес-клубе и автосервисе. Вы задаёте тон, формальность, живость и манеру ответа."/></Reveal><Reveal delay={.08}><CharacterSwitcher/></Reveal></div></section>;
}
