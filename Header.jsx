/* Ajoke4House — sticky header with nav, language toggle, accessible mobile menu sheet */

function LangToggle({ lang, setLang }) {
  return (
    <div className="lang" role="group" aria-label="Language">
      <button type="button" className={lang === "en" ? "on" : ""} aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
      <button type="button" className={lang === "yo" ? "on" : ""} aria-pressed={lang === "yo"} onClick={() => setLang("yo")}>YO</button>
    </div>
  );
}

function openWhatsApp() {
  const u = (window.A4H || {}).whatsapp;
  if (u) window.open(u, "_blank", "noopener");
}

function Header({ t, lang, setLang }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const burgerRef = React.useRef(null);
  const sheetRef = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the menu is open (prevents scroll-bleed/"mangle").
  React.useEffect(() => {
    if (!open) return;
    const y = window.scrollY, b = document.body;
    b.style.position = "fixed"; b.style.top = `-${y}px`; b.style.left = "0"; b.style.right = "0"; b.style.width = "100%";
    return () => { b.style.position = ""; b.style.top = ""; b.style.left = ""; b.style.right = ""; b.style.width = ""; window.scrollTo(0, y); };
  }, [open]);

  // Accessibility: hide the sheet from AT/keyboard when closed; trap focus, Escape to close, return focus on close.
  React.useEffect(() => {
    const sheet = sheetRef.current;
    if (sheet) sheet.inert = !open;
    if (!open || !sheet) return;
    const focusables = () => Array.from(sheet.querySelectorAll(
      'a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])'));
    const list = focusables();
    if (list[0]) list[0].focus();
    const onKey = (e) => {
      if (e.key === "Escape") { setOpen(false); return; }
      if (e.key === "Tab") {
        const f = focusables(); if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); if (burgerRef.current) burgerRef.current.focus(); };
  }, [open]);

  const nav = t.nav;
  const links = [
    ["/", nav.home], ["/meet", nav.meet], ["/priorities", nav.priorities],
    ["/pvc", nav.pvc], ["/involved", nav.involved], ["/news", nav.news], ["/donate", nav.donate],
  ];
  return (
    <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap hdr-in">
        <A href="/" aria-label="Ajoke4House — home"><Mark /></A>
        {/* logo links home, so the desktop nav omits a redundant "Home" but keeps Donate */}
        <nav className="hdr-nav" aria-label="Primary">
          {links.slice(1).map(([href, label]) => <A key={href} href={href}>{label}</A>)}
        </nav>
        <div className="hdr-right">
          <LangToggle lang={lang} setLang={setLang} />
          <A href="/involved"><Btn className="hdr-cta" variant="primary" icon="user-plus">{t.cta.joinShort}</Btn></A>
          <button ref={burgerRef} type="button" className="burger" aria-label="Open menu"
            aria-expanded={open} aria-controls="a4h-menu" aria-haspopup="dialog" onClick={() => setOpen(true)}>
            <Icon name="menu" size={24} />
          </button>
        </div>
      </div>

      <div className={`sheet ${open ? "open" : ""}`} onClick={() => setOpen(false)} aria-hidden={!open}>
        <div ref={sheetRef} id="a4h-menu" className="sheet-panel" role="dialog" aria-modal="true" aria-label="Menu" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <Mark />
            <button type="button" className="burger" aria-label="Close menu" onClick={() => setOpen(false)}><Icon name="x" size={24} /></button>
          </div>
          {links.map(([href, label]) => <A key={href} href={href} onClick={() => setOpen(false)}>{label}</A>)}
          <A href="/involved" onClick={() => setOpen(false)}><Btn variant="primary" icon="user-plus" className="btn-block" style={{ marginTop: 14 }}>{t.cta.joinCampaign}</Btn></A>
          <Btn variant="wa" icon="message-circle" pulse className="btn-block" style={{ marginTop: 10 }} onClick={openWhatsApp}>{t.cta.whatsapp}</Btn>
          <div className="sheet-lang"><span>{t.foot.lang}</span><LangToggle lang={lang} setLang={setLang} /></div>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Header, LangToggle, openWhatsApp });
