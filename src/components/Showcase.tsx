import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Item, Reveal, Stagger } from "./motion";
import { Eyebrow, IconCheck, IconClock } from "./ui";

const BULLETS = [
  "Живая онлайн-доска — автоповтор партий и разбор каждой ошибки",
  "Задачи с автопроверкой и рейтингом — соревнуйтесь с одногруппниками",
  "Отчёт родителям после каждого урока: тема, успехи, задача на неделю",
  "Турнирный календарь, рейтинг и разряды — в одном месте",
];

const GLYPHS: Record<string, string> = {
  r: "♜", n: "♞", b: "♝", q: "♛", k: "♚", p: "♟",
  R: "♜", N: "♞", B: "♝", Q: "♛", K: "♚", P: "♟",
};

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];

type MoveStep = {
  moveNum: number;
  whiteName: string;
  blackName?: string;
  comment: string;
  evalText: string;
  board: (string | null)[][];
  highlight?: { r: number; c: number }[];
};

// Последовательность ходов в Итальянской партии (Гамбит Эванса)
const GAME_STEPS: MoveStep[] = [
  {
    moveNum: 0,
    whiteName: "Старт",
    comment: "Начальная расстановка фигур",
    evalText: "Оценка: 0.0 · Равенство",
    board: [
      ["r", "n", "b", "q", "k", "b", "n", "r"],
      ["p", "p", "p", "p", "p", "p", "p", "p"],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ["P", "P", "P", "P", "P", "P", "P", "P"],
      ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ],
  },
  {
    moveNum: 1,
    whiteName: "1. e4",
    blackName: "e5",
    comment: "Захват центра пешками",
    evalText: "Оценка: +0.2 · Ход белых",
    highlight: [{ r: 4, c: 4 }, { r: 3, c: 4 }],
    board: [
      ["r", "n", "b", "q", "k", "b", "n", "r"],
      ["p", "p", "p", "p", null, "p", "p", "p"],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, "p", null, null, null],
      [null, null, null, null, "P", null, null, null],
      [null, null, null, null, null, null, null, null],
      ["P", "P", "P", "P", null, "P", "P", "P"],
      ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ],
  },
  {
    moveNum: 2,
    whiteName: "2. Кf3",
    blackName: "Кc6",
    comment: "Развитие коней к центру",
    evalText: "Оценка: +0.3 · Нападение на e5",
    highlight: [{ r: 5, c: 5 }, { r: 2, c: 2 }],
    board: [
      ["r", null, "b", "q", "k", "b", "n", "r"],
      ["p", "p", "p", "p", null, "p", "p", "p"],
      [null, null, "n", null, null, null, null, null],
      [null, null, null, null, "p", null, null, null],
      [null, null, null, null, "P", null, null, null],
      [null, null, null, null, null, "N", null, null],
      ["P", "P", "P", "P", null, "P", "P", "P"],
      ["R", "N", "B", "Q", "K", "B", null, "R"],
    ],
  },
  {
    moveNum: 3,
    whiteName: "3. Сc4",
    blackName: "Сc5",
    comment: "Итальянская партия: прицел на пункт f7",
    evalText: "Оценка: +0.3 · Активные слоны",
    highlight: [{ r: 4, c: 2 }, { r: 3, c: 2 }],
    board: [
      ["r", null, "b", "q", "k", null, "n", "r"],
      ["p", "p", "p", "p", null, "p", "p", "p"],
      [null, null, "n", null, null, null, null, null],
      [null, null, "b", null, "p", null, null, null],
      [null, null, "B", null, "P", null, null, null],
      [null, null, null, null, null, "N", null, null],
      ["P", "P", "P", "P", null, "P", "P", "P"],
      ["R", "N", null, "Q", "K", null, null, "R"],
    ],
  },
  {
    moveNum: 4,
    whiteName: "4. b4!",
    blackName: "Сxb4",
    comment: "Гамбит Эванса! Жертва пешки за инициативу",
    evalText: "Оценка: +0.6 · Взрывная атака белых!",
    highlight: [{ r: 4, c: 1 }, { r: 4, c: 1 }],
    board: [
      ["r", null, "b", "q", "k", null, "n", "r"],
      ["p", "p", "p", "p", null, "p", "p", "p"],
      [null, null, "n", null, null, null, null, null],
      [null, null, null, null, "p", null, null, null],
      [null, "b", "B", null, "P", null, null, null],
      [null, null, null, null, null, "N", null, null],
      ["P", null, "P", "P", null, "P", "P", "P"],
      ["R", "N", null, "Q", "K", null, null, "R"],
    ],
  },
  {
    moveNum: 5,
    whiteName: "5. c3",
    blackName: "Сa5",
    comment: "Строим мощный пешечный центр",
    evalText: "Оценка: +0.7 · Позиционное преимущество",
    highlight: [{ r: 5, c: 2 }, { r: 3, c: 0 }],
    board: [
      ["r", null, "b", "q", "k", null, "n", "r"],
      ["p", "p", "p", "p", null, "p", "p", "p"],
      [null, null, "n", null, null, null, null, null],
      ["b", null, null, null, "p", null, null, null],
      [null, null, "B", null, "P", null, null, null],
      [null, null, "P", null, null, "N", null, null],
      ["P", null, null, "P", null, "P", "P", "P"],
      ["R", "N", null, "Q", "K", null, null, "R"],
    ],
  },
  {
    moveNum: 6,
    whiteName: "6. d4!",
    blackName: "exd4",
    comment: "Вскрытие центральных линий под атаку",
    evalText: "Оценка: +1.0 · Белые доминируют",
    highlight: [{ r: 4, c: 3 }, { r: 4, c: 3 }],
    board: [
      ["r", null, "b", "q", "k", null, "n", "r"],
      ["p", "p", "p", "p", null, "p", "p", "p"],
      [null, null, "n", null, null, null, null, null],
      ["b", null, null, null, null, null, null, null],
      [null, null, "B", "p", "P", null, null, null],
      [null, null, "P", null, null, "N", null, null],
      ["P", null, null, null, null, "P", "P", "P"],
      ["R", "N", null, "Q", "K", null, null, "R"],
    ],
  },
  {
    moveNum: 7,
    whiteName: "7. O-O",
    blackName: "d6",
    comment: "Короткая рокировка: король укрыт",
    evalText: "Оценка: +1.3 · Полная готовность к штурму",
    highlight: [{ r: 7, c: 6 }, { r: 7, c: 5 }],
    board: [
      ["r", null, "b", "q", "k", null, "n", "r"],
      ["p", "p", "p", null, null, "p", "p", "p"],
      [null, null, "n", "p", null, null, null, null],
      ["b", null, null, null, null, null, null, null],
      [null, null, "B", "p", "P", null, null, null],
      [null, null, "P", null, null, "N", null, null],
      ["P", null, null, null, null, "P", "P", "P"],
      ["R", "N", null, "Q", null, "R", "K", null],
    ],
  },
  {
    moveNum: 8,
    whiteName: "8. Фb3! 🔥",
    blackName: "Фe7",
    comment: "Ферзь и слон создают смертельную угрозу на f7!",
    evalText: "Оценка: +2.1 · Решающий перевес белых!",
    highlight: [{ r: 5, c: 1 }, { r: 1, c: 5 }],
    board: [
      ["r", null, "b", null, "k", null, "n", "r"],
      ["p", "p", "p", null, "q", "p", "p", "p"],
      [null, null, "n", "p", null, null, null, null],
      ["b", null, null, null, null, null, null, null],
      [null, null, "B", "p", "P", null, null, null],
      [null, "Q", "P", null, null, "N", null, null],
      ["P", null, null, null, null, "P", "P", "P"],
      ["R", "N", null, null, null, "R", "K", null],
    ],
  },
];

