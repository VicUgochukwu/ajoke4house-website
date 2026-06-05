/* Ajoke4House UI Kit — shared primitives
   Exports to window: Icon, Btn, Mark, Eyebrow, Reveal, Placeholder, useCountUp */

function Icon({ name, size = 20, stroke = 2, className = "", color }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (el && window.lucide) {
      el.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      el.appendChild(i);
      window.lucide.createIcons({ attrs: { width: size, height: size, "stroke-width": stroke } });
    }
  }, [name, size, stroke]);
  return <span ref={ref} className={className} style={{ display: "inline-flex", color }} aria-hidden="true" />;
}

function Btn({ variant = "primary", size, icon, iconRight, pulse, className = "", children, ...rest }) {
  const cls = ["btn", `btn-${variant}`, size === "lg" ? "btn-lg" : "", pulse ? "pulse" : "", className]
    .filter(Boolean).join(" ");
  return (
    <button className={cls} {...rest}>
      {icon && <Icon name={icon} size={size === "lg" ? 20 : 18} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === "lg" ? 20 : 18} />}
    </button>
  );
}

function Mark({ showName = true, reversed = false }) {
  const theme = window.__a4hTheme || "movement";
  const marks = {
    movement: ["aaa_mark_color.svg", "aaa_mark_reversed.svg"],
    lagos: ["aaa_mark_lagos.svg", "aaa_mark_lagos_rev.svg"],
    accountable: ["aaa_mark_accountable.svg", "aaa_mark_accountable_rev.svg"],
  };
  const [light, rev] = marks[theme] || marks.movement;
  const src = "assets/" + (reversed ? rev : light);
  return (
    <span className="mark">
      <img src={src} alt="Ajoke4House — AAA mark" />
      {showName && <span className="mark-name">Ajoke<b>4</b>House</span>}
    </span>
  );
}

function Eyebrow({ children }) { return <div className="eyebrow">{children}</div>; }

/* Reveal-on-scroll wrapper. Uses a scroll-position check (robust across
   environments where IntersectionObserver doesn't fire) and always settles
   to the visible base state. */
function inView(el, ratio = 0.92) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight || 800;
  return r.top < vh * ratio && r.bottom > 0;
}
function Reveal({ children, as = "div", className = "", delay = 0, style = {} }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el || seen) return;
    let done = false;
    const reveal = () => { if (!done) { done = true; setSeen(true); cleanup(); } };
    const onScroll = () => { if (inView(el)) reveal(); };
    const cleanup = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    if (inView(el)) { reveal(); return; }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const raf = requestAnimationFrame(onScroll);
    return () => { cleanup(); cancelAnimationFrame(raf); };
  }, [seen]);
  const El = as;
  return (
    <El ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </El>
  );
}

/* Labelled placeholder slot for photos / logo the campaign supplies */
function Placeholder({ label, icon = "image", dark = false, style }) {
  return (
    <div className={`ph ${dark ? "dark" : ""}`} style={style}>
      <Icon name={icon} size={30} />
      <span>{label}</span>
    </div>
  );
}

/* Count-up hook, fires when `active` becomes true. Respects reduced motion. */
function useCountUp(target, active, ms = 1400) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVal(target); return; }
    let raf, start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / ms, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, ms]);
  return val;
}

Object.assign(window, { Icon, Btn, Mark, Eyebrow, Reveal, Placeholder, useCountUp });
