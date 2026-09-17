"use client";

import { useState } from "react";
import { Check, UserRound } from "lucide-react";

const levels = [
  { label: "Стандартный диалог", title: "Почти автономно", copy: "Сейлон отвечает, помогает выбрать, объясняет условия и ведёт к типовой записи, брони или заказу.", steps: ["Ответить", "Помочь выбрать", "Объяснить условия", "Довести до действия"] },
  { label: "Смешанный процесс", title: "AI + сотрудник", copy: "Сейлон квалифицирует, снимает типовые сомнения и подключает сотрудника в заранее выбранной точке.", steps: ["Ответить", "Квалифицировать", "Собрать данные", "Передать сотруднику"] },
  { label: "Сложная продажа", title: "Первая линия", copy: "Сейлон собирает контекст и готовит клиента, а эксперт подключается к содержательной части разговора.", steps: ["Принять обращение", "Понять потребность", "Собрать контекст", "Передать эксперту"] },
] as const;

export function AutomationDepth() {
  const [active, setActive] = useState(1);
  const level = levels[active];
  return (
    <div className="mt-12 rounded-[30px] border border-[var(--line)] bg-[var(--paper)] p-5 sm:p-9">
      <div className="grid gap-2 sm:grid-cols-3" role="tablist" aria-label="Глубина автоматизации">
        {levels.map((item, index) => <button key={item.label} id={`depth-tab-${index}`} role="tab" aria-selected={active === index} aria-controls={`depth-panel-${index}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} className={`min-h-14 rounded-2xl px-4 text-sm font-bold transition ${active === index ? "bg-[var(--forest)] text-white" : "bg-[var(--cream)] text-[var(--muted)] hover:text-[var(--ink)]"}`}>{item.label}</button>)}
      </div>
      <div id={`depth-panel-${active}`} role="tabpanel" aria-labelledby={`depth-tab-${active}`} aria-live="polite" className="mt-8 grid gap-9 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div><span className="eyebrow">Вы выбираете границу</span><h3 className="sub-title mt-5">{level.title}</h3><p className="muted mt-5 text-lg">{level.copy}</p></div>
        <div className="grid gap-3 sm:grid-cols-4">
          {level.steps.map((step, index) => <div key={step} className="relative rounded-2xl border border-[var(--line)] bg-white p-4"><span className={`grid size-8 place-items-center rounded-full ${index === level.steps.length - 1 && active > 0 ? "bg-[var(--signal)] text-[var(--forest-deep)]" : "bg-[var(--cream)] text-[var(--leaf)]"}`}>{index === level.steps.length - 1 && active > 0 ? <UserRound size={16}/> : <Check size={16}/>}</span><p className="mt-7 text-sm font-bold leading-snug">{step}</p><span className="absolute right-3 top-3 text-[10px] text-[var(--muted)]">0{index+1}</span></div>)}
        </div>
      </div>
    </div>
  );
}
