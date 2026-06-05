/* Ajoke4House — Report-backs / proof with animated counters */

function StatBlock({ n, suf, cap, active }) {
  const val = useCountUp(n, active);
  return (
    <div className="stat">
      <div className="num">{val.toLocaleString()}{suf}</div>
      <div className="cap">{cap}</div>
    </div>
  );
}

function ReportBacks({ t }) {
  const r = t.report;
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el || active) return;
    const check = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      if (rect.top < vh * 0.85 && rect.bottom > 0) { setActive(true); cleanup(); }
    };
    const cleanup = () => { window.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return cleanup;
  }, [active]);
  return (
    <section className="section" id="news" style={{ background: "var(--bg-alt)" }}>
      <div className="wrap">
        <Reveal><Eyebrow>{r.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="h2" style={{ marginTop: 12 }}>{r.title}</h2></Reveal>
        <div className="stats" ref={ref}>
          {r.stats.map((s) => <StatBlock key={s.cap} {...s} active={active} />)}
        </div>
        <div className="updates">
          {r.updates.map((u, i) => (
            <Reveal key={i} delay={i * 80} className="update">
              <div className="u-img"><Placeholder label="Photo: report-back update" icon="image" dark style={{ border: "none" }} /></div>
              <div className="u-body">
                <div className="u-tag">{u.tag}</div>
                <h3>{u.t}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ReportBacks });
