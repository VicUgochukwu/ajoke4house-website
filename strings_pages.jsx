/* Ajoke4House — inner-page copy (EN/YO). Loads AFTER strings.jsx and merges
   page content onto window.STRINGS[lang].pages. Yoruba is best-effort sample. */

/* ---------- ENGLISH ---------- */
STRINGS.en.pages = {
  meet: {
    eyebrow: "Meet Adejoke",
    title: "A daughter of Ikorodu.",
    lead: "Born here, lives here, will work here. Adejoke Aderemi-Adewole is a first-time candidate stepping up because Ikorodu II deserves a representative who shows up.",
    photo: "Photo: Adejoke, full portrait",
    body: [
      "Adejoke grew up between Imota, Igbogbo-Baiyeku and Ijede — the same markets, roads and classrooms she now wants to fight for. She is not a stranger flown in for an election. She is your neighbour.",
      "She is running because representation should mean presence, not absence; results, not excuses. For too long, Ikorodu II has been visited once every four years. That ends with a new standard — one built on showing up, listening, and delivering.",
    ],
    rootsTitle: "Rooted across Ikorodu II",
    roots: [
      { t: "Imota", d: "Wards B1–B2 — farmland, markets and growing estates." },
      { t: "Igbogbo-Baiyeku", d: "Wards C1–C4 — the constituency's busiest corridor." },
      { t: "Ijede", d: "Wards D1–D2 — riverside communities and trade." },
    ],
    valuesTitle: "What she stands for",
    values: [
      { t: "Presence", d: "Here all year — in the wards, markets and on WhatsApp.", icon: "hand-heart" },
      { t: "Honesty", d: "Promises in writing, and the courage to report back.", icon: "scale" },
      { t: "Delivery", d: "Real fixes for roads, water, jobs and schools.", icon: "wrench" },
    ],
    quote: "\u201cI'm not asking for your vote to disappear. I'm asking for it to show up for you \u2014 every single year.\u201d",
    cta: "See her priorities",
  },

  priorities: {
    eyebrow: "Her Priorities",
    title: "Priorities for Ikorodu II.",
    lead: "Six plain promises for Ikorodu \u2014 not abstractions. Tap any one to see the problem, and her plan.",
    detailLead: "The problem, and the plan.",
    problemLabel: "The problem",
    planLabel: "Her plan",
    backLabel: "All priorities",
    moreLabel: "More priorities",
  },

  issues: [
    {
      slug: "roads", icon: "route", t: "Roads & drainage",
      summary: "Passable roads and drains that don't flood \u2014 so trade, school runs and clinics stay reachable all year.",
      problem: ["Failed roads and blocked drains flood homes and markets every rainy season.", "Cut-off communities lose income, school days and access to care."],
      plan: ["Prioritise the worst stretches in each ward with a public, costed fix-list.", "Push for routine drain-clearing before \u2014 not after \u2014 the rains.", "Report progress ward-by-ward so you can hold the work to account."],
      quote: "\u201cA road you can't pass in the rain isn't a road. It's a promise broken.\u201d",
    },
    {
      slug: "jobs", icon: "briefcase", t: "Youth jobs & skills",
      summary: "Skills, apprenticeships and real opportunity so young people can earn a living here at home.",
      problem: ["Too many skilled young people sit idle or leave Ikorodu for work.", "Artisans lack the tools, training and links to grow."],
      plan: ["Back vocational and digital-skills hubs tied to real local demand.", "Support apprenticeships with market traders and artisans.", "Open doors to small-business support and fair credit."],
      quote: "\u201cOur young people don't lack talent. They lack a door. I'll help open it.\u201d",
    },
    {
      slug: "water", icon: "droplet", t: "Water & basic services",
      summary: "Clean water and services that simply work \u2014 the basics, done reliably.",
      problem: ["Families pay too much for water that should be a basic service.", "Power and waste collection are unreliable across the wards."],
      plan: ["Push for community boreholes and maintained public water points.", "Hold service agencies to clear, published standards.", "Insist on routine maintenance \u2014 not one-off, election-time fixes."],
      quote: "\u201cWater, light, clean streets. Not luxuries \u2014 the least you're owed.\u201d",
    },
    {
      slug: "health", icon: "heart-pulse", t: "Health & schools",
      summary: "Closer clinics and better classrooms \u2014 so care and learning don't depend on a long, costly trip.",
      problem: ["Primary clinics are under-staffed and under-supplied.", "Classrooms are overcrowded and short on basics."],
      plan: ["Champion stocked, staffed primary health centres in each LCDA.", "Push for safe classrooms, learning materials and teacher support.", "Track attendance and supplies, and publish what's fixed."],
      quote: "\u201cA clinic with no medicine and a class with no chairs fail us quietly. I won't be quiet.\u201d",
    },
    {
      slug: "markets", icon: "store", t: "Markets, artisans & transport",
      summary: "Support for the traders, artisans and commuters who keep Ikorodu moving.",
      problem: ["Market women and artisans carry the economy with little support.", "Commuters lose hours and money to poor transport links."],
      plan: ["Improve market sanitation, safety and storage.", "Back fair, transparent levies \u2014 and an end to arbitrary charges.", "Support safer, smoother transport corridors."],
      quote: "\u201cThe market women are Ikorodu's engine. Government should fuel them, not fleece them.\u201d",
    },
    {
      slug: "accountable", icon: "scale", t: "Accountable representation",
      summary: "A voice that is present and answerable to you \u2014 with promises in writing and regular report-backs.",
      problem: ["Representation has meant absence between elections.", "Promises are made, then quietly forgotten."],
      plan: ["Hold open ward listening-visits all year round.", "Publish a written commitments tracker \u2014 and update it.", "Keep a constituency office and WhatsApp line that actually answer."],
      quote: "\u201cYou shouldn't need an election to reach your representative. You should just need a phone.\u201d",
    },
  ],

  pvc: {
    eyebrow: "Get Your PVC \u00b7 Vote",
    title: "Your PVC is your power.",
    lead: "You can't vote without a Permanent Voter Card. Here's how to register, transfer or collect yours \u2014 and how to find Adejoke on the ballot.",
    stepsTitle: "How to get ready",
    steps: [
      { t: "Register or transfer", d: "During INEC's Continuous Voter Registration (CVR), register for the first time or transfer to your Ikorodu II ward." },
      { t: "Collect your PVC", d: "Pick up your card at your local INEC office before the published deadline. Bring your slip." },
      { t: "Check your unit", d: "Confirm your polling unit so you know exactly where to vote on the day." },
      { t: "Vote the logo", d: "On election day, look for the NDC logo and Adejoke Aderemi-Adewole, and thumb-print beside her name." },
    ],
    safetyTitle: "Safety first",
    safety: "We never collect your PVC or VIN number online, and we never ask for payment. INEC alone registers voters \u2014 the campaign only helps you through the steps.",
    faqTitle: "Common questions",
    faq: [
      { q: "I've moved wards. What do I do?", a: "Use INEC's transfer process during the CVR window to move your registration to your current Ikorodu II ward." },
      { q: "I lost my PVC.", a: "INEC can reissue a lost or damaged card \u2014 visit your local office with your details. We can walk you through it on WhatsApp." },
      { q: "Is my data safe with the campaign?", a: "Yes. We only keep what you consent to, use it solely for voter education and reminders, and never sell or share it. See Privacy & Consent." },
    ],
    ballotTitle: "Find Ajoke on the ballot.",
    ballotBody: "The NDC is a newer party, so it helps to learn the logo now. Look for NDC and Adejoke Aderemi-Adewole.",
    logoPh: "Placeholder: official NDC party logo",
    cta: "Chat with us on WhatsApp",
  },

  involved: {
    eyebrow: "Get Involved",
    title: "Join the movement.",
    lead: "We win by out-organising, not out-spending. Every volunteer, every share, every ward group makes the difference.",
    waysTitle: "Ways to help",
    ways: [
      { t: "Join your ward group", d: "Get organised with neighbours on WhatsApp.", icon: "users" },
      { t: "Volunteer a few hours", d: "Door-knock, help at events, or assist with PVC drives.", icon: "hand-heart" },
      { t: "Share to WhatsApp", d: "Send Adejoke's message to your contacts and groups.", icon: "share-2" },
      { t: "Host a listening visit", d: "Gather a few neighbours; we'll bring the conversation.", icon: "home" },
    ],
    formTitle: "Count me in \u2014 it takes 30 seconds.",
    wardsTitle: "Ward WhatsApp groups",
    wardsBody: "Pick your ward and join the conversation. Organising happens here.",
  },

  news: {
    eyebrow: "News \u00b7 Report-backs",
    title: "Proof, not promises.",
    lead: "Listening visits, written commitments and ward updates \u2014 published, so you can hold the campaign to account.",
    statsTitle: "The movement so far",
    updates: [
      { tag: "Listening visit", date: "Placeholder date", t: "Town hall with Imota market women on drainage.", d: "Traders set out the flood points that cost them business each rainy season \u2014 now on our costed fix-list." },
      { tag: "Commitment", date: "Placeholder date", t: "Published our first 90-day accountability pledge.", d: "Six written promises for Ikorodu II, with how we'll report back on each." },
      { tag: "Ward group", date: "Placeholder date", t: "Igbogbo-Baiyeku WhatsApp groups now live.", d: "Four ward groups up and organising, with PVC help on tap." },
      { tag: "PVC drive", date: "Placeholder date", t: "Weekend PVC clinic in Ijede.", d: "Volunteers helped neighbours start transfers and find their polling units." },
    ],
    cta: "Get update alerts on WhatsApp",
  },

  donate: {
    eyebrow: "Support",
    title: "Power a people-funded campaign.",
    lead: "We earn votes \u2014 we don't buy them. Every naira is accountable, and stays within the lawful candidate-expense cap.",
    why: "A grassroots campaign runs on small, lawful contributions from people who want a new standard \u2014 not big favours with strings attached. Your support pays for posters, PVC drives, fuel for ward visits and data for organising.",
    tiersTitle: "Ways to give",
    tiers: [
      { a: "\u20a62,000", d: "Posters and handbills for a polling unit." },
      { a: "\u20a65,000", d: "Data and airtime for a ward's organisers." },
      { a: "\u20a610,000", d: "A weekend PVC clinic in a community." },
    ],
    lawful: "Contributions are voluntary and lawful, recorded transparently, and kept within the candidate-expense cap. We do not accept anonymous cash for favours, and we never offer money or gifts for votes.",
    cta: "Support Ajoke",
    note: "A secure giving page will be linked here. This is a demo \u2014 no payment is taken.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Reach the campaign.",
    lead: "WhatsApp is fastest. You can also visit the constituency office or send a message.",
    cards: [
      { t: "WhatsApp", d: "Chat with the team \u2014 PVC help, ward groups, questions.", icon: "message-circle", action: "Chat on WhatsApp" },
      { t: "Constituency office", d: "Ikorodu Constituency II. Open to residents \u2014 come in.", icon: "map-pin", action: "Get directions" },
      { t: "Press & media", d: "For interviews and enquiries from journalists.", icon: "newspaper", action: "Email the press desk" },
    ],
    formTitle: "Send a message",
    nameL: "Name", phoneL: "Phone", msgL: "Your message", msgPh: "How can we help?",
    sendL: "Send message",
    okT: "Message sent. Thank you!", okD: "We'll get back to you on WhatsApp or by phone.",
  },

  privacy: {
    eyebrow: "Privacy & Consent",
    title: "Your data, handled with care.",
    lead: "We follow Nigeria's data-protection rules (NDPC-aligned). Here's exactly what we collect, why, and your rights.",
    updated: "Last updated: placeholder date",
    sections: [
      { t: "What we collect", d: "Only what you give us: your name, phone number, ward, and your consent flag \u2014 plus the date and where you signed up. We never collect your PVC or VIN number online." },
      { t: "Why we collect it", d: "To contact you about voter education, PVC/CVR help, events and election reminders \u2014 the same things our field volunteers do at your door, with your permission." },
      { t: "Consent", d: "No record is stored without your explicit, ticked consent. You can withdraw it any time \u2014 just reply STOP on WhatsApp or tell any organiser." },
      { t: "How we protect it", d: "Your details are kept securely, used only by the campaign team, and never sold or shared with third parties for their own marketing." },
      { t: "Your rights", d: "You can ask to see, correct or delete your data at any time. Contact us and we'll act promptly." },
      { t: "A note on INEC", d: "INEC alone registers voters and issues PVCs. The campaign only helps you through the steps; we do not act for, or on behalf of, INEC." },
    ],
  },
};

