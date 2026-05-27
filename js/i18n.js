/* ============================================================
   Nexura i18n — Internationalization System
   Supports: uz, ru, en
   ============================================================ */

const I18n = (() => {
  const SUPPORTED = ['uz', 'ru', 'en'];
  const DEFAULT   = 'uz';
  const STORAGE_KEY = 'nexura_lang';

  let currentLang = DEFAULT;
  let translations = {};

  /* Flatten nested JSON: { "nav": { "home": "..." } } → { "nav.home": "..." } */
  function flatten(obj, prefix = '') {
    return Object.entries(obj).reduce((acc, [k, v]) => {
      const key = prefix ? `${prefix}.${k}` : k;
      if (v && typeof v === 'object') Object.assign(acc, flatten(v, key));
      else acc[key] = v;
      return acc;
    }, {});
  }

  async function load(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT;
    try {
      const res = await fetch(`locales/${lang}.json`);
      if (!res.ok) throw new Error('fetch failed');
      const data = await res.json();
      translations = flatten(data);
      currentLang = lang;
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      console.warn(`[i18n] Failed to load ${lang}, falling back to ${DEFAULT}`);
      if (lang !== DEFAULT) await load(DEFAULT);
    }
  }

  function t(key, fallback = '') {
    return translations[key] || fallback || key;
  }

  function applyToDOM() {
    /* Text content */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) el.textContent = val;
    });

    /* Placeholder */
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      const val = t(key);
      if (val) el.setAttribute('placeholder', val);
    });

    /* aria-label */
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const val = t(key);
      if (val) el.setAttribute('aria-label', val);
    });

    /* HTML content (rich text) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = t(key);
      if (val) el.innerHTML = val;
    });

    /* Document title */
    const titleEl = document.querySelector('[data-i18n-title]');
    if (titleEl) {
      const key = titleEl.getAttribute('data-i18n-title');
      const val = t(key);
      if (val) document.title = val;
    }

    /* Meta description */
    const metaDesc = document.querySelector('meta[data-i18n-meta]');
    if (metaDesc) {
      const key = metaDesc.getAttribute('data-i18n-meta');
      const val = t(key);
      if (val) metaDesc.setAttribute('content', val);
    }

    /* OG title */
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      const titleEl2 = document.querySelector('[data-i18n-title]');
      if (titleEl2) {
        const val = t(titleEl2.getAttribute('data-i18n-title'));
        if (val) ogTitle.setAttribute('content', val);
      }
    }

    /* Update html lang */
    document.documentElement.lang = currentLang;

    /* Update lang buttons */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    /* Trigger custom event */
    document.dispatchEvent(new CustomEvent('i18n:applied', { detail: { lang: currentLang } }));
  }

  async function setLang(lang) {
    if (lang === currentLang && Object.keys(translations).length > 0) return;
    await load(lang);
    applyToDOM();
  }

  function getSaved() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(saved) ? saved : DEFAULT;
  }

  function getCurrent() { return currentLang; }

  async function init() {
    const lang = getSaved();
    await setLang(lang);
    /* Bind language switcher buttons */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
  }

  return { init, setLang, t, getCurrent };
})();

/* Auto-init */
document.addEventListener('DOMContentLoaded', () => I18n.init());
