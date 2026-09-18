import Image from "next/image";
import { ArrowDownRight, UsersRound } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const team = [
  {
    name: "Татьяна",
    role: "Стратегия и маркетинг",
    description: "Исследует аудиторию, формирует позиционирование и проектирует путь клиента — от первого касания до заявки.",
    image: "/team/tatiana.webp",
  },
  {
    name: "Игорь",
    role: "Продукт и разработка",
    description: "Отвечает за архитектуру продукта, AI-логику и интеграции. Следит, чтобы сценарии работали стабильно и предсказуемо.",
    image: "/team/igor.webp",
  },
  {
    name: "Дима",
    role: "Дизайн и веб",
    description: "Собирает визуальный язык Сейлона, интерфейсы и сайт. Делает сложный продукт понятным с первого экрана.",
    image: "/team/dima.webp",
  },
  {
    name: "Арина",
    role: "Контент и коммуникации",
    description: "Развивает контент и коммуникации бренда. Переводит возможности продукта на язык клиентов и находит сильные темы для продвижения.",
    image: "/team/arina.webp",
  },
] as const;

export function TeamSection() {
  return (
    <section id="team" className="section-space overflow-hidden bg-[var(--forest-deep)] text-white">
      <div className="container-shell">
        <Reveal className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <span className="eyebrow !text-[var(--signal)]">Команда Сейлона</span>
            <h2 className="section-title balance mt-5 max-w-4xl">Четыре направления. Одна система, которая ведёт клиента дальше.</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-white/60 lg:justify-self-end">Мы соединяем маркетинг, продукт, дизайн и коммуникации, чтобы Сейлон был не просто технологией, а понятным рабочим инструментом для бизнеса.</p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.05}>
              <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[.055] transition duration-300 hover:-translate-y-1 hover:border-[var(--signal)]/35 hover:bg-white/[.075]">
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--forest)]">
                  <Image
                    src={member.image}
                    alt={`Стилизованный портрет: ${member.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                    priority={index < 2}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--forest-deep)]/65 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-[var(--forest-deep)]/70 px-3 py-1.5 text-xs font-bold text-[var(--signal)] backdrop-blur-md">{member.role}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-extrabold tracking-[-.03em]">{member.name}</h3>
                    <ArrowDownRight size={19} className="text-[var(--signal)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/58">{member.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12} className="mt-5 flex flex-col gap-4 rounded-[24px] border border-[var(--signal)]/20 bg-[var(--signal)]/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--signal)] text-[var(--forest-deep)]"><UsersRound size={20} /></span>
            <div><p className="font-bold">От идеи до работающего сценария — внутри одной команды</p><p className="mt-1 text-sm text-white/58">Решения по продукту и его подаче принимаются вместе, а не передаются по цепочке подрядчиков.</p></div>
          </div>
          <span className="shrink-0 text-sm font-bold text-[var(--signal)]">Сейлон создают люди</span>
        </Reveal>
      </div>
    </section>
  );
}
