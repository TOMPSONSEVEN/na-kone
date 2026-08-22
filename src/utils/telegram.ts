import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from "../config";

/**
 * Отправляет сообщение в Telegram через Bot API.
 * Возвращает true при успехе, выбрасывает ошибку при неудаче.
 */
export async function sendTelegramMessage(text: string): Promise<boolean> {
  const res = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    }
  );

  if (!res.ok) {
    throw new Error(`Telegram API ответил ошибкой: ${res.status}`);
  }

  const data: { ok?: boolean } = await res.json();
  return data.ok === true;
}

/** Формирует красивое сообщение о новой заявке. */
export function formatLeadMessage(name: string, phone: string): string {
  const now = new Date();
  const time = now.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return [
    "🟢 <b>Новая заявка с сайта «На коне»</b>",
    "",
    `👤 <b>Имя:</b> ${name}`,
    `📞 <b>Телефон:</b> ${phone}`,
    `🕒 <b>Время:</b> ${time}`,
  ].join("\n");
}
