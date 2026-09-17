import { siteLinks } from "@/config/links";

export function MobileCta() {
  return <a href={siteLinks.signup} data-analytics-event="hero_signup_click" className="signal-shadow fixed inset-x-3 bottom-3 z-40 flex min-h-12 items-center justify-center rounded-full bg-[var(--signal)] px-5 py-3 text-center text-sm font-extrabold text-[var(--forest-deep)] md:hidden">Попробовать 30 дней бесплатно</a>;
}
