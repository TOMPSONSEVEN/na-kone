import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";
import { Item, Reveal, Stagger } from "./motion";
import { IconPlus, SectionHeading } from "./ui";

const FAQS = [
  {
    q: "С какого возраста можно начинать?",
    a: "С 4 лет — по специальной игровой методике для дошкольников. Для взрослых ограничений нет: около 40% наших учеников старше 18 и приходят без всякой подготовки. Шахматам всё равно, сколько вам лет, — важен интерес.",
  },
  {
    q: "Я совсем не умею играть. Возьмёте?",
    a: "Конечно. Более 60% наших учеников начинали с нуля. Программа построена так, что первые осознанные победы появляются уже через месяц: сначала правила и лёгкие задачи, потом тактика, дебюты и первые турниры.",
  },
  {
    q: "Как проходят онлайн-занятия?",
    a: "На платформе школы: живая онлайн-доска, видеосвязь с тренером и запись каждого урока. Домашние задания, разборы партий и турнирный календарь — в личном кабинете. Нужны только компьютер или планшет и интернет.",
  },
  {
    q: "Вы участвуете в турнирах?",
    a: "Да. Каждый месяц проводим внутренние турниры школы, а также готовим учеников к официальным соревнованиям: первенствам Москвы и России, этапам Кубка страны. Помогаем с регистрацией, нормативами разрядов и психологической подготовкой.",
  },
  {
    q: "Можно ли переносить занятия?",
    a: "Да, бесплатно — предупредите тренера за 12 часов, и занятие перенесётся на удобное время в рамках месяца. Если ребёнок заболел, урок не сгорает: переносим или возвращаем занятие в следующий месяц.",
  },
  {
    q: "Что нужно купить для старта?",
    a: "Для офлайн-занятий — только шахматную доску с фигурами (подскажем, какую выбрать). Для онлайн — компьютер или планшет. Методические материалы, доступ к платформе и задачи — в подарок на первом уроке.",
  },
];

function FaqItem({ faq, index }: { faq: (typeof FAQS)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-button-${index}`;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border transition-colors duration-300",
        open
          ? "border-gold-400/50 bg-[#241c10]"
          : "border-white/15 bg-[#1d1811] hover:border-gold-400/30"
      )}
    >
      <button
        id={btnId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
      >
        <span className="font-display text-[15px] font-bold text-white md:text-base">{faq.q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-300",
            open ? "border-gold-400/40 bg-gold-400 text-ink-950" : "border-white/15 text-zinc-400"
          )}
        >
          <IconPlus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-zinc-400">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-24 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-board absolute inset-0 opacity-70" />
        

      </div>
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Вопросы?
              <span className="text-gradient-gold"> Отвечаем честно.</span>
            </>
          }
          description="Всё, что обычно спрашивают родители и взрослые ученики перед записью. Без маркетинговых уловок."
        />

        <Stagger className="space-y-3.5" gap={0.07}>
          {FAQS.map((faq, i) => (
            <Item key={faq.q} y={16}>
              <FaqItem faq={faq} index={i} />
            </Item>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-sm text-zinc-500">
            Остались вопросы?{" "}
            <a
              href="#cta"
              className="font-semibold text-gold-300 underline-offset-4 transition-colors hover:text-gold-200 hover:underline"
            >
              Напишите нам — отвечаем в течение часа →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
