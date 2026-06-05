/* Ajoke4House — Gallery: an auto-scrolling marquee of campaign moments.
   Photo slots are labelled Placeholders until the campaign supplies real images. */

function Gallery({ t }) {
  const g = t.gallery;
  const loop = g.items.concat(g.items); // duplicate track for a seamless marquee
  return (
    <section className="section gallery-sec" id="gallery">
      <div className="wrap">
        <Reveal><Eyebrow>{g.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="h2" style={{ marginTop: 12 }}>{g.title}</h2></Reveal>
        <Reveal delay={120}><p className="sec-lead">{g.lead}</p></Reveal>
      </div>
      <Reveal delay={140}>
        <div className="gallery-marquee" role="list" aria-label={g.title}>
          <div className="gallery-track">
            {loop.map((it, i) => (
              <figure
                className="gcard"
                key={i}
                role={i < g.items.length ? "listitem" : undefined}
                aria-hidden={i >= g.items.length ? "true" : undefined}
              >
                <Placeholder label={it.label} icon="camera" />
                <figcaption className="gcard-cap">
                  <span className="gcap-tag">{it.tag}</span>
                  {it.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

Object.assign(window, { Gallery });
