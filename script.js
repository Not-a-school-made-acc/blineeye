/* ===== THE TRUE BLIND-EYE – FINAL FIXED script.js (with Hacks/Tools) ===== */
// ──────── Watermark dl ────────
(() => {
  const allowed = ['localhost', '127.0.0.1', 'vb-16530979.codehs.me'];
  const host = location.hostname.toLowerCase();
  const ok = allowed.some(d => host === d || host.endsWith('.' + d));
  if (!ok) {
    document.documentElement.innerHTML = `
      <body style="margin:0;background:#000;color:red;font-family:Creepster,sans-serif;text-align:center;padding-top:15vh;">
        <h1>this was made by shaptz</h1>
        <p>This site only works on <strong>vb-16530979.codehs.me</strong></p>
        <p><a href="https://vb-16530979.codehs.me/" style="color:#ff5555;">Go back</a></p>
      </body>`;
    throw new Error('Domain lock activated');
  }
})();

// ──────── p5.js CANVAS (EYE + PARTICLES) ────────
let particles = [];
function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  const elt = canvas.elt;
  document.body.appendChild(elt);
  elt.style.position = 'fixed';
  elt.style.top = '0';
  elt.style.left = '0';
  elt.style.width = '100vw';
  elt.style.height = '100vh';
  elt.style.zIndex = '-1';
  elt.style.pointerEvents = 'none';
  elt.id = 'canvas';
  document.addEventListener('fullscreenchange', () => {
    document.getElementById('home-button').hidden = !document.fullscreenElement;
  });
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  const c = document.getElementById('canvas');
  if (c) {
    c.style.position = 'fixed';
    c.style.top = '0';
    c.style.left = '0';
    c.style.width = '100vw';
    c.style.height = '100vh';
    c.style.zIndex = '-1';
    c.style.pointerEvents = 'none';
  }
}
function draw() {
  clear();
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].isFinished()) particles.splice(i, 1);
  }
  if (frameCount % 3 === 0 && particles.length < 150) {
    if (random() < 0.7) {
      particles.push(new Particle(height));
      if (random() < 0.5) particles.push(new Particle(height));
    } else {
      particles.push(new Particle());
    }
  }
  const eyeX = width / 2, eyeY = height / 2;
  fill(255);
  beginShape();
  curveVertex(eyeX - 75, eyeY);
  curveVertex(eyeX - 75, eyeY);
  curveVertex(eyeX, eyeY - 37.5);
  curveVertex(eyeX + 75, eyeY);
  curveVertex(eyeX + 75, eyeY);
  curveVertex(eyeX, eyeY + 37.5);
  curveVertex(eyeX - 75, eyeY);
  curveVertex(eyeX - 75, eyeY);
  endShape(CLOSE);
  fill(0);
  const offsetX = (mouseX - eyeX) / 10;
  const offsetY = (mouseY - eyeY) / 10;
  const pupilX = eyeX + constrain(offsetX, -50, 50);
  const pupilY = eyeY + constrain(offsetY, -25, 25);
  ellipse(pupilX, pupilY, 30, 30);
}
class Particle {
  constructor(y = random(height * 0.4, height)) {
    this.x = random(0, width);
    this.y = y;
    this.vx = random(-0.5, 0.5);
    this.vy = random(-2, -0.5);
    this.alpha = 255;
    this.size = map(y, height * 0.4, height, 3, 7);
    this.fadeRate = y > height * 0.8 ? 0.5 : y > height * 0.6 ? 1 : 2;
  }
  update() { this.x += this.vx; this.y += this.vy; this.alpha -= this.fadeRate; }
  show() { noStroke(); fill(255, 0, 0, this.alpha); ellipse(this.x, this.y, this.size); }
  isFinished() { return this.alpha <= 0; }
}

