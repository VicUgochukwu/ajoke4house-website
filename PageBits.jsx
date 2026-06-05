/* Ajoke4House — shared inner-page building blocks */

function PageHeader({ eyebrow, title, lead, brand = false, crumb, icon }) {
  return (
    <section className={`page-header ${brand ? "brand" : ""}`}>
      <div className="wrap page-header-in">
        {crumb && <A href={crumb.href} className="crumb"><Icon name="arrow-left" size={15} />{crumb.label}</A>}
        {icon && <div className="issue-icon" style={{ marginTop: crumb ? 18 : 0 }}><Icon name={icon} size={30} stroke={2.1} /></div>}
        {eyebrow && <div className="eyebrow" style={{ marginTop: crumb && !icon ? 16 : 0 }}>{eyebrow}</div>}
        <h1 className="display">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}

/* Closing call-to-action band, reused at the foot of inner pages */
function PageCTA({ t }) {
  return (
    <section className="section band band-final">
      <div className="wrap">
        <Reveal><h2 className="h2">{t.final.title}</h2></Reveal>
        <Reveal delay={80}><p>{t.final.sub}</p></Reveal>
        <Reveal delay={140}>
          <div className="band-cta">
            <A href="/pvc"><Btn variant="accent" size="lg" icon="id-card">{t.cta.pvc}</Btn></A>
            <A href="/involved"><Btn variant="wa" size="lg" icon="message-circle" pulse>{t.cta.join}</Btn></A>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { PageHeader, PageCTA });
