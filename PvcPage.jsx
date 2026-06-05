/* Ajoke4House — Get Your PVC + ballot literacy */
function FaqItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        {q} <Icon name="chevron-down" size={20} className="chev" />
      </button>
      <div className="faq-a"><p>{a}</p></div>
    </div>
  );
}

function PvcPage({ t }) {
  const v = t.pages.pvc;
  return (
    <React.Fragment>
      <PageHeader brand eyebrow={v.eyebrow} title={v.title} lead={v.lead} crumb={{ href: "/", label: t.nav.home }} />

      <section className="section">
        <div className="wrap">
          <Reveal><h2 className="sec-title">{v.stepsTitle}</h2></Reveal>
          <div className="bigsteps">
            {v.steps.map((s, i) => (
              <Reveal key={i} delay={(i % 2) * 80} className="bigstep">
                <span className="n">{i + 1}</span>
                <div><h3>{s.t}</h3><p>{s.d}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={60}>
            <div className="safety">
              <Icon name="shield-check" size={22} color="var(--accent-strong)" />
              <p>{v.safety}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="wrap">
          <Reveal className="ballot">
            <div>
              <Eyebrow>{t.ballot.eyebrow}</Eyebrow>
              <h2 className="h2" style={{ marginTop: 12 }}>{v.ballotTitle}</h2>
              <p className="lead" style={{ marginTop: 14 }}>{v.ballotBody}</p>
            </div>
            <div className="ballot-card">
              <div className="ballot-logo"><Placeholder label={v.logoPh} icon="vote" dark style={{ border: "none" }} /></div>
              <div className="eyebrow" style={{ color: "var(--fg-subtle)" }}>{t.ballot.look}</div>
              <div className="ballot-name" style={{ marginTop: 6 }}>{t.ballot.party}</div>
              <div className="thumb"><Icon name="fingerprint" size={16} />{t.ballot.thumb}</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <Reveal><h2 className="sec-title">{v.faqTitle}</h2></Reveal>
          <Reveal delay={60}>
            <div className="faq">
              {v.faq.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ marginTop: 26 }}>
              <Btn variant="wa" icon="message-circle" pulse>{v.cta}</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </React.Fragment>
  );
}
window.PvcPage = PvcPage;
