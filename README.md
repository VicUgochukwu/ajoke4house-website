# Ajoke4House — Website UI Kit

A high-fidelity, interactive recreation of the **full Ajoke4House campaign website**, built to the campaign's design brief. A complete multi-page, hash-routed site with **two developed brand "souls"** — **Lagos Vernacular** (default) and **The Accountable** — switchable live, bilingual (EN/Yoruba), mobile-first and data-light. *(The Movement direction is still reachable at `index.html?theme=movement`.)*

> This is a UI kit — cosmetic, modular, click-through. It demonstrates the look, copy, and key interactions; it is not production backend code.

## Pages (hash-routed)
`#/` Home · `#/meet` Meet Adejoke · `#/priorities` Priorities + 6 issue detail pages (`#/priorities/roads` … `/accountable`) · `#/pvc` Get Your PVC · `#/involved` Get Involved · `#/news` News / Report-backs · `#/donate` Donate · `#/contact` Contact · `#/privacy` Privacy & Consent.

## Run it
Open `index.html`. Use the **colour dots** (right edge / bottom on mobile) to switch brand direction, **EN/YO** in the header to switch language, and the nav (or footer) to move between pages. Theme + language persist to `localStorage`; routing lives in the URL hash.

## What's interactive
- **Theme switcher** — live Lagos ⇄ Accountable brand swap (the whole site re-skins from one token set; logo mark recolours too).
- **Language toggle** — swaps sample EN ⇄ Yoruba copy across every page.
- **Hash router** — real multi-page navigation with scroll-reset; deep-linkable.
- **Sticky header** — condenses + blurs on scroll; mobile hamburger opens a slide-in menu sheet.
- **Join & contact forms** — client-side validation; submit gated on **consent**; success states. *No data leaves the page.*
- **FAQ accordion**, **animated counters**, reveal-on-scroll, button press states, gentle WhatsApp pulse.
- **Sticky mobile action bar** — `Get PVC · WhatsApp · Join`, visible under ~940px.

## Components
| File | Component(s) | Notes |
|---|---|---|
| `primitives.jsx` | `Icon`, `Btn`, `Mark`, `Eyebrow`, `Reveal`, `Placeholder`, `useCountUp` | Shared building blocks. `Icon` wraps Lucide. |
| `strings.jsx` | `STRINGS` | Bilingual copy dictionary (EN/YO). |
| `Header.jsx` | `Header`, `LangToggle` | Sticky nav + mobile sheet. |
| `Hero.jsx` | `Hero` | Headline, photo slot, dual CTA, trust cue. |
| `Pillars.jsx` | `Pillars` | The Triple-A promise (Accessible/Accountable/In Action). |
| `MeetAdejoke.jsx` | `MeetAdejoke` | Bio teaser. |
| `Priorities.jsx` | `Priorities` | Six issue cards (Lucide icons). |
| `BallotPVC.jsx` | `BallotPVC` | PVC how-to steps + ballot-literacy card (NDC logo slot). |
| `JoinForm.jsx` | `JoinForm` | The conversion funnel — name/phone/ward + consent. |
| `ReportBacks.jsx` | `ReportBacks`, `StatBlock` | Animated proof counters + update cards. |
| `Bands.jsx` | `DonateBand`, `FinalCTA` | Closing colour bands. |
| `StickyBar.jsx` | `Footer`, `StickyBar` | Footer + mobile action bar. |
| `app.jsx` | `App`, `ThemeSwitch`, `Router` | Composition, hash routing, theme + language state. |
| `router.jsx` | `useRoute`, `navigate`, `A` | Tiny hash router + internal link component. |
| `strings.jsx` / `strings_pages.jsx` | `STRINGS` | Bilingual copy — home/shared, then all inner pages. |
| `PageBits.jsx` | `PageHeader`, `PageCTA` | Shared inner-page header band + closing CTA. |
| `HomePage.jsx` … `PrivacyPage.jsx` | page components | One file per route (Meet, Priorities + `IssueDetail`, PVC, Involved, News, Donate, Contact, Privacy). |
| `kit.css` / `pages.css` | — | Component + inner-page styles; consume `../../colors_and_type.css` tokens; per-theme overrides keyed on `.lagos` / `.accountable`. |

## Theming
The app root is `<div class="a4h-app {theme}" data-theme="{theme}">`. Every colour, font, radius and shadow comes from CSS variables in `../../colors_and_type.css`. To re-skin, just change `data-theme` — no component code changes. The logo mark is chosen per theme in `Mark` (primitives).

## Notes & placeholders
- **Photos** and the **NDC party logo** are labelled `Placeholder` slots — the campaign supplies the real assets.
- **Icons:** Lucide via CDN (2px line). Footer social glyphs use generic Lucide icons (Lucide dropped brand marks); swap for real brand icons when commissioned.
- **Yoruba** copy is best-effort sample translation for the toggle demo — have a native speaker review before production.
- Built mobile-first; resize the window to see the phone layout + sticky bottom bar.
