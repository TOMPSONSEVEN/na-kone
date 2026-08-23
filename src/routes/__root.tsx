import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "На коне — шахматная школа";

const THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem("nakone-theme");var light=t==="light";document.documentElement.classList.toggle("light",light);document.documentElement.classList.toggle("dark",!light);document.documentElement.style.colorScheme=light?"light":"dark";}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { title: APP_NAME },
  { name: "theme-color", content: "#1a1610" },
  {
    name: "description",
    content:
      "Шахматная школа «На коне» — очные и онлайн-занятия для детей от 4 лет и взрослых. Тренеры с рейтингом ФИДЕ, авторская методика.",
  },
  { name: "yandex-verification", content: "890491f223bab35b" },
  { name: "google-site-verification", content: "QYIMT5bH0-z-Kt9Wciu1Gey5lHDx2oQM045L1q7trzA" },
],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://images.pexels.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [{ children: THEME_BOOTSTRAP }],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <HeadContent />
        <meta name="yandex-verification" content="890491f223bab35b" />
        <meta name="google-site-verification" content="QYIMT5bH0-z-Kt9Wciu1Gey5lHDx2oQM045L1q7trzA" />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
