import { Reveal } from "./motion";

const PRESS = [
  "СПОРТ-ЭКСПРЕСС",
  "ЧЕМПИОНАТ",
  "РБК СПОРТ",
  "КОМСОМОЛЬСКАЯ ПРАВДА",
  "ШАХМАТНАЯ РОССИЯ",
  "МЕЛ",
  "УЧИТЕЛЬСКАЯ ГАЗЕТА",
  "ESPN",
];

const SCHOOLS = [
  "Школа № 57",
  "Лицей «Вторая школа»",
  "Пансион «Летово»",
  "Гимназия им. Примакова",
  "Школа ЦПМ",
  "Физтех-лицей",
  "Школа «Золотое сечение»",
];

export default function SocialProof() {
  return (
    <section
      aria-label="Публикации и партнёры"
      className="relative border-y border-white/[0.06] bg-ink-900/40 py-10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
            О нашей школе пишут
          </p>
        </Reveal>
      </div>

      <div className="mask-fade-x mt-7 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex items-center gap-16">
              {PRESS.map((name) => (
                <span
                  key={`${copy}-${name}`}
                  className="whitespace-nowrap font-display text-base font-bold tracking-[0.12em] text-zinc-600 transition-colors duration-300 hover:text-zinc-300"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-5 sm:px-8">
        <Reveal delay={0.1}>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
            Ведём шахматные кружки в школах
          </p>
        </Reveal>
        <div className="mask-fade-x mt-5 overflow-hidden">
          <div className="flex w-max animate-marquee-fast items-center gap-14 pr-14">
            {[0, 1].map((copy) => (
              <div key={copy} aria-hidden={copy === 1} className="flex items-center gap-14">
                {SCHOOLS.map((name) => (
                  <span
                    key={`${copy}-${name}`}
                    className="whitespace-nowrap font-display text-[15px] font-semibold tracking-wide text-zinc-500"
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
