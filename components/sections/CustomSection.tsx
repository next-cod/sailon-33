import { CalendarClock, CreditCard, FileStack, PlugZap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { siteLinks } from "@/config/links";

export function CustomSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <Reveal className="dark-panel overflow-hidden rounded-[34px] border border-[var(--signal)]/15 p-7 shadow-[0_30px_90px_rgba(10,36,29,.2)] sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-end">
            <div><span className="eyebrow !text-[var(--signal)]">Сложный сценарий</span><h2 className="section-title balance mt-5">Коробки недостаточно? Обсудим нужную логику отдельно.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">Для CRM, расписаний, слотов, оплаты, документов и другой нестандартной логики можно запросить индивидуальную интеграцию. Объём и условия оцениваются отдельно.</p><TrackedLink href={siteLinks.contact} event="custom_solution_click" variant="light" arrow className="mt-8">Обсудить свою задачу</TrackedLink></div>
            <div className="grid grid-cols-2 gap-3">
              {[[PlugZap,"CRM"],[CalendarClock,"Расписания"],[CreditCard,"Оплата"],[FileStack,"Документы"]].map(([Icon,label]) => { const I = Icon as typeof PlugZap; return <div key={label as string} className="rounded-2xl border border-white/10 bg-white/[.06] p-4"><I size={20} className="text-[var(--signal)]"/><p className="mt-6 font-bold">{label as string}</p></div>; })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
