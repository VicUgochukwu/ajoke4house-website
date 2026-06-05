/* Ajoke4House — Priorities (issue cards) */

function Priorities({ t }) {
  const slugs = ["roads", "jobs", "water", "health", "markets", "accountable"];
  return (
    <section className="section" id="priorities">
      <div className="wrap">
        <Reveal><Eyebrow>{t.prio.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="h2" style={{ marginTop: 12 }}>{t.prio.title}</h2></Reveal>
        <div className="prio-grid">
          {t.prio.items.map((it, i) => (
            <Reveal key={it.t} delay={(i % 3) * 80}>
              <A href={`/priorities/${slugs[i]}`} className="prio" style={{ height: "100%" }}>
                <span className="ichip"><Icon name={it.icon} size={24} stroke={2.1} /></span>
                <div>
                  <h3>{it.t}</h3>
                  <p>{it.d}</p>
                </div>
              </A>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Priorities });
