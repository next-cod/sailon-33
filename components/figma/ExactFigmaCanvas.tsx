"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import ExactFigmaPage from "./ExactFigmaPage";
import { InteractiveFooter } from "./InteractiveFooter";
import { FunctionalLayer } from "./FunctionalLayer";
import { SavingsCalculatorPopup } from "@/components/marketing/SavingsCalculatorPopup";
import { useDocumentTitle, useSiteLanguage } from "@/lib/use-site-language";
import { translateText } from "@/lib/site-copy";

const DESIGN_WIDTH = 1700;
const DESIGN_HEIGHT = 13584;

const links = [
  { label: "Как отвечает", href: "#how", x: 496, y: 17, w: 146, h: 56 },
  { label: "Настройка", href: "#features", x: 646, y: 17, w: 132, h: 56 },
  { label: "Сценарии", href: "#demo", x: 780, y: 17, w: 86, h: 56 },
  { label: "Тарифы", href: "#pricing", x: 900, y: 17, w: 100, h: 56 },
  { label: "Вопросы", href: "#faq", x: 1007, y: 17, w: 74, h: 56 },
  { label: "Попробовать бесплатно", href: "#pricing", x: 1267, y: 20, w: 222, h: 50, targetId: "2013:175" },
  { label: "Попробовать бесплатно", href: "#pricing", x: 210, y: 597, w: 299, h: 59, targetId: "2013:11" },
  { label: "Поразговаривать с ботом", href: "#demo", x: 551, y: 589, w: 248, h: 77, targetId: "2070:3" },
  { label: "Попробовать бесплатно", href: "#pricing", x: 516, y: 850, w: 273, h: 73, targetId: "2158:2" },
  { label: "Попробовать бесплатно", href: "#pricing", x: 212, y: 12820, w: 290, h: 54, targetId: "2013:10" },
];

const anchors = [
  { id: "how", y: 2747 },
  { id: "features", y: 4609 },
  { id: "demo", y: 5427 },
  { id: "pricing", y: 10577 },
  { id: "faq", y: 11537 },
  { id: "team", y: 9650 },
  { id: "custom", y: 9140 },
];

const anchorPositions = Object.fromEntries(anchors.map(({ id, y }) => [`#${id}`, y]));

const headerLinks = [
  { ru: "Как отвечает", en: "How it responds", href: "#how" },
  { ru: "Настройка", en: "Setup", href: "#features" },
  { ru: "Сценарии", en: "Scenarios", href: "#demo" },
  { ru: "Тарифы", en: "Pricing", href: "#pricing" },
  { ru: "Вопросы", en: "Questions", href: "#faq" },
];

const revealNodeIds = [
  "2007:3", "2070:23", "2070:22", "2007:4", "2013:5", "2143:45",
  "2007:37", "2013:20", "2007:49", "2013:27", "2013:29", "2013:31", "2013:33", "2013:35",
  "2007:62", "2013:38", "2007:85", "2077:37", "2007:103", "2013:57", "2007:118",
  "2007:135", "2013:84", "2007:156", "2007:180", "2013:112", "2007:221", "2013:135",
  "2016:992", "2016:994", "2016:1005", "2016:1016", "2016:1027", "2007:244", "2013:143", "2007:276", "2013:162",
];

const translations: Record<string, string[]> = {
  "2007:37": ["Understands what the customer needs"],
  "2007:38": ["Responds naturally, understands the request, context, and the next step in the conversation"],
  "2007:39": ["Responds with personality"],
  "2007:41": ["Knows your business"],
  "2007:43": ["Keeps the context"],
  "2007:45": ["Follows up at the right time"],
  "2007:49": ["From the first message", "to a clear next step"],
  "2007:62": ["A different conversation goal at every stage"],
  "2007:85": ["Let AI speak the way your business does"],
  "2007:103": ["Do not take AI on trust", "Control what it is responsible for"],
  "2007:118": ["Decide how much of the conversation to automate"],
  "2007:135": ["Conversation logic changes with the business goal"],
  "2007:156": ["Saleon handles the routine", "A manager joins when it matters"],
  "2016:992": ["Four areas", "One system that moves the customer forward"],
  "2007:244": ["Test Saleon in real conversations before choosing a plan"],
  "2007:276": ["What is worth clarifying before the trial"],
  "2007:286": ["See how Saleon will work with your customers"],
  "2007:298": ["Saleon"],
  "2007:299": ["How it responds"],
  "2007:300": ["Business setup"],
  "2007:301": ["Scenarios"],
  "2007:302": ["Pricing"],
  "2007:303": ["Questions"],
  "2007:304": ["Try for free"],
};

