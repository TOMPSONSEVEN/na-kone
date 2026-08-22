# Деплой «На коне» на Vercel (замена существующего проекта)

Проект собирается через Vite + TanStack Start. Серверная функция заявок живёт в `src/routes/api/send-telegram.ts` и на Vercel становится `/api/send-telegram`.

Старый файл `api/send-telegram.ts` в корне больше не используется — его нужно удалить при замене, иначе на Vercel могут оказаться два обработчика.

## Что должно быть в корне репозитория

```text
src/
public/
package.json
vite.config.ts
vercel.json   ← не нужен со старым outputDirectory: dist, удалите его
```

Не загружайте `.env`, `.env.local` и любые файлы с токеном.

## Вариант A. Уже есть проект на Vercel (заменить файлы)

1. Откройте тот же GitHub-репозиторий, который подключён к Vercel.
2. Замените **все файлы проекта** на эту версию (не только `index.html`):
   - удалите старые `api/send-telegram.ts`, `vercel.json` с `"outputDirectory": "dist"`, `vite-plugin-singlefile`;
   - загрузите новые `src/`, `public/`, `package.json`, `vite.config.ts`.
3. В Vercel: **Settings → General**
   - Framework Preset: Vite (или Other — Vercel подхватит `npm run build`).
   - Build Command: `npm run build`
   - Output Directory: оставьте пустым / default. Не ставьте `dist` — production-сборка идёт через Nitro (`vercel` preset).
   - Install Command: `npm install`
4. **Settings → Environment Variables** — оставьте или заново добавьте:

```text
TELEGRAM_BOT_TOKEN=новый_токен_от_BotFather
TELEGRAM_CHAT_ID=ваш_chat_id
ALLOWED_ORIGIN=https://ваш-домен.vercel.app
```

Если кастомный домен уже есть, укажите его в `ALLOWED_ORIGIN` (с `https://`, без `/` на конце). Несколько адресов — через запятую.

5. **Deployments → … → Redeploy** (с включённым «Use existing Build Cache» можно снять галочку).
6. После деплоя откройте сайт, отправьте тестовую заявку и проверьте Telegram.

## Вариант B. Новый проект

1. Загрузите проект в GitHub (приватный репозиторий).
2. vercel.com → Add New → Project → выберите репозиторий.
3. Build Command: `npm run build`. Output Directory не указывайте как `dist`.
4. Добавьте переменные из шага 4 варианта A **до** первого деплоя, если возможно.
5. Deploy.

## Проверка endpoint после деплоя

```bash
curl -i -X POST https://ваш-проект.vercel.app/api/send-telegram \
  -H "Content-Type: application/json" \
  --data '{"name":"Тест","phone":"+7 (999) 896-33-39","website":""}'
```

Ожидаемый ответ: `{"ok":true}` и сообщение в Telegram.

- `500` — нет переменных окружения, нужен Redeploy после их добавления.
- `502` — токен / Chat ID / бот не получал `/start`.
- `403` — поправьте `ALLOWED_ORIGIN`.
- `404` — задеплоен старый статический `dist` без серверной функции. Проверьте, что Output Directory не `dist` и в сборке есть серверные маршруты.

## Безопасность

После деплоя в исходном коде страницы и в JS-бандлах не должно быть `TELEGRAM_BOT_TOKEN`, реального токена или Chat ID. Должен быть только запрос на `/api/send-telegram`.
