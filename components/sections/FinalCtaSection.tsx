import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { siteLinks } from "@/config/links";

export function FinalCtaSection() {
  return (
    <section className="pb-8 sm:pb-12">
      <div className="container-shell">
        <Reveal className="relative overflow-hidden rounded-[34px] bg-[var(--signal)] p-7 text-[var(--forest-deep)] shadow-[0_24px_70px_rgba(95,198,70,.24)] sm:p-12 lg:p-16">
          <div className="absolute -right-16 -top-16 size-64 rounded-full border-[44px] border-white/20"/>
          <div className="relative max-w-4xl"><span className="text-sm font-bold uppercase tracking-[.12em]">Следующий шаг</span><h2 className="section-title balance mt-5">Посмотрите, как Сейлон будет работать именно с вашими клиентами.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--forest-deep)]/70">30 дней, чтобы собрать настройки, подключить первый канал и проверить реальные диалоги — без обязательства сразу менять весь процесс.</p><div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"><TrackedLink href={siteLinks.signup} event="final_signup_click" variant="light" className="!bg-[var(--forest-deep)] !text-white hover:!bg-[var(--forest)]">Попробовать Сейлон бесплатно <ArrowRight size={18}/></TrackedLink><span className="flex items-center gap-2 text-sm font-semibold"><Check size={17}/>10 000 кредитов уже в аккаунте</span></div></div>
        </Reveal>
      </div>
    </section>
  );
}
