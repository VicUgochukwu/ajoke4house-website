/* Ajoke4House — Donate / Support */
function DonatePage({ t }) {
  const d = t.pages.donate;
  return (
    <React.Fragment>
      <PageHeader brand eyebrow={d.eyebrow} title={d.title} lead={d.lead} crumb={{ href: "/", label: t.nav.home }} />

      <section className="section">
        <div className="wrap">
          <Reveal className="prose t-body"><p>{d.why}</p></Reveal>

          <Reveal delay={40}><h2 className="sec-title" style={{ marginTop: 8 }}>{d.tiersTitle}</h2></Reveal>
          <div className="tiers">
            {d.tiers.map((tier, i) => (
              <Reveal key={i} delay={i * 70} className="tier">
                <div className="amt">{tier.a}</div>
                <p>{tier.d}</p>
                <div style={{ marginTop: 14 }}><Btn variant="primary" className="btn-block" icon="heart">{d.cta}</Btn></div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={60}><div className="lawful-note"><Icon name="scale" size={16} /> &nbsp;{d.lawful}</div></Reveal>
          <Reveal delay={80}><p className="t-micro" style={{ marginTop: 14 }}>{d.note}</p></Reveal>
        </div>
      </section>

      <PageCTA t={t} />
    </React.Fragment>
  );
}
window.DonatePage = DonatePage;
