import { ArrowDown, BookOpenCheck, GitBranch, ShieldCheck, Sparkles, UserRound } from "lucide-react";

const inputs = [
  [BookOpenCheck, "Знания компании", "условия, цены, правила"],
  [GitBranch, "Этап клиента", "сейчас сомневается"],
  [ShieldCheck, "Инструкция", "не обещать лишнего"],
  [Sparkles, "Характер", "спокойно и по делу"],
] as const;

export function KnowledgeContext() {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
      <div className="grid gap-3">
        {inputs.map(([Icon, title, copy]) => <div key={title} className="surface flex items-center gap-4 rounded-2xl p-4"><span className="grid size-11 place-items-center rounded-xl bg-[var(--cream)] text-[var(--forest)]"><Icon size={20}/></span><div><p className="font-bold">{title}</p><p className="text-sm text-[var(--muted)]">{copy}</p></div></div>)}
      </div>
      <div className="relative rounded-[30px] bg-[var(--forest)] p-6 text-white sm:p-9">
        <div className="flex items-center gap-3 text-sm text-white/55"><ArrowDown size={16}/>Почему ответ именно такой</div>
        <p className="mt-7 text-2xl font-semibold leading-snug">«Можно начать с одного канала и короткой базы знаний. Если вопрос выйдет за заданные рамки, я передам диалог сотруднику».</p>
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/12 bg-white/[.07] p-4">
          <UserRound className="mt-0.5 shrink-0 text-[var(--signal)]" size={20}/><div><p className="font-bold">Handoff — часть сценария, а не ошибка</p><p className="mt-1 text-sm text-white/60">Вы сами задаёте, в каких ситуациях Сейлон останавливается и подключает человека.</p></div>
        </div>
      </div>
    </div>
  );
}
