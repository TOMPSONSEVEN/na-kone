import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BnakELZt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var EASE = [
	.22,
	1,
	.36,
	1
];
function Reveal({ children, className, delay = 0, y = 28, duration = .8, blur = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y,
			filter: blur ? "blur(6px)" : "none"
		},
		whileInView: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			margin: "-70px"
		},
		transition: {
			duration,
			delay,
			ease: EASE
		},
		children
	});
}
function Stagger({ children, className, delay = 0, gap = .09 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-70px"
		},
		variants: {
			hidden: {},
			show: { transition: {
				staggerChildren: gap,
				delayChildren: delay
			} }
		},
		children
	});
}
function Item({ children, className, y = 26 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		variants: {
			hidden: {
				opacity: 0,
				y,
				filter: "blur(5px)"
			},
			show: {
				opacity: 1,
				y: 0,
				filter: "blur(0px)",
				transition: {
					duration: .75,
					ease: EASE
				}
			}
		},
		children
	});
}
function Counter({ to, decimals = 0, prefix = "", suffix = "", duration = 1.8, className }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	const [val, setVal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		let raf = 0;
		const start = performance.now();
		const tick = (now) => {
			const p = Math.min((now - start) / (duration * 1e3), 1);
			const eased = 1 - Math.pow(1 - p, 4);
			setVal(to * eased);
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		to,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [
			prefix,
			val.toLocaleString("ru-RU", {
				minimumFractionDigits: decimals,
				maximumFractionDigits: decimals
			}),
			suffix
		]
	});
}
/** Tracks the cursor inside an element and exposes it as CSS vars --x / --y (used by .card-glow). */
function useSpotlight() {
	const ref = (0, import_react.useRef)(null);
	const onMouseMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		el.style.setProperty("--x", `${e.clientX - r.left}px`);
		el.style.setProperty("--y", `${e.clientY - r.top}px`);
	};
	return {
		ref,
		onMouseMove
	};
}
var base = (props) => ({
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.8,
	strokeLinecap: "round",
	strokeLinejoin: "round",
	viewBox: "0 0 24 24",
	...props
});
var IconCheck = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	...base(p),
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6 9 17l-5-5" })
});
var IconArrow = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	...base(p),
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m13 6 6 6-6 6" })]
});
var IconStar = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	viewBox: "0 0 20 20",
	fill: "currentColor",
	...p,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" })
});
var IconShield = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	...base(p),
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.5 4.5 5.5v6c0 4.6 3.2 8 7.5 10 4.3-2 7.5-5.4 7.5-10v-6L12 2.5z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8.8 12 2.2 2.2 4.2-4.4" })]
});
var IconPlus = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	...base(p),
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5v14M5 12h14" })
});
var IconMenu = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	...base(p),
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7h16M4 12h16M4 17h16" })
});
var IconX = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	...base(p),
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l12 12M18 6 6 18" })
});
var IconCrown = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	...base(p),
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 17h18" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m4 17-1.2-9.5L9 11l3-6 3 6 6.2-3.5L20 17" })]
});
var IconTarget = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	...base(p),
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "9"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "1.2",
			fill: "currentColor"
		})
	]
});
var IconGrid = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	...base(p),
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3",
			y: "3",
			width: "8",
			height: "8",
			rx: "1.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "13",
			y: "3",
			width: "8",
			height: "8",
			rx: "1.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3",
			y: "13",
			width: "8",
			height: "8",
			rx: "1.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "13",
			y: "13",
			width: "8",
			height: "8",
			rx: "1.5"
		})
	]
});
var IconSearch = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	...base(p),
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "11",
		cy: "11",
		r: "7"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m20 20-3.5-3.5" })]
});
var IconTrophy = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	...base(p),
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 21h8M12 17v4" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 4h10v6a5 5 0 0 1-10 0V4z" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 6H4.5a2.5 2.5 0 0 0 0 5H7M17 6h2.5a2.5 2.5 0 0 1 0 5H17" })
	]
});
var IconClock = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	...base(p),
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "12",
		cy: "12",
		r: "9"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 7v5l3 2" })]
});
var IconUsers = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	...base(p),
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "9",
			cy: "8",
			r: "3.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "17",
			cy: "9",
			r: "2.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.5 15.2c2.3.3 4 1.9 4.7 4.3" })
	]
});
var IconChart = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	...base(p),
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 3v18h18" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m7 15 4-5 3 3 5-7" })]
});
var IconSend = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	...base(p),
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 2 11 13" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 2 15 22l-4-9-9-4 22-7z" })]
});
var IconMoon = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	...base(p),
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
});
var IconSun = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	...base(p),
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "12",
		cy: "12",
		r: "5"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" })]
});
var IconPhone = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	...base(p),
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" })
});
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#top",
		className: cn("group inline-flex items-center gap-2.5", className),
		"aria-label": "На коне — на главную",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative grid h-11 w-11 place-items-center rounded-xl bg-gold-400 text-[26px] leading-none text-ink-950 shadow-[0_0_24px_rgba(238,194,90,0.35)] transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105",
			children: "♞"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display text-[15px] font-bold tracking-[0.08em] text-white",
			children: ["НА КОНЕ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold-400",
				children: "."
			})]
		})]
	});
}
function Button({ children, href = "#cta", variant = "primary", size = "md", className, withArrow = true, submit = false, disabled = false }) {
	const classes = cn("group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full transition-colors duration-300", {
		md: "px-6 py-3 text-sm",
		lg: "px-8 py-4 text-[15px]"
	}[size], {
		primary: "bg-gold-400 text-ink-950 font-semibold shadow-[0_10px_40px_-10px_rgba(238,194,90,0.55)] hover:bg-gold-300",
		ghost: "glass text-white font-semibold hover:border-white/25 hover:bg-white/[0.08]",
		outline: "border border-white/15 text-white font-semibold hover:border-gold-400/60 hover:text-gold-300"
	}[variant], disabled && "pointer-events-none opacity-60", className);
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [variant === "primary" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": true,
		className: "absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/40 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[340%]"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative z-10 inline-flex items-center gap-2",
		children: [children, withArrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconArrow, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })]
	})] });
	if (submit) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		type: "submit",
		disabled,
		whileHover: {
			scale: 1.03,
			y: -2
		},
		whileTap: { scale: .97 },
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 22
		},
		className: classes,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
		href,
		whileHover: {
			scale: 1.03,
			y: -2
		},
		whileTap: { scale: .97 },
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 22
		},
		className: classes,
		children: inner
	});
}
function Eyebrow({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/[0.07] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse-soft rounded-full bg-gold-400" }), children]
	});
}
function SectionHeading({ eyebrow, title, description, align = "center", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mb-14 flex flex-col gap-5 md:mb-20", align === "center" ? "items-center text-center" : "items-start text-left", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-3xl font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl",
					children: title
				})
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .16,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg",
					children: description
				})
			})
		]
	});
}
function Stars({ className, count = 5 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center gap-0.5 text-gold-400", className),
		"aria-label": `Оценка ${count} из 5`,
		children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconStar, { className: "h-3.5 w-3.5" }, i))
	});
}
var THEME_STORAGE_KEY = "nakone-theme";
/**
* Управляет светлой/тёмной темой.
* Сохраняет выбор в localStorage.
*/
function useTheme() {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem(THEME_STORAGE_KEY);
		const initial = saved === "light" || saved === "dark" ? saved : "dark";
		setTheme(initial);
		applyTheme(initial);
		setMounted(true);
	}, []);
	const toggle = () => {
		setTheme((current) => {
			const next = current === "dark" ? "light" : "dark";
			localStorage.setItem(THEME_STORAGE_KEY, next);
			applyTheme(next);
			return next;
		});
	};
	return {
		theme,
		toggle,
		mounted
	};
}
function applyTheme(theme) {
	const html = document.documentElement;
	html.classList.toggle("light", theme === "light");
	html.classList.toggle("dark", theme === "dark");
	html.style.colorScheme = theme;
}
var LINKS = [
	{
		label: "Методика",
		href: "#method"
	},
	{
		label: "Занятия",
		href: "#classes"
	},
	{
		label: "Тренеры",
		href: "#trainers"
	},
	{
		label: "Тарифы",
		href: "#pricing"
	},
	{
		label: "FAQ",
		href: "#faq"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { scrollY } = useScroll();
	const { theme, toggle, mounted } = useTheme();
	(0, import_react.useEffect)(() => scrollY.on("change", (v) => setScrolled(v > 24)), [scrollY]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -80,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed inset-x-0 top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mx-auto flex h-16 max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8", scrolled && "mt-3 max-w-6xl rounded-2xl glass-strong shadow-2xl shadow-black/40 sm:mx-6 lg:mx-auto"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Основная навигация",
					className: "hidden items-center gap-1 md:flex",
					children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:bg-white/5 hover:text-white",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggle,
							"aria-label": `Переключиться на ${theme === "dark" ? "светлую" : "тёмную"} тему`,
							className: "theme-toggle grid h-10 w-10 place-items-center rounded-xl text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white glass",
							disabled: !mounted,
							children: mounted ? theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconMoon, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSun, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconMoon, { className: "h-5 w-5 opacity-50" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								href: "#cta",
								size: "md",
								children: "Записаться на пробный урок"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen((v) => !v),
							"aria-expanded": open,
							"aria-controls": "mobile-menu",
							"aria-label": open ? "Закрыть меню" : "Открыть меню",
							className: "grid h-10 w-10 place-items-center rounded-xl text-white glass md:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconX, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconMenu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.nav, {
			id: "mobile-menu",
			"aria-label": "Мобильное меню",
			initial: {
				opacity: 0,
				y: -12,
				scale: .98
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: -12,
				scale: .98
			},
			transition: {
				duration: .3,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "mx-4 mt-2 rounded-2xl glass-strong p-3 shadow-2xl shadow-black/50 md:hidden",
			children: [LINKS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
				href: l.href,
				onClick: () => setOpen(false),
				initial: {
					opacity: 0,
					x: -10
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: { delay: .05 * i },
				className: "block rounded-xl px-4 py-3 text-[15px] font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white",
				children: l.label
			}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-2 pt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					href: "#cta",
					className: "w-full",
					size: "lg",
					children: "Записаться на пробный урок"
				})
			})]
		}) })]
	});
}
var IMAGE_PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
function imageWithWidth(url, width) {
	return url.replace(/w=\d+/, `w=${width}`);
}
function Chevron({ dir }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2.2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: "h-6 w-6",
		"aria-hidden": true,
		children: dir === "left" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15 6-6 6 6 6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9 6 6 6-6 6" })
	});
}
function PhotoCarousel({ photos }) {
	const total = photos.length;
	const [active, setActive] = (0, import_react.useState)(4);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const touchX = (0, import_react.useRef)(null);
	const rotateTo = (0, import_react.useCallback)((index) => {
		setActive((index + total) % total);
	}, [total]);
	const next = (0, import_react.useCallback)(() => rotateTo(active + 1), [active, rotateTo]);
	const prev = (0, import_react.useCallback)(() => rotateTo(active - 1), [active, rotateTo]);
	(0, import_react.useEffect)(() => {
		if (paused) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const timer = setInterval(() => {
			setActive((a) => (a + 1) % total);
		}, 4500);
		return () => clearInterval(timer);
	}, [paused, total]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "region",
		"aria-roledescription": "карусель",
		"aria-label": "3D галерея учеников школы",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		onFocus: () => setPaused(true),
		onBlur: () => setPaused(false),
		onTouchStart: (e) => {
			touchX.current = e.touches[0].clientX;
		},
		onTouchEnd: (e) => {
			if (touchX.current === null) return;
			const dx = e.changedTouches[0].clientX - touchX.current;
			if (Math.abs(dx) > 40) {
				if (dx < 0) next();
				else prev();
			}
			touchX.current = null;
		},
		className: "flex w-full select-none flex-col items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative flex w-full justify-center py-4 overflow-visible",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center justify-center scale-[0.58] min-[400px]:scale-[0.66] sm:scale-[0.82] lg:scale-100",
				style: {
					perspective: "1200px",
					width: "100%",
					maxWidth: "900px",
					height: "500px"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: prev,
						"aria-label": "Предыдущий ученик",
						className: "glass-strong absolute left-2 sm:left-10 top-1/2 z-40 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full text-white shadow-2xl border border-white/25 transition-all duration-300 hover:scale-110 hover:border-gold-400 hover:bg-gold-400/20 active:scale-95",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chevron, { dir: "left" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: next,
						"aria-label": "Следующий ученик",
						className: "glass-strong absolute right-2 sm:right-10 top-1/2 z-40 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full text-white shadow-2xl border border-white/25 transition-all duration-300 hover:scale-110 hover:border-gold-400 hover:bg-gold-400/20 active:scale-95",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chevron, { dir: "right" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex items-center justify-center",
						style: {
							transformStyle: "preserve-3d",
							width: "300px",
							height: "420px"
						},
						children: photos.map((p, i) => {
							let offset = (i - active) % total;
							if (offset > total / 2) offset -= total;
							if (offset < -total / 2) offset += total;
							const isFront = offset === 0;
							const distance = Math.abs(offset);
							const shouldLoad = distance <= 2;
							const translateX = offset * 145;
							const translateZ = -distance * 95;
							const rotateY = offset === 0 ? 0 : offset > 0 ? -24 : 24;
							const scale = isFront ? 1 : distance === 1 ? .8 : .62;
							const opacity = isFront ? 1 : distance === 1 ? .72 : .46;
							const zIndex = 30 - distance * 10;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								onClick: () => rotateTo(i),
								initial: false,
								animate: {
									x: translateX,
									z: translateZ,
									rotateY,
									scale,
									opacity
								},
								transition: {
									type: "spring",
									stiffness: 110,
									damping: 20,
									mass: .85
								},
								style: {
									position: "absolute",
									width: "300px",
									height: "420px",
									zIndex,
									cursor: "pointer",
									transformStyle: "preserve-3d",
									pointerEvents: distance > 2 ? "none" : "auto"
								},
								className: "group",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("relative h-full w-full overflow-hidden rounded-[2.4rem] border transition-all duration-500", isFront ? "border-gold-400/90 shadow-[0_20px_70px_-10px_rgba(238,194,90,0.55)] brightness-100" : "border-white/15 shadow-2xl brightness-60 saturate-75 hover:brightness-90 hover:opacity-100"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: shouldLoad ? imageWithWidth(p.img, isFront ? 720 : 480) : IMAGE_PLACEHOLDER,
											srcSet: shouldLoad ? `${imageWithWidth(p.img, 360)} 360w, ${imageWithWidth(p.img, 480)} 480w, ${imageWithWidth(p.img, 720)} 720w` : void 0,
											sizes: "(max-width: 639px) 190px, 300px",
											alt: p.alt,
											width: 640,
											height: 900,
											draggable: false,
											loading: isFront ? "eager" : "lazy",
											decoding: "async",
											fetchPriority: isFront ? "high" : "auto",
											className: "h-full w-full object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-black/20" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl glass-strong px-4 py-2 border border-white/20 shadow-xl backdrop-blur-md max-w-[82%]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "font-display text-base sm:text-lg font-black text-white truncate",
													children: [
														p.name,
														", ",
														p.age,
														" лет"
													]
												}), p.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] font-bold text-gold-300 truncate",
													children: p.tag
												})]
											}), isFront && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-10 w-10 place-items-center rounded-full bg-gold-400 font-display text-sm font-black text-ink-950 shadow-[0_0_20px_rgba(238,194,90,0.6)]",
												children: "★"
											})]
										})
									]
								})
							}, p.name);
						})
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-wrap items-center justify-center gap-2 px-4 max-w-2xl",
			children: photos.map((p, i) => {
				const isActive = i === active;
				const label = p.tag ? `${p.name}, ${p.age} — ${p.tag}` : `${p.name}, ${p.age}`;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					type: "button",
					onClick: () => rotateTo(i),
					whileHover: { scale: 1.05 },
					whileTap: { scale: .95 },
					"aria-label": `Перейти к ученику ${p.name}`,
					className: cn("group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300", isActive ? "bg-gold-400 text-ink-950 shadow-[0_4px_25px_rgba(238,194,90,0.5)] scale-105" : "border border-white/10 bg-[#1d1811] text-zinc-400 hover:border-gold-400/40 hover:text-white"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-2 w-2 rounded-full transition-colors", isActive ? "bg-ink-950" : "bg-gold-400/60 group-hover:bg-gold-400") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
				}, p.name);
			})
		})]
	});
}
var STATS = [
	{
		value: 500,
		suffix: "+",
		label: "учеников школы"
	},
	{
		value: 15,
		suffix: "",
		label: "лет обучаем"
	},
	{
		value: 120,
		suffix: "+",
		label: "призёров турниров"
	},
	{
		value: 4.9,
		suffix: "★",
		decimals: 1,
		label: "оценка родителей"
	}
];
var STUDENTS = [
	{
		name: "Алиса",
		age: 7,
		img: "https://images.pexels.com/photos/33249889/pexels-photo-33249889.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
		alt: "Алиса уверенно держит шахматную фигуру на улице"
	},
	{
		name: "Соня",
		age: 6,
		img: "https://images.pexels.com/photos/33925343/pexels-photo-33925343.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
		alt: "Соня улыбается, играя в шахматы на улице"
	},
	{
		name: "Марк",
		age: 10,
		tag: "выполнил I разряд",
		img: "https://images.pexels.com/photos/9303636/pexels-photo-9303636.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
		alt: "Марк в очках играет в шахматы на траве"
	},
	{
		name: "Артём",
		age: 9,
		img: "https://images.pexels.com/photos/8923799/pexels-photo-8923799.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
		alt: "Артём увлечённо занимается за столом"
	},
	{
		name: "Вера",
		age: 12,
		img: "https://images.pexels.com/photos/33925342/pexels-photo-33925342.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
		alt: "Вера задумчиво оценивает позицию на доске"
	},
	{
		name: "Кира",
		age: 8,
		tag: "победительница Кубка",
		img: "https://images.pexels.com/photos/33925332/pexels-photo-33925332.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
		alt: "Кира продумывает победный ход"
	},
	{
		name: "Даниил",
		age: 11,
		img: "https://images.pexels.com/photos/7965829/pexels-photo-7965829.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
		alt: "Даниил играет в шахматы на природе"
	},
	{
		name: "Мария",
		age: 18,
		tag: "стала чемпионкой",
		img: "https://images.pexels.com/photos/6599605/pexels-photo-6599605.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
		alt: "Мария, 18 лет — победительница турнира, увлечена шахматной партией"
	}
];
var container = {
	hidden: {},
	show: { transition: {
		staggerChildren: .12,
		delayChildren: .15
	} }
};
var item = {
	hidden: {
		opacity: 0,
		y: 34,
		filter: "blur(8px)"
	},
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: .9,
			ease: EASE
		}
	}
};
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-board mask-fade-b absolute inset-0 opacity-80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-grid mask-fade-b absolute inset-0 opacity-50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-40 -top-40 h-[36rem] w-[36rem] animate-drift rounded-full bg-gold-400/[0.25] blur-[120px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-48 top-32 h-[34rem] w-[34rem] animate-drift-2 rounded-full bg-emerald-500/[0.22] blur-[120px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-noise absolute inset-0 opacity-[0.05]" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: container,
					initial: "hidden",
					animate: "show",
					className: "relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: item,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Набор на новый сезон" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							variants: item,
							className: "mt-6 font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl",
							children: [
								"Научим думать",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "на ход вперёд."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: item,
							className: "mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg",
							children: "Шахматная школа «На коне» — очные и онлайн-занятия для детей от 4 лет и взрослых. Тренеры с рейтингом ФИДЕ, авторская методика и турниры: от первых ходов до разрядных норм."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: item,
							className: "mt-8 flex flex-wrap items-center justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								children: "Записаться на пробный урок"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								href: "#method",
								variant: "ghost",
								size: "lg",
								withArrow: false,
								children: "Как мы учим"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: item,
							className: "mt-4 text-[13px] text-zinc-400",
							children: "Первый урок — бесплатно · Оплата после пробного · Отмена в любой момент"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: .94,
						y: 40
					},
					animate: {
						opacity: 1,
						scale: 1,
						y: 0
					},
					transition: {
						duration: 1.1,
						delay: .35,
						ease: EASE
					},
					className: "relative mx-auto w-full max-w-4xl mt-12 mb-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute -inset-10 rounded-[3rem] bg-gradient-to-tr from-gold-400/25 via-transparent to-amber-500/20 blur-3xl"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoCarousel, { photos: STUDENTS }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-strong absolute -left-2 bottom-12 hidden w-44 rounded-2xl p-3.5 shadow-2xl shadow-black/70 xl:block z-30",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-7 w-7 place-items-center rounded-lg bg-gold-400/15 text-gold-400",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCheck, { className: "h-3.5 w-3.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase tracking-wider text-zinc-500",
											children: "Прогресс ученика"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1.5 flex items-end gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-3xl font-extrabold text-white",
											children: "+420"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "pb-0.5 text-base font-bold text-gold-300",
											children: "Elo"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-zinc-400",
										children: "прирост за 6 месяцев · Даниил"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 120 36",
										className: "mt-1.5 h-6 w-full",
										"aria-hidden": true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
											points: "0,32 15,29 30,26 45,27 60,20 75,18 90,12 105,9 120,4",
											fill: "none",
											stroke: "#eec25a",
											strokeWidth: "2.5",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										})
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.dl, {
					variants: container,
					initial: "hidden",
					animate: "show",
					className: "grid w-full max-w-4xl mx-auto grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4 text-center",
					children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "order-2 mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-400",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "order-1 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.value,
								suffix: s.suffix,
								decimals: s.decimals ?? 0
							})
						})]
					}, s.label))
				})
			]
		})]
	});
}
var PRESS = [
	"СПОРТ-ЭКСПРЕСС",
	"ЧЕМПИОНАТ",
	"РБК СПОРТ",
	"КОМСОМОЛЬСКАЯ ПРАВДА",
	"ШАХМАТНАЯ РОССИЯ",
	"МЕЛ",
	"УЧИТЕЛЬСКАЯ ГАЗЕТА",
	"ESPN"
];
var SCHOOLS = [
	"Школа № 57",
	"Лицей «Вторая школа»",
	"Пансион «Летово»",
	"Гимназия им. Примакова",
	"Школа ЦПМ",
	"Физтех-лицей",
	"Школа «Золотое сечение»"
];
function SocialProof() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Публикации и партнёры",
		className: "relative border-y border-white/[0.06] bg-ink-900/40 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500",
					children: "О нашей школе пишут"
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mask-fade-x mt-7 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max animate-marquee items-center gap-16 pr-16",
					children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": copy === 1,
						className: "flex items-center gap-16",
						children: PRESS.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "whitespace-nowrap font-display text-base font-bold tracking-[0.12em] text-zinc-600 transition-colors duration-300 hover:text-zinc-300",
							children: name
						}, `${copy}-${name}`))
					}, copy))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-10 max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-600",
						children: "Ведём шахматные кружки в школах"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mask-fade-x mt-5 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex w-max animate-marquee-fast items-center gap-14 pr-14",
						children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": copy === 1,
							className: "flex items-center gap-14",
							children: SCHOOLS.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "whitespace-nowrap font-display text-[15px] font-semibold tracking-wide text-zinc-500",
								children: name
							}, `${copy}-${name}`))
						}, copy))
					})
				})]
			})
		]
	});
}
var FEATURES = [
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCrown, { className: "h-5 w-5" }),
		title: "Игровой подход",
		copy: "Для детей от 4 лет — сказки, истории и мини-игры вместо скучной теории. Ребёнок учится, потому что ему правда интересно."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTarget, { className: "h-5 w-5" }),
		title: "12 уровней программы",
		copy: "От правил ходов до дебютного репертуара и эндшпильной техники. Каждый уровень — контрольная партия и новая ступень мастерства."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconGrid, { className: "h-5 w-5" }),
		title: "Тактика каждый день",
		copy: "Задачи дня и серии на онлайн-тренажёре: 15 минут в день развивают комбинационное зрение быстрее, чем часы зубрёжки теории."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSearch, { className: "h-5 w-5" }),
		title: "Разбор каждой партии",
		copy: "Тренер разбирает все сыгранные партии: находим ошибки, закрепляем сильные ходы и учим анализировать самостоятельно."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTrophy, { className: "h-5 w-5" }),
		title: "Турнирная практика",
		copy: "Ежемесячные турниры школы и подготовка к первенствам Москвы и России. Рейтинг ФШР и разряды — реально и достижимо."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconChart, { className: "h-5 w-5" }),
		title: "Личный трекер роста",
		copy: "Рейтинг, решённые задачи, победы и разряды — в личном кабинете. Ребёнок видит прогресс и гордится им. Родители — тоже."
	}
];
function FeatureCard({ f, index }) {
	const { ref, onMouseMove } = useSpotlight();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		onMouseMove,
		className: "card-glow group relative h-full overflow-hidden rounded-3xl border border-white/15 bg-[#1d1811] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/40 hover:bg-[#231e16] hover:shadow-2xl hover:shadow-black/60 md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 inline-grid h-12 w-12 place-items-center rounded-2xl border border-gold-400/25 bg-gold-400/10 text-gold-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-ink-950 group-hover:shadow-[0_0_28px_rgba(238,194,90,0.45)]",
				children: f.icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-bold text-white",
				children: f.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2.5 text-sm leading-relaxed text-zinc-400",
				children: f.copy
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "absolute right-6 top-6 font-display text-4xl font-black text-white/[0.04] transition-colors duration-500 group-hover:text-gold-400/10",
				children: String(index + 1).padStart(2, "0")
			})
		]
	}) });
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "method",
		className: "relative scroll-mt-24 py-24 md:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-board absolute inset-0 opacity-70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-32 top-1/3 h-[26rem] w-[26rem] animate-drift rounded-full bg-gold-400/[0.13] blur-[120px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 bottom-0 h-[24rem] w-[24rem] animate-drift-2 rounded-full bg-emerald-500/[0.11] blur-[120px]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Методика",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"От первого хода —",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: "до разрядных норм."
						})
					] }),
					description: "Мы не зубрим дебюты и не мучаем детей теорией. Наша программа — это 12 уровней, игровая подача и постоянная практика. Так шахматы становятся любимым делом, а не «кружком по понедельникам»."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					gap: .08,
					children: FEATURES.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
						f,
						index: i
					}, f.title))
				})]
			})
		]
	});
}
var BULLETS = [
	"Живая онлайн-доска — автоповтор партий и разбор каждой ошибки",
	"Задачи с автопроверкой и рейтингом — соревнуйтесь с одногруппниками",
	"Отчёт родителям после каждого урока: тема, успехи, задача на неделю",
	"Турнирный календарь, рейтинг и разряды — в одном месте"
];
var GLYPHS = {
	r: "♜",
	n: "♞",
	b: "♝",
	q: "♛",
	k: "♚",
	p: "♟",
	R: "♜",
	N: "♞",
	B: "♝",
	Q: "♛",
	K: "♚",
	P: "♟"
};
var FILES = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h"
];
var GAME_STEPS = [
	{
		moveNum: 0,
		whiteName: "Старт",
		comment: "Начальная расстановка фигур",
		evalText: "Оценка: 0.0 · Равенство",
		board: [
			[
				"r",
				"n",
				"b",
				"q",
				"k",
				"b",
				"n",
				"r"
			],
			[
				"p",
				"p",
				"p",
				"p",
				"p",
				"p",
				"p",
				"p"
			],
			[
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null
			],
			[
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null
			],
			[
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null
			],
			[
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null
			],
			[
				"P",
				"P",
				"P",
				"P",
				"P",
				"P",
				"P",
				"P"
			],
			[
				"R",
				"N",
				"B",
				"Q",
				"K",
				"B",
				"N",
				"R"
			]
		]
	},
	{
		moveNum: 1,
		whiteName: "1. e4",
		blackName: "e5",
		comment: "Захват центра пешками",
		evalText: "Оценка: +0.2 · Ход белых",
		highlight: [{
			r: 4,
			c: 4
		}, {
			r: 3,
			c: 4
		}],
		board: [
			[
				"r",
				"n",
				"b",
				"q",
				"k",
				"b",
				"n",
				"r"
			],
			[
				"p",
				"p",
				"p",
				"p",
				null,
				"p",
				"p",
				"p"
			],
			[
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null
			],
			[
				null,
				null,
				null,
				null,
				"p",
				null,
				null,
				null
			],
			[
				null,
				null,
				null,
				null,
				"P",
				null,
				null,
				null
			],
			[
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null
			],
			[
				"P",
				"P",
				"P",
				"P",
				null,
				"P",
				"P",
				"P"
			],
			[
				"R",
				"N",
				"B",
				"Q",
				"K",
				"B",
				"N",
				"R"
			]
		]
	},
	{
		moveNum: 2,
		whiteName: "2. Кf3",
		blackName: "Кc6",
		comment: "Развитие коней к центру",
		evalText: "Оценка: +0.3 · Нападение на e5",
		highlight: [{
			r: 5,
			c: 5
		}, {
			r: 2,
			c: 2
		}],
		board: [
			[
				"r",
				null,
				"b",
				"q",
				"k",
				"b",
				"n",
				"r"
			],
			[
				"p",
				"p",
				"p",
				"p",
				null,
				"p",
				"p",
				"p"
			],
			[
				null,
				null,
				"n",
				null,
				null,
				null,
				null,
				null
			],
			[
				null,
				null,
				null,
				null,
				"p",
				null,
				null,
				null
			],
			[
				null,
				null,
				null,
				null,
				"P",
				null,
				null,
				null
			],
			[
				null,
				null,
				null,
				null,
				null,
				"N",
				null,
				null
			],
			[
				"P",
				"P",
				"P",
				"P",
				null,
				"P",
				"P",
				"P"
			],
			[
				"R",
				"N",
				"B",
				"Q",
				"K",
				"B",
				null,
				"R"
			]
		]
	},
	{
		moveNum: 3,
		whiteName: "3. Сc4",
		blackName: "Сc5",
		comment: "Итальянская партия: прицел на пункт f7",
		evalText: "Оценка: +0.3 · Активные слоны",
		highlight: [{
			r: 4,
			c: 2
		}, {
			r: 3,
			c: 2
		}],
		board: [
			[
				"r",
				null,
				"b",
				"q",
				"k",
				null,
				"n",
				"r"
			],
			[
				"p",
				"p",
				"p",
				"p",
				null,
				"p",
				"p",
				"p"
			],
			[
				null,
				null,
				"n",
				null,
				null,
				null,
				null,
				null
			],
			[
				null,
				null,
				"b",
				null,
				"p",
				null,
				null,
				null
			],
			[
				null,
				null,
				"B",
				null,
				"P",
				null,
				null,
				null
			],
			[
				null,
				null,
				null,
				null,
				null,
				"N",
				null,
				null
			],
			[
				"P",
				"P",
				"P",
				"P",
				null,
				"P",
				"P",
				"P"
			],
			[
				"R",
				"N",
				null,
				"Q",
				"K",
				null,
				null,
				"R"
			]
		]
	},
	{
		moveNum: 4,
		whiteName: "4. b4!",
		blackName: "Сxb4",
		comment: "Гамбит Эванса! Жертва пешки за инициативу",
		evalText: "Оценка: +0.6 · Взрывная атака белых!",
		highlight: [{
			r: 4,
			c: 1
		}, {
			r: 4,
			c: 1
		}],
		board: [
			[
				"r",
				null,
				"b",
				"q",
				"k",
				null,
				"n",
				"r"
			],
			[
				"p",
				"p",
				"p",
				"p",
				null,
				"p",
				"p",
				"p"
			],
			[
				null,
				null,
				"n",
				null,
				null,
				null,
				null,
				null
			],
			[
				null,
				null,
				null,
				null,
				"p",
				null,
				null,
				null
			],
			[
				null,
				"b",
				"B",
				null,
				"P",
				null,
				null,
				null
			],
			[
				null,
				null,
				null,
				null,
				null,
				"N",
				null,
				null
			],
			[
				"P",
				null,
				"P",
				"P",
				null,
				"P",
				"P",
				"P"
			],
			[
				"R",
				"N",
				null,
				"Q",
				"K",
				null,
				null,
				"R"
			]
		]
	},
	{
		moveNum: 5,
		whiteName: "5. c3",
		blackName: "Сa5",
		comment: "Строим мощный пешечный центр",
		evalText: "Оценка: +0.7 · Позиционное преимущество",
		highlight: [{
			r: 5,
			c: 2
		}, {
			r: 3,
			c: 0
		}],
		board: [
			[
				"r",
				null,
				"b",
				"q",
				"k",
				null,
				"n",
				"r"
			],
			[
				"p",
				"p",
				"p",
				"p",
				null,
				"p",
				"p",
				"p"
			],
			[
				null,
				null,
				"n",
				null,
				null,
				null,
				null,
				null
			],
			[
				"b",
				null,
				null,
				null,
				"p",
				null,
				null,
				null
			],
			[
				null,
				null,
				"B",
				null,
				"P",
				null,
				null,
				null
			],
			[
				null,
				null,
				"P",
				null,
				null,
				"N",
				null,
				null
			],
			[
				"P",
				null,
				null,
				"P",
				null,
				"P",
				"P",
				"P"
			],
			[
				"R",
				"N",
				null,
				"Q",
				"K",
				null,
				null,
				"R"
			]
		]
	},
	{
		moveNum: 6,
		whiteName: "6. d4!",
		blackName: "exd4",
		comment: "Вскрытие центральных линий под атаку",
		evalText: "Оценка: +1.0 · Белые доминируют",
		highlight: [{
			r: 4,
			c: 3
		}, {
			r: 4,
			c: 3
		}],
		board: [
			[
				"r",
				null,
				"b",
				"q",
				"k",
				null,
				"n",
				"r"
			],
			[
				"p",
				"p",
				"p",
				"p",
				null,
				"p",
				"p",
				"p"
			],
			[
				null,
				null,
				"n",
				null,
				null,
				null,
				null,
				null
			],
			[
				"b",
				null,
				null,
				null,
				null,
				null,
				null,
				null
			],
			[
				null,
				null,
				"B",
				"p",
				"P",
				null,
				null,
				null
			],
			[
				null,
				null,
				"P",
				null,
				null,
				"N",
				null,
				null
			],
			[
				"P",
				null,
				null,
				null,
				null,
				"P",
				"P",
				"P"
			],
			[
				"R",
				"N",
				null,
				"Q",
				"K",
				null,
				null,
				"R"
			]
		]
	},
	{
		moveNum: 7,
		whiteName: "7. O-O",
		blackName: "d6",
		comment: "Короткая рокировка: король укрыт",
		evalText: "Оценка: +1.3 · Полная готовность к штурму",
		highlight: [{
			r: 7,
			c: 6
		}, {
			r: 7,
			c: 5
		}],
		board: [
			[
				"r",
				null,
				"b",
				"q",
				"k",
				null,
				"n",
				"r"
			],
			[
				"p",
				"p",
				"p",
				null,
				null,
				"p",
				"p",
				"p"
			],
			[
				null,
				null,
				"n",
				"p",
				null,
				null,
				null,
				null
			],
			[
				"b",
				null,
				null,
				null,
				null,
				null,
				null,
				null
			],
			[
				null,
				null,
				"B",
				"p",
				"P",
				null,
				null,
				null
			],
			[
				null,
				null,
				"P",
				null,
				null,
				"N",
				null,
				null
			],
			[
				"P",
				null,
				null,
				null,
				null,
				"P",
				"P",
				"P"
			],
			[
				"R",
				"N",
				null,
				"Q",
				null,
				"R",
				"K",
				null
			]
		]
	},
	{
		moveNum: 8,
		whiteName: "8. Фb3! 🔥",
		blackName: "Фe7",
		comment: "Ферзь и слон создают смертельную угрозу на f7!",
		evalText: "Оценка: +2.1 · Решающий перевес белых!",
		highlight: [{
			r: 5,
			c: 1
		}, {
			r: 1,
			c: 5
		}],
		board: [
			[
				"r",
				null,
				"b",
				null,
				"k",
				null,
				"n",
				"r"
			],
			[
				"p",
				"p",
				"p",
				null,
				"q",
				"p",
				"p",
				"p"
			],
			[
				null,
				null,
				"n",
				"p",
				null,
				null,
				null,
				null
			],
			[
				"b",
				null,
				null,
				null,
				null,
				null,
				null,
				null
			],
			[
				null,
				null,
				"B",
				"p",
				"P",
				null,
				null,
				null
			],
			[
				null,
				"Q",
				"P",
				null,
				null,
				"N",
				null,
				null
			],
			[
				"P",
				null,
				null,
				null,
				null,
				"P",
				"P",
				"P"
			],
			[
				"R",
				"N",
				null,
				null,
				null,
				"R",
				"K",
				null
			]
		]
	}
];
/**
* Изолированный компонент зацикленной доски.
* Работает ТОЛЬКО когда видeн на экране (`useInView`),
* не вызывает перерисовку родительских компонентов и не сбивает скролл!
*/
function LoopingChessBoard() {
	const containerRef = (0, import_react.useRef)(null);
	const isInView = useInView(containerRef, { margin: "200px" });
	const [stepIdx, setStepIdx] = (0, import_react.useState)(0);
	const step = GAME_STEPS[stepIdx];
	(0, import_react.useEffect)(() => {
		if (!isInView) return;
		const delay = stepIdx === GAME_STEPS.length - 1 ? 2600 : 1600;
		const timer = setTimeout(() => {
			setStepIdx((prev) => (prev + 1) % GAME_STEPS.length);
		}, delay);
		return () => clearTimeout(timer);
	}, [isInView, stepIdx]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "relative w-full max-w-[460px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute left-1/2 top-1/2 h-[110%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-gold-400/25 via-transparent to-amber-500/20 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative w-full rounded-[2.2rem] border border-white/20 bg-[#1a150e] p-3 shadow-2xl shadow-black/80",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-[1.8rem] bg-[#120e0a]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-white/10 bg-[#1d1811] px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-red-400/80" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-amber-400/80" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-400/80" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 rounded-full bg-white/[0.08] px-3 py-1 text-[11px] font-semibold text-zinc-300",
									children: "kone.school · итальянская партия"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5 rounded-full bg-gold-400/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-gold-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 animate-ping rounded-full bg-gold-400" }), "GIF-Повтор"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-2xl border-2 border-gold-400/40 shadow-2xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-8 aspect-square w-full",
									role: "img",
									"aria-label": "Зацикленная анимированная шахматная партия",
									children: step.board.map((row, r) => row.map((piece, c) => {
										const light = (r + c) % 2 === 0;
										const isHighlighted = step.highlight?.some((h) => h.r === r && h.c === c);
										const isWhitePiece = piece !== null && piece === piece.toUpperCase();
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `relative grid aspect-square place-items-center transition-all duration-300 ${isHighlighted ? "bg-gold-400/65 ring-2 ring-gold-200 ring-inset" : light ? "bg-[#e8dbb9]" : "bg-[#97784b]"}`,
											children: [piece && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `select-none text-[clamp(22px,6vw,38px)] leading-none font-extrabold transition-transform duration-300 ${isWhitePiece ? "text-[#ffffff] drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]" : "text-[#18110a] drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]"}`,
												children: GLYPHS[piece]
											}), r === 7 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `absolute bottom-0.5 left-1 text-[9px] font-extrabold ${light ? "text-[#97784b]" : "text-[#e8dbb9]"}`,
												children: FILES[c]
											})]
										}, `${r}-${c}`);
									}))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-gold-400/30 bg-[#221a12] p-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-gold-400 px-2 py-0.5 font-display text-xs font-black text-ink-950",
											children: step.moveNum === 0 ? "0" : step.moveNum
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-sm font-bold text-white",
											children: step.moveNum === 0 ? "Старт партии" : `${step.whiteName} ${step.blackName || ""}`
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-gold-400/15 px-2.5 py-0.5 text-[11px] font-extrabold text-gold-300",
										children: step.evalText
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-relaxed text-zinc-300",
									children: step.comment
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-2 pt-1",
								children: [
									["Рейтинг", "1 680"],
									["Решено задач", "1 840"],
									["Разряд", "II юнош."]
								].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-white/10 bg-[#1a150e] px-2.5 py-2 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[8px] font-bold uppercase tracking-wider text-zinc-500",
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 font-display text-[12px] font-extrabold text-white",
										children: value
									})]
								}, label))
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong absolute -left-12 top-16 hidden w-48 animate-float rounded-2xl p-4 shadow-2xl shadow-black/50 lg:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-lg bg-gold-400/15 text-gold-400",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconClock, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium uppercase tracking-wider text-zinc-500",
							children: "Разбор партии"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[13px] font-bold text-white",
						children: "Сегодня · 19:00"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-zinc-500",
						children: "с тренером Игорем Соколовым"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong absolute -right-8 bottom-12 hidden animate-float-slow items-center gap-2.5 rounded-2xl p-3.5 pr-5 shadow-2xl shadow-black/50 lg:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-9 w-9 place-items-center rounded-full bg-emerald-400/15 text-emerald-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCheck, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] font-bold text-white",
					children: "Задача дня решена!"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] text-zinc-500",
					children: "Серия из 12 побед подряд"
				})] })]
			})
		]
	});
}
function Showcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "classes",
		className: "relative scroll-mt-24 overflow-hidden py-24 md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-board absolute inset-0 opacity-70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-1/4 h-[30rem] w-[30rem] animate-drift rounded-full bg-gold-400/[0.14] blur-[110px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-40 bottom-0 h-[26rem] w-[26rem] animate-drift-2 rounded-full bg-emerald-500/[0.14] blur-[110px]" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 lg:order-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Платформа школы" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl",
							children: [
								"Один кабинет —",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "вся шахматная жизнь."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .16,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg",
							children: "Живая онлайн-доска с автоповтором: смотрите ключевые партии, изучайте тактические приёмы и разборы комбинаций прямо в браузере без установки лишних программ."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						className: "mt-9 space-y-4",
						gap: .09,
						children: BULLETS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							y: 14,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-400/15 text-gold-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCheck, { className: "h-3.5 w-3.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[15px] text-zinc-300",
									children: b
								})]
							})
						}, b))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex -space-x-2.5",
								children: [
									"А",
									"М",
									"С",
									"В"
								].map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `grid h-9 w-9 place-items-center rounded-full border-2 border-ink-950 text-[11px] font-black text-ink-950 ${[
										"bg-gold-400",
										"bg-emerald-300",
										"bg-sky-300",
										"bg-fuchsia-300"
									][i]}`,
									children: ch
								}, ch))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[13px] text-zinc-500",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-white",
									children: "500+ учеников"
								}), " уже занимаются по платформе"]
							})]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				y: 44,
				className: "order-1 flex justify-center lg:order-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoopingChessBoard, {})
			})]
		})]
	});
}
var IMG = "https://images.pexels.com/photos/6955015/pexels-photo-6955015.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000";
var BENEFITS = [
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTrophy, { className: "h-5 w-5" }),
		title: "Рейтинг ФИДЕ и титулы",
		copy: "Международные мастера и КМС, которые сами играют в турнирах и следят за современными трендами."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconUsers, { className: "h-5 w-5" }),
		title: "Группы до 10 человек",
		copy: "Тренер видит каждую партию и каждого ученика — не только первые доски. Внимание не размазывается."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTarget, { className: "h-5 w-5" }),
		title: "Программа под ученика",
		copy: "Темп, дебютный репертуар и турнирный график подбираются индивидуально — под возраст, характер и цель."
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconShield, { className: "h-5 w-5" }),
		title: "Прозрачность для родителей",
		copy: "Отчёт после каждого урока и открытый чат с тренером. Вы всегда знаете, что проходит ребёнок."
	}
];
var TRAINERS = [
	{
		name: "Игорь Соколов",
		title: "Международный мастер · ФИДЕ 2487",
		exp: "20 лет опыта",
		note: "Готовит к первенству России и этапам Кубка страны. Воспитал 14 призёров всероссийских турниров.",
		photo: "https://images.pexels.com/photos/6326377/pexels-photo-6326377.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
		comment: "«Отличная подготовка к турниру! Видно, что прорабатываешь открытия.»"
	},
	{
		name: "Мария Волкова",
		title: "Кандидат в мастера · ФИДЕ 2145",
		exp: "12 лет опыта",
		note: "Дошкольники 4–7 лет: авторская игровая методика, мягкий старт и первые победы без слёз.",
		photo: "https://images.pexels.com/photos/37851579/pexels-photo-37851579.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
		comment: "«Соня, ты сегодня играла смело! Вот именно такие ходы нам нужны.»"
	},
	{
		name: "Артём Лебедев",
		title: "Мастер ФИДЕ · ФИДЕ 2310",
		exp: "10 лет опыта",
		note: "Взрослые с нуля и онлайн-группы из любого города. Довёл до первого разряда 30+ учеников.",
		photo: "https://images.pexels.com/photos/33345000/pexels-photo-33345000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
		comment: "«Твой рейтинг вырос на 50 пунктов! Держи эту форму 🔥»"
	}
];
function Benefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "trainers",
		className: "relative scroll-mt-24 overflow-hidden py-24 md:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-board absolute inset-0 opacity-70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-40 top-20 h-[28rem] w-[28rem] animate-drift rounded-full bg-gold-400/[0.12] blur-[130px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-40 bottom-10 h-[26rem] w-[26rem] animate-drift-2 rounded-full bg-emerald-500/[0.10] blur-[130px]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "relative",
					y: 40,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute -inset-5 rounded-[2.6rem] bg-gradient-to-br from-amber-500/15 via-transparent to-gold-400/15 blur-2xl"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-[2rem] border border-white/10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: IMG,
										alt: "Занятие с тренером: тёплая и живая атмосфера обучения шахматам",
										className: "aspect-[4/5] w-full object-cover sm:aspect-[5/5]",
										width: 1e3,
										height: 1200,
										loading: "lazy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass-strong absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-2xl p-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-3xl font-extrabold text-white md:text-4xl",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
												to: 96,
												suffix: "%"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-[12px] leading-snug text-zinc-400",
											children: [
												"родителей замечают прогресс",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"ребёнка за полгода"
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-3xl font-extrabold text-white md:text-4xl",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
													to: 500,
													suffix: "+"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-[12px] text-zinc-400",
												children: [
													"учеников",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"с 2011 года"
												]
											})]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "glass-strong absolute -top-4 right-6 hidden animate-float rounded-full px-4 py-2 shadow-xl shadow-black/50 sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] font-semibold text-white",
									children: "Основана в 2011 · 15 лет в шахматах"
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Тренеры" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl",
							children: [
								"Тренеры, которые",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "видят каждого ученика."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .16,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg",
							children: "Все наставники школы — действующие шахматисты с рейтингом ФИДЕ и опытом преподавания от 10 лет. Группы до 10 человек, поэтому мы знаем сильные стороны и зоны роста каждого ученика."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						className: "mt-10 space-y-7",
						gap: .1,
						children: BENEFITS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							y: 18,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-400/25 bg-gold-400/10 text-gold-400 transition-all duration-300 group-hover:bg-gold-400 group-hover:text-ink-950",
									children: b.icon
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-[16px] font-bold text-white",
									children: b.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm leading-relaxed text-zinc-400",
									children: b.copy
								})] })]
							})
						}, b.title))
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-20 max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "grid gap-5 md:grid-cols-3",
					gap: .1,
					children: TRAINERS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group relative h-full overflow-hidden rounded-3xl border border-white/15 bg-[#1d1811] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/40 hover:bg-[#231e16] hover:shadow-2xl hover:shadow-black/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: t.photo,
									alt: t.name,
									width: 72,
									height: 72,
									loading: "lazy",
									className: "h-18 w-18 h-[72px] w-[72px] rounded-2xl object-cover border border-gold-400/30 shadow-lg"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-gold-400/25 bg-gold-400/10 px-3 py-1 text-[11px] font-bold text-gold-300",
									children: t.exp
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-lg font-bold text-white",
								children: t.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[13px] font-medium text-gold-300/90",
								children: t.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed italic text-zinc-300",
								children: t.comment
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-zinc-400",
								children: t.note
							})
						]
					}) }, t.name))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex flex-col items-center justify-center gap-5 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							href: "#cta",
							variant: "outline",
							children: "Познакомиться с тренером на пробном уроке"
						})
					})
				})]
			})
		]
	});
}
var TESTIMONIALS = [
	{
		quote: "Сын сам просит пойти на шахматы — для нас это уже победа. Через полгода Миша получил первый юношеский разряд и стал заметно собраннее в школе. «На коне» — лучшее, что мы записали за год.",
		name: "Анна",
		role: "мама Миши, 8 лет",
		result: "III юношеский разряд",
		initials: "А",
		color: "bg-gradient-to-br from-gold-400 to-amber-600",
		featured: true
	},
	{
		quote: "Начал с нуля в 34 года — боялся, что поздно. За 6 месяцев рейтинг вырос до 1650 (+420 Elo) и занял первое место в турнире школы. Тренер верит в тебя больше, чем ты сам.",
		name: "Сергей",
		role: "ученик, 34 года",
		result: "Рейтинг 1650 (+420 Elo)",
		initials: "С",
		color: "bg-gradient-to-br from-sky-300 to-indigo-500"
	},
	{
		quote: "Дочь выполнила норму КМС в 12 лет. Отдельное спасибо за психологическую подготовку перед турнирами — это работа на результат, а не «просто кружок».",
		name: "Ольга",
		role: "мама Веры, 12 лет",
		result: "КМС в 12 лет",
		initials: "О",
		color: "bg-gradient-to-br from-fuchsia-400 to-pink-500"
	},
	{
		quote: "Живём за 3 000 км от Москвы, занимаемся онлайн. Организация идеальная: доска, записи, домашние задания. Сын ждёт каждый урок — что ещё нужно родителям?",
		name: "Дмитрий",
		role: "папа Артёма · Новосибирск",
		result: "Онлайн · 2 года",
		initials: "Д",
		color: "bg-gradient-to-br from-emerald-300 to-teal-500"
	},
	{
		quote: "Записали дочку в 5 лет — боялась, что рано. Игровая методика сработала: через месяц сама раскладывала задачи, через год уверенно играет турниры.",
		name: "Елена",
		role: "мама Сони, 6 лет",
		result: "Старт в 5 лет",
		initials: "Е",
		color: "bg-gradient-to-br from-amber-300 to-orange-500"
	},
	{
		quote: "Группа до 10 человек — это не маркетинг: тренер реально знает каждую партию сына. А отчёты после уроков — отдельный респект школе.",
		name: "Максим",
		role: "папа Данила, 10 лет",
		result: "Группа из 8 человек",
		initials: "М",
		color: "bg-gradient-to-br from-violet-400 to-purple-600"
	}
];
function TestimonialCard({ t, featured = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		className: featured ? "sm:col-span-2 lg:col-span-3" : "",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: `group relative flex h-full flex-col rounded-3xl border border-white/15 bg-[#1d1811] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:bg-[#231e16] md:p-8 ${featured ? "testimonial-featured border-gold-400/50 bg-gradient-to-br from-[#241c10] to-[#1a140b]" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {}), featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-300",
						children: "История года"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "mt-5 flex-1 text-[15px] leading-relaxed text-zinc-300",
					children: [
						"«",
						t.quote,
						"»"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-7 flex items-center justify-between gap-4 border-t border-white/[0.07] pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid h-10 w-10 place-items-center rounded-full text-[13px] font-black text-ink-950 ${t.color}`,
							"aria-hidden": true,
							children: t.initials
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-white",
							children: t.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12px] text-zinc-500",
							children: t.role
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "whitespace-nowrap rounded-full bg-white/[0.06] px-3 py-1.5 text-[11px] font-bold text-gold-300",
						children: t.result
					})]
				})
			]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "reviews",
		className: "relative scroll-mt-24 py-24 md:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-board absolute inset-0 opacity-70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-32 top-1/4 h-[26rem] w-[26rem] animate-drift rounded-full bg-gold-400/[0.12] blur-[120px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 bottom-1/4 h-[24rem] w-[24rem] animate-drift-2 rounded-full bg-emerald-500/[0.10] blur-[120px]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Отзывы",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Родители и ученики —",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold",
								children: "о настоящих результатах."
							})
						] }),
						description: "Никаких постановочных «спасибо». Только истории людей, которые пришли с нуля — и остались с разрядами, рейтингом и любовью к шахматам."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						gap: .08,
						children: TESTIMONIALS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialCard, {
							t,
							featured: t.featured
						}, t.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-zinc-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-white",
									children: "4.9/5"
								}),
								" — средняя оценка по",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-white",
									children: "200+"
								}),
								" отзывам родителей и учеников"
							]
						})
					})
				]
			})
		]
	});
}
var PLANS = [
	{
		name: "Индивидуальные",
		tagline: "1 на 1 с тренером · 60 минут",
		price: 3500,
		unit: "/урок",
		dealLabel: "Пакет на месяц",
		dealPrice: "11 990 ₽ (4 занятия)",
		dealNote: "вместо 14 000 ₽ · выгода 2 010 ₽",
		cta: "Взять пакет 4 урока",
		features: [
			"Занятия 1 на 1 по 60 минут",
			"Программа под уровень и цель",
			"Разбор каждой партии",
			"Гибкое расписание — когда удобно вам",
			"Подготовка к турнирам и разрядам",
			"Личный чат с тренером"
		]
	},
	{
		name: "Онлайн",
		tagline: "Из любого города · 60 минут",
		price: 2500,
		unit: "/урок",
		dealLabel: "Пакет на месяц",
		dealPrice: "8 990 ₽ (4 занятия)",
		dealNote: "выгоднее, чем занятия по отдельности",
		cta: "Взять пакет на месяц",
		features: [
			"Занятия по 60 минут с тренером онлайн",
			"Онлайн-доска и запись уроков",
			"Задачи с автопроверкой",
			"Онлайн-турниры школы",
			"Разборы партий в записи",
			"Отчёты родителям после урока"
		]
	},
	{
		name: "Групповые",
		tagline: "Онлайн-группы · 60 минут",
		price: 900,
		unit: "/урок",
		dealLabel: "Пакет на месяц",
		dealPrice: "3 490 ₽ (4 занятия)",
		dealNote: "при оплате за месяц вперед",
		cta: "Взять пакет на месяц",
		features: [
			"Занятия онлайн в мини-группе до 10 человек",
			"Живое общение с тренером",
			"Онлайн-тренажёр с задачами",
			"Домашние задания с проверкой",
			"Ежемесячные онлайн-турниры школы",
			"Отчёты родителям после урока"
		]
	}
];
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "pricing",
		className: "relative scroll-mt-24 overflow-hidden py-24 md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-board absolute inset-0 opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-24 h-[30rem] w-[46rem] -translate-x-1/2 animate-drift rounded-full bg-gold-400/[0.13] blur-[130px]" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Тарифы",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Честные цены —",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: "никаких скрытых доплат."
						})
					] }),
					description: "Первое занятие — бесплатно: вы ничего не платите, пока не поймёте, что нам подходите. Пакеты выгоднее — абонемент можно приостановить или отменить в любой момент."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "grid items-stretch gap-6 lg:grid-cols-3",
					gap: .12,
					children: PLANS.map((plan, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: cn("relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2 border-white/15 bg-[#1d1811] hover:border-gold-400/40 hover:bg-[#231e16]"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-extrabold text-white",
									children: plan.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[13px] text-zinc-500",
									children: plan.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 flex items-end gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-4xl font-extrabold tracking-tight text-white",
										children: [plan.price.toLocaleString("ru-RU"), " ₽"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pb-1.5 text-sm text-zinc-500",
										children: plan.unit
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-col gap-1 rounded-2xl border border-gold-400/30 bg-gold-400/[0.07] p-4 transition-colors duration-300 hover:border-gold-400/50",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-bold uppercase tracking-wider text-gold-300",
											children: plan.dealLabel
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-lg font-extrabold text-white",
											children: plan.dealPrice
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[12px] text-zinc-400",
											children: plan.dealNote
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-7 flex-1 space-y-3.5 border-t border-white/[0.08] pt-7",
									children: plan.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 text-sm text-zinc-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-400/15 text-gold-400",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCheck, { className: "h-3 w-3" })
										}), f]
									}, f))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									href: "#cta",
									variant: i === 1 ? "primary" : "ghost",
									className: "mt-8 w-full",
									children: plan.cta
								})
							]
						})
					}, plan.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-14 flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-white/15 bg-[#1d1811] p-7 text-center sm:flex-row sm:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-400/15 text-gold-400",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconShield, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[15px] font-bold text-white",
							children: "Первый урок — бесплатно. Дальше — только по любви."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[13px] leading-relaxed text-zinc-400",
							children: "Приходите на пробное занятие без оплаты. Если понравится — оплатите абонемент. Если в первые 14 дней передумаете — вернём деньги полностью, без вопросов и удержаний."
						})] })]
					})
				})
			]
		})]
	});
}
var FAQS = [
	{
		q: "С какого возраста можно начинать?",
		a: "С 4 лет — по специальной игровой методике для дошкольников. Для взрослых ограничений нет: около 40% наших учеников старше 18 и приходят без всякой подготовки. Шахматам всё равно, сколько вам лет, — важен интерес."
	},
	{
		q: "Я совсем не умею играть. Возьмёте?",
		a: "Конечно. Более 60% наших учеников начинали с нуля. Программа построена так, что первые осознанные победы появляются уже через месяц: сначала правила и лёгкие задачи, потом тактика, дебюты и первые турниры."
	},
	{
		q: "Как проходят онлайн-занятия?",
		a: "На платформе школы: живая онлайн-доска, видеосвязь с тренером и запись каждого урока. Домашние задания, разборы партий и турнирный календарь — в личном кабинете. Нужны только компьютер или планшет и интернет."
	},
	{
		q: "Вы участвуете в турнирах?",
		a: "Да. Каждый месяц проводим внутренние турниры школы, а также готовим учеников к официальным соревнованиям: первенствам Москвы и России, этапам Кубка страны. Помогаем с регистрацией, нормативами разрядов и психологической подготовкой."
	},
	{
		q: "Можно ли переносить занятия?",
		a: "Да, бесплатно — предупредите тренера за 12 часов, и занятие перенесётся на удобное время в рамках месяца. Если ребёнок заболел, урок не сгорает: переносим или возвращаем занятие в следующий месяц."
	},
	{
		q: "Что нужно купить для старта?",
		a: "Для офлайн-занятий — только шахматную доску с фигурами (подскажем, какую выбрать). Для онлайн — компьютер или планшет. Методические материалы, доступ к платформе и задачи — в подарок на первом уроке."
	}
];
function FaqItem({ faq, index }) {
	const [open, setOpen] = (0, import_react.useState)(index === 0);
	const panelId = `faq-panel-${index}`;
	const btnId = `faq-button-${index}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-2xl border transition-colors duration-300", open ? "border-gold-400/50 bg-[#241c10]" : "border-white/15 bg-[#1d1811] hover:border-gold-400/30"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			id: btnId,
			type: "button",
			"aria-expanded": open,
			"aria-controls": panelId,
			onClick: () => setOpen((v) => !v),
			className: "flex w-full items-center justify-between gap-5 px-6 py-5 text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-[15px] font-bold text-white md:text-base",
				children: faq.q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				animate: { rotate: open ? 45 : 0 },
				transition: {
					duration: .3,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: cn("grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-300", open ? "border-gold-400/40 bg-gold-400 text-ink-950" : "border-white/15 text-zinc-400"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPlus, { className: "h-4 w-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			initial: false,
			children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				id: panelId,
				role: "region",
				"aria-labelledby": btnId,
				initial: {
					height: 0,
					opacity: 0
				},
				animate: {
					height: "auto",
					opacity: 1
				},
				exit: {
					height: 0,
					opacity: 0
				},
				transition: {
					duration: .4,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-6 pb-6 text-sm leading-relaxed text-zinc-400",
					children: faq.a
				})
			})
		})]
	});
}
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "relative scroll-mt-24 py-24 md:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-board absolute inset-0 opacity-70" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "FAQ",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Вопросы?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: " Отвечаем честно."
						})] }),
						description: "Всё, что обычно спрашивают родители и взрослые ученики перед записью. Без маркетинговых уловок."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						className: "space-y-3.5",
						gap: .07,
						children: FAQS.map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							y: 16,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqItem, {
								faq,
								index: i
							})
						}, faq.q))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-10 text-center text-sm text-zinc-500",
							children: [
								"Остались вопросы?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#cta",
									className: "font-semibold text-gold-300 underline-offset-4 transition-colors hover:text-gold-200 hover:underline",
									children: "Напишите нам — отвечаем в течение часа →"
								})
							]
						})
					})
				]
			})
		]
	});
}
var CTA_IMG = "https://images.pexels.com/photos/35300539/pexels-photo-35300539.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600";
function formatRussianPhone(rawVal) {
	let digits = rawVal.replace(/\D/g, "");
	if (!digits) return "";
	if (digits[0] === "8" || digits[0] === "7") digits = "7" + digits.slice(1);
	else digits = "7" + digits;
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
function caretAfterDigits(value, digitCount) {
	if (digitCount <= 0) return 0;
	let seen = 0;
	for (let i = 0; i < value.length; i += 1) if (/\d/.test(value[i])) {
		seen += 1;
		if (seen === digitCount) return i + 1;
	}
	return value.length;
}
function CTA() {
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [website, setWebsite] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)("");
	const phoneInputRef = (0, import_react.useRef)(null);
	const applyPhoneValue = (rawValue, digitsBeforeCaret) => {
		const formatted = formatRussianPhone(rawValue);
		setPhone(formatted);
		if (digitsBeforeCaret === void 0) return;
		requestAnimationFrame(() => {
			const input = phoneInputRef.current;
			if (!input) return;
			const maxDigits = formatted.replace(/\D/g, "").length;
			const caret = caretAfterDigits(formatted, Math.min(digitsBeforeCaret, maxDigits));
			input.setSelectionRange(caret, caret);
		});
	};
	const handlePhoneChange = (e) => {
		const input = e.currentTarget;
		const value = input.value;
		const caret = input.selectionStart ?? value.length;
		const rawDigits = value.replace(/\D/g, "");
		const hasCountryCode = rawDigits[0] === "7" || rawDigits[0] === "8";
		const digitsBeforeCaret = value.slice(0, caret).replace(/\D/g, "").length + (hasCountryCode ? 0 : 1);
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
	const handlePhoneKeyDown = (e) => {
		if (e.key !== "Backspace" && e.key !== "Delete") return;
		const input = e.currentTarget;
		const start = input.selectionStart ?? 0;
		if (start !== (input.selectionEnd ?? start)) return;
		let digitIndex = e.key === "Backspace" ? start - 1 : start;
		const step = e.key === "Backspace" ? -1 : 1;
		while (digitIndex >= 0 && digitIndex < input.value.length && !/\d/.test(input.value[digitIndex])) digitIndex += step;
		if (digitIndex < 0 || digitIndex >= input.value.length) return;
		e.preventDefault();
		const nextValue = input.value.slice(0, digitIndex) + input.value.slice(digitIndex + 1);
		const nextCaret = e.key === "Backspace" ? digitIndex : start;
		const digitsBeforeCaret = nextValue.slice(0, nextCaret).replace(/\D/g, "").length;
		applyPhoneValue(nextValue, digitsBeforeCaret);
	};
	const handleSubmit = async (e) => {
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
		const timeout = window.setTimeout(() => controller.abort(), 12e3);
		try {
			const response = await fetch("/api/send-telegram", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				signal: controller.signal,
				body: JSON.stringify({
					name: trimmedName,
					phone: phone.trim(),
					website
				})
			});
			window.clearTimeout(timeout);
			const payload = await response.json().catch(() => null);
			if (response.ok && payload?.ok) {
				setStatus("success");
				return;
			}
			if (response.status === 500 || payload?.error === "Telegram is not configured") throw new Error("telegram-config");
			if (response.status === 502 || payload?.error === "Telegram delivery failed") throw new Error("telegram-delivery");
			if (response.status === 400) {
				setStatus("error");
				setError("Проверьте имя и номер телефона и попробуйте ещё раз.");
				return;
			}
			throw new Error(`Сервер заявки ответил с кодом ${response.status}`);
		} catch (err) {
			const reason = err instanceof Error ? err.message : "";
			const aborted = reason === "AbortError" || err instanceof DOMException && err.name === "AbortError";
			if (!aborted && reason !== "telegram-config" && reason !== "telegram-delivery") console.error("Ошибка отправки заявки:", err);
			setStatus("error");
			if (reason === "telegram-config" || reason === "telegram-delivery") setError("Не удалось отправить заявку в Telegram. Позвоните нам: +7 999 896 33 39.");
			else if (aborted) setError("Сервер не ответил вовремя. Попробуйте ещё раз или позвоните: +7 999 896 33 39.");
			else setError("Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам: +7 999 896 33 39.");
		} finally {
			window.clearTimeout(timeout);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cta",
		className: "relative scroll-mt-24 px-5 pb-24 pt-4 sm:px-8 md:pb-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			y: 40,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cta-panel relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"aria-hidden": true,
					className: "absolute inset-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: CTA_IMG,
							alt: "",
							loading: "lazy",
							className: "h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-board cta-board absolute inset-0 opacity-70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cta-overlay absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/75 to-ink-950/92" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-24 -top-24 h-80 w-80 animate-drift rounded-full bg-gold-400/30 blur-[100px]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -right-24 h-80 w-80 animate-drift-2 rounded-full bg-emerald-500/25 blur-[100px]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-noise absolute inset-0 opacity-[0.07]" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col items-center px-6 py-20 text-center md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse-soft rounded-full bg-gold-400" }), "Набор в группы · осталось 8 мест"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-7 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl",
							children: [
								"Сделайте первый ход —",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "остальному научим."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg",
							children: "Пробный урок бесплатно: познакомимся, сыграем партию и подберём группу под возраст и уровень. Без абонементов, навязывания и «просто попробуйте»."
						}),
						status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 w-full max-w-md rounded-3xl border border-gold-400/30 bg-gold-400/10 px-8 py-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold-400 text-ink-950",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCheck, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-display text-lg font-bold text-white",
									children: "Заявка принята!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-zinc-300",
									children: "Мы получили ваши контакты. Позвоним в течение 30 минут в рабочее время и подберём удобное время для пробного урока."
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "relative mt-10 w-full max-w-md space-y-3",
							onSubmit: handleSubmit,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute h-0 w-0 overflow-hidden opacity-0",
									"aria-hidden": "true",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "cta-website",
										children: "Сайт"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "cta-website",
										type: "text",
										name: "website",
										tabIndex: -1,
										autoComplete: "off",
										suppressHydrationWarning: true,
										value: website,
										onChange: (e) => setWebsite(e.target.value)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass flex flex-col gap-2 rounded-3xl p-2 sm:flex-row sm:rounded-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										minLength: 2,
										maxLength: 80,
										autoComplete: "name",
										value: name,
										onChange: (e) => setName(e.target.value),
										placeholder: "Ваше имя",
										"aria-label": "Ваше имя",
										suppressHydrationWarning: true,
										className: "w-full rounded-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "tel",
										required: true,
										ref: phoneInputRef,
										autoComplete: "tel",
										inputMode: "tel",
										value: phone,
										onChange: handlePhoneChange,
										onFocus: handlePhoneFocus,
										onKeyDown: handlePhoneKeyDown,
										placeholder: "+7 (___) ___-__-__",
										"aria-label": "Номер телефона",
										suppressHydrationWarning: true,
										className: "w-full rounded-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									submit: true,
									disabled: status === "sending",
									size: "lg",
									className: "w-full",
									withArrow: false,
									children: status === "sending" ? "Отправляем…" : "Записаться на бесплатный урок"
								}),
								status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									role: "alert",
									className: "mx-auto max-w-md rounded-2xl border border-red-400/30 bg-red-400/10 px-5 py-3 text-[13px] text-red-300",
									children: error
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-zinc-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconShield, { className: "h-4 w-4 text-gold-400" }), "Первый урок бесплатно"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Без абонемента на старте" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Отмена в любой момент" })
							]
						})
					]
				})]
			})
		})
	});
}
var COLUMNS = [
	{
		title: "Школа",
		links: [
			{
				label: "Методика",
				href: "#method"
			},
			{
				label: "Занятия",
				href: "#classes"
			},
			{
				label: "Тренеры",
				href: "#trainers"
			},
			{
				label: "Отзывы",
				href: "#reviews"
			}
		]
	},
	{
		title: "Родителям",
		links: [
			{
				label: "Тарифы",
				href: "#pricing"
			},
			{
				label: "Вопросы и ответы",
				href: "#faq"
			},
			{
				label: "Турнирный календарь",
				href: "#top"
			},
			{
				label: "Подарочный сертификат",
				href: "#top"
			}
		]
	},
	{
		title: "Контакты",
		links: [
			{
				label: "Москва, Большая Никитская, 12",
				href: "#top"
			},
			{
				label: "+7 999 896 33 39",
				href: "tel:+79998963339"
			},
			{
				label: "Пн–Вс · 9:00–21:00",
				href: "#top"
			}
		]
	}
];
function Footer() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative border-t border-white/[0.06] bg-ink-900/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-zinc-500",
							children: "Шахматная школа «На коне» — очные и онлайн-занятия для детей от 4 лет и взрослых. Научим думать на ход вперёд: от первых ходов до разрядных норм."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-8 max-w-md",
							onSubmit: (e) => {
								e.preventDefault();
								if (email.trim()) setSent(true);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "newsletter",
								className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500",
								children: "Подпишитесь на шахматный дайджест · каждую пятницу"
							}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 rounded-2xl border border-gold-400/30 bg-gold-400/10 px-5 py-3.5 text-sm font-semibold text-gold-300",
								children: "Готово! Задача недели и разбор партии уже ждут в письме. ♞"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass mt-3 flex items-center gap-2 rounded-full p-1.5 pl-5 transition-colors duration-300 focus-within:border-gold-400/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "newsletter",
									type: "email",
									required: true,
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: "ваш e-mail",
									"aria-label": "Ваш e-mail для подписки на дайджест",
									suppressHydrationWarning: true,
									className: "w-full bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									"aria-label": "Подписаться на дайджест",
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-400 text-ink-950 transition-all duration-300 hover:scale-105 hover:bg-gold-300",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSend, { className: "h-4 w-4" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[12px] text-zinc-600",
								children: "Задача недели, разбор партии и новости школы · один раз в неделю · без спама"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex items-center gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+79998963339",
								className: "inline-flex items-center gap-2.5 rounded-full border border-gold-400/30 bg-gold-400/10 px-5 py-2.5 text-sm font-bold text-gold-300 transition-all duration-300 hover:bg-gold-400 hover:text-ink-950",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPhone, { className: "h-4 w-4" }), "+7 999 896 33 39"]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Навигация в подвале",
					className: "grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:pl-10",
					children: COLUMNS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500",
						children: col.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3.5",
						children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-sm text-zinc-400 transition-colors duration-200 hover:text-gold-300",
							children: l.label
						}) }, l.label))
					})] }, col.title))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-[12px] text-zinc-600 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Шахматная школа «На коне». Все права защищены." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-center sm:text-right",
					children: "Шахматы — спорт ума: развивают логику, память и концентрацию с первого занятия."
				})]
			})]
		})
	});
}
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "app-shell relative min-h-screen overflow-x-clip",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-400 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-ink-950",
				children: "Перейти к содержанию"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialProof, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Showcase, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefits, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {});
}
//#endregion
export { Home as component };
