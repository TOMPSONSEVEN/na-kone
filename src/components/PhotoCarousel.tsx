import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export type CarouselPhoto = {
  name: string;
  age: number;
  tag?: string;
  img: string;
  alt: string;
};

const IMAGE_PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

function imageWithWidth(url: string, width: number) {
  return url.replace(/w=\d+/, `w=${width}`);
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden
    >
      {dir === "left" ? <path d="m15 6-6 6 6 6" /> : <path d="m9 6 6 6-6 6" />}
    </svg>
  );
}

export default function PhotoCarousel({ photos }: { photos: CarouselPhoto[] }) {
  const total = photos.length;
  const [active, setActive] = useState(4); // По умолчанию Вера (или любой из центральных)
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const rotateTo = useCallback(
    (index: number) => {
      setActive((index + total) % total);
    },
    [total]
  );

  const next = useCallback(() => rotateTo(active + 1), [active, rotateTo]);
  const prev = useCallback(() => rotateTo(active - 1), [active, rotateTo]);

  /* Автоматическое перелистывание каждые 4.5 секунды */
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, [paused, total]);

  return (
    <div
      role="region"
      aria-roledescription="карусель"
      aria-label="3D галерея учеников школы"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) {
          if (dx < 0) next();
          else prev();
        }
        touchX.current = null;
      }}
      className="flex w-full select-none flex-col items-center"
    >
      {/* Широкая 3D-сцена: одновременно видны пять фотографий */}
      <div className="relative flex w-full justify-center py-4 overflow-visible">
        <div
          className="relative flex items-center justify-center scale-[0.58] min-[400px]:scale-[0.66] sm:scale-[0.82] lg:scale-100"
          style={{
            perspective: "1200px",
            width: "100%",
            maxWidth: "900px",
            height: "500px",
          }}
        >
          {/* Кнопка Назад (<) */}
          <button
            type="button"
            onClick={prev}
            aria-label="Предыдущий ученик"
            className="glass-strong absolute left-2 sm:left-10 top-1/2 z-40 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full text-white shadow-2xl border border-white/25 transition-all duration-300 hover:scale-110 hover:border-gold-400 hover:bg-gold-400/20 active:scale-95"
          >
            <Chevron dir="left" />
          </button>

          {/* Кнопка Вперёд (>) */}
          <button
            type="button"
            onClick={next}
            aria-label="Следующий ученик"
            className="glass-strong absolute right-2 sm:right-10 top-1/2 z-40 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full text-white shadow-2xl border border-white/25 transition-all duration-300 hover:scale-110 hover:border-gold-400 hover:bg-gold-400/20 active:scale-95"
          >
            <Chevron dir="right" />
          </button>

          {/* Крупные карточки учеников: центральная + две пары по краям */}
          <div
            className="relative flex items-center justify-center"
            style={{ transformStyle: "preserve-3d", width: "300px", height: "420px" }}
          >
            {photos.map((p, i) => {
              let offset = (i - active) % total;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isFront = offset === 0;
              const distance = Math.abs(offset);
              const shouldLoad = distance <= 2;

              // Пять фото остаются в одной горизонтальной композиции.
              // Дальние карточки меньше и темнее, но не исчезают.
              const translateX = offset * 145;
              const translateZ = -distance * 95;
              const rotateY = offset === 0 ? 0 : offset > 0 ? -24 : 24;
              const scale = isFront ? 1 : distance === 1 ? 0.8 : 0.62;
              const opacity = isFront ? 1 : distance === 1 ? 0.72 : 0.46;
              const zIndex = 30 - distance * 10;

              return (
                <motion.div
                  key={p.name}
                  onClick={() => rotateTo(i)}
                  initial={false}
                  animate={{
                    x: translateX,
                    z: translateZ,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 110,
                    damping: 20,
                    mass: 0.85,
                  }}
                  style={{
                    position: "absolute",
                    width: "300px",
                    height: "420px",
                    zIndex: zIndex,
                    cursor: "pointer",
                    transformStyle: "preserve-3d",
                    pointerEvents: distance > 2 ? "none" : "auto",
                  }}
                  className="group"
                >
                  <div
                    className={cn(
                      "relative h-full w-full overflow-hidden rounded-[2.4rem] border transition-all duration-500",
                      isFront
                        ? "border-gold-400/90 shadow-[0_20px_70px_-10px_rgba(238,194,90,0.55)] brightness-100"
                        : "border-white/15 shadow-2xl brightness-60 saturate-75 hover:brightness-90 hover:opacity-100"
                    )}
                  >
                    {/* Крупная фотография */}
                    <img
                      src={shouldLoad ? imageWithWidth(p.img, isFront ? 720 : 480) : IMAGE_PLACEHOLDER}
                      srcSet={
                        shouldLoad
                          ? `${imageWithWidth(p.img, 360)} 360w, ${imageWithWidth(p.img, 480)} 480w, ${imageWithWidth(p.img, 720)} 720w`
                          : undefined
                      }
                      sizes="(max-width: 639px) 190px, 300px"
                      alt={p.alt}
                      width={640}
                      height={900}
                      draggable={false}
                      loading={isFront ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={isFront ? "high" : "auto"}
                      className="h-full w-full object-cover"
                    />

                    {/* Градиент внизу */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-black/20" />

                    {/* Плашка с именем и возрастом внизу карточки */}
                    <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between">
                      <div className="rounded-2xl glass-strong px-4 py-2 border border-white/20 shadow-xl backdrop-blur-md max-w-[82%]">
                        <p className="font-display text-base sm:text-lg font-black text-white truncate">
                          {p.name}, {p.age} лет
                        </p>
                        {p.tag && (
                          <p className="text-[11px] font-bold text-gold-300 truncate">
                            {p.tag}
                          </p>
                        )}
                      </div>

                      {/* Золотая звездочка на главной карточке */}
                      {isFront && (
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-400 font-display text-sm font-black text-ink-950 shadow-[0_0_20px_rgba(238,194,90,0.6)]">
                          ★
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Интерактивные пилюли-кнопки учеников под каруселью */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 px-4 max-w-2xl">
        {photos.map((p, i) => {
          const isActive = i === active;
          const label = p.tag ? `${p.name}, ${p.age} — ${p.tag}` : `${p.name}, ${p.age}`;

          return (
            <motion.button
              key={p.name}
              type="button"
              onClick={() => rotateTo(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Перейти к ученику ${p.name}`}
              className={cn(
                "group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300",
                isActive
                  ? "bg-gold-400 text-ink-950 shadow-[0_4px_25px_rgba(238,194,90,0.5)] scale-105"
                  : "border border-white/10 bg-[#1d1811] text-zinc-400 hover:border-gold-400/40 hover:text-white"
              )}
            >
              <span
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  isActive ? "bg-ink-950" : "bg-gold-400/60 group-hover:bg-gold-400"
                )}
              />
              <span>{label}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