// ──────── SOURCES & GAMES ────────
let currentSource = null;
const sources = {
  gnmath: {
    name: "GN-Math",
    url: "https://cdn.jsdelivr.net/gh/gn-math/assets@main/zones.json",
    coverURL: "https://cdn.jsdelivr.net/gh/gn-math/covers@main",
    htmlURL: "https://cdn.jsdelivr.net/gh/gn-math/html@main",
    games: []
  },
  popular: {
    name: "Popular/Requested",
    games: [ 
      { id: 89979, name: "Bacon May Die", _gnmathId: 268 },
      { id: 89980, name: "FNF Vs. Sonic.EXE", _gnmathId: 601 },
      { id: 89981, name: "Solitaire", author: "Shaptz", authorLink: "https://", url: "https://vb-16530979.codehs.me/sol.html", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmbK7C9BY9viPWF6UkUD-aC7eIc7IqGqalw&s" },
      { id: 89982, name: "Earn to die", author: "Shaptz", authorLink: "https://", url: "https://vb-16530979.codehs.me/etd.html", cover: "https://m.media-amazon.com/images/I/91DY8sO4+sL.png" },
      { id: 89983, name: "CloverHeart", author: "Shaptz", authorLink: "https://", url: "https://vb-16530979.codehs.me/chl.html", cover: "https://codehs.com/uploads/a0d1fa49f57fa034fcf3a50725382437" },
      { id: 89984, name: "Friday Night Crunchin", author: "?", authorLink: "https://", url: "https://vb-16530979.codehs.me/fnfc.html", cover: "https://m.gjcdn.net/game-header/950/681150-qaxkyiqu-v4.jpg" },
      { id: 89985, name: "Friday Night Funkin' SMB. Funk mix", author: "?", authorLink: "https://", url: "https://vb-16530979.codehs.me/fnfsm.html", cover: "https://i.ytimg.com/vi/1bx75XLpxFc/maxresdefault.jpg" },
      { id: 89986, name: "FNF Dustin", author: "?", authorLink: "https://", url: "https://vb-16530979.codehs.me/dusten.html", cover: "https://i.ytimg.com/vi/WRAI5QDJ8F4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB-dDxDgQ1gF6BluHmAWijiOlIUDA" },
      { id: 89987, name: "Mortal kombat", author: "?", authorLink: "https://", url: "https://vb-16530979.codehs.me/mortalcombat.html", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Mortal_Kombat_Logo.svg/1200px-Mortal_Kombat_Logo.svg.png" },
      { id: 89988, name: "Pokemon Quetzal", author: "?", authorLink: "https://", url: "https://vb-16530979.codehs.me/pmq.html", cover: "https://lh4.googleusercontent.com/proxy/IauP0b7QPjrIQao02eYXUi-D2mN0HPwftyiyXuYglBbJGk4px8w7S6MNPTmcHrHu8QjhmrM9ZrCIznHoaisQxYiByENXx1l8L-vELejc08kc0jUIdKPnrveEAXMXxuoMse7ER88" },
      { id: 89989, name: "Ace Attorney", author: "?", authorLink: "https://", url: "https://vb-16530979.codehs.me/aa.html", cover: "https://upload.wikimedia.org/wikipedia/en/a/a9/PhoenixWrightTrilogy.png" },
      { id: 89990, name: "Super Mario World", author: "?", authorLink: "https://", url: "https://vb-16530979.codehs.me/smw.html", cover: "https://upload.wikimedia.org/wikipedia/en/3/32/Super_Mario_World_Coverart.png" },
      { id: 89991, name: "Paper Mario", author: "?", authorLink: "https://", url: "https://vb-16530979.codehs.me/pm.html", cover: "https://upload.wikimedia.org/wikipedia/en/6/61/Papermario.jpg" },
      { id: 89992, name: "Super Mario RPG", author: "?", authorLink: "https://", url: "https://vb-16530979.codehs.me/smapg.html", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdB3B0OO9F7rSBBzhX1_WMpjehIeF4cDdhdauW9iFu1bxOE_D_vI_QHfLY1FwdjaRYCY1&s=10" },
      { id: 89993, name: "Super Mario All Stars", author: "?", authorLink: "https://", url: "https://vb-16530979.codehs.me/smas.html", cover: "https://m.media-amazon.com/images/I/71+c09edRbL._AC_UF1000,1000_QL80_.jpg" },
      { id: 89994, name: "Mario's mystery meat", author: "?", authorLink: "https://", url: "https://vb-16530979.codehs.me/mmm.html", cover: "https://codehs.com/uploads/c0266d93e2229b2a5677d5cf82fb9dcb" },
      { id: 89995, name: "Mario and luigi superstar saga", author: "?", authorLink: "https://", url: "https://vb-16530979.codehs.me/malss.html", cover: "https://upload.wikimedia.org/wikipedia/en/6/63/MarioAndLuigiSuperstarSagaGBACoverArtUS.jpg" },
      { id: 89996, name: "Super mario 3", author: "?", authorLink: "https://", url: "https://vb-16530979.codehs.me/smb3.html", cover: "https://upload.wikimedia.org/wikipedia/en/a/a5/Super_Mario_Bros._3_coverart.png" },
      { id: 89997, name: "super Mario", _gnmathId: 508 },
      { id: 89998, name: "Mario combat", author: "?", authorLink: "https://", url: "https://vb-16530979.codehs.me/mcb.html", cover: "https://img.itch.zone/aW1nLzEyOTUwNjQzLnBuZw==/original/XKGFkS.png" },
      { id: 89999, name: "binding of isaac", author: "Edmund McMillen", authorLink: "https://", url: "https://vb-16530979.codehs.me/isic.html", cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/250900/capsule_616x353.jpg?t=1731977365" },
      { id: 90000, name: "Undertale", author: "Toby fox", authorLink: "https://", url: "https://vb-16530979.codehs.me/undtale.html", cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg?t=1579096091" },
      { id: 90001, name: "Deltarune", author: "Toby fox", authorLink: "https://", url: "https://vb-16530979.codehs.me/deltarune.html", cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1671210/capsule_616x353.jpg?t=1749252480" },
      { id: 90002, name: "Infinite craft", author: "Neal Agarwal", authorLink: "https://", url: "https://vb-16530979.codehs.me/novacraft.html", cover: "https://neal.fun/share-cards/infinite-craft.png" },
      { id: 90003, name: "Hollow knight", author: "Team cherry", authorLink: "https://", url: "https://vb-16530979.codehs.me/hk.html", cover: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51" },
      { id: 90004, name: "Baldi", _gnmathId: 466 },
      { id: 90005, name: "A Bite at Freddy's", _gnmathId: 258 },
      { id: 90006, name: "Five Nights at Freddy's", _gnmathId: 38 },
      { id: 90007, name: "Five Nights at Freddy's 2", _gnmathId: 39 },
      { id: 90008, name: "Five Nights at Freddy's 3", _gnmathId: 40 },
      { id: 90009, name: "Five Nights at Freddy's 4", _gnmathId: 41 },
      { id: 90010, name: "Five Nights at Freddy's 4: Halloween", _gnmathId: 428 },
      { id: 90011, name: "Five Nights at Freddy's: Pizza Simulator", _gnmathId: 191 },
      { id: 90012, name: "Five Nights at Freddy's: Sister Location", _gnmathId: 185 },
      { id: 90013, name: "Friday Night Funkin", _gnmathId: 8 },
      { id: 90014, name: "Fruit Ninja", _gnmathId: 261 },
      { id: 90015, name: "Raft", _gnmathId: 457 },
      { id: 90016, name: "Granny", _gnmathId: 90 },
      { id: 90017, name: "Retro Bowl", _gnmathId: 33 },
      { id: 90018, name: "Super Mario 64", _gnmathId: 588 },
      { id: 90019, name: "That's Not My Neighbor", _gnmathId: 216 },
      { id: 90020, name: "Undertale Yellow", _gnmathId: 456 },
      { id: 90021, name: "Deltatraveler", _gnmathId: 560 },
      { id: 90022, name: "Buckshot", _gnmathId: 205 },
      { id: 90023, name: "Bendy and the Ink Machine", _gnmathId: 215 },
      { id: 90024, name: "Cuphead", _gnmathId: 465 }
    ]
  }
};



// ──────── FAVORITES SYSTEM ────────
const FAVORITES_KEY = 'blindeye_favorites';

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
  } catch { return []; }
}
function saveFavorites(arr) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(arr));
}
function toggleFavorite(zone) {
  let favs = getFavorites();
  const id = zone.id || zone.url;
  if (favs.some(f => (f.id || f.url) === id)) {
    favs = favs.filter(f => (f.id || f.url) !== id);
  } else {
    favs.push(zone);
  }
  saveFavorites(favs);
}

// Add "Favorites" to sources
sources.favorites = {
  name: "Favorites",
  games: getFavorites()
};
// ──────── FULLSCREEN & SECTION LOADER ────────
function toggleFullscreen() {
  const iframe = document.getElementById('zoneFrame');
  if (iframe) {
    if (!document.fullscreenElement) iframe.requestFullscreen().catch(() => {});
    else document.exitFullscreen();
  }
}

function loadSection(section) {
  const content = document.getElementById('content');
  content.innerHTML = '<p id="allSummary" style="text-align:center;color:red;margin:10px 0;font-size:1.2em;text-shadow:0 0 5px red;"></p>';
  document.getElementById('home-button').hidden = true;
  document.getElementById('fullscreen-button').hidden = true;
  document.getElementById('games-credit').style.display = 'none';

  if (section === 'home') return;
  if (section === 'games') {
    showSourceSelector();
    return;
  }

  const sections = {
    credits: [
      { name: 'Site made by Shaptz (i love grok)', icon: 'https://i.ytimg.com/vi/mP8eOjNxXHc/mqdefault.jpg', url: 'http://retool.shaptz.surge.sh/', newTab: false },
      // { name: 'Our Partner: Story Network', icon: 'https://codehs.com/uploads/b68a3b678a2c55ac52778fc7e5b6bba3', url: 'https://storynetwork-16344479.codehs.me/', newTab: true }
    ],
    hacks: [
      {
        name: 'Socrative Quiz Viewer',
        icon: 'https://pbs.twimg.com/profile_images/1572252422516674560/NNtbkscV_400x400.png',
        url: 'https://codehs.com/sandbox/crimsonnarwhal3750/diddypy/run',
        newTab: true
      }
    ]
  };

  if (sections[section]) {
    sections[section].forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.icon}" alt="${item.name}"
             onerror="this.src='https://via.placeholder.com/200x140/300/fff?text=No+Image';">
        <p>${item.name}</p>
      `;
      card.onclick = () => {
        if (item.url) {
          window.open(item.url, item.newTab !== false ? '_blank' : '_self', 'noopener,noreferrer');
        }
      };
      content.appendChild(card);
    });
  }
}

// ──────── SOURCE SELECTOR & SEARCH (unchanged) ────────
function showSourceSelector() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <p id="allSummary" style="text-align:center;color:red;margin:10px 0;font-size:1.2em;text-shadow:0 0 5px red;"></p>
    <div id="source-selector" style="text-align:center; padding:40px 20px;">
      <h2 style="color:red; text-shadow:0 0 10px red; font-size:2em;">PLEASE SELECT A GAME SOURCE</h2>
     <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:20px; margin-top:30px;">
     <button class="source-btn" data-source="gnmath">GN-Math</button>
     <button class="source-btn" data-source="popular">Popular/Requested</button>
     <button class="source-btn" data-source="favorites">Favorites</button>
</div>

    </div>
  `;
  document.querySelectorAll('.source-btn').forEach(b => b.onclick = () => loadSource(b.dataset.source));
}

function addSearchBar() {
  const content = document.getElementById('content');
  let wrapper = document.getElementById('search-wrapper');
  if (wrapper) wrapper.remove();
  wrapper = document.createElement('div');
  wrapper.id = 'search-wrapper';
  wrapper.style.cssText = 'text-align:center; padding:15px 0; width:100%; max-width:800px; margin:0 auto;';
  wrapper.innerHTML = `
    <input type="text" id="game-search" placeholder="Search games..."
           style="width:100%; max-width:500px; padding:12px; font-size:1.2em; font-family:'Creepster',sans-serif;
                  border:2px solid red; border-radius:12px; background:#111; color:#fff;
                  box-shadow:0 0 15px red; outline:none;">
  `;
  content.insertBefore(wrapper, content.firstChild);
  document.getElementById('game-search').addEventListener('input', e => {
    const term = e.target.value.trim().toLowerCase();
    document.querySelectorAll('#games-grid .card').forEach(card => {
      const title = card.querySelector('p').textContent.toLowerCase();
      card.style.display = term === '' || title.includes(term) ? 'flex' : 'none';
    });
  });
}

// ──────── LOAD SOURCE + DISPLAY GAMES (unchanged) ────────
async function loadSource(key) {
  currentSource = sources[key];
  const content = document.getElementById('content');
  content.innerHTML = '<p id="allSummary" style="text-align:center;color:red;margin:10px 0;font-size:1.2em;text-shadow:0 0 5px red;"></p><div id="games-grid"></div>';
  if (key === 'gnmath') await loadGNMath();
  else if (key === 'popular') {
    await resolvePopularGames();
    displayZones(currentSource.games);
  } else displayZones(currentSource.games);
  document.getElementById('allSummary').textContent = `${currentSource.name} (${currentSource.games.length})`;
  document.getElementById('games-credit').style.display = 'block';
  addSearchBar();
}

async function loadGNMath() {
  try {
    const resp = await fetch(sources.gnmath.url + "?t=" + Date.now());
    const json = await resp.json();
    sources.gnmath.games = json;
    if (json[0]) json[0].featured = true;
    displayZones(json);
  } catch (e) {
    document.getElementById('games-grid').innerHTML = `<p style="color:red;text-align:center;">GN-Math failed to load.</p>`;
  }
}

async function resolvePopularGames() {
  if (!sources.gnmath.games.length) {
    try {
      const resp = await fetch(sources.gnmath.url + "?t=" + Date.now());
      sources.gnmath.games = await resp.json();
    } catch (e) { console.error(e); }
  }
  const gnById = {};
  sources.gnmath.games.forEach(g => gnById[g.id] = g);
  sources.popular.games = sources.popular.games.map(p => {
    if (p._gnmathId && gnById[p._gnmathId]) {
      const real = gnById[p._gnmathId];
      return { ...real, name: p.name || real.name, popularFeatured: true };
    }
    return p;
  }).filter(Boolean);
}

function displayZones(list) {
  const grid = document.getElementById('games-grid');
  grid.innerHTML = '';
  list.forEach(zone => {
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    const coverSrc = zone.cover
      ? (zone.cover.includes("{COVER_URL}")
          ? zone.cover.replace("{COVER_URL}", sources.gnmath.coverURL)
          : zone.cover)
      : "https://via.placeholder.com/200x200/300/fff?text=No+Image";
    img.dataset.src = coverSrc;
    img.alt = zone.name;
    img.loading = "lazy";
    img.className = "lazy-zone-img";
    const p = document.createElement('p');
    p.textContent = zone.name;
    card.appendChild(img);
card.appendChild(p);

// Heart button
const heart = document.createElement('div');
heart.style.cssText = `
  position: absolute; top: 8px; right: 8px; font-size: 1.4em; cursor: pointer;
  z-index: 2; background: rgba(0,0,0,0.6); border-radius: 50%; width: 34px; height: 34px;
  display: flex; align-items: center; justify-content: center; transition: all .2s;
`;
heart.innerHTML = getFavorites().some(f => (f.id || f.url) === (zone.id || zone.url)) ? '❤️' : '🤍';
heart.onclick = (e) => {
  e.stopPropagation();
  toggleFavorite(zone);
  sources.favorites.games = getFavorites();   // ← ADD THIS
  heart.innerHTML = getFavorites().some(f => (f.id || f.url) === (zone.id || zone.url)) ? '❤️' : '🤍';
  if (currentSource === sources.favorites) loadSource('favorites'); // refresh if you're on favorites tab
};
card.style.position = 'relative';
card.appendChild(heart);

card.onclick = () => openZone(zone);
grid.appendChild(card);

  });
  setupLazyLoading();
}

function setupLazyLoading() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const img = e.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy-zone-img');
        obs.unobserve(img);
      }
    });
  }, { rootMargin: "100px" });
  document.querySelectorAll('img.lazy-zone-img').forEach(i => obs.observe(i));
}

