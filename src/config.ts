// ================================================================
//  НАСТРОЙКА TELEGRAM-УВЕДОМЛЕНИЙ О ЗАЯВКАХ
// ================================================================

export const TELEGRAM_BOT_TOKEN = "8923862238:AAH5iAZ1j_hb4y0TDBL1CSLMcq_-78TIz-U";
export const TELEGRAM_CHAT_ID = "8567454748";

/** True, когда владелец сайта вписал реальные токен и chat_id. */
export const telegramConfigured =
  !TELEGRAM_BOT_TOKEN.startsWith("PASTE_") && !TELEGRAM_CHAT_ID.startsWith("PASTE_");
