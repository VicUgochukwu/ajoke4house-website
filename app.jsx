/* Ajoke4House — multi-page app shell. Hash router + theme (B/C) + language. */

const THEMES = [
  { key: "lagos", label: "Lagos Vernacular", cls: "ts-lagos" },
  { key: "accountable", label: "The Accountable", cls: "ts-accountable" },
];

function ThemeSwitch({ theme, setTheme }) {
  return (
    <div className="theme-switch" role="group" aria-label="Brand direction">
      <div className="ts-label">Soul</div>
      {THEMES.map((th) => (
        <button key={th.key} className={`${th.cls} ${theme === th.key ? "on" : ""}`}
          title={th.label} aria-label={th.label} aria-pressed={theme === th.key}
          onClick={() => setTheme(th.key)} />
      ))}
    </div>
  );
}

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
  const noChrome = params.get("chrome") === "0";
  const valid = ["movement", "lagos", "accountable"];
  const [theme, setTheme] = React.useState(() =>
    (forced && valid.includes(forced)) ? forced : (localStorage.getItem("a4h-theme") || "lagos"));
  const [lang, setLang] = React.useState(() => params.get("lang") || localStorage.getItem("a4h-lang") || "en");
  React.useEffect(() => { if (!forced) localStorage.setItem("a4h-theme", theme); }, [theme]);
  React.useEffect(() => { if (!params.get("lang")) localStorage.setItem("a4h-lang", lang); }, [lang]);
  const t = window.STRINGS[lang];
  window.__a4hTheme = theme;

  return (
    <div className={`a4h-app ${theme}`} data-theme={theme}>
      {!noChrome && <ThemeSwitch theme={theme} setTheme={setTheme} />}
      <Header t={t} lang={lang} setLang={setLang} />
      <main><Router t={t} /></main>
      <Footer t={t} lang={lang} setLang={setLang} />
      <StickyBar t={t} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
