import { Item, Reveal, Stagger } from "./motion";
import { Button, IconCheck, IconShield, SectionHeading } from "./ui";
import { cn } from "../utils/cn";

const PLANS = [
  {
    name: "Индивидуальные",
    tagline: "1 на 1 с тренером · 60 минут",
    price: 3500,
    unit: "/урок",
    dealLabel: "Пакет на месяц",
    dealPrice: "11 990 ₽ (4 занятия)",
    dealNote: "вместо 14 000 ₽ · выгода 2 010 ₽",
    cta: "Взять пакет 4 урока",
    features: [
      "Занятия 1 на 1 по 60 минут",
      "Программа под уровень и цель",
      "Разбор каждой партии",
      "Гибкое расписание — когда удобно вам",
      "Подготовка к турнирам и разрядам",
      "Личный чат с тренером",
    ],
  },
  {
    name: "Онлайн",
    tagline: "Из любого города · 60 минут",
    price: 2500,
    unit: "/урок",
    dealLabel: "Пакет на месяц",
    dealPrice: "8 990 ₽ (4 занятия)",
    dealNote: "выгоднее, чем занятия по отдельности",
    cta: "Взять пакет на месяц",
    features: [
      "Занятия по 60 минут с тренером онлайн",
      "Онлайн-доска и запись уроков",
      "Задачи с автопроверкой",
      "Онлайн-турниры школы",
      "Разборы партий в записи",
      "Отчёты родителям после урока",
    ],
  },
  {
    name: "Групповые",
    tagline: "Онлайн-группы · 60 минут",
    price: 900,
    unit: "/урок",
    dealLabel: "Пакет на месяц",
    dealPrice: "3 490 ₽ (4 занятия)",
    dealNote: "при оплате за месяц вперед",
    cta: "Взять пакет на месяц",
    features: [
      "Занятия онлайн в мини-группе до 10 человек",
      "Живое общение с тренером",
      "Онлайн-тренажёр с задачами",
      "Домашние задания с проверкой",
      "Ежемесячные онлайн-турниры школы",
      "Отчёты родителям после урока",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 overflow-hidden py-24 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-board absolute inset-0 opacity-70" />
        <div className="absolute left-1/2 top-24 h-[30rem] w-[46rem] -translate-x-1/2 animate-drift rounded-full bg-gold-400/[0.13] blur-[130px]" />


      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Тарифы"
          title={
            <>
              Честные цены —
              <br />
              <span className="text-gradient-gold">никаких скрытых доплат.</span>
            </>
          }
          description="Первое занятие — бесплатно: вы ничего не платите, пока не поймёте, что нам подходите. Пакеты выгоднее — абонемент можно приостановить или отменить в любой момент."
        />

        <Stagger className="grid items-stretch gap-6 lg:grid-cols-3" gap={0.12}>
          {PLANS.map((plan, i) => (
            <Item key={plan.name} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2 border-white/15 bg-[#1d1811] hover:border-gold-400/40 hover:bg-[#231e16]"
                )}
              >
                <h3 className="font-display text-xl font-extrabold text-white">{plan.name}</h3>
                <p className="mt-1 text-[13px] text-zinc-500">{plan.tagline}</p>

                <div className="mt-7 flex items-end gap-2">
                  <span className="font-display text-4xl font-extrabold tracking-tight text-white">
                    {plan.price.toLocaleString("ru-RU")} ₽
                  </span>
                  <span className="pb-1.5 text-sm text-zinc-500">{plan.unit}</span>
                </div>

                {/* Пакет / выгодное предложение */}
                <div className="mt-4 flex flex-col gap-1 rounded-2xl border border-gold-400/30 bg-gold-400/[0.07] p-4 transition-colors duration-300 hover:border-gold-400/50">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gold-300">
                    {plan.dealLabel}
                  </p>
                  <p className="font-display text-lg font-extrabold text-white">{plan.dealPrice}</p>
                  <p className="text-[12px] text-zinc-400">{plan.dealNote}</p>
                </div>

                <ul className="mt-7 flex-1 space-y-3.5 border-t border-white/[0.08] pt-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-400/15 text-gold-400">
                        <IconCheck className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#cta"
                  variant={i === 1 ? "primary" : "ghost"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </article>
            </Item>
          ))}
        </Stagger>

        {/* Гарантия */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-white/15 bg-[#1d1811] p-7 text-center sm:flex-row sm:text-left">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-400/15 text-gold-400">
              <IconShield className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-[15px] font-bold text-white">
                Первый урок — бесплатно. Дальше — только по любви.
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-zinc-400">
                Приходите на пробное занятие без оплаты. Если понравится — оплатите абонемент. Если
                в первые 14 дней передумаете — вернём деньги полностью, без вопросов и удержаний.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
