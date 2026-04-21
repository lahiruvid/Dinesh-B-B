function $(sel) {
  return document.querySelector(sel);
}

function safeJsonParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

const CONFIG = {
  // TODO: replace with Dinesh real number in international format, digits only (no +, no spaces)
  // Example: "393331234567"
  phoneDigits: "393476485794",
  city: "Bologna",
  waDefaultText:
    "Ciao Dinesh! Gestisco un B&B/casa vacanza a Bologna. Mi servirebbe una pulizia turnover. Casa: __ mq, __ bagni, zona __. Check-out: __, check-in: __. Puoi darmi disponibilità e preventivo? Grazie!",
};

const TEMPLATE = {
  it: "Ciao Dinesh! Gestisco un B&amp;B a Bologna. Mi servirebbe una pulizia turnover. Casa: __ mq, __ bagni, zona __. Check-out: __, check-in: __. Puoi darmi disponibilità e preventivo? Grazie!",
  en: "Hi Dinesh! I manage a B&amp;B/vacation rental in Bologna. I need a turnover clean. Home: __ sqm, __ bathrooms, area __. Check-out: __, check-in: __. Can you share availability and a quote? Thank you!",
};

const I18N = {
  it: {
    "meta.title": "Pulizie B&B Bologna — Dinesh",
    "meta.description":
      "Pulizie professionali per B&B e case vacanza a Bologna. Check-out veloci, standard hotel, affidabilità e cura dei dettagli. Preventivo rapido via WhatsApp.",
    "meta.ogTitle": "Pulizie professionali per B&B a Bologna — Dinesh",
    "meta.ogDesc": "Turnover check-out/check-in, standard hotel, biancheria su richiesta. Preventivo rapido via WhatsApp.",
    brand: "Dinesh • Pulizie B&B (Bologna)",
    "nav.services": "Servizi",
    "nav.how": "Come funziona",
    "nav.why": "Perché noi",
    "nav.contact": "Contatti",
    "cta.call": "Chiama",
    "cta.callNow": "Chiama ora",
    "cta.whatsapp": "WhatsApp",
    "cta.waQuote": "Preventivo rapido su WhatsApp",
    "cta.seeServices": "Vedi servizi",
    "cta.waMe": "Scrivimi su WhatsApp",
    "cta.copyTemplate": "Copia messaggio pronto",
    "hero.eyebrow": "Bologna • B&B • Case vacanza • Appartamenti",
    "hero.h1a": "Pulizie professionali per B&B.",
    "hero.h1b": "Check-out perfetto, ospiti felici.",
    "hero.lead":
      "Se gestisci un B&B, sai che le recensioni si vincono sui dettagli: bagno impeccabile, letto “hotel”, odore di pulito, tempi certi.",
    "hero.sub": "Io sono Dinesh, vivo a Bologna. Ti aiuto a far trovare la casa pronta — sempre.",
    "chip.turnover": "Turnover check-out / check-in",
    "chip.hotel": "Standard hotel",
    "chip.punctual": "Puntualità",
    "chip.details": "Cura “all’italiana” dei dettagli",
    "trust.fastK": "Risposta veloce",
    "trust.fastV": "WhatsApp • chiamata • disponibilità",
    "trust.reliableK": "Affidabilità",
    "trust.reliableV": "Orari concordati • consegna chiavi",
    "trust.clearK": "Trasparenza",
    "trust.clearV": "Preventivo chiaro • foto su richiesta",
    "card.role": "Pulizie per B&B e case vacanza",
    "card.loc": "Bologna e provincia",
    "stat.quote": "Preventivo medio su WhatsApp",
    "stat.turnoverK": "Check-out",
    "stat.turnoverV": "Pulizia + reset appartamento",
    "stat.detailsK": "Dettagli",
    "stat.detailsV": "Bagno, cucina, vetri, angoli",
    "stat.flexK": "Flessibile",
    "stat.flexV": "Weekend / festivi (su accordo)",
    "card.tip": "Tip: per un preventivo preciso, mandami 3 info: <strong>mq</strong>, <strong>numero bagni</strong>, <strong>zona</strong>.",
    "services.h2": "Servizi pensati per host italiani",
    "services.sub": "Il tuo obiettivo è uno solo: ospiti che entrano e dicono “wow, che pulito”.",
    "services.badge": "Più richiesto",
    "services.turnover.h3": "Turnover check-out / check-in",
    "services.turnover.sub": "Pulizia completa + reset appartamento: letto, bagno, cucina, pavimenti, vetri.",
    "services.turnover.b1": "Rifacimento letto “hotel” (pieghe, cuscini, copriletto)",
    "services.turnover.b2": "Bagno brillante: doccia, rubinetti, sanitari, specchi",
    "services.turnover.b3": "Reset cucina: piano, lavello, elettrodomestici esterni",
    "services.deep.h3": "Pulizia profonda periodica",
    "services.deep.sub": "Per mantenere standard alto e prevenire recensioni “casa trascurata”.",
    "services.deep.b1": "Angoli, battiscopa, sotto-letto, polvere in alto",
    "services.deep.b2": "Interno frigorifero e forno (su richiesta)",
    "services.deep.b3": "Trattamento calcare e zone critiche",
    "services.linen.h3": "Biancheria & set cortesia",
    "services.linen.sub": "Su richiesta: gestione cambio biancheria e preparazione “pronto ospite”.",
    "services.linen.b1": "Asciugamani ordinati e presentazione curata",
    "services.linen.b2": "Controllo dotazioni (carta, sapone, kit base)",
    "services.linen.b3": "Foto “pronto” prima del check-in (su richiesta)",
    "note.h": "Hai poco tempo?",
    "note.p": "Scrivimi su WhatsApp: ti rispondo con disponibilità e preventivo. Niente giri lunghi.",
    "media.h2": "Foto & video (impatto immediato)",
    "media.sub": "Un assaggio dello standard: ordine, superfici pulite, cura dei dettagli.",
    "how.h2": "Come funziona (semplice, veloce, senza stress)",
    "how.sub": "In Italia contano chiarezza e puntualità: ecco un flusso pulito.",
    "how.s1.h": "Mi scrivi",
    "how.s1.p": "Zona, metri quadri, numero bagni, data e orario check-out/check-in.",
    "how.s2.h": "Confermiamo",
    "how.s2.p": "Concordiamo tempi, accesso/chiavi e cosa includere (biancheria, extra).",
    "how.s3.h": "Consegna “pronto ospite”",
    "how.s3.p": "Pulizia fatta. Se vuoi: foto finali e checklist prima del check-in.",
    "why.h2": "Perché funziona per un B&B",
    "why.sub": "Non è “solo pulire”: è proteggere le tue recensioni e il tuo tempo.",
    "why.p1.h": "Dettagli che in Italia contano",
    "why.p1.b1": "<strong>Bagno</strong>: specchio senza aloni, rubinetti lucidi, doccia senza residui",
    "why.p1.b2": "<strong>Letto</strong>: sensazione “hotel”, ordine visivo, tessili presentati bene",
    "why.p1.b3": "<strong>Odore di pulito</strong>: ambiente fresco, senza profumi aggressivi",
    "why.p2.h": "Affidabilità da host a host",
    "why.p2.b1": "<strong>Orari</strong> concordati: rispetto dei tempi di turnover",
    "why.p2.b2": "<strong>Comunicazione</strong> chiara e rapida: WhatsApp prima di tutto",
    "why.p2.b3": "<strong>Standard</strong> replicabile: stessa qualità ogni volta",
    "why.quote":
      "“Quando un ospite entra e trova tutto perfetto, non ti ringrazia… ma ti lascia <strong>5 stelle</strong>. Il mio lavoro è aiutarti a ottenere quelle stelle.”",
    "why.by": "— Dinesh, Bologna",
    "contact.h2": "Preventivo rapido (senza impegno)",
    "contact.sub":
      "Mandami questi 3 punti e ti rispondo con disponibilità e prezzo: <strong>mq</strong>, <strong>numero bagni</strong>, <strong>zona</strong>.",
    "contact.area":
      "<strong>Zona servita</strong>: Bologna (centro e provincia). Altre zone in Emilia-Romagna su richiesta.",
    "template.h3": "Messaggio rapido per WhatsApp",
    "template.sub": "Copia/incolla e invia.",
    "kvs.phone": "Telefono",
    "kvs.whatsapp": "WhatsApp",
    "kvs.city": "Città",
    "kvs.cityValue": "Bologna",
    "footer.left": "© <span id=\"year\"></span> Dinesh • Pulizie B&amp;B",
    "footer.right": "Sito leggero per condivisione Facebook • <a class=\"link\" href=\"#top\">Torna su</a>",
    "toast.copied": "Messaggio copiato",
    "toast.copyFail": "Copia non riuscita",
  },
  en: {
    "meta.title": "B&B Cleaning Bologna — Dinesh",
    "meta.description":
      "Professional cleaning for B&Bs and vacation rentals in Bologna. Fast turnovers, hotel-level standards, reliable timing, attention to detail. Quick quote via WhatsApp.",
    "meta.ogTitle": "Professional B&B Cleaning in Bologna — Dinesh",
    "meta.ogDesc": "Check-out/check-in turnovers, hotel-level standard, linen on request. Quick quote via WhatsApp.",
    brand: "Dinesh • B&B Cleaning (Bologna)",
    "nav.services": "Services",
    "nav.how": "How it works",
    "nav.why": "Why us",
    "nav.contact": "Contact",
    "cta.call": "Call",
    "cta.callNow": "Call now",
    "cta.whatsapp": "WhatsApp",
    "cta.waQuote": "Quick quote on WhatsApp",
    "cta.seeServices": "See services",
    "cta.waMe": "Message me on WhatsApp",
    "cta.copyTemplate": "Copy message template",
    "hero.eyebrow": "Bologna • B&Bs • Vacation rentals • Apartments",
    "hero.h1a": "Professional B&B cleaning.",
    "hero.h1b": "Perfect turnover, happy guests.",
    "hero.lead":
      "If you host a B&B, you know reviews are won on details: spotless bathroom, hotel-like bed, fresh clean feel, and reliable timing.",
    "hero.sub": "I’m Dinesh, based in Bologna. I help you deliver a guest-ready home — every time.",
    "chip.turnover": "Check-out / check-in turnover",
    "chip.hotel": "Hotel-level standard",
    "chip.punctual": "On-time",
    "chip.details": "Detail-focused finish",
    "trust.fastK": "Fast reply",
    "trust.fastV": "WhatsApp • call • availability",
    "trust.reliableK": "Reliable",
    "trust.reliableV": "Agreed times • key handover",
    "trust.clearK": "Transparent",
    "trust.clearV": "Clear quote • photos on request",
    "card.role": "Cleaning for B&Bs and vacation rentals",
    "card.loc": "Bologna & surrounding area",
    "stat.quote": "Typical WhatsApp quote time",
    "stat.turnoverK": "Turnover",
    "stat.turnoverV": "Full clean + reset",
    "stat.detailsK": "Details",
    "stat.detailsV": "Bathroom, kitchen, glass, corners",
    "stat.flexK": "Flexible",
    "stat.flexV": "Weekends/holidays (by arrangement)",
    "card.tip": "Tip: for an accurate quote, send 3 details: <strong>sqm</strong>, <strong>bathrooms</strong>, <strong>area</strong>.",
    "services.h2": "Services built for busy hosts",
    "services.sub": "One goal: guests walk in and say “wow, so clean”.",
    "services.badge": "Most requested",
    "services.turnover.h3": "Turnover check-out / check-in",
    "services.turnover.sub": "Full clean + reset: bed, bathroom, kitchen, floors, glass.",
    "services.turnover.b1": "Hotel-style bed making (crisp look, pillows, finishing)",
    "services.turnover.b2": "Shining bathroom: shower, taps, toilet, mirrors",
    "services.turnover.b3": "Kitchen reset: counter, sink, appliance exteriors",
    "services.deep.h3": "Deep clean (periodic)",
    "services.deep.sub": "Keep standards high and prevent “neglected” reviews.",
    "services.deep.b1": "Corners, baseboards, under-bed, high dusting",
    "services.deep.b2": "Inside fridge/oven (on request)",
    "services.deep.b3": "Limescale treatment and problem areas",
    "services.linen.h3": "Linen & guest-ready setup",
    "services.linen.sub": "On request: linen changes and a true “ready for guests” finish.",
    "services.linen.b1": "Neat towel presentation and staging",
    "services.linen.b2": "Amenity check (paper, soap, basics)",
    "services.linen.b3": "Final “ready” photos before check-in (on request)",
    "note.h": "Short on time?",
    "note.p": "Message me on WhatsApp: I’ll reply with availability and a quote. No long back-and-forth.",
    "media.h2": "Photos & video (instant trust)",
    "media.sub": "A quick taste of the standard: tidy setup, clean surfaces, detail finish.",
    "how.h2": "How it works (simple, fast, stress-free)",
    "how.sub": "Clear steps and reliable timing.",
    "how.s1.h": "You message me",
    "how.s1.p": "Area, square meters, bathrooms, and your check-out/check-in time.",
    "how.s2.h": "We confirm",
    "how.s2.p": "We agree timing, access/keys, and any extras (linen, deep clean).",
    "how.s3.h": "Guest-ready delivery",
    "how.s3.p": "Cleaning done. If you want: final photos and a quick checklist.",
    "why.h2": "Why it works for a B&B",
    "why.sub": "It’s not “just cleaning”: it protects your reviews and your time.",
    "why.p1.h": "Details guests notice",
    "why.p1.b1": "<strong>Bathroom</strong>: streak-free mirrors, polished taps, clean shower",
    "why.p1.b2": "<strong>Bed</strong>: hotel feel, tidy staging, crisp presentation",
    "why.p1.b3": "<strong>Fresh clean feel</strong>: clean air, no overpowering fragrance",
    "why.p2.h": "Host-to-host reliability",
    "why.p2.b1": "<strong>Timing</strong>: built for turnovers",
    "why.p2.b2": "<strong>Communication</strong>: clear and fast on WhatsApp",
    "why.p2.b3": "<strong>Repeatable standard</strong>: same quality every time",
    "why.quote":
      "“When guests walk in and everything is perfect, they don’t thank you… they leave <strong>5 stars</strong>. My job is to help you earn those stars.”",
    "why.by": "— Dinesh, Bologna",
    "contact.h2": "Quick quote (no commitment)",
    "contact.sub": "Send these 3 points and I’ll reply with availability and price: <strong>sqm</strong>, <strong>bathrooms</strong>, <strong>area</strong>.",
    "contact.area": "<strong>Service area</strong>: Bologna (city + surrounding). Other Emilia-Romagna areas on request.",
    "template.h3": "Fast WhatsApp message",
    "template.sub": "Copy/paste and send.",
    "kvs.phone": "Phone",
    "kvs.whatsapp": "WhatsApp",
    "kvs.city": "City",
    "kvs.cityValue": "Bologna",
    "footer.left": "© <span id=\"year\"></span> Dinesh • B&B Cleaning",
    "footer.right": "Lightweight site for Facebook sharing • <a class=\"link\" href=\"#top\">Back to top</a>",
    "toast.copied": "Message copied",
    "toast.copyFail": "Copy failed",
  },
};

