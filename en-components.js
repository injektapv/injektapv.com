const LOGO_PATHS_DARK = `
  <path fill="#FED36F" d="M624.29,716.96c-97.59,0-176.96-79.37-176.96-176.96s79.37-176.96,176.96-176.96c53.9,0,102.25,24.23,134.73,62.35,1.25-1.77,2.73-3.46,4.37-5.05,5.39-5.18,11.82-8.51,18.92-9.81-37.47-45.67-94.34-74.82-158.02-74.82-112.81,0-204.29,91.47-204.29,204.29s91.47,204.29,204.29,204.29c52.46,0,100.32-19.78,136.5-52.31l-20.77-18.19c-31.05,26.91-71.51,43.17-115.73,43.17Z"/>
  <path fill="#3c3c3b" d="M1467.08,350.78l-20.22,67.92-20.35-67.92h-32.9l33.18,98.74h40.03l33.18-98.74h-32.92Z"/>
  <path fill="#3c3c3b" d="M1353.25,350.78h-43.23v98.74h30.94v-31.36h12.28c7.99,0,14.78-1.51,20.35-4.48,5.67-2.99,9.97-6.97,12.83-12,2.89-5.13,4.35-10.8,4.35-17.02,0-10.31-3.25-18.56-9.78-24.67-6.4-6.14-15.67-9.21-27.74-9.21ZM1349.76,393.72h-8.8v-18.11h8.8c6.4,0,9.6,3.02,9.6,9.06s-3.2,9.06-9.6,9.06Z"/>
  <path fill="#3c3c3b" d="M631.97,484.6v130.9h32.92v-82.94c3.83-5.18,8.22-9.68,13.22-13.48,5.02-3.8,10.46-5.7,16.34-5.7,7.44,0,13.22,2.16,17.36,6.48,4.32,4.32,6.48,10.88,6.48,19.7l.26,75.94h32.92v-80.36c0-11.92-2.06-21.86-6.22-29.8-3.95-8.12-9.5-14.18-16.58-18.14-6.87-3.85-14.63-5.85-23.29-5.96-.26-.03-.55-.03-.81-.03-5.88,0-11.32,1.14-16.34,3.38-5.02,2.08-9.5,4.84-13.48,8.3-3.8,3.28-7.08,6.74-9.86,10.36v-18.66h-32.92Z"/>
  <path fill="#3c3c3b" d="M604.3,484.6h-32.92v130.9h32.92v-130.9Z"/>
  <path fill="#3c3c3b" d="M774.53,604.23c0,6.32-.49,12.05-1.46,17.23-.96,5.18-2.47,10.07-4.48,14.68-2.03,4.61-4.55,9.01-7.52,13.22-3.02,4.22-5.57,9.34-9.6,13.71l.89.78,19.7,17.23.05.05c6.79-6.14,12.44-12.15,16.97-18.06,4.53-5.91,8.17-12.1,10.93-18.55.13-.31.26-.6.36-.91,2.55-6.19,4.4-12.7,5.57-19.47,1.22-7.13,1.82-14.96,1.82-23.55v-115.99h-33.23v119.63Z"/>
  <path fill="#3c3c3b" d="M1309.48,507.16l-12.34-7.05c-1.51-.86-3.12-1.69-4.76-2.42-6.56-2.99-13.19-4.5-19.83-4.5-10.23,0-19.73,2.52-28.24,7.47l-.08.05c-8.33,4.94-15.09,12.15-20.14,21.39l-.21.39c-4.76,9.11-7.23,20.53-7.23,33.75s2.47,24.33,7.36,33.49l.08.13c5.02,9.14,11.66,16.19,19.67,20.98,8.2,4.81,17.18,7.26,26.65,7.26,8.82,0,16.68-2.29,23.32-6.79.39-.29.78-.55,1.15-.83l14.6-10.8,1.85,17.28h30.24v-118.36h-30.24l-1.85,8.56ZM1308.96,554c.16,6.9-1.3,13.04-4.29,18.17-2.99,5.13-6.92,9.16-11.66,11.94-4.55,2.81-9.6,4.22-14.99,4.22-5.72,0-10.9-1.35-15.41-4.03l-.55-.34c-4.27-2.92-7.68-6.77-10.15-11.43-2.6-5.13-3.88-10.57-3.88-16.29s1.3-11.5,3.83-16.65c2.53-5.13,6.04-9.29,10.46-12.41l.26-.18c4.61-3.17,9.99-4.74,16.16-4.74,5.83,0,11.27,1.33,16.16,3.98l.13.08c3.7,1.93,7.21,4.4,10.46,7.34l3.46,3.1v17.25Z"/>
  <path fill="#3c3c3b" d="M1046.43,540.76l55.09-55.4.76-.76h-39.92l-53.4,55.95v-111.7h-32.92v186.64h32.92v-37.08l15.74-15.82,38.96,52.91h41.48l-58.71-74.74Z"/>
  <path fill="#3c3c3b" d="M1205.64,599.54c-2.32-4.37-4.24-9-5.73-13.95-3.54,1.28-7.68,1.9-12.36,1.9-5.88,0-10.38-1.64-13.48-4.92-2.94-3.46-4.4-8.12-4.4-14v-56.5h32.19v-27.48h-32.19v-35.52h-32.92v35.52h-29.59v27.48h29.59v65.06c0,8.64,1.8,16.16,5.44,22.56,3.62,6.22,8.54,11.06,14.76,14.5,6.4,3.46,13.48,5.2,21.26,5.2s14.18-1.04,19.7-3.12c5.67-2.08,10.1-4.71,13.2-8.02-1.9-2.68-3.7-5.49-5.34-8.48l-.13-.23Z"/>
  <path fill="#3c3c3b" d="M925,489.51s-.08-.05-.1-.05c-9.82-5.94-21.41-8.27-32.82-8.25-45.16-.88-75.08,45.94-64.28,87.6,13.62,54.7,88.63,67.85,123.46,25.42-7.08-3.84-13.16-9.46-18.19-15.77-24.72,17.12-66.21,16.8-74.09-18.17h94.81v-14c-.06-23.65-8.92-44.87-28.78-56.79ZM859.6,537.74c3.41-15.56,15.13-28.19,31.7-27.74,15.67-.07,30.58,10.74,30.84,27.74h-62.54Z"/>
  <path fill="#3c3c3b" d="M799.87,428.43c-1.9-1.15-3.9-1.95-6.04-2.39-9.84-2.44-20.86,3.31-24.49,12.7-5.03,11.81,3.55,25.95,16.06,28.08,10,2.02,20.35-4.22,23.84-13.64,3.7-9.21-.83-20.23-9.37-24.75Z"/>
  <path fill="#3c3c3b" d="M596.9,428.44c-1.9-1.15-3.9-1.95-6.04-2.39-9.84-2.44-20.86,3.31-24.49,12.7-5.03,11.81,3.55,25.95,16.06,28.08,10,2.02,20.35-4.22,23.84-13.64,3.7-9.21-.83-20.23-9.37-24.75Z"/>`;

