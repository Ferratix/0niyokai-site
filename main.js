// ==========================
// Script principal 0niyokai
// ==========================

document.addEventListener("DOMContentLoaded", () => {
  // --- LECTEUR TWITCH (GitHub Pages + local) ---
  (function mountTwitch(){
    const holder = document.querySelector('.player-frame');
    if (!holder) return;

    const parents = [
      'localhost',         // tests en local
      '127.0.0.1',         // tests en local
      'ferratix.github.io' // domaine GitHub Pages
    ];

    const params = parents.map(p => `parent=${encodeURIComponent(p)}`).join('&');
    const url = `https://player.twitch.tv/?channel=0niyokai&${params}`;

    const iframe = document.createElement('iframe');
    iframe.allowFullscreen = true;
    iframe.frameBorder = '0';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = url;
    holder.appendChild(iframe);
  })();

  // --- Année auto footer ---
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Lien actif dans la nav ---
  (function setActiveNav(){
    const current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".site-nav a").forEach(a => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href === current) a.classList.add("active");
    });
  })();

  // --- Menu burger mobile ---
  (function mobileMenu(){
    const btn = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');
    if(!btn || !nav) return;
    btn.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  })();
});