function openZone(zone) {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.style.textAlign = 'center';
  wrap.innerHTML = `
    <iframe id="zoneFrame"
      style="width:95vw;max-width:1600px;aspect-ratio:21/9;max-height:80vh;margin:20px auto;
             border:2px solid red;border-radius:10px;background:#000;box-shadow:0 0 30px red;"
      src="about:blank"></iframe>
    <p style="color:red;font-size:1.2em;text-shadow:0 0 5px red;">
      ${zone.name} by
      <a href="${zone.authorLink || '#'}" target="_blank" style="color:red;">
        ${zone.author || 'Unknown'}
      </a>
    </p>
  `;
  content.appendChild(wrap);
  const iframe = document.getElementById('zoneFrame');
  document.getElementById('home-button').hidden = false;
  document.getElementById('fullscreen-button').hidden = false;
  if (zone.url.startsWith('http')) {
    iframe.src = zone.url;
  } else {
    const url = zone.url
      .replace("{COVER_URL}", sources.gnmath.coverURL)
      .replace("{HTML_URL}", sources.gnmath.htmlURL);
    fetch(url + "?t=" + Date.now())
      .then(r => r.text())
      .then(html => {
        iframe.contentDocument.open();
        iframe.contentDocument.write(html);
        iframe.contentDocument.close();
      })
      .catch(() => { iframe.src = 'fallback.html'; });
  }
}

function loadContent(url) {
  const content = document.getElementById('content');
  content.innerHTML = `<iframe src="${url}" onerror="this.src='fallback.html'"
    style="width:100%;height:80vh;border:none;"></iframe>`;
  document.getElementById('home-button').hidden = false;
  document.getElementById('fullscreen-button').hidden = false;
}