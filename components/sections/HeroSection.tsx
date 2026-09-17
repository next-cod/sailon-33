import { ArrowDown, Check, Clock3, MessagesSquare, UserRoundCheck } from "lucide-react";
import { HeroConsole } from "@/components/product/HeroConsole";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { siteLinks } from "@/config/links";

export function HeroSection() {
  return (
    <section id="top" className="overflow-hidden pb-16 pt-10 sm:pt-16 lg:pb-20 lg:pt-20">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-3 py-1.5 text-xs font-bold text-[var(--leaf)]"><span className="status-pulse size-1.5 rounded-full bg-[var(--signal-strong)]"/>AI-продавец для входящих обращений</div>
          <h1 className="display balance mt-7">Отвечает сразу. <span className="text-[var(--leaf)]">Доводит до заявки.</span></h1>
          <p className="pretty mt-7 max-w-xl text-xl leading-relaxed text-[var(--muted)]">Сейлон принимает входящие 24/7, отвечает по вашей базе знаний, снимает типовые возражения и ведёт клиента к записи, брони, заказу или менеджеру.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <TrackedLink href={siteLinks.signup} event="hero_signup_click" arrow>Попробовать 30 дней бесплатно</TrackedLink>
            <TrackedLink href="#demo" event="demo_click" variant="secondary"><ArrowDown size={17}/>Посмотреть диалог</TrackedLink>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
            <span className="flex items-center gap-2"><Check size={15} className="text-[var(--success)]"/>30 дней бесплатно</span>
            <span className="flex items-center gap-2"><Check size={15} className="text-[var(--success)]"/>Без программиста</span>
          </div>
        </div>
        <HeroConsole />
      </div>
      <div className="container-shell mt-10 grid overflow-hidden rounded-[26px] border border-[var(--line)] bg-white shadow-[0_16px_60px_rgba(18,58,48,.07)] sm:grid-cols-3">
        {[
          [Clock3, "24/7", "Отвечает, пока команда занята или офлайн"],
          [MessagesSquare, "4 канала", "VK, Telegram, сайт и MAX в одном окне"],
          [UserRoundCheck, "Handoff", "Передаёт диалог человеку по вашим правилам"],
        ].map(([Icon, value, copy], index) => { const ItemIcon = Icon as typeof Clock3; return <div key={value as string} className={`flex gap-4 p-5 sm:p-6 ${index ? "border-t border-[var(--line)] sm:border-l sm:border-t-0" : ""}`}><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--cream)] text-[var(--leaf)]"><ItemIcon size={20}/></span><div><p className="text-xl font-extrabold">{value as string}</p><p className="mt-1 text-sm text-[var(--muted)]">{copy as string}</p></div></div>; })}
      </div>
    </section>
  );
}