function updateWaLinksFromTemplate() {
  const msgEl = document.getElementById("templateMsg");
  const text = msgEl?.textContent?.trim() || CONFIG.waDefaultText;
  const href = buildWaLink(text);
  ["waBtnTop", "waBtnHero", "waBtnCard", "waBtnNote", "waBtnContact", "waBtnMobile"].forEach((id) => setHrefIfExists(id, href));
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.it;

  // text nodes
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key) return;
    const val = dict[key];
    if (typeof val === "string") node.textContent = val;
  });

  // html nodes
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.getAttribute("data-i18n-html");
    if (!key) return;
    const val = dict[key];
    if (typeof val === "string") node.innerHTML = val;
  });

  // attributes (format: "attr:key")
  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    const spec = node.getAttribute("data-i18n-attr");
    if (!spec) return;
    const [attr, key] = spec.split(":");
    if (!attr || !key) return;
    const val = dict[key];
    if (typeof val === "string") node.setAttribute(attr, val);
  });

  document.documentElement.setAttribute("lang", lang === "en" ? "en" : "it");
  document.documentElement.setAttribute("data-lang", lang === "en" ? "en" : "it");
  document.title = dict["meta.title"] || document.title;
}

function setLangUi(lang) {
  const itBtn = document.getElementById("langIT");
  const enBtn = document.getElementById("langEN");
  if (itBtn) itBtn.setAttribute("aria-pressed", lang !== "en" ? "true" : "false");
  if (enBtn) enBtn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
}

