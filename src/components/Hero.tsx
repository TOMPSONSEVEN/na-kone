import { motion } from "framer-motion";
import PhotoCarousel, { type CarouselPhoto } from "./PhotoCarousel";
import { Button, Eyebrow, IconCheck } from "./ui";
import { Counter, EASE } from "./motion";

const STATS = [
  { value: 500, suffix: "+", label: "учеников школы" },
  { value: 15, suffix: "", label: "лет обучаем" },
  { value: 120, suffix: "+", label: "призёров турниров" },
  { value: 4.9, suffix: "★", decimals: 1, label: "оценка родителей" },
];

const STUDENTS: CarouselPhoto[] = [
  {
    name: "Алиса",
    age: 7,
    img: "https://images.pexels.com/photos/33249889/pexels-photo-33249889.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
    alt: "Алиса уверенно держит шахматную фигуру на улице",
  },
  {
    name: "Соня",
    age: 6,
    img: "https://images.pexels.com/photos/33925343/pexels-photo-33925343.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
    alt: "Соня улыбается, играя в шахматы на улице",
  },
  {
    name: "Марк",
    age: 10,
    tag: "выполнил I разряд",
    img: "https://images.pexels.com/photos/9303636/pexels-photo-9303636.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
    alt: "Марк в очках играет в шахматы на траве",
  },
  {
    name: "Артём",
    age: 9,
    img: "https://images.pexels.com/photos/8923799/pexels-photo-8923799.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
    alt: "Артём увлечённо занимается за столом",
  },
  {
    name: "Вера",
    age: 12,
    img: "https://images.pexels.com/photos/33925342/pexels-photo-33925342.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
    alt: "Вера задумчиво оценивает позицию на доске",
  },
  {
    name: "Кира",
    age: 8,
    tag: "победительница Кубка",
    img: "https://images.pexels.com/photos/33925332/pexels-photo-33925332.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
    alt: "Кира продумывает победный ход",
  },
  {
    name: "Даниил",
    age: 11,
    img: "https://images.pexels.com/photos/7965829/pexels-photo-7965829.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
    alt: "Даниил играет в шахматы на природе",
  },
  {
    name: "Мария",
    age: 18,
    tag: "стала чемпионкой",
    img: "https://images.pexels.com/photos/6599605/pexels-photo-6599605.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
    alt: "Мария, 18 лет — победительница турнира, увлечена шахматной партией",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-board mask-fade-b absolute inset-0 opacity-80" />
        <div className="bg-grid mask-fade-b absolute inset-0 opacity-50" />
        <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] animate-drift rounded-full bg-gold-400/[0.25] blur-[120px]" />
        <div className="absolute -right-48 top-32 h-[34rem] w-[34rem] animate-drift-2 rounded-full bg-emerald-500/[0.22] blur-[120px]" />
        <div className="bg-noise absolute inset-0 opacity-[0.05]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Верхний заголовок — на всю ширину по центру */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.div variants={item}>
            <Eyebrow>Набор на новый сезон</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Научим думать
            <br />
            <span className="text-gradient-gold">на ход вперёд.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg"
          >
            Шахматная школа «На коне» — очные и онлайн-занятия для детей от 4 лет и взрослых.
            Тренеры с рейтингом ФИДЕ, авторская методика и турниры: от первых ходов до разрядных
            норм.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg">Записаться на пробный урок</Button>
            <Button href="#method" variant="ghost" size="lg" withArrow={false}>
              Как мы учим
            </Button>
          </motion.div>

          <motion.p variants={item} className="mt-4 text-[13px] text-zinc-400">
            Первый урок — бесплатно · Оплата после пробного · Отмена в любой момент
          </motion.p>
        </motion.div>

        {/* Главная 3D Карусель фотографий учеников — Крупно по центру прямо под текстом! */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
          className="relative mx-auto w-full max-w-4xl mt-12 mb-10"
        >
          <div className="relative flex flex-col items-center">
            {/* Свечение позади карусели */}
            <div
              aria-hidden
              className="absolute -inset-10 rounded-[3rem] bg-gradient-to-tr from-gold-400/25 via-transparent to-amber-500/20 blur-3xl"
            />

            <PhotoCarousel photos={STUDENTS} />

            {/* Зафиксированные карточки доп. информации по бокам */}
            <div className="glass-strong absolute -left-2 bottom-12 hidden w-44 rounded-2xl p-3.5 shadow-2xl shadow-black/70 xl:block z-30">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-gold-400/15 text-gold-400">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                  Прогресс ученика
                </p>
              </div>
              <p className="mt-1.5 flex items-end gap-1">
                <span className="font-display text-3xl font-extrabold text-white">+420</span>
                <span className="pb-0.5 text-base font-bold text-gold-300">Elo</span>
              </p>
              <p className="text-[11px] text-zinc-400">прирост за 6 месяцев · Даниил</p>
              <svg viewBox="0 0 120 36" className="mt-1.5 h-6 w-full" aria-hidden>
                <polyline
                  points="0,32 15,29 30,26 45,27 60,20 75,18 90,12 105,9 120,4"
                  fill="none"
                  stroke="#eec25a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

          </div>
        </motion.div>

        {/* Статистика школы — снизу в один ряд */}
        <motion.dl
          variants={container}
          initial="hidden"
          animate="show"
          className="grid w-full max-w-4xl mx-auto grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4 text-center"
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <dt className="order-2 mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                {s.label}
              </dt>
              <dd className="order-1 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
