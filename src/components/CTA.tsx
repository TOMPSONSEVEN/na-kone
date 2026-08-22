import { useRef, useState } from "react";
import { Reveal } from "./motion";
import { Button, IconCheck, IconShield } from "./ui";

const CTA_IMG =
  "https://images.pexels.com/photos/35300539/pexels-photo-35300539.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600";

type Status = "idle" | "sending" | "success" | "error";

function formatRussianPhone(rawVal: string): string {
  let digits = rawVal.replace(/\D/g, "");

  if (!digits) return "";

  // Принимаем 8, 7 или сразу 10 цифр и приводим к единому коду страны.
  if (digits[0] === "8" || digits[0] === "7") {
    digits = "7" + digits.slice(1);
  } else {
    digits = "7" + digits;
  }

  // Если пользователь удалил весь номер, не оставляем один код страны.
  if (digits.length === 1) return "";

  digits = digits.slice(0, 11);

  let formatted = "+7 (" + digits.slice(1, 4);
  if (digits.length >= 4) formatted += ")";
  if (digits.length > 4) formatted += " " + digits.slice(4, 7);
  if (digits.length >= 7) formatted += "-";
  if (digits.length > 7) formatted += digits.slice(7, 9);
  if (digits.length >= 9) formatted += "-";
  if (digits.length > 9) formatted += digits.slice(9, 11);

  return formatted;
}

function caretAfterDigits(value: string, digitCount: number): number {
  if (digitCount <= 0) return 0;

  let seen = 0;
  for (let i = 0; i < value.length; i += 1) {
    if (/\d/.test(value[i])) {
      seen += 1;
      if (seen === digitCount) return i + 1;
    }
  }

  return value.length;
}

export default function CTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const applyPhoneValue = (rawValue: string, digitsBeforeCaret?: number) => {
    const formatted = formatRussianPhone(rawValue);
    setPhone(formatted);

    if (digitsBeforeCaret === undefined) return;

    requestAnimationFrame(() => {
      const input = phoneInputRef.current;
      if (!input) return;
      const maxDigits = formatted.replace(/\D/g, "").length;
      const caret = caretAfterDigits(formatted, Math.min(digitsBeforeCaret, maxDigits));
      input.setSelectionRange(caret, caret);
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const value = input.value;
    const caret = input.selectionStart ?? value.length;
    const rawDigits = value.replace(/\D/g, "");
    const hasCountryCode = rawDigits[0] === "7" || rawDigits[0] === "8";
    const digitsBeforeCaret =
      value.slice(0, caret).replace(/\D/g, "").length + (hasCountryCode ? 0 : 1);

    applyPhoneValue(value, digitsBeforeCaret);
  };

  const handlePhoneFocus = () => {
    if (!phone) {
      setPhone("+7 (");
      requestAnimationFrame(() => {
        const input = phoneInputRef.current;
        if (input) input.setSelectionRange(input.value.length, input.value.length);
      });
    }
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Backspace" && e.key !== "Delete") return;

    const input = e.currentTarget;
    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? start;

    // Для выделенного фрагмента браузерная логика удаления работает корректно.
    if (start !== end) return;

    let digitIndex = e.key === "Backspace" ? start - 1 : start;
    const step = e.key === "Backspace" ? -1 : 1;

    // Пропускаем разделители и удаляем ближайшую цифру, а не сам дефис/скобку.
    while (digitIndex >= 0 && digitIndex < input.value.length && !/\d/.test(input.value[digitIndex])) {
      digitIndex += step;
    }

    if (digitIndex < 0 || digitIndex >= input.value.length) return;

    e.preventDefault();
    const nextValue = input.value.slice(0, digitIndex) + input.value.slice(digitIndex + 1);
    const nextCaret = e.key === "Backspace" ? digitIndex : start;
    const digitsBeforeCaret = nextValue.slice(0, nextCaret).replace(/\D/g, "").length;
    applyPhoneValue(nextValue, digitsBeforeCaret);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const trimmedName = name.trim();
    const phoneDigits = phone.replace(/\D/g, "");
    if (trimmedName.length < 2 || trimmedName.length > 80) {
      setStatus("error");
      setError("Введите имя — от 2 до 80 символов.");
      return;
    }
    if (phoneDigits.length !== 11 || phoneDigits[0] !== "7") {
      setStatus("error");
      setError("Введите полный номер телефона в формате +7 (XXX) XXX-XX-XX.");
      return;
    }

    setStatus("sending");
    setError("");

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: trimmedName,
          phone: phone.trim(),
          website,
        }),
      });
      window.clearTimeout(timeout);

      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (response.ok && payload?.ok) {
        setStatus("success");
        return;
      }

      if (response.status === 500 || payload?.error === "Telegram is not configured") {
        throw new Error("telegram-config");
      }
      if (response.status === 502 || payload?.error === "Telegram delivery failed") {
        throw new Error("telegram-delivery");
      }
      if (response.status === 400) {
        setStatus("error");
        setError("Проверьте имя и номер телефона и попробуйте ещё раз.");
        return;
      }

      throw new Error(`Сервер заявки ответил с кодом ${response.status}`);
    } catch (err) {
      const reason = err instanceof Error ? err.message : "";
      const aborted =
        reason === "AbortError" || (err instanceof DOMException && err.name === "AbortError");
      if (!aborted && reason !== "telegram-config" && reason !== "telegram-delivery") {
        console.error("Ошибка отправки заявки:", err);
      }
      setStatus("error");
      if (reason === "telegram-config" || reason === "telegram-delivery") {
        setError(
          "Не удалось отправить заявку в Telegram. Позвоните нам: +7 999 896 33 39.",
        );
      } else if (aborted) {
        setError("Сервер не ответил вовремя. Попробуйте ещё раз или позвоните: +7 999 896 33 39.");
      } else {
        setError(
          "Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам: +7 999 896 33 39.",
        );
      }
    } finally {
      window.clearTimeout(timeout);
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
                  Мы получили ваши контакты. Позвоним в течение 30 минут в рабочее время и подберём удобное время для пробного урока.
                </p>
              </div>
            ) : (
              <form className="relative mt-10 w-full max-w-md space-y-3" onSubmit={handleSubmit}>
                <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
                  <label htmlFor="cta-website">Сайт</label>
                  <input
                    id="cta-website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    suppressHydrationWarning
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="glass flex flex-col gap-2 rounded-3xl p-2 sm:flex-row sm:rounded-full">
                  <input
                    type="text"
                    required
                    minLength={2}
                    maxLength={80}
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    aria-label="Ваше имя"
                    suppressHydrationWarning
                    className="w-full rounded-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    ref={phoneInputRef}
                    autoComplete="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    onFocus={handlePhoneFocus}
                    onKeyDown={handlePhoneKeyDown}
                    placeholder="+7 (___) ___-__-__"
                    aria-label="Номер телефона"
                    suppressHydrationWarning
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
