/* Ajoke4House — Privacy & Consent (NDPC-aligned) */
function PrivacyPage({ t }) {
  const p = t.pages.privacy;
  return (
    <React.Fragment>
      <PageHeader eyebrow={p.eyebrow} title={p.title} lead={p.lead} crumb={{ href: "/", label: t.nav.home }} />
      <section className="section">
        <div className="wrap priv">
          <div className="priv-meta">{p.updated}</div>
          {p.sections.map((s, i) => (
            <Reveal key={i} delay={(i % 4) * 50} className="priv-item">
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
          <Reveal delay={60}>
            <div style={{ marginTop: 26, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <A href="/involved"><Btn variant="primary" icon="user-plus">{t.cta.join}</Btn></A>
              <A href="/contact"><Btn variant="outline">{t.pages.contact.title}</Btn></A>
            </div>
          </Reveal>
        </div>
      </section>
    </React.Fragment>
  );
}
window.PrivacyPage = PrivacyPage;
