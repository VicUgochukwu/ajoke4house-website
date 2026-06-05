/* Ajoke4House — Get Involved sign-up funnel (the #1 functional job) */

const WARDS = [
  "Imota B1", "Imota B2",
  "Igbogbo-Baiyeku C1", "Igbogbo-Baiyeku C2", "Igbogbo-Baiyeku C3", "Igbogbo-Baiyeku C4",
  "Ijede D1", "Ijede D2",
];

function JoinForm({ t }) {
  const j = t.join;
  const [done, setDone] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", phone: "", ward: "", consent: false });
  const valid = form.name.trim() && form.phone.trim() && form.ward && form.consent;
  const submit = (e) => { e.preventDefault(); if (valid) setDone(true); };
  const upd = (k) => (e) => setForm({ ...form, [k]: k === "consent" ? e.target.checked : e.target.value });

  return (
    <section className="section" id="involved">
      <div className="wrap">
        <Reveal className="join">
          <Eyebrow style={{ color: "var(--on-brand)" }}>Get Involved</Eyebrow>
          <h2 className="h2" style={{ marginTop: 10 }}>{j.title}</h2>
          <p style={{ marginTop: 12, color: "color-mix(in srgb, var(--on-brand) 86%, transparent)", maxWidth: "46ch" }}>{j.sub}</p>

          <div className="join-card">
            {done ? (
              <div className="join-ok">
                <span className="tick"><Icon name="check" size={28} stroke={2.4} color="#fff" /></span>
                <h3 className="h3">{j.ok}</h3>
                <p className="t-small" style={{ margin: 0 }}>{j.okSub}</p>
                <Btn variant="wa" icon="message-circle" pulse style={{ marginTop: 6 }}>{t.cta.wagroup}</Btn>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="field-2">
                  <div className="field">
                    <label htmlFor="jn">{j.name}</label>
                    <input id="jn" type="text" autoComplete="name" value={form.name} onChange={upd("name")} required />
                  </div>
                  <div className="field">
                    <label htmlFor="jp">{j.phone}</label>
                    <input id="jp" type="tel" inputMode="tel" placeholder="0803 000 0000" value={form.phone} onChange={upd("phone")} required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="jw">{j.ward}</label>
                  <select id="jw" value={form.ward} onChange={upd("ward")} required>
                    <option value="" disabled>{j.wardph}</option>
                    {WARDS.map((w) => <option key={w} value={w}>{w}</option>)}
                  </select>
                </div>
                <div className="consent">
                  <input id="jc" type="checkbox" checked={form.consent} onChange={upd("consent")} required />
                  <label htmlFor="jc">{j.consent}</label>
                </div>
                <Btn type="submit" variant="accent" size="lg" className="btn-block" disabled={!valid}
                  style={{ opacity: valid ? 1 : 0.55 }} iconRight="arrow-right">{t.cta.join}</Btn>
                <Btn type="button" variant="wa" icon="message-circle" pulse className="btn-block" style={{ marginTop: 10 }}>{t.cta.wagroup}</Btn>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { JoinForm });
