"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { siteLinks } from "@/config/links";

const nav = [
  ["Как работает", "#how"],
  ["Возможности", "#control"],
  ["Демо", "#demo"],
  ["Тарифы", "#pricing"],
  ["FAQ", "#faq"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(245,247,245,.88)] backdrop-blur-xl">
      <div className="container-shell flex h-[74px] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {nav.map(([label, href]) => <a key={href} className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--ink)]" href={href}>{label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <TrackedLink href={siteLinks.signup} event="hero_signup_click" className="!min-h-10 !px-5 !py-2">Попробовать бесплатно</TrackedLink>
        </div>
        <button className="grid size-11 place-items-center rounded-full border border-[var(--line)] bg-white lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="container-shell border-t border-[var(--line)] py-5 lg:hidden">
          <nav className="grid gap-1" aria-label="Мобильная навигация">
            {nav.map(([label, href]) => <a key={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-lg font-semibold hover:bg-white" href={href}>{label}</a>)}
          </nav>
          <TrackedLink href={siteLinks.signup} event="hero_signup_click" className="mt-4 w-full">Попробовать 30 дней бесплатно</TrackedLink>
        </div>
      )}
    </header>
  );
}
