import { Item, Stagger } from "./motion";
import { SectionHeading, Stars } from "./ui";

const TESTIMONIALS = [
  {
    quote:
      "Сын сам просит пойти на шахматы — для нас это уже победа. Через полгода Миша получил первый юношеский разряд и стал заметно собраннее в школе. «На коне» — лучшее, что мы записали за год.",
    name: "Анна",
    role: "мама Миши, 8 лет",
    result: "III юношеский разряд",
    initials: "А",
    color: "bg-gradient-to-br from-gold-400 to-amber-600",
    featured: true,
  },
  {
    quote:
      "Начал с нуля в 34 года — боялся, что поздно. За 6 месяцев рейтинг вырос до 1650 (+420 Elo) и занял первое место в турнире школы. Тренер верит в тебя больше, чем ты сам.",
    name: "Сергей",
    role: "ученик, 34 года",
    result: "Рейтинг 1650 (+420 Elo)",
    initials: "С",
    color: "bg-gradient-to-br from-sky-300 to-indigo-500",
  },
  {
    quote:
      "Дочь выполнила норму КМС в 12 лет. Отдельное спасибо за психологическую подготовку перед турнирами — это работа на результат, а не «просто кружок».",
    name: "Ольга",
    role: "мама Веры, 12 лет",
    result: "КМС в 12 лет",
    initials: "О",
    color: "bg-gradient-to-br from-fuchsia-400 to-pink-500",
  },
  {
    quote:
      "Живём за 3 000 км от Москвы, занимаемся онлайн. Организация идеальная: доска, записи, домашние задания. Сын ждёт каждый урок — что ещё нужно родителям?",
    name: "Дмитрий",
    role: "папа Артёма · Новосибирск",
    result: "Онлайн · 2 года",
    initials: "Д",
    color: "bg-gradient-to-br from-emerald-300 to-teal-500",
  },
  {
    quote:
      "Записали дочку в 5 лет — боялась, что рано. Игровая методика сработала: через месяц сама раскладывала задачи, через год уверенно играет турниры.",
    name: "Елена",
    role: "мама Сони, 6 лет",
    result: "Старт в 5 лет",
    initials: "Е",
    color: "bg-gradient-to-br from-amber-300 to-orange-500",
  },
  {
    quote:
      "Группа до 10 человек — это не маркетинг: тренер реально знает каждую партию сына. А отчёты после уроков — отдельный респект школе.",
    name: "Максим",
    role: "папа Данила, 10 лет",
    result: "Группа из 8 человек",
    initials: "М",
    color: "bg-gradient-to-br from-violet-400 to-purple-600",
  },
];

function TestimonialCard({
  t,
  featured = false,
}: {
  t: (typeof TESTIMONIALS)[number];
  featured?: boolean;
}) {
  return (
    <Item className={featured ? "sm:col-span-2 lg:col-span-3" : ""}>
      <figure
        className={`group relative flex h-full flex-col rounded-3xl border border-white/15 bg-[#1d1811] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:bg-[#231e16] md:p-8 ${
          featured ? "testimonial-featured border-gold-400/50 bg-gradient-to-br from-[#241c10] to-[#1a140b]" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <Stars />
          {featured && (
            <span className="rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-300">
              История года
            </span>
          )}
        </div>
        <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-zinc-300">
          «{t.quote}»
        </blockquote>
        <figcaption className="mt-7 flex items-center justify-between gap-4 border-t border-white/[0.07] pt-5">
          <div className="flex items-center gap-3">
            <span
              className={`grid h-10 w-10 place-items-center rounded-full text-[13px] font-black text-ink-950 ${t.color}`}
              aria-hidden
            >
              {t.initials}
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-[12px] text-zinc-500">{t.role}</p>
            </div>
          </div>
          <span className="whitespace-nowrap rounded-full bg-white/[0.06] px-3 py-1.5 text-[11px] font-bold text-gold-300">
            {t.result}
          </span>
        </figcaption>
      </figure>
    </Item>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="relative scroll-mt-24 py-24 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-board absolute inset-0 opacity-70" />
        <div className="absolute -left-32 top-1/4 h-[26rem] w-[26rem] animate-drift rounded-full bg-gold-400/[0.12] blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-[24rem] w-[24rem] animate-drift-2 rounded-full bg-emerald-500/[0.10] blur-[120px]" />


      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Отзывы"
          title={
            <>
              Родители и ученики —
              <br />
              <span className="text-gradient-gold">о настоящих результатах.</span>
            </>
          }
          description="Никаких постановочных «спасибо». Только истории людей, которые пришли с нуля — и остались с разрядами, рейтингом и любовью к шахматам."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} featured={t.featured} />
          ))}
        </Stagger>

        <div className="mt-12 flex justify-center">
          <p className="text-sm text-zinc-500">
            <span className="font-semibold text-white">4.9/5</span> — средняя оценка по{" "}
            <span className="font-semibold text-white">200+</span> отзывам родителей и учеников
          </p>
        </div>
      </div>
    </section>
  );
}