/* ---------- YORUBA (sample) ---------- */
STRINGS.yo.pages = {
  meet: {
    eyebrow: "P\u00e0d\u00e9 Adejoke",
    title: "\u1ecc\u0301m\u1ecdb\u00ecnrin Ikorodu.",
    lead: "A b\u00ed i n\u00edb\u00ed, \u00f3 \u0144 gb\u00e9 n\u00edb\u00ed, y\u00f3\u00f2 s\u00ec \u1e63i\u1e63\u1eb9\u0301 n\u00edb\u00ed. Adejoke Aderemi-Adewole j\u1eb9\u0301 ol\u00f9d\u00edje \u00e0k\u1ecd\u0301k\u1ecd\u0301 t\u00f3 d\u00ecde n\u00edtor\u00ed p\u00e9 Ikorodu II t\u1ecd\u0301 s\u00ed a\u1e63oj\u00fa t\u00f3 \u0144 farahan.",
    photo: "\u00c0w\u00f2r\u00e1n: Adejoke, \u00e0w\u00f2r\u00e1n k\u00edk\u00fan",
    body: [
      "Adejoke d\u00e0gb\u00e0 l\u00e1\u00e0rin Imota, Igbogbo-Baiyeku \u00e0ti Ijede \u2014 \u00e0w\u1ecdn \u1ecdj\u00e0, \u1ecd\u0300n\u00e0 \u00e0ti k\u00edl\u00e0\u00e0\u1e63\u00ec t\u00f3 f\u1eb9\u0301 j\u00e0 f\u00fan b\u00e1y\u00ec\u00ed. K\u00ec \u00ed \u1e63e \u00e0j\u00f2j\u00ec. A\u0300g\u00e0\u0300n\u00e0\u0300\u00e0n r\u1eb9 ni.",
      "\u00d3 \u0144 dije n\u00edtor\u00ed p\u00e9 a\u1e63oj\u00fa y\u00e8 k\u00ed \u00f3 t\u00fams\u00ed w\u00edw\u00e0 k\u00ec \u00ed \u1e63e \u00e0in\u00eds\u00ec; \u00e0bah\u00e9 k\u00ec \u00ed \u1e63e \u00e0w\u00edjare. F\u00fan \u00f2p\u1ecd\u0300l\u1ecdp\u1ecd\u0300 \u00ecgb\u00e0, Ikorodu II ti r\u00ed \u00ecb\u1eb9\u0300w\u00f2 l\u1ecd\u0301kan n\u00ed \u1ecddun m\u1eb9\u0301rin. \u00cdpele tuntun y\u00f3\u00f2 par\u00ed \u00ecy\u1eb9n.",
    ],
    rootsTitle: "G\u1eb9\u0301b\u1eb9\u0301 ka\u00e1kiri Ikorodu II",
    roots: [
      { t: "Imota", d: "Ward B1\u2013B2 \u2014 oko, \u1ecdj\u00e0 \u00e0ti agbegbe t\u00f3 \u0144 dagba." },
      { t: "Igbogbo-Baiyeku", d: "Ward C1\u2013C4 \u2014 \u1ecd\u0300n\u00e0 t\u00f3 \u0144 r\u00f9 j\u00f9 n\u00edn\u00fa agbegbe." },
      { t: "Ijede", d: "Ward D1\u2013D2 \u2014 agbegbe et\u00ed odo \u00e0ti is\u1ecdwo." },
    ],
    valuesTitle: "Oh\u00f9n t\u00f3 du\u0300r\u00f3 le\u0301",
    values: [
      { t: "W\u00edw\u00e0", d: "W\u00e0 n\u00edb\u00ed n\u00ed gbogbo \u1ecddun \u2014 n\u00edn\u00fa ward, \u1ecdj\u00e0 \u00e0ti l\u00f3r\u00ed WhatsApp.", icon: "hand-heart" },
      { t: "\u00d2\u00f3t\u1ecd\u0301", d: "\u00ccl\u00e9r\u00ed n\u00ed \u00eck\u1ecds\u00edl\u1eb9\u0300, \u00e0ti \u00ecgboy\u00e0 l\u00e1ti j\u00edh\u00ecn.", icon: "scale" },
      { t: "\u00cd\u1e63e\u00ed\u1e63\u00edl\u1eb9\u0301", d: "\u00cct\u00f9n\u1e63e gidi f\u00fan \u1ecd\u0300n\u00e0, omi, i\u1e63\u1eb9\u0301 \u00e0ti il\u00e9-\u00ecw\u00e9.", icon: "wrench" },
    ],
    quote: "\u201cM\u00ec \u00f2 b\u1eb9\u0300\u00e8r\u00e8 \u00ecb\u00f2 r\u1eb9 k\u00ed \u00f3 sonu\u0301. Mo b\u1eb9\u0300\u00e8r\u00e8 k\u00ed \u00f3 farahan f\u00fan \u1ecd \u2014 ni gbogbo \u1ecddun.\u201d",
    cta: "Wo \u00e0w\u1ecdn ohun p\u00e0t\u00e0k\u00ec r\u1eb9\u0300",
  },

  priorities: {
    eyebrow: "\u00c0w\u1ecdn Ohun P\u00e0t\u00e0k\u00ec R\u1eb9\u0300",
    title: "\u00c0w\u1ecdn ohun p\u00e0t\u00e0k\u00ec f\u00fan Ikorodu II.",
    lead: "\u00ccl\u00e9r\u00ed m\u1eb9\u0301f\u00e0 t\u00f3 ye k\u00f3 f\u00fan Ikorodu. T\u1eb9 \u1ecdkan l\u00e1ti r\u00ed \u00ec\u1e63\u00f2ro n\u00e1\u00e0, \u00e0ti \u00ec\u1e63\u00e8t\u00f3 r\u1eb9\u0300.",
    detailLead: "\u00cc\u1e63\u00f2ro n\u00e1\u00e0, \u00e0ti \u00ec\u1e63\u00e8t\u00f3 n\u00e1\u00e0.",
    problemLabel: "\u00cc\u1e63\u00f2ro n\u00e1\u00e0",
    planLabel: "\u00cc\u1e63\u00e8t\u00f3 r\u1eb9\u0300",
    backLabel: "Gbogbo ohun p\u00e0t\u00e0k\u00ec",
    moreLabel: "\u00c0w\u1ecdn ohun p\u00e0t\u00e0k\u00ec m\u00ed\u00ec\u00ed",
  },

  issues: [
    { slug: "roads", icon: "route", t: "\u1ecc\u0300n\u00e0 \u00e0ti \u00ec\u1e63\u00e0n omi",
      summary: "\u1ecc\u0300n\u00e0 t\u00f3 dara \u00e0ti \u00ec\u1e63\u00e0n omi t\u00ed k\u00ec \u00ed k\u00fan \u2014 k\u00ed is\u1ecdwo, il\u00e9-\u00ecw\u00e9 \u00e0ti il\u00e9-\u00ecw\u00f2s\u00e0n l\u00e8 \u00e0n\u00ec.",
      problem: ["\u1ecc\u0300n\u00e0 t\u00f3 b\u00e1j\u1eb9\u0301 \u00e0ti \u00ec\u1e63\u00e0n omi t\u00ed \u00f3 d\u00ec \u0144 k\u00fan il\u00e9 \u00e0ti \u1ecdj\u00e0 n\u00ed \u00ecgb\u00e0 \u00f2j\u00f2.", "Agbegbe t\u00f3 b\u00e1 j\u00e1 sot\u1ecd\u0300 \u0144 padan\u00fa ow\u00f3 \u00e0ti \u00e0n\u00ec s\u00ed \u00eet\u1ecd\u0301j\u00fa."],
      plan: ["F\u00fan \u00e0w\u1ecdn \u1ecd\u0300n\u00e0 t\u00f3 buru\u0301 j\u00f9 ní \u00e0k\u00f3kun, p\u1eb9\u0300l\u00fa \u00e0t\u1ecdj? \u00e0\u1e63\u00ecr\u00ed.", "T\u00ediraka k\u00ed a m\u1ecd\u0301 \u00ec\u1e63\u00e0n omi k\u00ed \u00f2j\u00f2 t\u00f3 r\u1ecd\u0300.", "J\u00edh\u00ecn \u00ecl\u1ecdsiwaju ward-n\u00edpa-ward."],
      quote: "\u201c\u1ecc\u0300n\u00e0 t\u00ed o k\u00f2 l\u00e8 r\u00edn n\u00ed \u00f2j\u00f2 k\u00ec \u00ed \u1e63e \u1ecd\u0300n\u00e0. \u00ccl\u00e9r\u00ed t\u00f3 d\u00e0r\u00f9 ni.\u201d" },
    { slug: "jobs", icon: "briefcase", t: "I\u1e63\u1eb9\u0301 \u00e0ti \u1ecdgb\u1ecdn f\u00fan \u1ecd\u0300d\u1ecd\u0301",
      summary: "\u1eccgb\u1ecdn, \u1eb9\u0300k\u1ecd\u0301 i\u1e63\u1eb9\u0301-\u1ecdn\u00e0 \u00e0ti \u00e0\u01f9f\u00e0\u00e0n\u00ed gidi k\u00ed \u00e0w\u1ecdn \u1ecd\u0300d\u1ecd\u0301 l\u00e8 j\u1eb9 owo n\u00edb\u00ed.",
      problem: ["\u1ecc\u0300p\u1ecd\u0300 \u1ecd\u0300d\u1ecd\u0301 t\u00f3 n\u00ed \u1ecdgb\u1ecdn k\u00f2 n\u00ed i\u1e63\u1eb9\u0301 t\u00e0b\u00ed w\u1ecdn \u0144 kur\u00f2 n\u00edn\u00fa Ikorodu.", "\u00c0w\u1ecdn on\u00ed\u1e63\u1eb9\u0301-\u1ecdn\u00e0 k\u00f2 n\u00ed ohun-\u00ec\u1e63\u00e9 \u00e0ti \u1eb9\u0300k\u1ecd\u0301."],
      plan: ["Til\u1eb9\u0301yin f\u00fan il\u00e9-\u1ecdgb\u1ecdn t\u00f3 b\u00e1 \u00e0\u00edn\u00ed gidi mu.", "Til\u1eb9\u0301yin f\u00fan \u1eb9\u0300k\u1ecd\u0301 i\u1e63\u1eb9\u0301-\u1ecdn\u00e0 p\u1eb9\u0300l\u00fa on\u00ed\u1e63\u00f2w\u00f2.", "\u1e62\u00ed il\u1eb9\u0300kun s\u00ed \u00ect\u00ecl\u1eb9\u0301yin is\u1ecdwo k\u00e9k\u00e9r\u00e9."],
      quote: "\u201c\u00c0w\u1ecdn \u1ecd\u0300d\u1ecd\u0301 wa k\u00f2 \u1e63e \u00e1\u00ecn\u00ed \u1eb9\u0300b\u00fan. Il\u1eb9\u0300kun ni w\u1ecd\u0301n \u1e63e \u00e1\u00ecn\u00ed. M\u00e0 \u00e0 \u1e63\u00ed i.\u201d" },
    { slug: "water", icon: "droplet", t: "Omi \u00e0ti i\u1e63\u1eb9\u0301 \u00ecp\u00ecl\u1eb9\u0300",
      summary: "Omi m\u00edm\u1ecd\u0301 \u00e0ti i\u1e63\u1eb9\u0301 t\u00f3 \u0144 \u1e63i\u1e63\u1eb9\u0301 \u2014 \u00e0w\u1ecdn ohun \u00ecp\u00ecl\u1eb9\u0300, t\u00f3 \u1e63e \u00e0gb\u00e9k\u1ecdr\u00ed.",
      problem: ["\u00c0w\u1ecdn \u00ecd\u00edl\u00e9 \u0144 san ow\u00f3 p\u00fap\u1ecd\u0300 f\u00fan omi t\u00f3 y\u1eb9 k\u00ed \u00f3 j\u1eb9\u0301 i\u1e63\u1eb9\u0301 \u00ecp\u00ecl\u1eb9\u0300.", "In\u00e1 \u00e0ti \u00eck\u00f3\u0301jad\u00ec p\u00e0nt\u00ec k\u00f2 d\u00e1ra ka\u00e1kiri ward."],
      plan: ["T\u00ediraka f\u00fan k\u00f2t\u00f2 omi agbegbe.", "M\u00fa \u00e0w\u1ecdn ile-\u00ec\u1e63\u1eb9\u0301 i\u1e63\u1eb9\u0301 du\u0301r\u00f3 lor\u00ed \u00f2sun\u0301n\u00e0.", "T\u1eb9nu\u0301m\u1ecd\u0301 \u00e0t\u1ecd\u0301j\u00fa d\u00e9\u00e9d\u00e9\u00e9."],
      quote: "\u201cOmi, in\u00e1, op\u00f3p\u00f3 m\u00edm\u1ecd\u0301. K\u00ec \u00ed \u1e63e \u00f2\u1e63\u00f9 \u2014 \u1eb9\u0300t\u1ecd\u0301 t\u00ed a j\u1eb9 \u1ecd ni.\u201d" },
    { slug: "health", icon: "heart-pulse", t: "\u00cclera \u00e0ti il\u00e9-\u00ecw\u00e9",
      summary: "Il\u00e9-\u00ecw\u00f2s\u00e0n t\u00f3 s\u00fanm\u1ecd\u0301 \u00e0ti k\u00edl\u00e0\u00e0\u1e63\u00ec t\u00f3 dara \u2014 k\u00ed \u00eet\u1ecd\u0301j\u00fa \u00e0ti \u1eb9\u0300k\u1ecd\u0301 m\u00e1 d\u00e1 lor\u00ed \u00ec\u00ecr\u00ecn aj\u00f2 g\u00edg\u00fan.",
      problem: ["Il\u00e9-\u00ecw\u00f2s\u00e0n \u00ecp\u00ecl\u1eb9\u0300 k\u00f2 n\u00ed o\u1e63\u00ec\u1e63\u1eb9\u0301 t\u00f3 t\u1ecd\u0301.", "K\u00edl\u00e0\u00e0\u1e63\u00ec p\u1ecd\u0300 j\u00f9 t\u00f3 s\u00ec \u00e1\u00ecn\u00ed ohun \u00ecp\u00ecl\u1eb9\u0300."],
      plan: ["A\u1e63\u00edw\u00e1j\u00fa f\u00fan il\u00e9-\u00eclera \u00ecp\u00ecl\u1eb9\u0300 t\u00f3 k\u00fan.", "T\u00ediraka f\u00fan k\u00edl\u00e0\u00e0\u1e63\u00ec aab\u1ecd \u00e0ti oh\u00fan \u1eb9\u0300k\u1ecd\u0301.", "\u1e62\u00e0m\u00ed s\u00ed \u00e0bah\u00e9 \u00e0ti o\u1e63\u00ec\u1e63\u1eb9\u0301."],
      quote: "\u201cIl\u00e9-\u00ecw\u00f2s\u00e0n t\u00ed k\u00f2 n\u00ed o\u00f2gun, k\u00edl\u00e0\u00e0\u1e63\u00ec t\u00ed k\u00f2 n\u00ed \u00e0ga \u0144 k\u00f9 wa l\u00f3w\u1ecd\u0301 j\u1eb9\u0301\u1eb9\u0301. M\u00ec \u00f2 n\u00ed\u00ed dak\u1eb9\u0301.\u201d" },
    { slug: "markets", icon: "store", t: "\u1eccj\u00e0, on\u00ed\u1e63\u1eb9\u0301-\u1ecdn\u00e0 \u00e0ti \u1ecdk\u1ecd\u0300",
      summary: "\u00cct\u00ecl\u1eb9\u0301yin f\u00fan on\u00ed\u1e63\u00f2w\u00f2, on\u00ed\u1e63\u1eb9\u0301-\u1ecdn\u00e0 \u00e0ti ar\u00ecnr\u00ecn-\u00e0j\u00f2 t\u00f3 \u0144 m\u00fa Ikorodu \u1e63i\u1e63\u1eb9\u0301.",
      problem: ["Obinrin \u1ecdj\u00e0 \u00e0ti on\u00ed\u1e63\u1eb9\u0301-\u1ecdn\u00e0 \u0144 r\u00f9 \u1ecdr\u1ecd\u0300-aje p\u1eb9\u0300l\u00fa \u00ect\u00ecl\u1eb9\u0301yin k\u00e9k\u00e9r\u00e9.", "Ar\u00ecnr\u00ecn-\u00e0j\u00f2 \u0144 padan\u00fa \u00e0k\u00f3k\u00f2 \u00e0ti ow\u00f3 nip\u00e0 \u1ecdk\u1ecd\u0300 t\u00f3 bur\u00fa."],
      plan: ["\u00cclera, \u00e0\u00e0bo \u00e0ti \u00eb\u00f2 p\u00e0m\u00f3 \u1ecdj\u00e0.", "Til\u1eb9\u0301yin f\u00fan \u00f2w\u00f2 t\u00f3 t\u1ecd\u0301 \u2014 \u00e0t\u00ec p\u00e0r\u00ed \u00f2w\u00f2 aili\u0301m\u1ecd\u0300lar\u00ed.", "Til\u1eb9\u0301yin f\u00fan \u1ecd\u0300n\u00e0 \u1ecdk\u1ecd\u0300 t\u00f3 dara."],
      quote: "\u201cAw\u1ecdn obinrin \u1ecdj\u00e0 ni \u1eb9\u0301r\u1ecd Ikorodu. \u00ccj\u1ecdba y\u1eb9 k\u00ed \u00f3 til\u1eb9\u0301yin w\u1ecdn.\u201d" },
    { slug: "accountable", icon: "scale", t: "A\u1e63oj\u00fa t\u00f3 j\u00edh\u00ecn",
      summary: "Oh\u00f9n t\u00f3 w\u00e0 t\u00f3 s\u00ec j\u00edh\u00ecn f\u00fan \u1ecd \u2014 p\u1eb9\u0300l\u00fa \u00ecl\u00e9r\u00ed n\u00ed \u00eck\u1ecds\u00edl\u1eb9\u0300 \u00e0ti \u00ecr\u00f2y\u00ecn d\u00e9\u00e9d\u00e9\u00e9.",
      problem: ["A\u1e63oj\u00fa ti t\u00fams\u00ed \u00e0in\u00eds\u00ec l\u00e1\u00e0rin \u00ecdibo.", "\u00c0w\u1ecdn \u00ecl\u00e9r\u00ed t\u00ed a \u1e63e l\u00e0\u00ec \u0144 \u1e63e."],
      plan: ["\u1e62e \u00ecb\u1eb9\u0300w\u00f2 \u00ecf\u00e9t\u00eds\u00edl\u1eb9\u0300 ward n\u00ed gbogbo \u1ecddun.", "T\u1eb9 \u00ecl\u00e9r\u00ed n\u00ed \u00eck\u1ecds\u00edl\u1eb9\u0300 jade \u2014 k\u00ed o s\u00ec \u1e63e \u00e0t\u00fanse.", "Mu \u1ecd\u0301f\u00ee\u0300\u1e63\u00ec agbegbe \u00e0ti l\u00e1\u00ecn\u00ec WhatsApp t\u00f3 \u0144 d\u00e1h\u00f9n."],
      quote: "\u201cO k\u00f2 g\u1ecdd\u1ecd\u0300 n\u00edl\u00f2 \u00ecdibo k\u00ed o t\u00f3 r\u00ed a\u1e63oj\u00fa r\u1eb9. F\u00f3\u00f2n\u00f9 ni o y\u1ecd k\u00ed o n\u00edl\u00f2.\u201d" },
  ],

  pvc: {
    eyebrow: "Gba K\u00e0\u00e0d\u00ec \u00ccd\u00ecb\u00f2 \u00b7 D\u00ecbo",
    title: "K\u00e0\u00e0d\u00ec \u00ccd\u00ecb\u00f2 r\u1eb9 ni agb\u00e1ra r\u1eb9.",
    lead: "O k\u00f2 l\u00e8 d\u00ecbo l\u00e1\u00ec n\u00ed K\u00e0\u00e0d\u00ec \u00ccd\u00ecb\u00f2. B\u00e1y\u00ec\u00ed ni o \u1e63e l\u00e8 forúk\u1ecds\u00edl\u1eb9\u0300, gb\u00e9 e p\u00e0d\u00e0 t\u00e0b\u00ed gb\u00e0 \u2014 \u00e0ti b\u00ed o \u1e63e l\u00e8 w\u00e1 Adejoke l\u00f3r\u00ed \u00ecw\u00e9 \u00ecd\u00ecb\u00f2.",
    stepsTitle: "B\u00ed o \u1e63e l\u00e8 m\u00fara",
    steps: [
      { t: "Forúk\u1ecds\u00edl\u1eb9\u0300 t\u00e0b\u00ed gb\u00e9 p\u00e0d\u00e0", d: "N\u00ed \u00e0k\u00f3k\u00f2 CVR ti INEC, forúk\u1ecds\u00edl\u1eb9\u0300 t\u00e0b\u00ed gb\u00e9 \u00edforúk\u1ecds\u00edl\u1eb9\u0300 r\u1eb9 p\u00e0d\u00e0 s\u00ed ward Ikorodu II r\u1eb9." },
      { t: "Gba K\u00e0\u00e0d\u00ec r\u1eb9", d: "Gba k\u00e0\u00e0d\u00ec r\u1eb9 n\u00ed \u1ecd\u0301f\u00ee\u0300\u1e63\u00ec INEC t\u00f3 s\u00fanm\u1ecd\u0301 \u1ecd k\u00ed \u1ecdj\u1ecd\u0301 \u00eck\u1eb9hin t\u00f3 d\u00e9." },
      { t: "\u1e62\u00e0yan \u00eck\u00f9n\u00ed r\u1eb9", d: "\u1e62\u00e0yan ile \u00ecd\u00ecb\u00f2 r\u1eb9 k\u00ed o m\u1ecd\u0300 ib\u00ed t\u00f3 y\u1eb9 k\u00ed o d\u00ecbo." },
      { t: "D\u00ecbo \u00e0m\u00ec n\u00e1\u00e0", d: "N\u00ed \u1ecdj\u1ecd\u0301 \u00ecd\u00ecb\u00f2, w\u00e1 \u00e0m\u00ec NDC \u00e0ti Adejoke Aderemi-Adewole, k\u00ed o t\u1eb9 \u00edka." },
    ],
    safetyTitle: "\u00c0\u00e0bo l\u1ecd\u0301k\u00e0n",
    safety: "A k\u00ec \u00ed gba n\u1ecd\u0301mb\u00e0 K\u00e0\u00e0d\u00ec \u00ccd\u00ecb\u00f2 t\u00e0b\u00ed VIN r\u1eb9 l\u00f3r\u00ed ay\u00e9luj\u00e1ra, b\u1eb9\u0301\u1eb9\u0300 ni a k\u00ec \u00ed b\u1eb9\u0300\u00e8r\u00e8 ow\u00f3. INEC nik\u00e0n l\u00f3 \u0144 forúk\u1ecd \u00e0w\u1ecdn ol\u00f9d\u00ecbo \u2014 \u00ecpolongo n\u00e1\u00e0 \u0144 \u1e63\u00e8r\u00e0nw\u1ecd\u0301 nik\u00e0n.",
    faqTitle: "\u00c0w\u1ecdn \u00ecbe\u0300e\u0300re\u0300 t\u00f3 w\u1ecdp\u1ecd\u0300",
    faq: [
      { q: "Mo ti \u1e63\u00ecp\u00f2 ward. K\u00ed ni k\u00ed n \u1e63e?", a: "L\u00f2 \u00e0t\u00ec\u1e63e \u00ecgb\u00e9p\u00e0d\u00e0 INEC n\u00ed \u00e0k\u00f3k\u00f2 CVR l\u00e1ti gb\u00e9 \u00edforúk\u1ecds\u00edl\u1eb9\u0300 r\u1eb9 s\u00ed ward Ikorodu II r\u1eb9 b\u00e1y\u00ec\u00ed." },
      { q: "Mo padan\u00fa K\u00e0\u00e0d\u00ec \u00ccd\u00ecb\u00f2 mi.", a: "INEC l\u00e8 tun k\u00e0\u00e0d\u00ec t\u00f3 sonu\u0301 \u1e63e \u2014 l\u1ecd s\u00ed \u1ecd\u0301f\u00ee\u0300\u1e63\u00ec r\u1eb9. A l\u00e8 t\u1ecd\u0301 \u1ecd s\u00edw\u00e1j\u00fa l\u00f3r\u00ed WhatsApp." },
      { q: "\u1e62\u00e9 d\u00e1t\u00e0 mi w\u00e0 n\u00ed \u00e0\u00e0bo?", a: "B\u1eb9\u0301\u1eb9\u0300ni. A k\u00ec \u00ed pa ohun t\u00ed o k\u00f2 fọwọ\u0301s\u00ed m\u1ecd\u0301, a \u0144 l\u00f2 \u00f3 f\u00fan \u1eb9\u0300k\u1ecd\u0301 \u00ecd\u00ecb\u00f2 nik\u00e0n, a k\u00ec \u00ed s\u00ec t\u00e0 \u00e1." },
    ],
    ballotTitle: "W\u00e1 Ajoke l\u00f3r\u00ed \u00ecw\u00e9 \u00ecd\u00ecb\u00f2.",
    ballotBody: "NDC j\u1eb9\u0301 \u1eb9gb\u1eb9\u0301 tuntun, n\u00edtor\u00ed n\u00e1\u00e0 \u00f3 dara k\u00ed o k\u1ecd\u0301 \u00e0m\u00ec n\u00e1\u00e0 b\u00e1y\u00ec\u00ed. W\u00e1 NDC \u00e0ti Adejoke Aderemi-Adewole.",
    logoPh: "\u00c0y\u00e8: \u00e0m\u00ec \u1eb9gb\u1eb9\u0301 NDC \u00f2\u1e63\u00ec\u1e63\u1eb9\u0301",
    cta: "B\u00e1 wa s\u1ecd\u0300r\u1ecd\u0300 l\u00f3r\u00ed WhatsApp",
  },

  involved: {
    eyebrow: "K\u00f3pa",
    title: "D\u00e1rap\u1ecd\u0300 m\u1ecd\u0301 \u00ecpolongo n\u00e1\u00e0.",
    lead: "A \u0144 \u1e63\u00e9gun nip\u00e0 \u00eet\u00f3 j\u00f9, k\u00ec \u00ed \u1e63e nip\u00e0 \u00ecn\u00e1w\u00f3 j\u00f9. Ol\u00f9y\u00f2\u0300nda kọ\u0300\u1ecdkan ni \u00ec\u1e63\u00e0n\u00edl\u1ecd\u0301j\u00fa.",
    waysTitle: "\u00c0w\u1ecdn \u1ecd\u0300n\u00e0 l\u00e1ti \u1e63e \u00e0r\u00e0nw\u1ecd\u0301",
    ways: [
      { t: "D\u00e1rap\u1ecd\u0300 m\u1ecd\u0301 ward r\u1eb9", d: "\u1e62\u00e0k\u1ecdj\u1ecdp\u1ecd\u0300 p\u1eb9\u0300l\u00fa a\u0300g\u00e0\u0300n\u00e0\u0300\u00e0n l\u00f3r\u00ed WhatsApp.", icon: "users" },
      { t: "\u1e62e Ol\u00f9y\u00f2\u0300nda", d: "K\u00e0n\u00e0n il\u1eb9\u0300kun, \u1e63e \u00e0r\u00e0nw\u1ecd\u0301 n\u00ed \u00ech\u00e1pad\u00e9, t\u00e0b\u00ed PVC.", icon: "hand-heart" },
      { t: "P\u00edn s\u00ed WhatsApp", d: "F\u00ed \u00ee\u1e63\u1eb9\u0301 Adejoke ran\u1e63\u1eb9\u0301 s\u00ed \u00e0w\u1ecdn \u1eb9\u0300gb\u1eb9\u0301 r\u1eb9.", icon: "share-2" },
      { t: "\u1e62\u00e8t\u00f3 \u00ecb\u1eb9\u0300w\u00f2 \u00ecf\u00e9t\u00eds\u00edl\u1eb9\u0300", d: "K\u00f3 a\u0300g\u00e0\u0300n\u00e0\u0300\u00e0n j\u1ecd; \u00e0 \u00f3 mu \u00ecf\u1ecdr\u1ecdwan\u00edl\u1eb9\u0301n\u00f9 w\u00e1.", icon: "home" },
    ],
    formTitle: "K\u00e0 m\u00ed m\u1ecd\u0301 \u2014 \u00ec\u1e63\u1eb9\u0301j\u00fa \u00e1\u00e1y\u00e1 30 p\u00e9r\u00e9 ni.",
    wardsTitle: "\u00c0w\u1ecdn \u1eb9gb\u1eb9\u0301 WhatsApp ward",
    wardsBody: "\u1e62\u00e0yan ward r\u1eb9 k\u00ed o d\u00e1rap\u1ecd\u0300. \u00cc\u1e63\u00e0k\u1ecdj\u1ecdp\u1ecd\u0300 \u0144 \u1e63\u1eb9l\u1eb9\u0300 n\u00edb\u00ed.",
  },

  news: {
    eyebrow: "\u00ccr\u00f2y\u00ecn \u00b7 \u00ccr\u00f2y\u00ecn pad\u00e0",
    title: "\u1eb8\u0300r\u00ed, k\u00ec \u00ed \u1e63e \u00ecl\u00e9r\u00ed l\u00e1s\u00e0n.",
    lead: "\u00ccb\u1eb9\u0300w\u00f2 \u00ecf\u00e9t\u00eds\u00edl\u1eb9\u0300, \u00ecl\u00e9r\u00ed n\u00ed \u00eck\u1ecds\u00edl\u1eb9\u0300 \u00e0ti \u00ecr\u00f2y\u00ecn ward \u2014 t\u00ed a t\u1eb9 jade, k\u00ed o l\u00e8 m\u00fa \u00ecpolongo j\u00edh\u00ecn.",
    statsTitle: "\u00ccpolongo n\u00e1\u00e0 t\u00edl\u1ecd\u0300 b\u00e1y\u00ec\u00ed",
    updates: [
      { tag: "\u00ccb\u1eb9\u0300w\u00f2 \u00ecf\u00e9t\u00eds\u00edl\u1eb9\u0300", date: "\u00c0y\u00e8 \u1ecdj\u1ecd\u0301", t: "\u00ccp\u00e0d\u00e9 p\u1eb9\u0300l\u00fa obinrin \u1ecdj\u00e0 Imota lor\u00ed \u00ec\u1e63\u00e0n omi.", d: "Onísòwò t\u1ecd\u0301ka s\u00ed ib\u00ed t\u00ed omi \u0144 k\u00fan t\u00f3 \u0144 b\u00e0 is\u1ecdwo w\u1ecdn j\u1eb9\u0301." },
      { tag: "\u00ccfaraj\u00ecn", date: "\u00c0y\u00e8 \u1ecdj\u1ecd\u0301", t: "A t\u1eb9 \u00ecl\u00e9r\u00ed j\u00edh\u00ecn \u1ecdj\u1ecd\u0301 90 \u00e0k\u1ecd\u0301k\u1ecd\u0301 jade.", d: "\u00ccl\u00e9r\u00ed m\u1eb9\u0301f\u00e0 t\u00ed a k\u1ecd s\u00edl\u1eb9\u0300 f\u00fan Ikorodu II." },
      { tag: "\u1eb8gb\u1eb9\u0301 ward", date: "\u00c0y\u00e8 \u1ecdj\u1ecd\u0301", t: "\u00c0w\u1ecdn \u1eb9gb\u1eb9\u0301 WhatsApp Igbogbo-Baiyeku ti \u0144 \u1e63i\u1e63\u1eb9\u0301.", d: "\u1eb8gb\u1eb9\u0301 ward m\u1eb9\u0301rin ti \u0144 \u1e63i\u1e63\u1eb9\u0301, p\u1eb9\u0300l\u00fa \u00ecr\u00e0nl\u1ecd\u0301w\u1ecd\u0301 PVC." },
      { tag: "PVC", date: "\u00c0y\u00e8 \u1ecdj\u1ecd\u0301", t: "Il\u00e9-\u00ecw\u00f2s\u00e0n PVC n\u00ed Ijede.", d: "Ol\u00f9y\u00f2\u0300nda \u1e63\u00e8r\u00e0nw\u1ecd\u0301 f\u00fan a\u0300g\u00e0\u0300n\u00e0\u0300\u00e0n l\u00e1ti b\u1eb9r\u1eb9\u0300 \u00ecgb\u00e9p\u00e0d\u00e0." },
    ],
    cta: "Gba \u00eck\u00edl\u1ecd\u0300 l\u00f3r\u00ed WhatsApp",
  },

  donate: {
    eyebrow: "\u00cct\u00ecl\u1eb9\u0301yin",
    title: "\u1e62\u00e8t\u00ecl\u1eb9\u0301yin f\u00fan \u00ecpolongo t\u00ed \u00e0w\u1ecdn \u00ean\u00ecyan \u0144 n\u00e1w\u00f3 f\u00fan.",
    lead: "A\u0300 \u0144 j\u00e8r\u00e8 \u00ecb\u00f2 \u2014 a k\u00ec \u00ed r\u00e0 \u00e1. Gbogbo n\u00e1\u00edr\u00e0 ni a l\u00e8 j\u00edh\u00ecn r\u1eb9\u0300, n\u00edn\u00fa \u00e0\u00e0l\u00e0 \u00f2fin.",
    why: "\u00ccpolongo \u00ecp\u00ecl\u1eb9\u0300 \u0144 sare lor\u00ed \u00e0w\u1ecdn \u00ec\u1e63\u00e8\u00e0n\u00edt\u00f2hun k\u00e9k\u00e9r\u00e9, t\u00f3 t\u1ecd\u0301 \u2014 k\u00ec \u00ed \u1e63e \u00e0w\u1ecdn ojur\u00e8 nl\u00e1 t\u00f3 n\u00ed \u00ec\u1e63\u1eb9\u0301 \u00e0gbe\u0301kun. \u00cct\u00ecl\u1eb9\u0301yin r\u1eb9 \u0144 san f\u00fan p\u1ecd\u0301st\u00e0, PVC, \u00e0ti d\u00e1t\u00e0 f\u00fan \u00ec\u1e63\u00e0k\u1ecdj\u1ecdp\u1ecd\u0300.",
    tiersTitle: "\u00c0w\u1ecdn \u1ecd\u0300n\u00e0 l\u00e1ti f\u00fan",
    tiers: [
      { a: "\u20a62,000", d: "P\u1ecd\u0301st\u00e0 \u00e0ti \u00ec\u1e63\u00edp\u00e9 f\u00fan ile \u00ecd\u00ecb\u00f2 kan." },
      { a: "\u20a65,000", d: "D\u00e1t\u00e0 \u00e0ti \u1eb9\u0300t\u00e0n f\u00fan \u00e0w\u1ecdn ol\u00f9\u1e63\u00e8t\u00f2 ward kan." },
      { a: "\u20a610,000", d: "Il\u00e9-\u00ecw\u00f2s\u00e0n PVC f\u00fan agbegbe kan." },
    ],
    lawful: "\u00cct\u00ecl\u1eb9\u0301yin j\u1eb9\u0301 \u00ecf\u00e0r\u00e0h\u1ecd\u0300n \u00e0ti l\u00e1bf\u00e9 \u00f2fin, t\u00ed a k\u1ecd s\u00edl\u1eb9\u0300 n\u00ed g\u00ednd\u00edn, t\u00ed \u00f3 s\u00ec w\u00e0 n\u00edn\u00fa \u00e0\u00e0l\u00e0 \u00ecn\u00e1w\u00f3 ol\u00f9d\u00edje. A k\u00ec \u00ed gba ow\u00f3 alai\u0301m\u1ecd\u0300lar\u00ed f\u00fan ojur\u00e8, a k\u00ec \u00ed s\u00ec funni l\u00f3w\u00f3 f\u00fan \u00ecb\u00f2.",
    cta: "\u1e62\u00e8t\u00ecl\u1eb9\u0301yin Ajoke",
    note: "Oj\u00fa-\u00ecw\u00e9 \u00e0nf\u00e1n\u00ec t\u00f3 n\u00ed \u00e0\u00e0bo n\u00ed a \u00f3 so n\u00edb\u00ed. \u00c0p\u1eb9\u1eb9r\u1eb9 ni \u2014 a k\u00ec \u00ed gba ow\u00f3 kankan.",
  },

  contact: {
    eyebrow: "\u00cck\u00e0ns\u00ed",
    title: "K\u00e0n\u00e0n s\u00ed \u00ecpolongo n\u00e1\u00e0.",
    lead: "WhatsApp ni \u00f3 y\u00e1ra j\u00f9. O l\u00e8 tun \u1e63\u00ebb\u00e8w\u00f2 \u1ecd\u0301f\u00ee\u0300\u1e63\u00ec agbegbe t\u00e0b\u00ed fi \u00ee\u1e63\u1eb9\u0301 ran\u1e63\u1eb9\u0301.",
    cards: [
      { t: "WhatsApp", d: "B\u00e1 \u1eb9gb\u1eb9\u0301 n\u00e1\u00e0 s\u1ecd\u0300r\u1ecd\u0300 \u2014 PVC, ward, \u00ecbe\u0300e\u0300re\u0300.", icon: "message-circle", action: "B\u00e1 wa s\u1ecd\u0300r\u1ecd\u0300 l\u00f3r\u00ed WhatsApp" },
      { t: "\u1ecc\u0301f\u00ee\u0300\u1e63\u00ec agbegbe", d: "Ikorodu Constituency II. \u00d2 \u1e63\u00ed sile f\u00fan \u00e0w\u1ecdn olugbe.", icon: "map-pin", action: "Gba \u00edt\u1ecd\u0301s\u1ecdn\u00e0" },
      { t: "Atim\u00f3l\u00e9 \u00e0ti \u00ee\u1e63\u1eb9\u0301", d: "F\u00fan \u00ecf\u1ecdr\u1ecdwan\u00edl\u1eb9\u0301n\u00f9 \u00e0ti \u00ecbe\u0300e\u0300re\u0300.", icon: "newspaper", action: "Fi \u00edm\u00e9\u00edl\u00ec ran\u1e63\u1eb9\u0301" },
    ],
    formTitle: "Fi \u00ee\u1e63\u1eb9\u0301 ran\u1e63\u1eb9\u0301",
    nameL: "Orúk\u1ecd", phoneL: "F\u00f3\u00f2n\u00f9", msgL: "\u00cc\u1e63\u1eb9\u0301 r\u1eb9", msgPh: "B\u00e1w\u00f2 ni a \u1e63e l\u00e8 \u1e63e \u00e0r\u00e0nw\u1ecd\u0301?",
    sendL: "Fi \u00ee\u1e63\u1eb9\u0301 ran\u1e63\u1eb9\u0301",
    okT: "A ti r\u00e1n\u00ee\u1e63\u1eb9\u0301 r\u1eb9. \u1eb8 \u1e63\u00e9!", okD: "A \u00f3 d\u00e1h\u00f9n s\u00ed \u1ecd l\u00f3r\u00ed WhatsApp t\u00e0b\u00ed nip\u00e0 f\u00f3\u00f2n\u00f9.",
  },

  privacy: {
    eyebrow: "\u00c0\u1e63\u00edr\u00ed & \u00ccf\u1ecdw\u1ecd\u0301s\u00ed",
    title: "D\u00e1t\u00e0 r\u1eb9, t\u00ed a \u0144 \u1e63\u00e0m\u00ed s\u00ed.",
    lead: "A \u0144 t\u1ebd\u0300le \u00e0w\u1ecdn \u00f2fin \u00e0\u00e0bo d\u00e1t\u00e0 N\u00e0\u00ecj\u00edr\u00ec\u00e0 (NDPC). B\u00e1y\u00ec\u00ed ni ohun t\u00ed a \u0144 gba, \u00ecd\u00ec, \u00e0ti \u1eb9\u0300t\u1ecd\u0301 r\u1eb9.",
    updated: "\u00c0t\u00fanse \u00eek\u1eb9hin: \u00e0y\u00e8 \u1ecdj\u1ecd\u0301",
    sections: [
      { t: "Ohun t\u00ed a \u0144 gba", d: "Ohun t\u00ed o b\u00e1 fun wa nik\u00e0n: orúk\u1ecd r\u1eb9, n\u1ecd\u0301mb\u00e0 f\u00f3\u00f2n\u00f9, ward, \u00e0ti \u00ecf\u1ecdw\u1ecd\u0301s\u00ed r\u1eb9. A k\u00ec \u00ed gba n\u1ecd\u0301mb\u00e0 PVC t\u00e0b\u00ed VIN l\u00f3r\u00ed ay\u00e9luj\u00e1ra." },
      { t: "\u00ccd\u00ec t\u00ed a fi \u0144 gb\u00e0 \u00e1", d: "L\u00e1ti k\u00e0n\u00e0n s\u00ed \u1ecd nip\u00e0 \u1eb9\u0300k\u1ecd\u0301 \u00ecd\u00ecb\u00f2, \u00ecr\u00e0nl\u1ecd\u0301w\u1ecd\u0301 PVC, \u00ech\u00e1pad\u00e9 \u00e0ti \u00ecr\u00e1nn\u00edl\u00e9t\u00ed \u00ecd\u00ecb\u00f2." },
      { t: "\u00ccf\u1ecdw\u1ecd\u0301s\u00ed", d: "A k\u00ec \u00ed pa \u00e0k\u1ecds\u00edl\u1eb9\u0300 m\u1ecd\u0301 l\u00e1\u00ec n\u00ed \u00ecf\u1ecdw\u1ecd\u0301s\u00ed r\u1eb9. O l\u00e8 y\u1ecd \u00ecf\u1ecdw\u1ecd\u0301s\u00ed r\u1eb9 k\u00f9r\u00f2 n\u00edgb\u00e0ku\u0300gb\u00e0." },
      { t: "B\u00ed a \u1e63e \u0144 d\u00e1\u00e1b\u00f2b\u00f2 f\u00fan", d: "A \u0144 pa d\u00e1t\u00e0 r\u1eb9 m\u1ecd\u0301 n\u00ed \u00e0\u00e0bo, \u1eb9gb\u1eb9\u0301 \u00ecpolongo nik\u00e0n l\u00f3 \u0144 l\u00f2 \u00f3, a k\u00ec \u00ed s\u00ec t\u00e0 \u00e1." },
      { t: "\u1eb8\u0300t\u1ecd\u0301 r\u1eb9", d: "O l\u00e8 b\u1eb9\u0300\u00e8r\u00e8 l\u00e1ti r\u00ed, \u1e63\u00e0t\u00fanse t\u00e0b\u00ed pa d\u00e1t\u00e0 r\u1eb9 r\u1eb9\u0301 n\u00edgb\u00e0ku\u0300gb\u00e0." },
      { t: "\u00ccs\u1ecd\u0300r\u1ecd\u0300 lor\u00ed INEC", d: "INEC nik\u00e0n l\u00f3 \u0144 forúk\u1ecd ol\u00f9d\u00ecbo t\u00f3 s\u00ec \u0144 fun ni PVC. \u00ccpolongo n\u00e1\u00e0 \u0144 \u1e63\u00e8r\u00e0nw\u1ecd\u0301 nik\u00e0n." },
    ],
  },
};

window.STRINGS = STRINGS;