export function ExactFigmaCanvas() {
  const [scale, setScale] = useState(1);
  const { language } = useSiteLanguage();
  useDocumentTitle(language === "ru" ? "Сэйлон — AI-продавец с характером" : "Saleon — AI sales assistant with personality");
  const [headerCompact, setHeaderCompact] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateScale = () => setScale(document.documentElement.clientWidth / DESIGN_WIDTH);
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    const updateHeader = () => setHeaderCompact(window.scrollY > 36);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const navigateTo = useCallback((href: string) => {
    const target = anchorPositions[href];
    if (target === undefined) return;
    const currentScale = document.documentElement.clientWidth / DESIGN_WIDTH;
    window.history.replaceState(null, "", href);
    window.scrollTo({ top: Math.max(0, target * currentScale - 68), behavior: "smooth" });
  }, []);

  useEffect(() => {
    const alignWithHash = () => {
      const href = window.location.hash;
      if (anchorPositions[href] === undefined) return;
      window.requestAnimationFrame(() => navigateTo(href));
    };
    alignWithHash();
    window.addEventListener("hashchange", alignWithHash);
    return () => window.removeEventListener("hashchange", alignWithHash);
  }, [navigateTo, scale]);

  useEffect(() => {
    const root = canvasRef.current;
    if (!root) return;
    const nodes = revealNodeIds
      .map((id) => root.querySelector<HTMLElement>(`[data-node-id="${id}"]`))
      .filter((node): node is HTMLElement => Boolean(node));
    nodes.forEach((node, index) => {
      node.classList.add("figma-reveal");
      node.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 55}ms`);
    });
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = canvasRef.current;
    if (!root) return;
    document.documentElement.lang = language;
    root.querySelectorAll<HTMLParagraphElement>("p").forEach((paragraph) => {
      if (paragraph.children.length > 0) return;
      if (!paragraph.dataset.ruText) paragraph.dataset.ruText = paragraph.textContent ?? "";
      paragraph.textContent = language === "en"
        ? translateText(language, paragraph.dataset.ruText)
        : paragraph.dataset.ruText;
    });
    for (const [id, values] of Object.entries(translations)) {
      const node = root.querySelector<HTMLElement>(`[data-node-id="${id}"]`);
      if (!node) continue;
      const paragraphs = Array.from(node.querySelectorAll<HTMLParagraphElement>("p"));
      paragraphs.forEach((paragraph, index) => {
        if (!paragraph.dataset.ruText) paragraph.dataset.ruText = paragraph.textContent ?? "";
        paragraph.textContent = language === "en" ? values[index] ?? "" : paragraph.dataset.ruText;
      });
    }
    const languageLabel = root.querySelector<HTMLElement>('[data-node-id="2132:13"] p');
    if (languageLabel) languageLabel.textContent = language.toUpperCase();
    const brandLabel = root.querySelector<HTMLElement>('[data-node-id="2007:298"] p');
    if (brandLabel) brandLabel.textContent = language === "ru" ? "Сэйлон" : "Saleon";
  }, [language]);

  const setInteracting = (targetId: string | undefined, active: boolean) => {
    if (!targetId) return;
    canvasRef.current?.querySelector<HTMLElement>(`[data-node-id="${targetId}"]`)?.classList.toggle("is-interacting", active);
  };

  return (
    <main
        className="figma-page-shell"
        style={{ width: DESIGN_WIDTH * scale, height: DESIGN_HEIGHT * scale }}
      >
      <header className={`sticky-site-header${headerCompact ? " is-compact" : ""}`}>
        <div className="sticky-site-header__inner">
          <button type="button" className="sticky-site-header__brand" aria-label={language === "ru" ? "Сэйлон — наверх" : "Saleon — back to top"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Image src="/figma/logo-header.png" alt="" width={52} height={52} priority />
            <strong>{language === "ru" ? "Сэйлон" : "Saleon"}</strong>
          </button>
          <nav className="sticky-site-header__nav" aria-label={language === "ru" ? "Основная навигация" : "Main navigation"}>
            {headerLinks.map((item) => (
              <a key={item.href} href={item.href} onClick={(event) => { event.preventDefault(); navigateTo(item.href); }}>
                {language === "ru" ? item.ru : item.en}
              </a>
            ))}
          </nav>
          <div className="sticky-site-header__actions">
            <button type="button" className="sticky-site-header__cta" onClick={() => navigateTo("#pricing")}>{language === "ru" ? "Попробовать бесплатно" : "Try for free"}</button>
          </div>
        </div>
      </header>
      <SavingsCalculatorPopup onCreateBot={() => navigateTo("#pricing")} />
      <div
        ref={canvasRef}
        className="figma-page-canvas"
        style={{ width: DESIGN_WIDTH, height: DESIGN_HEIGHT, transform: `scale(${scale})` }}
      >
        <ExactFigmaPage language={language} />
        <FunctionalLayer rootRef={canvasRef} language={language} />
        {anchors.map((anchor) => (
          <span key={anchor.id} id={anchor.id} className="site-anchor absolute left-0" style={{ top: anchor.y }} />
        ))}
        {links.slice(6).map((link, index) => (
          <a
            key={`${link.label}-${index}`}
            href={link.href}
            aria-label={translateText(language, link.label)}
            className="absolute z-[100] block rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#26775e]"
            style={{ left: link.x, top: link.y, width: link.w, height: link.h }}
            onClick={(event) => { event.preventDefault(); navigateTo(link.href); }}
            onMouseEnter={() => setInteracting(link.targetId, true)}
            onMouseLeave={() => setInteracting(link.targetId, false)}
            onFocus={() => setInteracting(link.targetId, true)}
            onBlur={() => setInteracting(link.targetId, false)}
          />
        ))}
        <InteractiveFooter language={language} onNavigate={navigateTo} />
      </div>
    </main>
  );
}
