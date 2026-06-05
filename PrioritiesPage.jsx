/* Ajoke4House — Priorities index + issue detail pages */

function PrioritiesIndex({ t }) {
  const p = t.pages.priorities;
  const issues = t.pages.issues;
  return (
    <React.Fragment>
      <PageHeader brand eyebrow={p.eyebrow} title={p.title} lead={p.lead} crumb={{ href: "/", label: t.nav.home }} />
      <section className="section">
        <div className="wrap">
          <div className="cardgrid c3">
            {issues.map((it, i) => (
              <Reveal key={it.slug} delay={(i % 3) * 70}>
                <A href={`/priorities/${it.slug}`} className="gcard" style={{ height: "100%" }}>
                  <span className="ichip"><Icon name={it.icon} size={24} stroke={2.1} /></span>
                  <h3>{it.t}</h3>
                  <p>{it.summary}</p>
                  <span className="card-cta" style={{ marginTop: "auto", paddingTop: 6 }}>
                    {p.problemLabel} &amp; {p.planLabel} <Icon name="arrow-right" size={15} />
                  </span>
                </A>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <PageCTA t={t} />
    </React.Fragment>
  );
}

function IssueDetail({ t, slug }) {
  const p = t.pages.priorities;
  const issues = t.pages.issues;
  const idx = issues.findIndex((x) => x.slug === slug);
  const it = issues[idx];
  if (!it) { navigate("/priorities"); return null; }
  const next = issues[(idx + 1) % issues.length];

  return (
    <React.Fragment>
      <PageHeader brand icon={it.icon} eyebrow={p.eyebrow} title={it.t} lead={it.summary}
        crumb={{ href: "/priorities", label: p.backLabel }} />

      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <Reveal className="panel problem">
              <h3>{p.problemLabel}</h3>
              <ul className="checklist problem">
                {it.problem.map((x, i) => <li key={i}><span className="ic"><Icon name="alert-triangle" size={13} /></span><span>{x}</span></li>)}
              </ul>
            </Reveal>
            <Reveal delay={80} className="panel plan">
              <h3>{p.planLabel}</h3>
              <ul className="checklist plan">
                {it.plan.map((x, i) => <li key={i}><span className="ic"><Icon name="check" size={13} stroke={2.6} /></span><span>{x}</span></li>)}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={60}><div className="pull">{it.quote}</div></Reveal>

          <Reveal delay={80}>
            <div style={{ marginTop: 30, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <A href="/priorities" className="crumb" style={{ background: "var(--surface-2)" }}><Icon name="arrow-left" size={15} />{p.backLabel}</A>
              <A href={`/priorities/${next.slug}`}><Btn variant="primary" iconRight="arrow-right">{next.t}</Btn></A>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCTA t={t} />
    </React.Fragment>
  );
}

function PrioritiesPage({ t, slug }) {
  return slug ? <IssueDetail t={t} slug={slug} /> : <PrioritiesIndex t={t} />;
}
window.PrioritiesPage = PrioritiesPage;
