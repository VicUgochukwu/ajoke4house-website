/* Ajoke4House — Meet Adejoke */
function MeetPage({ t }) {
  const m = t.pages.meet;
  return (
    <React.Fragment>
      <PageHeader brand eyebrow={m.eyebrow} title={m.title} lead={m.lead} crumb={{ href: "/", label: t.nav.home }} />

      <section className="section">
        <div className="wrap split narrow-left">
          <Reveal><div className="portrait"><Placeholder label={m.photo} icon="camera" dark style={{ border: "none" }} /></div></Reveal>
          <div>
            <Reveal className="prose t-body">
              {m.body.map((p, i) => <p key={i}>{p}</p>)}
            </Reveal>
            <Reveal delay={80}><div className="pull">{m.quote}</div></Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="wrap">
          <Reveal><h2 className="sec-title">{m.rootsTitle}</h2></Reveal>
          <div className="cardgrid c3">
            {m.roots.map((r, i) => (
              <Reveal key={r.t} delay={i * 70} className="gcard">
                <span className="ichip"><Icon name="map-pin" size={22} /></span>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal><h2 className="sec-title">{m.valuesTitle}</h2></Reveal>
          <div className="cardgrid c3">
            {m.values.map((v, i) => (
              <Reveal key={v.t} delay={i * 70} className="gcard">
                <span className="ichip"><Icon name={v.icon} size={22} stroke={2.1} /></span>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={80}>
            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <A href="/priorities"><Btn variant="primary" iconRight="arrow-right">{m.cta}</Btn></A>
              <A href="/involved"><Btn variant="outline">{t.cta.join}</Btn></A>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCTA t={t} />
    </React.Fragment>
  );
}
window.MeetPage = MeetPage;
