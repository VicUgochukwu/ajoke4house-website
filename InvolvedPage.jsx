/* Ajoke4House — Get Involved */
function InvolvedPage({ t }) {
  const g = t.pages.involved;
  return (
    <React.Fragment>
      <PageHeader brand eyebrow={g.eyebrow} title={g.title} lead={g.lead} crumb={{ href: "/", label: t.nav.home }} />

      <section className="section">
        <div className="wrap">
          <Reveal><h2 className="sec-title">{g.waysTitle}</h2></Reveal>
          <div className="cardgrid c4">
            {g.ways.map((w, i) => (
              <Reveal key={w.t} delay={(i % 4) * 60} className="gcard">
                <span className="ichip"><Icon name={w.icon} size={22} stroke={2.1} /></span>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <JoinForm t={t} />

      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="wrap">
          <Reveal><h2 className="sec-title">{g.wardsTitle}</h2></Reveal>
          <Reveal delay={50}><p className="lead" style={{ marginTop: 8, maxWidth: "52ch" }}>{g.wardsBody}</p></Reveal>
          <Reveal delay={80}>
            <div className="wardchips">
              {["Imota B1", "Imota B2", "Igbogbo-Baiyeku C1", "Igbogbo-Baiyeku C2", "Igbogbo-Baiyeku C3", "Igbogbo-Baiyeku C4", "Ijede D1", "Ijede D2"].map((w) => (
                <button key={w} className="wardchip"><Icon name="message-circle" size={16} className="wa" />{w}</button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <PageCTA t={t} />
    </React.Fragment>
  );
}
window.InvolvedPage = InvolvedPage;
