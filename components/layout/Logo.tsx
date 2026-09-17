export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="inline-flex items-center gap-2.5 rounded-md font-bold" aria-label="Сейлон — на главную">
      <span className={`grid size-9 place-items-center rounded-xl text-lg font-extrabold ${light ? "bg-white text-[var(--forest-deep)]" : "bg-[var(--forest)] text-white"}`}>С</span>
      <span className="text-xl tracking-[-0.04em]">Сейлон</span>
    </a>
  );
}
