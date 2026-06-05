/* Ajoke4House — Contact */
function ContactPage({ t }) {
  const c = t.pages.contact;
  const [done, setDone] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", phone: "", msg: "" });
  const valid = form.name.trim() && form.phone.trim() && form.msg.trim();
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <React.Fragment>
      <PageHeader brand eyebrow={c.eyebrow} title={c.title} lead={c.lead} crumb={{ href: "/", label: t.nav.home }} />

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            {c.cards.map((card, i) => (
              <Reveal key={card.t} delay={i * 70} className="ccard">
                <span className="ichip"><Icon name={card.icon} size={22} stroke={2.1} /></span>
                <h3>{card.t}</h3>
                <p>{card.d}</p>
                <span className="link">{card.action} <Icon name="arrow-right" size={15} /></span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="wrap" style={{ maxWidth: 640 }}>
          <Reveal><h2 className="sec-title">{c.formTitle}</h2></Reveal>
          <Reveal delay={50}>
            <div className="join-card" style={{ marginTop: 18, border: "1px solid var(--line)" }}>
              {done ? (
                <div className="join-ok">
                  <span className="tick"><Icon name="check" size={28} stroke={2.4} color="#fff" /></span>
                  <h3 className="h3">{c.okT}</h3>
                  <p className="t-small" style={{ margin: 0 }}>{c.okD}</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (valid) setDone(true); }}>
                  <div className="field-2">
                    <div className="field"><label htmlFor="cn">{c.nameL}</label><input id="cn" type="text" value={form.name} onChange={upd("name")} required /></div>
                    <div className="field"><label htmlFor="cp">{c.phoneL}</label><input id="cp" type="tel" inputMode="tel" value={form.phone} onChange={upd("phone")} required /></div>
                  </div>
                  <div className="field"><label htmlFor="cm">{c.msgL}</label>
                    <textarea id="cm" rows="4" placeholder={c.msgPh} value={form.msg} onChange={upd("msg")} required
                      style={{ border: "1.5px solid var(--line-strong)", borderRadius: "var(--radius-md)", padding: "12px 14px", fontSize: 16, fontFamily: "var(--body-family)", color: "var(--fg)", resize: "vertical" }} />
                  </div>
                  <Btn type="submit" variant="primary" size="lg" className="btn-block" disabled={!valid} style={{ opacity: valid ? 1 : 0.55 }} icon="send">{c.sendL}</Btn>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </React.Fragment>
  );
}
window.ContactPage = ContactPage;
