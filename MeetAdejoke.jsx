/* Ajoke4House — Meet Adejoke teaser */

function MeetAdejoke({ t }) {
  return (
    <section className="section" id="meet" style={{ background: "var(--bg-alt)" }}>
      <div className="wrap meet">
        <Reveal><div className="meet-photo"><Placeholder label={t.meet.photo} icon="camera" dark /></div></Reveal>
        <div>
          <Reveal><Eyebrow>{t.meet.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={60}><h2 className="h2" style={{ marginTop: 12 }}>{t.meet.title}</h2></Reveal>
          <Reveal delay={120}><p className="lead" style={{ marginTop: 16 }}>{t.meet.body}</p></Reveal>
          <Reveal delay={180}>
            <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <A href="/meet"><Btn variant="primary" iconRight="arrow-right">{t.cta.story}</Btn></A>
              <Btn variant="wa" icon="message-circle" pulse>{t.cta.whatsapp}</Btn>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { MeetAdejoke });
