import { Clock3, Copy, MessageSquareWarning, Moon, UsersRound } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const moments = [
  [Moon, "Клиент написал вечером", "Ответ будет только утром — если он ещё не выбрал другого."],
  [Clock3, "Сотрудник занят", "Входящее сообщение ждёт, хотя вопрос можно было разобрать сразу."],
  [Copy, "Снова тот же вопрос", "Команда повторяет цены, условия и правила десятки раз."],
  [MessageSquareWarning, "«Я подумаю»", "Диалог остановился, а понятного follow-up никто не поставил."],
] as const;

export function ProblemSection() {
  return (
    <section className="section-space border-y border-[var(--line)] bg-[var(--paper)]">
      <div className="container-shell">
        <Reveal className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div><span className="eyebrow">Цена ожидания</span><h2 className="section-title balance mt-5">Пока менеджер занят, горячий клиент продолжает искать.</h2></div>
          <p className="muted max-w-xl text-lg lg:justify-self-end">Сейлон отвечает в момент обращения, уточняет задачу и предлагает следующий шаг. Команда подключается уже к подготовленному диалогу, а не начинает всё с нуля.</p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[26px] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {moments.map(([Icon, title, copy], index) => <Reveal key={title} delay={index * .05} className="bg-[var(--paper)] p-6 sm:p-8"><Icon className="text-[var(--signal-strong)]" size={22}/><h3 className="mt-7 text-xl font-bold">{title}</h3><p className="muted mt-3 max-w-md">{copy}</p></Reveal>)}
        </div>
        <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[var(--forest)] px-5 py-4 text-sm text-white"><UsersRound className="mt-0.5 shrink-0 text-[var(--signal)]" size={19}/><p><b>Результат:</b> клиент получает ответ сразу, а менеджер — диалог с уже собранным контекстом.</p></div>
      </div>
    </section>
  );
}
