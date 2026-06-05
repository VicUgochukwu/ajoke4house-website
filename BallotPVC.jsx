/* Ajoke4House — Get Your PVC + Ballot-literacy */

function BallotPVC({ t }) {
  const b = t.ballot;
  return (
    <section className="section" id="pvc" style={{ background: "var(--bg-alt)" }}>
      <div className="wrap">
        <Reveal className="ballot">
          <div>
            <Eyebrow>{b.eyebrow}</Eyebrow>
            <h2 className="h2" style={{ marginTop: 12 }}>{b.title}</h2>
            <p className="lead" style={{ marginTop: 14 }}>{b.lead}</p>
            <ol className="ballot-steps">
              {b.steps.map((s, i) => (
                <li key={i}><span className="ballot-num">{i + 1}</span><span>{s}</span></li>
              ))}
            </ol>
            <div style={{ marginTop: 22 }}>
              <A href="/pvc"><Btn variant="primary" icon="id-card">{t.cta.howpvc}</Btn></A>
            </div>
          </div>

          <div className="ballot-card">
            <div className="ballot-logo"><Placeholder label={b.logo} icon="vote" dark style={{ border: "none" }} /></div>
            <div className="eyebrow" style={{ color: "var(--fg-subtle)" }}>{b.look}</div>
            <div className="ballot-name" style={{ marginTop: 6 }}>{b.party}</div>
            <div className="thumb"><Icon name="fingerprint" size={16} />{b.thumb}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { BallotPVC });
