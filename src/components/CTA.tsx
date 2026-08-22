import { useState } from "react";
import { Reveal } from "./motion";
import { Button, IconCheck, IconShield } from "./ui";
import { telegramConfigured } from "../config";
import { formatLeadMessage, sendTelegramMessage } from "../utils/telegram";

const CTA_IMG =
  "https://images.pexels.com/photos/35300539/pexels-photo-35300539.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600";

type Status = "idle" | "sending" | "success" | "error";

function formatRussianPhone(rawVal: string): string {
  // Вытаскиваем только цифры
  let digits = rawVal.replace(/\D/g, "");

  if (!digits) return "";

  // Если первая цифра 8 или 7 — заменяем на 7. Если началась с 9 — добавляем 7 в начало
  if (digits[0] === "8" || digits[0] === "7") {
    digits = "7" + digits.slice(1);
  } else {
    digits = "7" + digits;
  }

  // Ограничиваем максимум 11 цифр (7 + 10 цифр)
  digits = digits.slice(0, 11);

  let formatted = "+7";
  if (digits.length > 1) {
    formatted += " (" + digits.slice(1, 4);
  }
  if (digits.length >= 4) {
    formatted += ")";
  }
  if (digits.length > 4) {
    formatted += " " + digits.slice(4, 7);
  }
  if (digits.length >= 7) {
    formatted += "-";
  }
  if (digits.length > 7) {
    formatted += digits.slice(7, 9);
  }
  if (digits.length >= 9) {
    formatted += "-";
  }
  if (digits.length > 9) {
    formatted += digits.slice(9, 11);
  }

  return formatted;
}

export default function CTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Если пользователь стёр всё или остался только "+7", сбрасываем
    if (!val || val === "+7" || val === "+7 ") {
      setPhone("");
      return;
    }
    setPhone(formatRussianPhone(val));
  };

  const handlePhoneFocus = () => {
    if (!phone) {
      setPhone("+7 (");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!name.trim() || !phone.trim()) return;

    setStatus("sending");
    setError("");

    try {
      if (!telegramConfigured) {
        // Демо-режим: токен ещё не вписан в src/config.ts.
        // Заявка не уходит, но показываем успех, чтобы сайт работал как макет.
        console.warn(
          "Telegram не настроен: впишите TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в src/config.ts, чтобы заявки уходили в ваш бот."
        );
        await new Promise((r) => setTimeout(r, 900));
      } else {
        await sendTelegramMessage(formatLeadMessage(name.trim(), phone.trim()));
      }
      setStatus("success");
    } catch (err) {
      console.error("Ошибка отправки заявки:", err);
      setStatus("error");
      setError(
        "Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам: +7 999 896 33 39."
      );
    }
  };

  return (
    <section id="cta" className="relative scroll-mt-24 px-5 pb-24 pt-4 sm:px-8 md:pb-36">
      <Reveal y={40}>
        <div className="cta-panel relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10">
          {/* Фон */}
          <div aria-hidden className="absolute inset-0">
            <img src={CTA_IMG} alt="" loading="lazy" className="h-full w-full object-cover" />
            <div className="bg-board cta-board absolute inset-0 opacity-70" />
            <div className="cta-overlay absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/75 to-ink-950/92" />
            <div className="absolute -left-24 -top-24 h-80 w-80 animate-drift rounded-full bg-gold-400/30 blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 animate-drift-2 rounded-full bg-emerald-500/25 blur-[100px]" />



            <div className="bg-noise absolute inset-0 opacity-[0.07]" />
          </div>

          <div className="relative flex flex-col items-center px-6 py-20 text-center md:py-28">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-gold-400" />
              Набор в группы · осталось 8 мест
            </span>

            <h2 className="mt-7 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
              Сделайте первый ход —
              <br />
              <span className="text-gradient-gold">остальному научим.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">
              Пробный урок бесплатно: познакомимся, сыграем партию и подберём группу под возраст и
              уровень. Без абонементов, навязывания и «просто попробуйте».
            </p>

            {/* Форма заявки */}
            {status === "success" ? (
              <div className="mt-10 w-full max-w-md rounded-3xl border border-gold-400/30 bg-gold-400/10 px-8 py-7">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold-400 text-ink-950">
                  <IconCheck className="h-6 w-6" />
                </span>
                <p className="mt-4 font-display text-lg font-bold text-white">Заявка принята!</p>
                <p className="mt-2 text-sm text-zinc-300">
                  {telegramConfigured
                    ? "Мы получили ваши контакты. Позвоним в течение 30 минут в рабочее время и подберём удобное время для пробного урока."
                    : "Позвоним в течение 30 минут в рабочее время и подберём удобное время для пробного урока."}
                </p>
              </div>
            ) : (
              <form className="mt-10 w-full max-w-md space-y-3" onSubmit={handleSubmit}>
                <div className="glass flex flex-col gap-2 rounded-3xl p-2 sm:flex-row sm:rounded-full">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    aria-label="Ваше имя"
                    className="w-full rounded-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    onFocus={handlePhoneFocus}
                    placeholder="+7 (___) ___-__-__"
                    aria-label="Номер телефона"
                    className="w-full rounded-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none"
                  />
                </div>

                <Button
                  submit
                  disabled={status === "sending"}
                  size="lg"
                  className="w-full"
                  withArrow={false}
                >
                  {status === "sending" ? "Отправляем…" : "Записаться на бесплатный урок"}
                </Button>

                {status === "error" && (
                  <p
                    role="alert"
                    className="mx-auto max-w-md rounded-2xl border border-red-400/30 bg-red-400/10 px-5 py-3 text-[13px] text-red-300"
                  >
                    {error}
                  </p>
                )}
              </form>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <IconShield className="h-4 w-4 text-gold-400" />
                Первый урок бесплатно
              </span>
              <span>·</span>
              <span>Без абонемента на старте</span>
              <span>·</span>
              <span>Отмена в любой момент</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