function setLang(lang) {
  const next = lang === "en" ? "en" : "it";
  localStorage.setItem("dinesh.lang", JSON.stringify(next));
  setLangUi(next);
  applyI18n(next);
}

function getInitialLang() {
  const stored = safeJsonParse(localStorage.getItem("dinesh.lang"));
  if (stored === "en" || stored === "it") return stored;
  return "it"; // default Italian
}

function setTplUi(lang) {
  const itBtn = document.getElementById("tplIT");
  const enBtn = document.getElementById("tplEN");
  if (itBtn) itBtn.setAttribute("aria-pressed", lang !== "en" ? "true" : "false");
  if (enBtn) enBtn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
}

function setTemplateLang(lang) {
  const next = lang === "en" ? "en" : "it";
  localStorage.setItem("dinesh.tplLang", JSON.stringify(next));
  setTplUi(next);
  const msgEl = document.getElementById("templateMsg");
  if (msgEl) msgEl.innerHTML = TEMPLATE[next];
  updateWaLinksFromTemplate();
}

function getInitialTemplateLang() {
  const stored = safeJsonParse(localStorage.getItem("dinesh.tplLang"));
  if (stored === "en" || stored === "it") return stored;
  return "it"; // default Italian message
}

function buildWaLink(text) {
  const base = "https://wa.me/";
  const msg = encodeURIComponent((text || CONFIG.waDefaultText).trim());
  return `${base}${CONFIG.phoneDigits}?text=${msg}`;
}

