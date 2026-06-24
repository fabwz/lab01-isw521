// Se ejecuta antes del DOMContentLoaded para evitar el flash de tema incorrecto (FOIT)
(function () {
  var saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
  }
})();

var translations = {
  es: {
    skipLink: 'Saltar al contenido',
    navProblems: 'Problemas', navProducts: 'Productos', navWhy: 'Por qué elegirnos',
    navBrands: 'Marcas', navBranches: 'Sucursales', navFaq: 'FAQ', navContactLink: 'Contacto', navContact: 'Contactar',
    heroTitle: '¿Check Engine o pérdida de potencia? <span class="text-accent">Te ayudamos a identificar la pieza correcta.</span>',
    heroSubtitle: 'Sensores, bobinas y motores nuevos con diagnóstico gratuito, asesoría técnica especializada y envíos a todo Costa Rica.',
    heroCta: 'Hablar con un asesor', heroCtaSecondary: 'Ver productos →',
    trustDiag: 'Diagnóstico gratuito', trustAdvice: 'Asesoría técnica real', trustShipping: 'Envío nacional',
    statClients: 'Clientes atendidos', statBranches: 'Sucursales en Costa Rica', statYears: 'Años de experiencia',
    problemTitle: '¿Tu vehículo presenta alguno de estos síntomas?',
    problemSubtitle: 'Estos problemas son más comunes de lo que pensás y pueden requerir diagnóstico técnico.',
    prob1Title: 'Check Engine encendido', prob1Desc: 'La luz de Check Engine puede indicar fallas en sensores, bobinas o el sistema de inyección.',
    prob2Title: 'Pérdida de potencia', prob2Desc: 'El vehículo no acelera como antes, tiembla o pierde fuerza en pendientes.',
    prob3Title: 'Alto consumo de combustible', prob3Desc: 'Un sensor defectuoso puede causar que el motor consuma más combustible del necesario.',
    prob4Title: 'Fallas de encendido', prob4Desc: 'El motor no arranca correctamente o presenta encendido irregular y vibraciones.',
    problemSolution: 'En MotorSensor te ayudamos a <strong>identificar la falla exacta</strong> y encontrar la pieza correcta para tu marca y modelo.',
    problemCta: 'Describir mi problema',
    productsTitle: 'Nuestros productos',
    productsSubtitle: 'Repuestos originales y genéricos certificados para múltiples marcas y modelos.',
    prod1Title: 'Sensores automotrices', prod1Desc: 'Oxígeno, CKP, CMP, MAF, MAP, ABS, TPS, temperatura y más.',
    prod2Title: 'Bobinas de encendido', prod2Desc: 'Bobinas individuales, en bloque, bujías y cables de alta tensión.',
    prod3Title: 'Sistema de inyección', prod3Desc: 'Inyectores de combustible y componentes electrónicos del sistema.',
    prod4Title: 'Motores completos', prod4Desc: 'Motores nuevos de paquete con garantía de fábrica.',
    productsCta: 'Cotizar repuesto',
    featuresTitle: '¿Por qué elegir MotorSensor?',
    featuresSubtitle: 'No somos una tienda genérica de repuestos. Combinamos diagnóstico, asesoría y soluciones reales.',
    feat1Title: 'Diagnóstico gratuito', feat1Desc: 'Escaneo computarizado sin costo al adquirir repuestos para identificar la falla exacta.',
    feat2Title: 'Asesoría técnica', feat2Desc: 'Te orientamos para que comprés la pieza correcta según tu marca, modelo y síntomas.',
    feat3Title: 'Envío nacional', feat3Desc: 'Enviamos repuestos a cualquier parte de Costa Rica.',
    feat4Title: 'Opciones para todo presupuesto', feat4Desc: 'Alternativas originales y genéricas certificadas para que eligás según tus posibilidades.',
    brandsTitle: 'Marcas compatibles',
    brandsSubtitle: 'Trabajamos con repuestos para las marcas más populares en Costa Rica.',
    branchesTitle: 'Nuestras sucursales',
    branchesSubtitle: 'Tres puntos de atención con asesoría técnica presencial.',
    hoursWeekday: 'Lun–Vie: 8:00 AM – 5:00 PM', hoursSat: 'Sáb: 8:00 AM – 12:00 PM', hoursSun: 'Dom: Cerrado',
    quoteTitle: 'Cotizá tu <span class="text-accent">repuesto</span>',
    quoteSubtitle: 'Completá el formulario y te contactamos con opciones compatibles para tu vehículo.',
    followUs: 'Síguenos',
    formName: 'Nombre', formPhone: 'Teléfono o WhatsApp', formBrand: 'Marca del vehículo',
    formModel: 'Modelo del vehículo', formYear: 'Año del vehículo',
    formMessage: 'Repuesto o problema que desea consultar', formBranch: 'Sucursal de preferencia',
    formBranchDefault: 'Seleccionar sucursal', formSubmit: 'Enviar cotización',
    faqTitle: 'Preguntas <span class="text-accent">frecuentes</span>',
    faqSubtitle: 'Resolvé tus dudas antes de contactarnos.', faqCta: 'Hablar con un asesor',
    faq1Q: '¿Cómo sé si la pieza es compatible con mi vehículo?',
    faq1A: 'Nuestro equipo de asesoría técnica verifica la compatibilidad según la marca, modelo y año de tu vehículo antes de realizar la venta. Solo necesitás escribirnos por WhatsApp con los datos de tu carro.',
    faq2Q: '¿Hacen envíos a mi zona?',
    faq2A: 'Sí, realizamos envíos a todo el territorio nacional de Costa Rica. Consultá por WhatsApp para conocer tiempos y costos de envío a tu ubicación.',
    faq3Q: '¿El diagnóstico tiene costo?',
    faq3A: 'El escaneo y diagnóstico computarizado es gratuito al adquirir repuestos en cualquiera de nuestras sucursales.',
    faq4Q: '¿Qué diferencia hay entre opciones originales y genéricas?',
    faq4A: 'Los repuestos originales son fabricados por la marca del vehículo, mientras que los genéricos certificados son de marcas alternas con estándares de calidad comprobados. Ambas opciones tienen garantía y nuestro equipo te asesora para elegir la mejor según tu presupuesto.',
    faq5Q: '¿Cómo puedo contactar la sucursal más cercana?',
    faq5A: 'Podés escribirnos directamente por WhatsApp a la sucursal de tu preferencia: San Carlos (+506 8447-8000), Pérez Zeledón (+506 8440-8000) o Naranjo (+506 8443-8000). También podés enviarnos un correo a <a href="mailto:motorsensorcr@gmail.com">motorsensorcr@gmail.com</a>.',
    footerDesc: 'Repuestos automotrices con diagnóstico gratuito, asesoría técnica y envío a todo Costa Rica.',
    footerContact: 'Contacto', footerHours: 'Horarios', footerSocial: 'Redes sociales',
    footerCopy: '© 2026 MotorSensor. Todos los derechos reservados.',
    a11yTitle: 'Accesibilidad', a11yFontSize: 'Tamaño de texto', a11yMode: 'Modo',
    a11yBrightness: 'Brillo', a11yLang: 'Idioma',
    themeDark: 'Modo oscuro', themeLight: 'Modo claro',
    langLabel: 'Español'
  },
  en: {
    skipLink: 'Skip to content',
    navProblems: 'Problems', navProducts: 'Products', navWhy: 'Why choose us',
    navBrands: 'Brands', navBranches: 'Locations', navFaq: 'FAQ', navContactLink: 'Contact', navContact: 'Contact',
    heroTitle: 'Check Engine or power loss? <span class="text-accent">We help you find the right part.</span>',
    heroSubtitle: 'New sensors, coils and engines with free diagnostics, specialized technical advice and shipping across Costa Rica.',
    heroCta: 'Talk to an advisor', heroCtaSecondary: 'View products →',
    trustDiag: 'Free diagnostics', trustAdvice: 'Real technical advice', trustShipping: 'Nationwide shipping',
    statClients: 'Customers served', statBranches: 'Locations in Costa Rica', statYears: 'Years of experience',
    problemTitle: 'Is your vehicle showing any of these symptoms?',
    problemSubtitle: 'These problems are more common than you think and may require technical diagnosis.',
    prob1Title: 'Check Engine light on', prob1Desc: 'The Check Engine light may indicate sensor, coil or injection system failures.',
    prob2Title: 'Power loss', prob2Desc: 'The vehicle doesn\'t accelerate like before, shakes or loses power on inclines.',
    prob3Title: 'High fuel consumption', prob3Desc: 'A faulty sensor can cause the engine to consume more fuel than necessary.',
    prob4Title: 'Ignition failures', prob4Desc: 'The engine doesn\'t start correctly or shows irregular ignition and vibrations.',
    problemSolution: 'At MotorSensor we help you <strong>identify the exact fault</strong> and find the right part for your make and model.',
    problemCta: 'Describe my problem',
    productsTitle: 'Our products',
    productsSubtitle: 'Original and certified generic parts for multiple makes and models.',
    prod1Title: 'Automotive sensors', prod1Desc: 'Oxygen, CKP, CMP, MAF, MAP, ABS, TPS, temperature and more.',
    prod2Title: 'Ignition coils', prod2Desc: 'Individual coils, coil packs, spark plugs and high-tension cables.',
    prod3Title: 'Injection system', prod3Desc: 'Fuel injectors and electronic system components.',
    prod4Title: 'Complete engines', prod4Desc: 'New factory-packaged engines with factory warranty.',
    productsCta: 'Quote a part',
    featuresTitle: 'Why choose MotorSensor?',
    featuresSubtitle: 'We\'re not a generic parts store. We combine diagnostics, advice and real solutions.',
    feat1Title: 'Free diagnostics', feat1Desc: 'Free computerized scanning when purchasing parts to identify the exact fault.',
    feat2Title: 'Technical advice', feat2Desc: 'We guide you to buy the right part for your make, model and symptoms.',
    feat3Title: 'Nationwide shipping', feat3Desc: 'We ship parts anywhere in Costa Rica.',
    feat4Title: 'Options for every budget', feat4Desc: 'Original and certified generic alternatives so you can choose according to your budget.',
    brandsTitle: 'Compatible brands',
    brandsSubtitle: 'We work with parts for the most popular brands in Costa Rica.',
    branchesTitle: 'Our locations',
    branchesSubtitle: 'Three service points with in-person technical advice.',
    hoursWeekday: 'Mon–Fri: 8:00 AM – 5:00 PM', hoursSat: 'Sat: 8:00 AM – 12:00 PM', hoursSun: 'Sun: Closed',
    quoteTitle: 'Quote your <span class="text-accent">part</span>',
    quoteSubtitle: 'Fill out the form and we\'ll contact you with compatible options for your vehicle.',
    followUs: 'Follow us',
    formName: 'Name', formPhone: 'Phone or WhatsApp', formBrand: 'Vehicle make',
    formModel: 'Vehicle model', formYear: 'Vehicle year',
    formMessage: 'Part or problem you want to inquire about', formBranch: 'Preferred location',
    formBranchDefault: 'Select location', formSubmit: 'Send quote request',
    faqTitle: 'Frequently <span class="text-accent">asked questions</span>',
    faqSubtitle: 'Resolve your doubts before contacting us.', faqCta: 'Talk to an advisor',
    faq1Q: 'How do I know if the part is compatible with my vehicle?',
    faq1A: 'Our technical advisory team verifies compatibility based on your vehicle\'s make, model and year before completing the sale. Just message us on WhatsApp with your vehicle details.',
    faq2Q: 'Do you ship to my area?',
    faq2A: 'Yes, we ship nationwide across Costa Rica. Contact us via WhatsApp for shipping times and costs to your location.',
    faq3Q: 'Does the diagnosis have a cost?',
    faq3A: 'Computerized scanning and diagnosis is free when purchasing parts at any of our locations.',
    faq4Q: 'What\'s the difference between original and generic options?',
    faq4A: 'Original parts are made by the vehicle manufacturer, while certified generics are from alternative brands with proven quality standards. Both options have warranty and our team advises you to choose the best one for your budget.',
    faq5Q: 'How can I contact the nearest location?',
    faq5A: 'You can message us directly on WhatsApp at your preferred location: San Carlos (+506 8447-8000), Pérez Zeledón (+506 8440-8000) or Naranjo (+506 8443-8000). You can also email us at <a href="mailto:motorsensorcr@gmail.com">motorsensorcr@gmail.com</a>.',
    footerDesc: 'Automotive parts with free diagnostics, technical advice and shipping across Costa Rica.',
    footerContact: 'Contact', footerHours: 'Hours', footerSocial: 'Social media',
    footerCopy: '© 2026 MotorSensor. All rights reserved.',
    a11yTitle: 'Accessibility', a11yFontSize: 'Text size', a11yMode: 'Mode',
    a11yBrightness: 'Brightness', a11yLang: 'Language',
    themeDark: 'Dark mode', themeLight: 'Light mode',
    langLabel: 'English'
  }
};