/**
 * Изолированный компонент зацикленной доски.
 * Работает ТОЛЬКО когда видeн на экране (`useInView`),
 * не вызывает перерисовку родительских компонентов и не сбивает скролл!
 */
function LoopingChessBoard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });
  const [stepIdx, setStepIdx] = useState(0);

  const step = GAME_STEPS[stepIdx];

  useEffect(() => {
    // Если секция НЕ видна пользователю — останавливаем таймер полностью!
    if (!isInView) return;

    const delay = stepIdx === GAME_STEPS.length - 1 ? 2600 : 1600;
    const timer = setTimeout(() => {
      setStepIdx((prev) => (prev + 1) % GAME_STEPS.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, stepIdx]);

  return (
    <div ref={containerRef} className="relative w-full max-w-[460px]">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[110%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-gold-400/25 via-transparent to-amber-500/20 blur-3xl"
      />

      <div className="relative w-full rounded-[2.2rem] border border-white/20 bg-[#1a150e] p-3 shadow-2xl shadow-black/80">
        {/* Окно браузера */}
        <div className="overflow-hidden rounded-[1.8rem] bg-[#120e0a]">
          {/* Хедер браузера */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#1d1811] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-2 rounded-full bg-white/[0.08] px-3 py-1 text-[11px] font-semibold text-zinc-300">
                kone.school · итальянская партия
              </span>
            </div>

            {/* Значок GIF / Живой повтор */}
            <span className="flex items-center gap-1.5 rounded-full bg-gold-400/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-gold-300">
              <span className="h-2 w-2 animate-ping rounded-full bg-gold-400" />
              GIF-Повтор
            </span>
          </div>

          <div className="space-y-4 p-4">
            {/* Укрупненная шахматная доска */}
            <div className="overflow-hidden rounded-2xl border-2 border-gold-400/40 shadow-2xl">
              <div
                className="grid grid-cols-8 aspect-square w-full"
                role="img"
                aria-label="Зацикленная анимированная шахматная партия"
              >
                {step.board.map((row, r) =>
                  row.map((piece, c) => {
                    const light = (r + c) % 2 === 0;
                    const isHighlighted = step.highlight?.some(
                      (h) => h.r === r && h.c === c
                    );
                    const isWhitePiece =
                      piece !== null && piece === piece.toUpperCase();

                    return (
                      <div
                        key={`${r}-${c}`}
                        className={`relative grid aspect-square place-items-center transition-all duration-300 ${
                          isHighlighted
                            ? "bg-gold-400/65 ring-2 ring-gold-200 ring-inset"
                            : light
                            ? "bg-[#e8dbb9]"
                            : "bg-[#97784b]"
                        }`}
                      >
                        {piece && (
                          <span
                            className={`select-none text-[clamp(22px,6vw,38px)] leading-none font-extrabold transition-transform duration-300 ${
                              isWhitePiece
                                ? "text-[#ffffff] drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]"
                                : "text-[#18110a] drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]"
                            }`}
                          >
                            {GLYPHS[piece]}
                          </span>
                        )}
                        {r === 7 && (
                          <span
                            className={`absolute bottom-0.5 left-1 text-[9px] font-extrabold ${
                              light ? "text-[#97784b]" : "text-[#e8dbb9]"
                            }`}
                          >
                            {FILES[c]}
                          </span>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Информационная полоса к текущему ходу */}
            <div className="rounded-xl border border-gold-400/30 bg-[#221a12] p-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-gold-400 px-2 py-0.5 font-display text-xs font-black text-ink-950">
                    {step.moveNum === 0 ? "0" : step.moveNum}
                  </span>
                  <p className="font-display text-sm font-bold text-white">
                    {step.moveNum === 0 ? "Старт партии" : `${step.whiteName} ${step.blackName || ""}`}
                  </p>
                </div>
                <span className="rounded-full bg-gold-400/15 px-2.5 py-0.5 text-[11px] font-extrabold text-gold-300">
                  {step.evalText}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">{step.comment}</p>
            </div>

            {/* Чипы статистики ученика */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {[
                ["Рейтинг", "1 680"],
                ["Решено задач", "1 840"],
                ["Разряд", "II юнош."],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-[#1a150e] px-2.5 py-2 text-center"
                >
                  <p className="text-[8px] font-bold uppercase tracking-wider text-zinc-500">
                    {label}
                  </p>
                  <p className="mt-0.5 font-display text-[12px] font-extrabold text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Плавающая карточка — разбор */}
      <div className="glass-strong absolute -left-12 top-16 hidden w-48 animate-float rounded-2xl p-4 shadow-2xl shadow-black/50 lg:block">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gold-400/15 text-gold-400">
            <IconClock className="h-4 w-4" />
          </span>
          <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
            Разбор партии
          </p>
        </div>
        <p className="mt-2 text-[13px] font-bold text-white">Сегодня · 19:00</p>
        <p className="text-[11px] text-zinc-500">с тренером Игорем Соколовым</p>
      </div>

      {/* Плавающая карточка — задача */}
      <div className="glass-strong absolute -right-8 bottom-12 hidden animate-float-slow items-center gap-2.5 rounded-2xl p-3.5 pr-5 shadow-2xl shadow-black/50 lg:flex">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
          <IconCheck className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[12px] font-bold text-white">Задача дня решена!</p>
          <p className="text-[10px] text-zinc-500">Серия из 12 побед подряд</p>
        </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="classes" className="relative scroll-mt-24 overflow-hidden py-24 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-board absolute inset-0 opacity-70" />
        <div className="absolute right-0 top-1/4 h-[30rem] w-[30rem] animate-drift rounded-full bg-gold-400/[0.14] blur-[110px]" />
        <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] animate-drift-2 rounded-full bg-emerald-500/[0.14] blur-[110px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        {/* Текстовый блок */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <Eyebrow>Платформа школы</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl">
              Один кабинет —
              <br />
              <span className="text-gradient-gold">вся шахматная жизнь.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg">
              Живая онлайн-доска с автоповтором: смотрите ключевые партии, изучайте тактические
              приёмы и разборы комбинаций прямо в браузере без установки лишних программ.
            </p>
          </Reveal>

          <Stagger className="mt-9 space-y-4" gap={0.09}>
            {BULLETS.map((b) => (
              <Item key={b} y={14}>
                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-400/15 text-gold-400">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-[15px] text-zinc-300">{b}</p>
                </div>
              </Item>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <div className="flex -space-x-2.5">
                {["А", "М", "С", "В"].map((ch, i) => (
                  <span
                    key={ch}
                    className={`grid h-9 w-9 place-items-center rounded-full border-2 border-ink-950 text-[11px] font-black text-ink-950 ${
                      ["bg-gold-400", "bg-emerald-300", "bg-sky-300", "bg-fuchsia-300"][i]
                    }`}
                  >
                    {ch}
                  </span>
                ))}
              </div>
              <p className="text-[13px] text-zinc-500">
                <span className="font-semibold text-white">500+ учеников</span> уже занимаются по
                платформе
              </p>
            </div>
          </Reveal>
        </div>

        {/* Укрупненная платформа с зацикленной доской */}
        <Reveal delay={0.15} y={44} className="order-1 flex justify-center lg:order-2">
          <LoopingChessBoard />
        </Reveal>
      </div>
    </section>
  );
}
