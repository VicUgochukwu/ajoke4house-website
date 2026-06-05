/* Ajoke4House — Footer + mobile sticky action bar */

const openWA = () => { const u = (window.A4H || {}).whatsapp; if (u) window.open(u, "_blank", "noopener"); };

function Footer({ t, lang, setLang }) {
  const f = t.foot;
  const wa = (window.A4H || {}).whatsapp || "#";
  const email = (window.A4H || {}).email;
  const onShare = (e) => {
    e.preventDefault();
    const data = { title: "Ajoke4House", text: "Adejoke Aderemi-Adewole for Ikorodu II", url: location.href };
    if (navigator.share) navigator.share(data).catch(() => {});
    else if (navigator.clipboard) navigator.clipboard.writeText(location.href).catch(() => {});
  };
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Mark />
            <p className="t-small" style={{ marginTop: 12, maxWidth: "34ch" }}>{f.tagline}</p>
            <div className="socials">
              <a href={wa} target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><Icon name="message-circle" size={18} /></a>
              <a href={email ? "mailto:" + email : undefined} aria-label="Email the campaign" aria-disabled={email ? undefined : "true"}><Icon name="mail" size={18} /></a>
              <a aria-label="Instagram (coming soon)" aria-disabled="true"><Icon name="camera" size={18} /></a>
              <a href={location.href} aria-label="Share this page" onClick={onShare}><Icon name="share-2" size={18} /></a>
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
            <a href={wa} target="_blank" rel="noopener"><Icon name="message-circle" size={15} /> &nbsp;{t.cta.whatsapp}</a>
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
        <Btn variant="wa" icon="message-circle" onClick={openWA}>{t.bar.whatsapp}</Btn>
        <A href="/involved"><Btn variant="accent" icon="user-plus" className="btn-block">{t.bar.join}</Btn></A>
      </div>
    </div>
  );
}

Object.assign(window, { Footer, StickyBar, openWA });
