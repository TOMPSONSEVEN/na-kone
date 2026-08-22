# Безопасная настройка заявок в Telegram

Токен бота и Chat ID не хранятся в клиентском коде. Форма «Записаться» отправляет только имя и телефон на серверный endpoint `/api/send-telegram` (`src/routes/api/send-telegram.ts`). Сервер уже обращается к Telegram Bot API.

## 1. Отзовите старый токен, если он когда-либо был в исходниках

1. Откройте `@BotFather` в Telegram.
2. Выберите своего бота.
3. Используйте `/revoke`, затем получите новый токен через `/token`.
4. Новый токен никому не отправляйте и не добавляйте в файлы проекта.

## 2. Добавьте переменные в Vercel

`Project → Settings → Environment Variables`

| Name | Value |
| --- | --- |
| `TELEGRAM_BOT_TOKEN` | новый токен от `@BotFather` |
| `TELEGRAM_CHAT_ID` | ваш Telegram Chat ID |
| `ALLOWED_ORIGIN` | адрес сайта, например `https://nakone.ru` |

Выберите окружения Production, Preview и Development. Можно указать несколько адресов через запятую:

```text
ALLOWED_ORIGIN=https://nakone.ru,https://www.nakone.ru
```

Как узнать Chat ID: напишите боту `/start`, затем откройте
`https://api.telegram.org/bot<ТОКЕН>/getUpdates` и найдите `"chat":{"id": ...}`.

## 3. Передеплойте проект

После добавления переменных нажмите Redeploy. Переменные применяются только к новым деплоям.

## 4. Проверьте форму

1. Откройте опубликованный сайт.
2. Заполните имя и телефон.
3. Нажмите «Записаться на бесплатный урок».
4. Проверьте сообщение от бота в Telegram.

В браузере токен и Chat ID не появятся. В клиентском JavaScript будет только запрос к `/api/send-telegram`.

## Коды ответа

- `200 { ok: true }` — заявка принята (или сработал honeypot).
- `400` — неверные имя/телефон.
- `403` — Origin не совпал с `ALLOWED_ORIGIN`.
- `500` — не заданы `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID`.
- `502` — Telegram отклонил сообщение (неверный токен, Chat ID, боту не писали `/start`).
