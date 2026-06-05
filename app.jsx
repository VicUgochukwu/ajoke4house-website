/* Ajoke4House — app shell. Hash router + language.
   PUBLIC THEME IS LOCKED to Lagos Vernacular (chosen 2026-06-05).
   ?theme=movement|accountable remains available for internal review only. */

function Router({ t }) {
  const path = useRoute();
  const parts = path.split("/").filter(Boolean);
  const top = parts[0] || "home";
  switch (top) {
    case "meet": return <MeetPage t={t} />;
    case "priorities": return <PrioritiesPage t={t} slug={parts[1]} />;
    case "pvc": return <PvcPage t={t} />;
    case "involved": return <InvolvedPage t={t} />;
    case "news": return <NewsPage t={t} />;
    case "donate": return <DonatePage t={t} />;
    case "contact": return <ContactPage t={t} />;
    case "privacy": return <PrivacyPage t={t} />;
    default: return <HomePage t={t} />;
  }
}

function App() {
  const params = new URLSearchParams(location.search);
  const forced = params.get("theme");
  const theme = (forced === "movement" || forced === "accountable") ? forced : "lagos";
  const [lang, setLang] = React.useState(() => params.get("lang") || localStorage.getItem("a4h-lang") || "en");
  React.useEffect(() => { if (!params.get("lang")) localStorage.setItem("a4h-lang", lang); }, [lang]);
  const t = window.STRINGS[lang];
  window.__a4hTheme = theme;

  return (
    <div className={`a4h-app ${theme}`} data-theme={theme}>
      <Header t={t} lang={lang} setLang={setLang} />
      <main><Router t={t} /></main>
      <Footer t={t} lang={lang} setLang={setLang} />
      <StickyBar t={t} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
