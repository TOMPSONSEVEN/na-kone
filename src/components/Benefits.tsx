import type { ReactNode } from "react";
import { Counter, Item, Reveal, Stagger } from "./motion";
import { Button, Eyebrow, IconShield, IconTarget, IconTrophy, IconUsers } from "./ui";

const IMG =
  "https://images.pexels.com/photos/6955015/pexels-photo-6955015.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000";

const BENEFITS: { icon: ReactNode; title: string; copy: string }[] = [
  {
    icon: <IconTrophy className="h-5 w-5" />,
    title: "Рейтинг ФИДЕ и титулы",
    copy: "Международные мастера и КМС, которые сами играют в турнирах и следят за современными трендами.",
  },
  {
    icon: <IconUsers className="h-5 w-5" />,
    title: "Группы до 10 человек",
    copy: "Тренер видит каждую партию и каждого ученика — не только первые доски. Внимание не размазывается.",
  },
  {
    icon: <IconTarget className="h-5 w-5" />,
    title: "Программа под ученика",
    copy: "Темп, дебютный репертуар и турнирный график подбираются индивидуально — под возраст, характер и цель.",
  },
  {
    icon: <IconShield className="h-5 w-5" />,
    title: "Прозрачность для родителей",
    copy: "Отчёт после каждого урока и открытый чат с тренером. Вы всегда знаете, что проходит ребёнок.",
  },
];

const TRAINERS = [
  {
    name: "Игорь Соколов",
    title: "Международный мастер · ФИДЕ 2487",
    exp: "20 лет опыта",
    note: "Готовит к первенству России и этапам Кубка страны. Воспитал 14 призёров всероссийских турниров.",
    photo:
      "https://images.pexels.com/photos/6326377/pexels-photo-6326377.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
    comment: "«Отличная подготовка к турниру! Видно, что прорабатываешь открытия.»",
  },
  {
    name: "Мария Волкова",
    title: "Кандидат в мастера · ФИДЕ 2145",
    exp: "12 лет опыта",
    note: "Дошкольники 4–7 лет: авторская игровая методика, мягкий старт и первые победы без слёз.",
    photo:
      "https://images.pexels.com/photos/37851579/pexels-photo-37851579.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
    comment: "«Соня, ты сегодня играла смело! Вот именно такие ходы нам нужны.»",
  },
  {
    name: "Артём Лебедев",
    title: "Мастер ФИДЕ · ФИДЕ 2310",
    exp: "10 лет опыта",
    note: "Взрослые с нуля и онлайн-группы из любого города. Довёл до первого разряда 30+ учеников.",
    photo:
      "https://images.pexels.com/photos/33345000/pexels-photo-33345000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
    comment: "«Твой рейтинг вырос на 50 пунктов! Держи эту форму 🔥»",
  },
];

export default function Benefits() {
  return (
    <section id="trainers" className="relative scroll-mt-24 overflow-hidden py-24 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-board absolute inset-0 opacity-70" />
        <div className="absolute -right-40 top-20 h-[28rem] w-[28rem] animate-drift rounded-full bg-gold-400/[0.12] blur-[130px]" />
        <div className="absolute -left-40 bottom-10 h-[26rem] w-[26rem] animate-drift-2 rounded-full bg-emerald-500/[0.10] blur-[130px]" />


      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <Reveal className="relative" y={40}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-5 rounded-[2.6rem] bg-gradient-to-br from-amber-500/15 via-transparent to-gold-400/15 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src={IMG}
                alt="Занятие с тренером: тёплая и живая атмосфера обучения шахматам"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/5]"
                width={1000}
                height={1200}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />

              {/* Стат-карточка */}
              <div className="glass-strong absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-2xl p-5">
                <div>
                  <p className="font-display text-3xl font-extrabold text-white md:text-4xl">
                    <Counter to={96} suffix="%" />
                  </p>
                  <p className="mt-1 text-[12px] leading-snug text-zinc-400">
                    родителей замечают прогресс
                    <br />
                    ребёнка за полгода
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-3xl font-extrabold text-white md:text-4xl">
                    <Counter to={500} suffix="+" />
                  </p>
                  <p className="mt-1 text-[12px] text-zinc-400">
                    учеников
                    <br />
                    с 2011 года
                  </p>
                </div>
              </div>
            </div>

            {/* Плавающий чип */}
            <div className="glass-strong absolute -top-4 right-6 hidden animate-float rounded-full px-4 py-2 shadow-xl shadow-black/50 sm:block">
              <p className="text-[12px] font-semibold text-white">
                Основана в 2011 · 15 лет в шахматах
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <Eyebrow>Тренеры</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl">
              Тренеры, которые
              <br />
              <span className="text-gradient-gold">видят каждого ученика.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg">
              Все наставники школы — действующие шахматисты с рейтингом ФИДЕ и опытом преподавания
              от 10 лет. Группы до 10 человек, поэтому мы знаем сильные стороны и зоны роста
              каждого ученика.
            </p>
          </Reveal>

          <Stagger className="mt-10 space-y-7" gap={0.1}>
            {BENEFITS.map((b) => (
              <Item key={b.title} y={18}>
                <div className="group flex gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-400/25 bg-gold-400/10 text-gold-400 transition-all duration-300 group-hover:bg-gold-400 group-hover:text-ink-950">
                    {b.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-[16px] font-bold text-white">{b.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{b.copy}</p>
                  </div>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </div>

      {/* Карточки тренеров */}
      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <Stagger className="grid gap-5 md:grid-cols-3" gap={0.1}>
          {TRAINERS.map((t) => (
            <Item key={t.name}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/15 bg-[#1d1811] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/40 hover:bg-[#231e16] hover:shadow-2xl hover:shadow-black/60">
                <div className="flex items-start justify-between gap-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    width={72}
                    height={72}
                    loading="lazy"
                    className="h-18 w-18 h-[72px] w-[72px] rounded-2xl object-cover border border-gold-400/30 shadow-lg"
                  />
                  <span className="rounded-full border border-gold-400/25 bg-gold-400/10 px-3 py-1 text-[11px] font-bold text-gold-300">
                    {t.exp}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{t.name}</h3>
                <p className="mt-1 text-[13px] font-medium text-gold-300/90">{t.title}</p>
                <p className="mt-4 text-sm leading-relaxed italic text-zinc-300">{t.comment}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{t.note}</p>
              </article>
            </Item>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 text-center">
            <Button href="#cta" variant="outline">
              Познакомиться с тренером на пробном уроке
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
