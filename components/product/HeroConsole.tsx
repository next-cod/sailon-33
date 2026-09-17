"use client";

import { motion, useReducedMotion } from "motion/react";
import { BookOpen, GitBranch, Sparkles, UserRoundCheck } from "lucide-react";
import { ChatBubble } from "./ChatBubble";

export function HeroConsole() {
  const reduced = useReducedMotion();
  const items = [
    [BookOpen, "Знания", "Актуальные условия"],
    [GitBranch, "Этап", "Сомнение"],
    [Sparkles, "Характер", "Спокойный"],
    [UserRoundCheck, "Граница", "Передать при риске"],
  ] as const;
  return (
    <motion.div animate={reduced ? undefined : { y: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative min-h-[640px] overflow-hidden rounded-[34px] bg-[var(--forest-deep)] p-5 text-white shadow-soft sm:p-8">
      <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[var(--signal)]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[var(--signal)] via-[var(--leaf)] to-transparent" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
        <div><p className="text-xs text-white/45">Диалог #1842</p><p className="font-semibold">Новый входящий · Сайт</p></div>
        <span className="flex items-center gap-2 rounded-full bg-[var(--signal)]/15 px-3 py-1 text-xs text-[#a8f38e]"><span className="status-pulse size-1.5 rounded-full bg-[var(--signal)]"/>Сейлон отвечает</span>
      </div>
      <div className="relative mt-6 grid gap-4 sm:grid-cols-[1fr_1.55fr]">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
          {items.map(([Icon, label, value], index) => (
            <motion.div key={label} initial={reduced ? false : { opacity: 0, x: -12 }} animate={reduced ? undefined : { opacity: 1, x: 0 }} transition={{ delay: .16 + index * .08 }} className="rounded-2xl border border-white/10 bg-white/[.06] p-3.5 backdrop-blur">
              <div className="flex items-center gap-2 text-xs text-white/45"><Icon size={14}/>{label}</div>
              <p className="mt-2 text-sm font-semibold">{value}</p>
            </motion.div>
          ))}
        </div>
        <div className="rounded-[24px] bg-[var(--paper)] p-4 text-[var(--ink)] sm:p-5">
          <div className="flex items-center gap-3 border-b border-[var(--line)] pb-4">
            <span className="grid size-9 place-items-center rounded-full bg-[var(--cream)] text-sm font-bold">А</span>
            <div><p className="text-sm font-bold">Анна</p><p className="text-[11px] text-[var(--muted)]">выбирает формат</p></div>
          </div>
          <div className="mt-5 grid gap-3">
            <ChatBubble side="client" time="12:42">Хочу попробовать, но боюсь, что бот будет отвечать клиентам не то.</ChatBubble>
            <motion.div initial={reduced ? false : { opacity: 0, y: 8 }} animate={reduced ? undefined : { opacity: 1, y: 0 }} transition={{ delay: .55 }}>
              <ChatBubble side="assistant" time="12:42">Начните с одного канала и задайте точную базу знаний. Нестандартные вопросы Сейлон может передавать сотруднику — границу вы определяете сами.</ChatBubble>
            </motion.div>
            <motion.div initial={reduced ? false : { opacity: 0 }} animate={reduced ? undefined : { opacity: 1 }} transition={{ delay: .9 }} className="flex items-center justify-between rounded-xl border border-[var(--line)] bg-white px-3 py-2 text-[11px]">
              <span className="font-semibold text-[var(--leaf)]">Следующее действие</span><span>Предложить 30-дневный тест</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative mt-4 flex items-center gap-3 rounded-2xl border border-[var(--signal)]/25 bg-[var(--signal)]/10 px-4 py-3 text-sm">
        <span className="size-2 rounded-full bg-[var(--signal)]" />
        Смысл ответа собран из знаний, этапа и правил бизнеса
      </div>
    </motion.div>
  );
}
