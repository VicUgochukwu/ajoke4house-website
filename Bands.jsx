/* Ajoke4House — Donate band, Final CTA band */

function DonateBand({ t }) {
  return (
    <section className="section band band-donate" id="donate">
      <div className="wrap">
        <Reveal><Eyebrow style={{ color: "color-mix(in srgb, #fff 70%, transparent)" }}>Support</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="h2" style={{ marginTop: 12 }}>{t.donate.title}</h2></Reveal>
        <Reveal delay={120}><p>{t.donate.sub}</p></Reveal>
        <Reveal delay={180}>
          <div className="band-cta"><A href="/donate"><Btn variant="accent" size="lg" icon="heart">{t.cta.support}</Btn></A></div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA({ t }) {
  return (
    <section className="section band band-final">
      <div className="wrap">
        <Reveal><h2 className="h2">{t.final.title}</h2></Reveal>
        <Reveal delay={80}><p>{t.final.sub}</p></Reveal>
        <Reveal delay={140}>
          <div className="band-cta">
            <A href="/pvc"><Btn variant="accent" size="lg" icon="id-card">{t.cta.pvc}</Btn></A>
            <Btn variant="wa" size="lg" icon="message-circle" pulse>{t.cta.whatsapp}</Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { DonateBand, FinalCTA });
