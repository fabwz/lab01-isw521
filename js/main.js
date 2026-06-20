document.addEventListener('DOMContentLoaded', function () {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      mainNav.classList.toggle('is-open');
    });

    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
      });
    });
  }

  // Quote form submission
  var quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(quoteForm);
      var data = {};
      formData.forEach(function (value, key) {
        data[key] = value;
      });
      localStorage.setItem('motorsensor-last-quote', JSON.stringify(data));
      localStorage.setItem('motorsensor-form-submitted', 'true');
      quoteForm.reset();
    });
  }

  // Restore form submitted state
  if (localStorage.getItem('motorsensor-form-submitted') === 'true') {
    localStorage.removeItem('motorsensor-form-submitted');
  }
});
