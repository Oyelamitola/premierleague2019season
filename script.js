(function () {
  var root = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Sticky nav border on scroll
  var nav = document.querySelector('.nav');
  var bar = document.getElementById('progress');
  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ')';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var menuBtn = document.getElementById('menuBtn');
  var links = document.getElementById('navlinks');
  function closeMenu() { links.classList.remove('is-open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  // Theme toggle (remembers the visitor's choice)
  document.getElementById('themeToggle').addEventListener('click', function () {
    var current = root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Liquid glass: a soft glare follows the pointer across glass cards (mouse/trackpad only)
  if (window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion) {
    var glassSel = '.quote, .post, .cert, .hero__card, .role, .case, .tool, .skillset, .cred, .now-card, .pipe, .now-stats li, .win, .article, .principles li, .stat';
    document.querySelectorAll(glassSel).forEach(function (el) {
      el.classList.add('glare-host');
      var g = document.createElement('span'); g.className = 'glare'; g.setAttribute('aria-hidden', 'true');
      el.appendChild(g);
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        el.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  // Reveal-on-scroll and number count-up
  if (!('IntersectionObserver' in window) || reduceMotion) return;
  root.classList.add('js');

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      // Drop the stagger delay once revealed so hover effects stay snappy.
      var t = entry.target; setTimeout(function () { t.style.removeProperty('--d'); }, 1300);
      var counter = entry.target.querySelector('[data-count]');
      if (counter) countUp(counter);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    // Stagger siblings so groups of cards flow in one after another.
    var sibs = Array.prototype.filter.call(el.parentNode.children, function (c) { return c.classList.contains('reveal'); });
    var i = sibs.indexOf(el);
    if (i > 0) el.style.setProperty('--d', Math.min(i * 90, 450) + 'ms');
    io.observe(el);
  });

  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var start = null, duration = 1400;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
})();
