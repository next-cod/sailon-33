import { Logo } from "./Logo";
import { siteLinks } from "@/config/links";

export function Footer() {
  return (
    <footer className="dark-panel border-t border-white/10 pb-24 pt-12 md:py-12">
      <div className="container-shell grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <Logo light />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">AI-продавец для входящих обращений, которого бизнес настраивает под собственные знания, характер и путь клиента.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70 md:justify-end">
          <a href={siteLinks.support}>Поддержка</a>
          <a href={siteLinks.privacy}>Конфиденциальность</a>
          <a href={siteLinks.terms}>Условия</a>
        </div>
        <p className="text-xs text-white/35">© 2026 Сейлон</p>
      </div>
    </footer>
  );
}
