"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Clock3, Flag, Library, MessageSquareText } from "lucide-react";
import { journeyStages } from "@/content/site-content";
import { ChatBubble } from "./ChatBubble";

export function JourneyDemo() {
  const [active, setActive] = useState(0);
  const stage = journeyStages[active];
  const reduced = useReducedMotion();
  return (
    <div className="mt-12 overflow-hidden rounded-[30px] border border-[var(--line)] bg-[var(--paper)] shadow-soft">
      <div className="no-scrollbar flex gap-2 overflow-x-auto border-b border-[var(--line)] p-3" role="tablist" aria-label="Этапы пути клиента">
        {journeyStages.map((item, index) => (
          <button key={item.id} id={`journey-tab-${item.id}`} role="tab" aria-selected={active === index} aria-controls={`journey-panel-${item.id}`} onClick={() => setActive(index)} className={`min-w-[132px] flex-1 rounded-2xl px-4 py-3 text-left transition ${active === index ? "bg-[var(--forest)] text-white" : "text-[var(--muted)] hover:bg-[var(--cream)]"}`}>
            <span className="block text-[10px] uppercase tracking-[.15em] opacity-60">0{index + 1}</span>
            <span className="mt-1 block font-bold">{item.short}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={stage.id} id={`journey-panel-${stage.id}`} role="tabpanel" aria-labelledby={`journey-tab-${stage.id}`} initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -8 }} transition={{ duration: .25 }} className="grid lg:grid-cols-[1.05fr_.95fr]">
          <div className="p-6 sm:p-9">
            <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-[var(--signal)]/20 text-[var(--signal-strong)]"><Flag size={18}/></span><div><p className="text-xs font-bold uppercase tracking-[.12em] text-[var(--muted)]">Цель этапа</p><h3 className="sub-title mt-1">{stage.title}</h3></div></div>
            <p className="muted mt-5 max-w-xl text-lg">{stage.goal}</p>
            <div className="mt-7 grid gap-3">
              <InfoRow icon={<MessageSquareText size={17}/>} label="Инструкция" value={stage.instruction}/>
              <InfoRow icon={<Library size={17}/>} label="Нужные знания" value={stage.knowledge}/>
              <InfoRow icon={<ArrowRight size={17}/>} label="Действие" value={stage.action}/>
            </div>
            {stage.id === "doubt" && <div className="mt-4 flex items-center gap-2 rounded-xl bg-[var(--signal)]/12 px-4 py-3 text-sm font-semibold"><Clock3 size={17}/>Если диалог остановился — follow-up по правилам этапа</div>}
          </div>
          <div className="bg-[var(--cream)] p-6 sm:p-9">
            <div className="mx-auto max-w-md rounded-[24px] bg-white p-5 shadow-sm">
              <p className="mb-5 text-xs font-bold uppercase tracking-[.12em] text-[var(--muted)]">Диалог меняет задачу вместе с этапом</p>
              <div className="grid gap-3"><ChatBubble side="client">{stage.customer}</ChatBubble><ChatBubble side="assistant">{stage.assistant}</ChatBubble></div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="grid grid-cols-[28px_110px_1fr] items-start gap-2 rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm"><span className="text-[var(--leaf)]">{icon}</span><span className="font-bold">{label}</span><span className="text-[var(--muted)]">{value}</span></div>;
}