const LOGO_PATHS_LIGHT = LOGO_PATHS_DARK
  .replace(/fill="#3c3c3b"/g, 'fill="#FBFAF6"')
  .replace(/fill="#FED36F"/g, 'fill="#FED36F"');

const NAV_HTML = `
<nav class="nav" id="nav">
  <div class="container">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo" aria-label="InjektaPV Home">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="420 320 1100 455" height="36" aria-hidden="true" focusable="false">
          ${LOGO_PATHS_DARK}
        </svg>
      </a>
      <button class="nav-hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="nav-links" role="list">
        <li><a href="/en-produkt.html">Product</a></li>
        <li><a href="/en-ueber-uns.html">About</a></li>
        <li class="lang-switch"><a href="#" id="lang-de-link">DE</a><span class="lang-sep">|</span><a href="/en-index.html" class="lang-active">EN</a></li>
        <li><a href="/en-kontakt.html" class="nav-cta">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="420 320 1100 455" height="30" aria-label="InjektaPV" focusable="false">
          ${LOGO_PATHS_LIGHT}
        </svg>
        <p>Power-to-Heat.<br>We know where excess solar power goes.</p>
      </div>
      <div class="footer-col">
        <h4>Product</h4>
        <ul>
          <li><a href="/en-produkt.html">Overview</a></li>
          <li><a href="/en/produkt.html#simplex">Simplex</a></li>
          <li><a href="/en/produkt.html#duplex">Duplex</a></li>
          <li><a href="/en/produkt.html#triplex">Triplex</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="/en-ueber-uns.html">About us</a></li>
          <li><a href="/en-ueber-uns.html#investoren">Investors</a></li>
          <li><a href="/en-kontakt.html">Contact</a></li>
            <li><a href="datenschutz.html">Privacy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Injekta PV GmbH · Filderstadt, Germany</span>
      <div class="footer-bottom-links">
        <a href="impressum.html">Imprint</a>
        <a href="datenschutz.html">Privacy</a>
      </div>
    </div>
  </div>
</footer>`;

(function () {
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;
  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }));
  }

  // Seitenspezifischer Sprachwechsler
  var pageMapEN = {
    'en-index.html':       'index.html',
    'en-produkt.html':     'produkt.html',
    'en-ueber-uns.html':   'ueber-uns.html',
    'en-kontakt.html':     'kontakt.html',
    'en-konfigurator.html':'konfigurator.html',
  };
  var curPageEN = window.location.pathname.split('/').pop() || 'en-index.html';
  var deLink = document.getElementById('lang-de-link');
  if (deLink) deLink.href = '/' + (pageMapEN[curPageEN] || 'index.html');

})();
