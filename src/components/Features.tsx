import type { ReactNode } from "react";
import { Item, Stagger, useSpotlight } from "./motion";
import {
  SectionHeading,
  IconCrown,
  IconTarget,
  IconGrid,
  IconSearch,
  IconTrophy,
  IconChart,
} from "./ui";

const FEATURES: { icon: ReactNode; title: string; copy: string }[] = [
  {
    icon: <IconCrown className="h-5 w-5" />,
    title: "Игровой подход",
    copy: "Для детей от 4 лет — сказки, истории и мини-игры вместо скучной теории. Ребёнок учится, потому что ему правда интересно.",
  },
  {
    icon: <IconTarget className="h-5 w-5" />,
    title: "12 уровней программы",
    copy: "От правил ходов до дебютного репертуара и эндшпильной техники. Каждый уровень — контрольная партия и новая ступень мастерства.",
  },
  {
    icon: <IconGrid className="h-5 w-5" />,
    title: "Тактика каждый день",
    copy: "Задачи дня и серии на онлайн-тренажёре: 15 минут в день развивают комбинационное зрение быстрее, чем часы зубрёжки теории.",
  },
  {
    icon: <IconSearch className="h-5 w-5" />,
    title: "Разбор каждой партии",
    copy: "Тренер разбирает все сыгранные партии: находим ошибки, закрепляем сильные ходы и учим анализировать самостоятельно.",
  },
  {
    icon: <IconTrophy className="h-5 w-5" />,
    title: "Турнирная практика",
    copy: "Ежемесячные турниры школы и подготовка к первенствам Москвы и России. Рейтинг ФШР и разряды — реально и достижимо.",
  },
  {
    icon: <IconChart className="h-5 w-5" />,
    title: "Личный трекер роста",
    copy: "Рейтинг, решённые задачи, победы и разряды — в личном кабинете. Ребёнок видит прогресс и гордится им. Родители — тоже.",
  },
];

function FeatureCard({ f, index }: { f: (typeof FEATURES)[number]; index: number }) {
  const { ref, onMouseMove } = useSpotlight<HTMLDivElement>();
  return (
    <Item>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        className="card-glow group relative h-full overflow-hidden rounded-3xl border border-white/15 bg-[#1d1811] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/40 hover:bg-[#231e16] hover:shadow-2xl hover:shadow-black/60 md:p-8"
      >
        <div className="mb-6 inline-grid h-12 w-12 place-items-center rounded-2xl border border-gold-400/25 bg-gold-400/10 text-gold-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-ink-950 group-hover:shadow-[0_0_28px_rgba(238,194,90,0.45)]">
          {f.icon}
        </div>
        <h3 className="font-display text-lg font-bold text-white">{f.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{f.copy}</p>
        <span
          aria-hidden
          className="absolute right-6 top-6 font-display text-4xl font-black text-white/[0.04] transition-colors duration-500 group-hover:text-gold-400/10"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </Item>
  );
}

export default function Features() {
  return (
    <section id="method" className="relative scroll-mt-24 py-24 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-board absolute inset-0 opacity-70" />
        <div className="absolute -left-32 top-1/3 h-[26rem] w-[26rem] animate-drift rounded-full bg-gold-400/[0.13] blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[24rem] w-[24rem] animate-drift-2 rounded-full bg-emerald-500/[0.11] blur-[120px]" />
        

      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Методика"
          title={
            <>
              От первого хода —
              <br />
              <span className="text-gradient-gold">до разрядных норм.</span>
            </>
          }
          description="Мы не зубрим дебюты и не мучаем детей теорией. Наша программа — это 12 уровней, игровая подача и постоянная практика. Так шахматы становятся любимым делом, а не «кружком по понедельникам»."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} f={f} index={i} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
