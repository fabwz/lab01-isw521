// Se ejecuta antes del DOMContentLoaded para evitar el flash de tema incorrecto (FOIT)
(function () {
  var saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  // Toggle de tema — persiste en localStorage para recordar preferencia entre sesiones
  var themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    function updateToggle() {
      var isLight = document.body.classList.contains('light-mode');
      themeToggle.setAttribute('aria-label', isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
    }
    updateToggle();

    themeToggle.addEventListener('click', function () {
      document.body.classList.toggle('light-mode');
      var isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateToggle();
    });
  }

  // Lucide reemplaza los placeholders data-lucide por SVGs inline
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Menú móvil — el overlay se crea dinámicamente para no ensuciar el HTML
  var menuToggle = document.querySelector('.menu-toggle');
  var mainNav = document.querySelector('.main-nav');

  var overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  document.body.appendChild(overlay);

  function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  function openMenu() {
    menuToggle.setAttribute('aria-expanded', 'true');
    mainNav.classList.add('is-open');
    overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) { closeMenu(); } else { openMenu(); }
    });

    overlay.addEventListener('click', closeMenu);

    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // Formulario de cotización — arma un mensaje con los datos del vehículo y abre WhatsApp
  var quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = quoteForm.elements['name'].value.trim();
      var phone = quoteForm.elements['phone'].value.trim();
      var brand = quoteForm.elements['vehicle-brand'].value.trim();
      var model = quoteForm.elements['vehicle-model'].value.trim();
      var year = quoteForm.elements['vehicle-year'].value.trim();
      var message = quoteForm.elements['message'].value.trim();
      var branchSelect = quoteForm.elements['branch'];
      var branch = branchSelect.value;
      var branchName = branchSelect.options[branchSelect.selectedIndex].text;

      if (!name || !phone || !brand || !model || !year || !message || !branch) {
        return;
      }

      // Se construye el texto pre-armado para que el asesor reciba toda la info de una vez
      var text = 'Hola, soy ' + name + ' (' + phone + '). '
        + 'Tengo un ' + brand + ' ' + model + ' ' + year + '. '
        + 'Consulta: ' + message + '. '
        + 'Sucursal: ' + branchName + '.';

      var url = 'https://wa.me/' + branch + '?text=' + encodeURIComponent(text);

      // Guarda la última cotización en localStorage (requisito de Web Storage del laboratorio)
      var formData = new FormData(quoteForm);
      var data = {};
      formData.forEach(function (value, key) {
        data[key] = value;
      });
      localStorage.setItem('motorsensor-last-quote', JSON.stringify(data));

      window.open(url, '_blank');
    });
  }

  // FAQ — Agrega aria-expanded y aria-controls a cada <details> para lectores de pantalla
  document.querySelectorAll('.faq-item').forEach(function (item, index) {
    var summary = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');
    var answerId = 'faq-answer-' + index;
    answer.id = answerId;
    summary.setAttribute('aria-expanded', item.open ? 'true' : 'false');
    summary.setAttribute('aria-controls', answerId);
    item.addEventListener('toggle', function () {
      summary.setAttribute('aria-expanded', item.open ? 'true' : 'false');
    });
  });

  // Limpieza de flag temporal de envío (previene falsos positivos al recargar)
  if (localStorage.getItem('motorsensor-form-submitted') === 'true') {
    localStorage.removeItem('motorsensor-form-submitted');
  }
});
