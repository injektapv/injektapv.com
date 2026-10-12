// ============================================================
// InjektaPV – Rechtliche Pflichthinweise an Formularen
// Ergänzt automatisch auf JEDER Seite:
//   1. Datenschutzhinweis + Link unter jedem Formular (Art. 13 DSGVO)
//   2. Einwilligungs-Checkbox bei Wartelisten-/Newsletter-Formularen
//      (§ 7 Abs. 2 Nr. 2 UWG, Nachweispflicht Art. 7 Abs. 1 DSGVO)
// Wird von components.js bzw. en-components.js geladen.
// ============================================================

(function () {
  var isEN = document.documentElement.lang === 'en';

  var T = isEN ? {
    privacy: 'Your data is used solely to process your enquiry. Details: ',
    privacyLink: 'Privacy Policy',
    privacyHref: '/datenschutz.html',
    consent: 'I agree to be contacted by Injekta PV GmbH by email about the market launch. I can withdraw this consent at any time. ',
    consentLink: 'Privacy Policy',
    consentError: 'Please confirm the consent checkbox.'
  } : {
    privacy: 'Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Einzelheiten in der ',
    privacyLink: 'Datenschutzerklärung',
    privacyHref: '/datenschutz.html',
    consent: 'Ich willige ein, von der Injekta PV GmbH per E-Mail über die Markteinführung informiert zu werden. Diese Einwilligung kann ich jederzeit widerrufen. Näheres in der ',
    consentLink: 'Datenschutzerklärung',
    consentError: 'Bitte bestätigen Sie die Einwilligung.'
  };

  // ---- Styles ----
  var css = document.createElement('style');
  css.textContent =
    '.legal-consent{display:flex;gap:.6rem;align-items:flex-start;margin:1rem 0 .25rem;text-align:left;}' +
    '.legal-consent input[type=checkbox]{margin-top:.2rem;width:16px;height:16px;flex:0 0 auto;accent-color:#333;cursor:pointer;}' +
    '.legal-consent label{font-size:.78rem;line-height:1.5;color:#505050;font-weight:400;margin:0;cursor:pointer;}' +
    '.legal-consent a{color:inherit;text-decoration:underline;}' +
    '.legal-privacy-note{font-size:.72rem;line-height:1.5;color:#888;margin-top:.75rem;text-align:center;}' +
    '.legal-privacy-note a{color:inherit;text-decoration:underline;}' +
    '.legal-consent-error{font-size:.75rem;color:#b91c1c;margin-top:.35rem;display:none;}';
  document.head.appendChild(css);

  function esc(s) { return s; }

  document.querySelectorAll('form').forEach(function (form) {
    if (form.dataset.legalDone) return;
    form.dataset.legalDone = '1';

    // Versteckte Hilfsformulare (z.B. Umfrage-Datensammler) überspringen
    if (form.offsetParent === null && form.style.display === 'none') return;

    var action = (form.getAttribute('action') || '');
    var html = form.innerHTML;

    // Warteliste erkennen: Formular sammelt E-Mail für spätere Benachrichtigung
    var isWaitlist = /warteliste|waitlist|vormerken|Wartelisten/i.test(html) ||
                     /vormerken|waitlist/i.test(form.id || '') ||
                     form.id === 'wl-form' || form.id === 'hl-form';

    if (isWaitlist) {
      var id = 'legal-consent-' + Math.random().toString(36).slice(2, 8);
      var wrap = document.createElement('div');
      wrap.className = 'legal-consent';
      wrap.innerHTML =
        '<input type="checkbox" id="' + id + '" name="einwilligung_werbung" value="erteilt">' +
        '<label for="' + id + '">' + esc(T.consent) +
        '<a href="' + T.privacyHref + '" target="_blank" rel="noopener">' + T.consentLink + '</a>.</label>';

      var err = document.createElement('div');
      err.className = 'legal-consent-error';
      err.textContent = T.consentError;

      // Möglichst direkt über dem Absende-Button bzw. über dem Kleingedruckten platzieren
      var anchor = form.querySelector('.waitlist-note, .form-note, p:last-of-type');
      var btn = form.querySelector('button[type=submit], button:not([type])');
      if (anchor && anchor.parentNode === form) {
        form.insertBefore(wrap, anchor);
        form.insertBefore(err, anchor);
      } else if (btn && btn.parentNode === form) {
        form.insertBefore(wrap, btn);
        form.insertBefore(err, btn);
      } else {
        form.appendChild(wrap);
        form.appendChild(err);
      }

      // Absenden blockieren, solange nicht eingewilligt wurde
      form.addEventListener('submit', function (e) {
        var cb = document.getElementById(id);
        if (cb && !cb.checked) {
          e.preventDefault();
          e.stopImmediatePropagation();
          err.style.display = 'block';
          cb.focus();
          return false;
        }
        err.style.display = 'none';
      }, true);

    } else {
      // Normale Formulare: Pflichtinformation nach Art. 13 DSGVO
      if (/datenschutz|privacy/i.test(html)) return; // Hinweis schon vorhanden
      var note = document.createElement('p');
      note.className = 'legal-privacy-note';
      note.innerHTML = esc(T.privacy) +
        '<a href="' + T.privacyHref + '" target="_blank" rel="noopener">' + T.privacyLink + '</a>.';
      form.appendChild(note);
    }
  });
})();