function setHrefIfExists(id, href) {
  const el = document.getElementById(id);
  if (!el) return;
  el.setAttribute("href", href);
}

function setTextIfExists(id, text) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
}

let toastTimer = null;
function toast(message) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el.classList.remove("show"), 1700);
}

async function copyToClipboard(value) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    // fallback
    try {
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

function setup() {
  // language (default IT)
  const initialLang = getInitialLang();
  setLangUi(initialLang);
  applyI18n(initialLang);
  const itBtn = document.getElementById("langIT");
  const enBtn = document.getElementById("langEN");
  if (itBtn) itBtn.addEventListener("click", () => setLang("it"));
  if (enBtn) enBtn.addEventListener("click", () => setLang("en"));

  // template language (default IT), independent from site language
  const initialTpl = getInitialTemplateLang();
  setTplUi(initialTpl);
  const tplIt = document.getElementById("tplIT");
  const tplEn = document.getElementById("tplEN");
  if (tplIt) tplIt.addEventListener("click", () => setTemplateLang("it"));
  if (tplEn) tplEn.addEventListener("click", () => setTemplateLang("en"));
  // set initial template text
  const msgEl = document.getElementById("templateMsg");
  if (msgEl) msgEl.innerHTML = TEMPLATE[initialTpl] || TEMPLATE.it;

  // year
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());

  // tel links
  const telHref = `tel:+${CONFIG.phoneDigits}`;
  ["callBtnTop", "callBtnCard", "callBtnContact", "callBtnMobile"].forEach((id) => setHrefIfExists(id, telHref));

  // whatsapp links
  updateWaLinksFromTemplate();

  // display number (human format)
  const pretty = `+${CONFIG.phoneDigits.slice(0, 2)} ${CONFIG.phoneDigits.slice(2, 5)} ${CONFIG.phoneDigits.slice(5, 8)} ${CONFIG.phoneDigits.slice(8)}`;
  setTextIfExists("phoneText", pretty);
  setTextIfExists("waText", pretty);

  // smooth scroll (for in-page links)
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    });
  });

  // copy message
  const copyBtn = $("#copyMsg");
  if (copyBtn && msgEl) {
    copyBtn.addEventListener("click", async () => {
      const ok = await copyToClipboard(msgEl.textContent.trim());
      const lang = document.documentElement.getAttribute("data-lang") === "en" ? "en" : "it";
      toast(ok ? I18N[lang]["toast.copied"] : I18N[lang]["toast.copyFail"]);
    });
  }

  // (If later you make the template editable, call updateWaLinksFromTemplate() on input)
}

setup();
