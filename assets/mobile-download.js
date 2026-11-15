/* Botón de descarga Android independiente del montaje de React. */
(function () {
  'use strict';

  var apkUrl = 'https://www.mediafire.com/file/72y0kenrs4ih8ww/Mutodex.apk/file';

  function addDownloadButton() {
    if (document.getElementById('mobile-apk-download')) return;

    var link = document.createElement('a');
    link.id = 'mobile-apk-download';
    link.className = 'mobile-apk-cta';
    link.href = apkUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'Descargar MUTODEX para Android en formato APK');

    var icon = document.createElement('span');
    icon.className = 'mobile-apk-cta__icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '↓';

    var copy = document.createElement('span');
    copy.className = 'mobile-apk-cta__copy';

    var title = document.createElement('strong');
    title.textContent = 'Descargar MUTODEX';

    var subtitle = document.createElement('small');
    subtitle.textContent = 'Android · Noticias, guías y novedades';

    var tag = document.createElement('span');
    tag.className = 'mobile-apk-cta__tag';
    tag.textContent = 'APK';

    copy.appendChild(title);
    copy.appendChild(subtitle);
    link.appendChild(icon);
    link.appendChild(copy);
    link.appendChild(tag);
    document.body.appendChild(link);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addDownloadButton, { once: true });
  } else {
    addDownloadButton();
  }
})();
