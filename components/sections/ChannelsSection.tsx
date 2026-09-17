import { ChannelInbox } from "@/components/product/ChannelInbox";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ChannelsSection() {
  return <section className="section-space border-y border-[var(--line)]"><div className="container-shell"><Reveal><SectionHeading eyebrow="Каналы и CRM" title="Все подключённые диалоги — в одном окне" copy="Сейлон отвечает в доступных каналах, а команда видит историю и может забрать разговор вручную. CRM поддерживает работу — но не подменяет собой главную логику продукта."/></Reveal><Reveal delay={.08}><ChannelInbox/></Reveal></div></section>;
}
