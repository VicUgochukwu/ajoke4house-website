/* Ajoke4House — News / Report-backs */
function NewsPage({ t }) {
  const n = t.pages.news;
  const r = t.report;
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el || active) return;
    const check = () => { const rc = el.getBoundingClientRect(); if (rc.top < (window.innerHeight || 800) * 0.9 && rc.bottom > 0) { setActive(true); clean(); } };
    const clean = () => { window.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
    check(); window.addEventListener("scroll", check, { passive: true }); window.addEventListener("resize", check);
    return clean;
  }, [active]);

  return (
    <React.Fragment>
      <PageHeader brand eyebrow={n.eyebrow} title={n.title} lead={n.lead} crumb={{ href: "/", label: t.nav.home }} />

      <section className="section">
        <div className="wrap">
          <Reveal><h2 className="sec-title">{n.statsTitle}</h2></Reveal>
          <div className="stats" ref={ref} style={{ marginTop: 18 }}>
            {r.stats.map((s) => <StatBlock key={s.cap} {...s} active={active} />)}
          </div>

          <div className="cardgrid c2" style={{ marginTop: 30 }}>
            {n.updates.map((u, i) => (
              <Reveal key={i} delay={(i % 2) * 70} className="update">
                <div className="u-img"><Placeholder label="Photo: report-back update" icon="image" dark style={{ border: "none" }} /></div>
                <div className="u-body">
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
                    <span className="u-tag">{u.tag}</span>
                    <span className="t-micro">{u.date}</span>
                  </div>
                  <h3 style={{ marginTop: 6 }}>{u.t}</h3>
                  <p className="t-small" style={{ margin: "6px 0 0" }}>{u.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div style={{ marginTop: 26 }}>
              <Btn variant="wa" icon="message-circle" pulse>{n.cta}</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCTA t={t} />
    </React.Fragment>
  );
}
window.NewsPage = NewsPage;
