import { BookOpenCheck, GitBranch, ShieldCheck, Sparkles, UserRound } from "lucide-react";

const inputs = [
  [BookOpenCheck, "Знания компании", "условия, цены, правила"],
  [GitBranch, "Этап клиента", "сейчас сомневается"],
  [ShieldCheck, "Инструкция", "не обещать лишнего"],
  [Sparkles, "Характер", "спокойно и по делу"],
] as const;

export function KnowledgeContext() {
  return (
    <div className="mt-12">
      <div className="grid gap-4 sm:grid-cols-2">
        {inputs.map(([Icon, title, copy], index) => <div key={title} className={`surface group flex min-h-40 items-start gap-5 rounded-[24px] p-5 sm:p-7 ${index === 0 || index === 3 ? "sm:bg-[var(--cream)]" : ""}`}><span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[var(--forest)] text-[var(--signal)] transition-transform duration-300 group-hover:scale-105"><Icon size={21}/></span><div><p className="text-lg font-extrabold">{title}</p><p className="mt-3 text-[var(--muted)]">{copy}</p></div></div>)}
      </div>
      <div className="mt-4 flex flex-col gap-4 rounded-[24px] bg-[var(--forest)] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div className="flex items-start gap-4"><span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[var(--signal)] text-[var(--forest-deep)]"><UserRound size={21}/></span><div><p className="text-lg font-extrabold">Человек подключается по вашим правилам</p><p className="mt-2 text-white/62">Вы сами задаёте, в каких ситуациях Сейлон останавливается и передаёт диалог сотруднику.</p></div></div>
        <span className="shrink-0 rounded-full border border-[var(--signal)]/25 bg-[var(--signal)]/10 px-4 py-2 text-sm font-bold text-[var(--signal)]">Контроль остаётся у вас</span>
      </div>
    </div>
  );
}
