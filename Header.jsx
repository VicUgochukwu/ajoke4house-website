/* Ajoke4House — sticky header with nav, language toggle, mobile menu sheet */

function LangToggle({ lang, setLang, compact }) {
  return (
    <div className="lang" role="group" aria-label="Language">
      <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
      <button className={lang === "yo" ? "on" : ""} onClick={() => setLang("yo")}>YO</button>
    </div>
  );
}

function Header({ t, lang, setLang }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Lock background scroll while the mobile menu is open (prevents scroll-bleed/"mangle").
  React.useEffect(() => {
    if (!open) return;
    const y = window.scrollY;
    const b = document.body;
    b.style.position = "fixed"; b.style.top = `-${y}px`; b.style.left = "0"; b.style.right = "0"; b.style.width = "100%";
    return () => {
      b.style.position = ""; b.style.top = ""; b.style.left = ""; b.style.right = ""; b.style.width = "";
      window.scrollTo(0, y);
    };
  }, [open]);
  const nav = t.nav;
  const links = [
    ["/", nav.home], ["/meet", nav.meet], ["/priorities", nav.priorities],
    ["/pvc", nav.pvc], ["/involved", nav.involved], ["/news", nav.news], ["/donate", nav.donate],
  ];
  return (
    <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap hdr-in">
        <A href="/" aria-label="Ajoke4House home"><Mark /></A>
        <nav className="hdr-nav">
          {links.slice(0, 6).map(([href, label]) => <A key={href} href={href}>{label}</A>)}
        </nav>
        <div className="hdr-right">
          <LangToggle lang={lang} setLang={setLang} />
          <A href="/involved"><Btn className="hdr-cta" variant="primary" icon="user-plus">{t.cta.joinShort}</Btn></A>
          <button className="burger" aria-label="Menu" onClick={() => setOpen(true)}><Icon name="menu" size={24} /></button>
        </div>
      </div>

      <div className={`sheet ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        <div className="sheet-panel" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <Mark />
            <button className="burger" aria-label="Close" onClick={() => setOpen(false)}><Icon name="x" size={24} /></button>
          </div>
          {links.map(([href, label]) => <A key={href} href={href} onClick={() => setOpen(false)}>{label}</A>)}
          <A href="/involved" onClick={() => setOpen(false)}><Btn variant="primary" icon="user-plus" className="btn-block" style={{ marginTop: 14 }}>{t.cta.joinCampaign}</Btn></A>
          <Btn variant="wa" icon="message-circle" pulse className="btn-block" style={{ marginTop: 10 }}>{t.cta.whatsapp}</Btn>
          <div className="sheet-lang"><span>{t.foot.lang}</span><LangToggle lang={lang} setLang={setLang} /></div>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Header, LangToggle });
