type LeadBody = {
  name?: unknown;
  phone?: unknown;
  website?: unknown;
};

export type SendLeadResult =
  | { ok: true; status: 200 }
  | { ok: false; status: number; error: string };

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "\u0026amp;";
      case "<":
        return "\u0026lt;";
      case ">":
        return "\u0026gt;";
      case '"':
        return "\u0026quot;";
      case "'":
        return "\u0026#039;";
      default:
        return char;
    }
  });
}

function formatMessage(name: string, phone: string) {
  const time = new Date().toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return [
    "🟢 <b>Новая заявка с сайта «На коне»</b>",
    "",
    `👤 <b>Имя:</b> ${escapeHtml(name)}`,
    `📞 <b>Телефон:</b> ${escapeHtml(phone)}`,
    `🕒 <b>Время:</b> ${time}`,
  ].join("\n");
}

function collectAllowedOrigins(requestUrl: string) {
  const configuredOrigins = (process.env.ALLOWED_ORIGIN || "")
    .split(",")
    .map((origin) => origin.trim().replace(/\/$/, ""))
    .filter(Boolean);

  const vercelOrigin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
  const productionOrigin = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "";

  let requestOrigin = "";
  try {
    const url = new URL(requestUrl);
    requestOrigin = url.origin;
  } catch {
    requestOrigin = "";
  }

  return new Set(
    [...configuredOrigins, vercelOrigin, productionOrigin, requestOrigin].filter(Boolean),
  );
}

function isOriginAllowed(requestOrigin: string | null, requestUrl: string) {
  if (!requestOrigin) return true;
  const allowed = collectAllowedOrigins(requestUrl);
  return allowed.has(requestOrigin.replace(/\/$/, ""));
}

export function parseLeadBody(raw: unknown): LeadBody {
  if (!raw || typeof raw !== "object") return {};
  return raw as LeadBody;
}

export async function sendLeadToTelegram(
  body: LeadBody,
  options: { origin: string | null; requestUrl: string },
): Promise<SendLeadResult> {
  if (!isOriginAllowed(options.origin, options.requestUrl)) {
    return { ok: false, status: 403, error: "Origin not allowed" };
  }

  // Honeypot: real visitors never fill this hidden field.
  if (typeof body.website === "string" && body.website.trim()) {
    return { ok: true, status: 200 };
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const phoneDigits = phone.replace(/\D/g, "");

  if (
    name.length < 2 ||
    name.length > 80 ||
    phone.length < 8 ||
    phone.length > 32 ||
    phoneDigits.length !== 11 ||
    phoneDigits[0] !== "7"
  ) {
    return { ok: false, status: 400, error: "Invalid form data" };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  if (!token || !chatId) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID environment variable");
    return { ok: false, status: 500, error: "Telegram is not configured" };
  }

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatMessage(name, phone),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const telegramData = (await telegramResponse.json()) as {
      ok?: boolean;
      description?: string;
    };
    if (!telegramResponse.ok || !telegramData.ok) {
      console.error("Telegram API error:", telegramData.description || telegramResponse.status);
      return { ok: false, status: 502, error: "Telegram delivery failed" };
    }

    return { ok: true, status: 200 };
  } catch (error) {
    console.error("Telegram request failed:", error);
    return { ok: false, status: 502, error: "Telegram delivery failed" };
  }
}
