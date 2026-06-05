/* Ajoke4House — Triple-A promise pillars */

function Pillars({ t }) {
  return (
    <section className="section" id="promise">
      <div className="wrap">
        <Reveal><Eyebrow>{t.promise.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="h2" style={{ marginTop: 12, maxWidth: "18ch" }}>{t.promise.title}</h2></Reveal>
        <div className="pillars">
          {t.pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 90} className={`pillar pillar-${i + 1}`}>
              <Icon name={p.icon} size={36} className="pi" stroke={2.1} />
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pillars });
