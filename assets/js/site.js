// Small enhancements. The site works without this file; it adds the
// theme toggle, mobile menu, rail arrows, writing filter and search.
(function () {
  var root = document.documentElement;

  // Theme toggle ----------------------------------------------------------
  var toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) toggle.addEventListener('click', function () {
    var current = root.dataset.theme || 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Mobile menu -----------------------------------------------------------
  var navBtn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (navBtn && nav) navBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    navBtn.setAttribute('aria-expanded', open);
  });

  // Rail arrows -----------------------------------------------------------
  document.querySelectorAll('.section').forEach(function (section) {
    var rail = section.querySelector('[data-rail]');
    if (!rail) return;
    function step(dir) {
      var card = rail.firstElementChild;
      var w = card ? card.getBoundingClientRect().width + 20 : 300;
      rail.scrollBy({ left: dir * w, behavior: 'smooth' });
    }
    var prev = section.querySelector('[data-rail-prev]');
    var next = section.querySelector('[data-rail-next]');
    if (prev) prev.addEventListener('click', function () { step(-1); });
    if (next) next.addEventListener('click', function () { step(1); });
  });

  // Blog tag filter (supports ?tag=name links) -------------------------
  var filter = document.querySelector('[data-filter]');
  if (filter) {
    var cards = document.querySelectorAll('[data-filter-target] .card');
    var empty = document.querySelector('.empty');
    function apply(tag) {
      var shown = 0;
      filter.querySelectorAll('.chip').forEach(function (c) {
        c.setAttribute('aria-pressed', c.dataset.tag === tag);
      });
      cards.forEach(function (card) {
        var match = !tag || (' ' + card.dataset.tags + ' ').indexOf(' ' + tag + ' ') > -1;
        card.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown > 0;
    }
    filter.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      apply(chip.dataset.tag);
      var url = new URL(location);
      if (chip.dataset.tag) url.searchParams.set('tag', chip.dataset.tag); else url.searchParams.delete('tag');
      history.replaceState(null, '', url);
    });
    var initial = new URLSearchParams(location.search).get('tag');
    if (initial) apply(initial.toLowerCase());
  }

  // Search ----------------------------------------------------------------
  var dialog = document.getElementById('search');
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var index = null;
  function openSearch() {
    if (!dialog || !dialog.showModal) return;
    dialog.showModal();
    input.focus();
    if (!index) fetch(window.SEARCH_INDEX).then(function (r) { return r.json(); })
      .then(function (d) { index = d; run(); }).catch(function () { index = []; });
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function run() {
    var q = input.value.trim().toLowerCase();
    if (!q || !index) { results.innerHTML = ''; return; }
    var hits = index.filter(function (d) {
      return (d.title + ' ' + (d.tags || []).join(' ') + ' ' + d.text).toLowerCase().indexOf(q) > -1;
    }).slice(0, 8);
    results.innerHTML = hits.length
      ? hits.map(function (d) { return '<li><a href="' + esc(d.url) + '">' + esc(d.title) + '<small>' + esc(d.type) + '</small></a></li>'; }).join('')
      : '<li class="muted" style="padding:.6rem .75rem">No results</li>';
  }
  document.querySelectorAll('[data-search-open]').forEach(function (b) { b.addEventListener('click', openSearch); });
  if (input) input.addEventListener('input', run);
  if (dialog) dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
  });
})();
