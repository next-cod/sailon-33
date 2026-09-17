import { Globe2, MessageCircle, PanelsTopLeft, Send, UserRound } from "lucide-react";

const threads = [
  ["Telegram", "Мария", "Есть окно завтра вечером?", "2 мин"],
  ["VK", "Иван", "Подскажите по тарифам", "5 мин"],
  ["Сайт", "Новый посетитель", "Нужна интеграция с CRM", "9 мин"],
  ["MAX", "Олег", "Хочу перенести запись", "14 мин"],
] as const;

export function ChannelInbox() {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[.72fr_1.28fr]">
      <div className="rounded-[30px] bg-[var(--forest)] p-7 text-white">
        <p className="text-xs font-bold uppercase tracking-[.12em] text-white/45">Подтверждённые каналы</p>
        <div className="mt-7 grid grid-cols-2 gap-3">
          {["VK", "Telegram", "Сайт", "MAX"].map((channel, index) => <div key={channel} className="rounded-2xl border border-white/10 bg-white/[.07] p-4"><span className="grid size-9 place-items-center rounded-xl bg-white/10">{index === 0 ? "VK" : index === 1 ? <Send size={16}/> : index === 2 ? <Globe2 size={16}/> : "M"}</span><p className="mt-5 font-bold">{channel}</p></div>)}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-white/55">Avito и Instagram не показаны как действующие интеграции, пока их готовность не подтверждена.</p>
      </div>
      <div className="overflow-hidden rounded-[30px] border border-[var(--line)] bg-[var(--paper)]">
        <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4"><div className="flex items-center gap-2 font-bold"><PanelsTopLeft size={18}/>Единое окно</div><span className="text-xs text-[var(--muted)]">4 новых диалога</span></div>
        {threads.map(([channel, name, text, time], index) => <div key={`${channel}-${name}`} className={`grid grid-cols-[42px_1fr_auto] items-center gap-3 px-5 py-4 ${index !== threads.length - 1 ? "border-b border-[var(--line)]" : ""}`}><span className="grid size-10 place-items-center rounded-full bg-[var(--cream)] text-[var(--leaf)]"><MessageCircle size={17}/></span><div className="min-w-0"><div className="flex gap-2"><p className="truncate text-sm font-bold">{name}</p><span className="text-[10px] text-[var(--muted)]">{channel}</span></div><p className="truncate text-sm text-[var(--muted)]">{text}</p></div><span className="text-[10px] text-[var(--muted)]">{time}</span></div>)}
        <div className="flex items-center gap-3 bg-[var(--cream)] px-5 py-4 text-sm"><UserRound size={17} className="text-[var(--signal-strong)]"/><span><b>Сотрудник может подключиться</b> к диалогу в нужный момент.</span></div>
      </div>
    </div>
  );
}
