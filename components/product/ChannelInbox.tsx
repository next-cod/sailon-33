import { MessageCircle, PanelsTopLeft, UserRound } from "lucide-react";

const threads = [
  ["Telegram", "Мария", "Спасибо большое за быструю запись! Завтра в 19 буду", "Только что", ""],
  ["VK", "Иван", "Хорошо, я подумаю", "Только что", "Бот напомнит клиенту через 12 часов"],
  ["Сайт", "Новый посетитель", "Спасибо, посоветуюсь с коллегами", "2 минуты назад", "Бот напомнит клиенту через 12 часов"],
  ["MAX", "Олег", "Понял, в субботу буду", "5 минут назад", ""],
] as const;

export function ChannelInbox() {
  return (
    <div className="mt-12 overflow-hidden rounded-[24px] border border-[var(--line)] bg-white shadow-soft">
      <div className="flex items-center gap-3 border-b border-[var(--line)] px-6 py-5 text-lg font-extrabold"><PanelsTopLeft size={20}/>Чаты</div>
      {threads.map(([channel,name,text,time,status],index)=><div key={name} className={`grid grid-cols-[42px_1fr_auto] items-center gap-4 px-6 py-4 ${index<threads.length-1?"border-b border-[var(--line)]":""}`}><span className="grid size-10 place-items-center rounded-full bg-[var(--cream)] text-[var(--leaf)]"><MessageCircle size={17}/></span><div className="min-w-0"><div className="flex items-center gap-2"><strong>{name}</strong><span className="text-xs text-[var(--muted)]">{channel}</span></div><p className="truncate text-sm text-[var(--muted)]">{text}</p></div><div className="text-right"><span className="text-xs text-[var(--muted)]">{time}</span>{status&&<p className="mt-2 rounded-full bg-[var(--cream)] px-3 py-1 text-xs text-[var(--leaf)]">{status}</p>}</div></div>)}
      <div className="flex items-center gap-4 bg-[var(--leaf)] px-7 py-4 font-semibold text-white"><UserRound size={20}/><span><b>Сотрудник может подключиться</b> к диалогу в нужный момент</span></div>
    </div>
  );
}
