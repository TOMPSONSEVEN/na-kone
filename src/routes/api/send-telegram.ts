import { createFileRoute } from "@tanstack/react-router";
import { parseLeadBody, sendLeadToTelegram } from "@/lib/telegram/send-lead";

function json(body: unknown, status: number) {
  return Response.json(body, { status });
}

export const Route = createFileRoute("/api/send-telegram")({
  server: {
    handlers: {
      OPTIONS: async () =>
        new Response(null, {
          status: 204,
          headers: {
            Allow: "POST, OPTIONS",
          },
        }),
      GET: async () => json({ ok: false, error: "Method not allowed" }, 405),
      POST: async ({ request }) => {
        const contentType = request.headers.get("content-type") || "";
        if (contentType && !contentType.includes("application/json")) {
          return json({ ok: false, error: "JSON is required" }, 415);
        }

        let raw: unknown = {};
        try {
          raw = await request.json();
        } catch {
          return json({ ok: false, error: "Invalid JSON" }, 400);
        }

        const result = await sendLeadToTelegram(parseLeadBody(raw), {
          origin: request.headers.get("origin"),
          requestUrl: request.url,
        });

        if (result.ok) {
          return json({ ok: true }, 200);
        }
        return json({ ok: false, error: result.error }, result.status);
      },
    },
  },
});
