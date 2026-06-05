/* Ajoke4House — Hero */

function Hero({ t }) {
  return (
    <section className="hero" id="home">
      <img className="hero-peaks" src="assets/aaa_mark_reversed.svg" alt="" aria-hidden="true" />
      <div className="wrap hero-in">
        <div>
          <Reveal><Eyebrow>{t.hero.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={60}><h1 className="display" style={{ marginTop: 14 }}>{t.hero.title}</h1></Reveal>
          <Reveal delay={120}><p className="hero-sub">{t.hero.sub}</p></Reveal>
          <Reveal delay={180}>
            <div className="hero-cta">
              <A href="/involved"><Btn variant="accent" size="lg" icon="user-plus">{t.cta.joinCampaign}</Btn></A>
              <A href="/pvc"><Btn variant="outline" size="lg" className="hero-outline" icon="id-card">{t.cta.pvc}</Btn></A>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-trust"><Icon name="shield-check" size={16} />{t.hero.trust}</div>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <div className="hero-photo"><Placeholder label={t.hero.photo} icon="camera" /></div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
