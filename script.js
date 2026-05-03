const CONFIG = {
  phoneDigits: "393476485794",
  defaultMessage:
    "Ciao Dinesh! Vorrei un preventivo per pulizia B&B/appartamento a Bologna. Puoi indicarmi disponibilita e prezzo? Grazie!",
};

function qs(selector) {
  return document.querySelector(selector);
}

function waLink(text) {
  return `https://wa.me/${CONFIG.phoneDigits}?text=${encodeURIComponent(text)}`;
}

function showToast(text) {
  const el = qs("#toast");
  if (!el) return;
  el.textContent = text;
  el.classList.add("show");
  window.setTimeout(() => el.classList.remove("show"), 1600);
}

function bindContactLinks() {
  const telHref = `tel:+${CONFIG.phoneDigits}`;
  const waHref = waLink(CONFIG.defaultMessage);
  const callIds = ["callBtnTop", "callBtnTopInline", "callBtnContact", "callBtnMobile"];
  const waIds = ["waBtnTop", "waBtnHero", "waBtnCard", "waBtnNote", "waBtnContact", "waBtnMobile", "waBtnMobileInline", "waBtnFloat"];

  callIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", telHref);
  });

  waIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", waHref);
  });
}

function bindSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function bindFaqAccordion() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-q");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((x) => {
        x.classList.remove("open");
        const b = x.querySelector(".faq-q");
        if (b) b.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function bindQuoteForm() {
  const form = document.getElementById("quoteForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("qName")?.value?.trim() || "-";
    const email = document.getElementById("qEmail")?.value?.trim() || "-";
    const phone = document.getElementById("qPhone")?.value?.trim() || "-";
    const service = document.getElementById("qService")?.value?.trim() || "-";
    const zone = document.getElementById("qZone")?.value?.trim() || "-";
    const note = document.getElementById("qMsg")?.value?.trim() || "-";

    const text =
      `Ciao Dinesh! Richiedo preventivo.\n` +
      `Nome: ${name}\nEmail: ${email}\nTelefono: ${phone}\n` +
      `Servizio: ${service}\nZona: ${zone}\nMessaggio: ${note}`;

    window.open(waLink(text), "_blank", "noopener,noreferrer");
    showToast("Apro WhatsApp con il tuo preventivo");
  });
}

function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

setYear();
bindContactLinks();
bindSmoothScroll();
bindFaqAccordion();
bindQuoteForm();
