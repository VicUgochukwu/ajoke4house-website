/* Ajoke4House — Footer + mobile sticky action bar */

function Footer({ t, lang, setLang }) {
  const f = t.foot;
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Mark />
            <p className="t-small" style={{ marginTop: 12, maxWidth: "34ch" }}>{f.tagline}</p>
            <div className="socials">
              <a href="#" aria-label="WhatsApp"><Icon name="message-circle" size={18} /></a>
              <a href="#" aria-label="Email"><Icon name="mail" size={18} /></a>
              <a href="#" aria-label="Instagram"><Icon name="camera" size={18} /></a>
              <a href="#" aria-label="Share"><Icon name="share-2" size={18} /></a>
            </div>
          </div>
          <div>
            <h4>{f.links}</h4>
            <A href="/meet">{t.nav.meet}</A>
            <A href="/priorities">{t.nav.priorities}</A>
            <A href="/pvc">{t.nav.pvc}</A>
            <A href="/involved">{t.nav.involved}</A>
            <A href="/donate">{t.nav.donate}</A>
          </div>
          <div>
            <h4>{f.contact}</h4>
            <A href="/contact"><Icon name="map-pin" size={15} /> &nbsp;{f.office}</A>
            <a href="#"><Icon name="message-circle" size={15} /> &nbsp;{t.cta.whatsapp}</a>
            <A href="/privacy">{f.legal}</A>
            <div style={{ marginTop: 14 }}>
              <h4>{f.lang}</h4>
              <LangToggle lang={lang} setLang={setLang} />
            </div>
          </div>
        </div>
        <div className="foot-note">{f.note}</div>
      </div>
    </footer>
  );
}

function StickyBar({ t }) {
  return (
    <div className="sticky-bar">
      <div className="sticky-bar-in">
        <A href="/pvc"><Btn variant="primary" icon="id-card" className="btn-block">{t.bar.pvc}</Btn></A>
        <Btn variant="wa" icon="message-circle">{t.bar.whatsapp}</Btn>
        <A href="/involved"><Btn variant="accent" icon="user-plus" className="btn-block">{t.bar.join}</Btn></A>
      </div>
    </div>
  );
}

Object.assign(window, { Footer, StickyBar });
