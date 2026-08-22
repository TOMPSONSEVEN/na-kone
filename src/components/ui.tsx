import type { ReactNode, SVGProps } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { Reveal } from "./motion";

/* ---------------------------------- Icons ---------------------------------- */

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  ...props,
});

export const IconCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
export const IconArrow = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);
export const IconStar = (p: IconProps) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...p}>
    <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
  </svg>
);
export const IconShield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2.5 4.5 5.5v6c0 4.6 3.2 8 7.5 10 4.3-2 7.5-5.4 7.5-10v-6L12 2.5z" />
    <path d="m8.8 12 2.2 2.2 4.2-4.4" />
  </svg>
);
export const IconPlus = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const IconMenu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const IconX = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const IconCrown = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 17h18" />
    <path d="m4 17-1.2-9.5L9 11l3-6 3 6 6.2-3.5L20 17" />
  </svg>
);
export const IconTarget = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
  </svg>
);
export const IconGrid = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>
);
export const IconSearch = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
export const IconTrophy = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M8 21h8M12 17v4" />
    <path d="M7 4h10v6a5 5 0 0 1-10 0V4z" />
    <path d="M7 6H4.5a2.5 2.5 0 0 0 0 5H7M17 6h2.5a2.5 2.5 0 0 1 0 5H17" />
  </svg>
);
export const IconClock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const IconUsers = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M16.5 15.2c2.3.3 4 1.9 4.7 4.3" />
  </svg>
);
export const IconMonitor = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="4" width="19" height="13" rx="2.5" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);
export const IconChart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 3v18h18" />
    <path d="m7 15 4-5 3 3 5-7" />
  </svg>
);
export const IconSend = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4 22-7z" />
  </svg>
);
export const IconMoon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
export const IconSun = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
  </svg>
);
export const IconYoutube = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="6" width="19" height="12.5" rx="3.5" />
    <path d="m10.5 9.8 4.5 2.7-4.5 2.7V9.8z" fill="currentColor" stroke="none" />
  </svg>
);
export const IconVk = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <text
      x="12"
      y="16.5"
      textAnchor="middle"
      fontSize="9.5"
      fontWeight="900"
      fontFamily="inherit"
    >
      VK
    </text>
  </svg>
);
export const IconPhone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

/* ---------------------------------- Logo ----------------------------------- */

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-2.5", className)} aria-label="На коне — на главную">
      <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-gold-400 text-[26px] leading-none text-ink-950 shadow-[0_0_24px_rgba(238,194,90,0.35)] transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
        ♞
      </span>
      <span className="font-display text-[15px] font-bold tracking-[0.08em] text-white">
        НА КОНЕ
        <span className="text-gold-400">.</span>
      </span>
    </a>
  );
}

/* --------------------------------- Button ---------------------------------- */

export function Button({
  children,
  href = "#cta",
  variant = "primary",
  size = "md",
  className,
  withArrow = true,
  submit = false,
  disabled = false,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  size?: "md" | "lg";
  className?: string;
  withArrow?: boolean;
  submit?: boolean;
  disabled?: boolean;
}) {
  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-[15px]",
  };
  const variants = {
    primary:
      "bg-gold-400 text-ink-950 font-semibold shadow-[0_10px_40px_-10px_rgba(238,194,90,0.55)] hover:bg-gold-300",
    ghost: "glass text-white font-semibold hover:border-white/25 hover:bg-white/[0.08]",
    outline:
      "border border-white/15 text-white font-semibold hover:border-gold-400/60 hover:text-gold-300",
  };
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full transition-colors duration-300",
    sizes[size],
    variants[variant],
    disabled && "pointer-events-none opacity-60",
    className
  );
  const inner = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/40 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[340%]"
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {withArrow && (
          <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </>
  );
  if (submit) {
    return (
      <motion.button
        type="submit"
        disabled={disabled}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className={classes}
      >
        {inner}
      </motion.button>
    );
  }
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={classes}
    >
      {inner}
    </motion.a>
  );
}

/* --------------------------------- Eyebrow --------------------------------- */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/[0.07] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300",
        className
      )}
    >
      <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-gold-400" />
      {children}
    </span>
  );
}

/* ------------------------------ SectionHeading ----------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-5 md:mb-20",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------------------------- Stars ---------------------------------- */

export function Stars({ className, count = 5 }: { className?: string; count?: number }) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5 text-gold-400", className)}
      aria-label={`Оценка ${count} из 5`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <IconStar key={i} className="h-3.5 w-3.5" />
      ))}
    </span>
  );
}