function applyLanguage(lang) {
  var t = translations[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  var langLabelEl = document.getElementById('a11y-lang-label');
  if (langLabelEl) langLabelEl.textContent = t.langLabel;
  var themeLabel = document.getElementById('a11y-theme-label');
  if (themeLabel) {
    var isLight = document.body.classList.contains('light-mode');
    themeLabel.textContent = isLight ? t.themeLight : t.themeDark;
  }
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', function () {
  // Toggle de tema — ahora integrado en el panel de accesibilidad
  var themeToggle = document.getElementById('a11y-theme-toggle');
  var themeLabel = document.getElementById('a11y-theme-label');

  function updateThemeToggle() {
    var isLight = document.body.classList.contains('light-mode');
    var lang = localStorage.getItem('lang') || 'es';
    var t = translations[lang];
    if (themeLabel) themeLabel.textContent = isLight ? t.themeLight : t.themeDark;
    if (themeToggle) themeToggle.setAttribute('aria-label', isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
  }
  updateThemeToggle();

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      document.body.classList.toggle('light-mode');
      var isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateThemeToggle();
    });
  }

  // Lucide reemplaza los placeholders data-lucide por SVGs inline
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Idioma — aplica preferencia guardada y registra toggle
  var savedLang = localStorage.getItem('lang') || 'es';
  applyLanguage(savedLang);

  var langToggle = document.getElementById('a11y-lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      var current = localStorage.getItem('lang') || 'es';
      var next = current === 'es' ? 'en' : 'es';
      applyLanguage(next);
    });
  }

  // Panel de accesibilidad — tamaño de texto y brillo con persistencia en localStorage
  var a11yToggle = document.querySelector('.a11y-toggle');
  var a11yPanel = document.getElementById('a11y-panel');

  if (a11yToggle && a11yPanel) {
    var fontSize = parseInt(localStorage.getItem('fontSize'), 10) || 16;
    var brightness = parseFloat(localStorage.getItem('brightness')) || 1;

    function applyA11y() {
      fontSize = Math.max(14, Math.min(22, fontSize));
      brightness = Math.max(0.7, Math.min(1.3, parseFloat(brightness.toFixed(2))));
      document.documentElement.style.fontSize = fontSize + 'px';
      document.getElementById('page-wrapper').style.filter = 'brightness(' + brightness + ')';
      document.getElementById('a11y-fontsize-value').textContent = fontSize + 'px';
      document.getElementById('a11y-brightness-value').textContent = Math.round(brightness * 100) + '%';
      localStorage.setItem('fontSize', fontSize);
      localStorage.setItem('brightness', brightness);
    }

    applyA11y();

    a11yToggle.addEventListener('click', function () {
      var isOpen = a11yPanel.hidden;
      a11yPanel.hidden = !isOpen;
      a11yToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    a11yPanel.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-action]');
      if (!btn) return;
      var action = btn.getAttribute('data-action');
      if (action === 'fontSize-increase') fontSize += 2;
      else if (action === 'fontSize-decrease') fontSize -= 2;
      else if (action === 'brightness-increase') brightness += 0.1;
      else if (action === 'brightness-decrease') brightness -= 0.1;
      applyA11y();
    });
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

  // Scroll spy — resalta el enlace del navbar según la sección visible
  var navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  var sectionEls = [];
  navLinks.forEach(function (link) {
    var id = link.getAttribute('href').substring(1);
    var section = document.getElementById(id);
    if (section) sectionEls.push(section);
  });

  var heroEl = document.getElementById('hero');

  function clearActive() {
    navLinks.forEach(function (link) { link.classList.remove('nav-active'); });
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        if (entry.target.id === 'hero') {
          clearActive();
        } else {
          navLinks.forEach(function (link) {
            link.classList.toggle('nav-active', link.getAttribute('href') === '#' + entry.target.id);
          });
        }
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });

  if (heroEl) observer.observe(heroEl);
  sectionEls.forEach(function (el) { observer.observe(el); });
});
