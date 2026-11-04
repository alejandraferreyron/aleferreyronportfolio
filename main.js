/* ==========================================================
   Alejandra — Portfolio
   Edit CONTACT and the content arrays below to update the site.
   ========================================================== */

/* ---- 1. Contact details -------------------------------- */
const CONTACT = {
  name: "Alejandra Ferreyro",
  email: "aleferreyron.ugc@gmail.com",
  phone: "+525510946330",          // digits with country code; also used for WhatsApp
  phoneDisplay: "+52 55 1094 6330",
  instagram: "https://www.instagram.com/aleferreyron/",   // optional, e.g. "https://instagram.com/yourhandle"
  tiktok: "https://www.tiktok.com/@aleferreyron",      // optional
};

/* ---- 2. Image aspect ratios (width / height) ----------- */
const AR = {"exp-bali-03":0.6672,"exp-bali-08":1.5004,"exp-bali-49":0.6665,"exp-bali-52":1.5,"korb-007":1.7778,"korb-008":1.7778,"korb-009":0.5625,"korb-010":1.7778,"korb-011":0.5625,"korb-012":0.5625,"selini-n066":1.5004,"selini-n113":0.6665,"selini-n163":0.6665,"selini-n058":0.6665,"selini-n154":0.6665,"selini-n057":0.6665,"selini-n040":1.5004,"selini-n005":0.6665,"selini-n075":1.5004,"exp-fil-04":1.7778,"exp-fil-10":0.5625,"exp-fil-13":0.5625,"exp-fil-18":1.5004,"exp-fil-31":1.5004,"exp-bali-05":1.5004,"exp-bali-67":1.5004,"korb-013":0.5625,"korb-017":1.7778,"korb-019":0.6663,"korb-025":0.6663,"korb-027":0.6663,"frances-005":0.6663,"frances-009":0.6663,"frances-011":0.6663,"frances-012":0.6663,"frances-014":0.6663,"frances-015":0.6663,"frances-017":0.6663,"frances-019":0.6663,"coco-001":1.4911,"coco-007":1.4911,"coco-012":1.5009,"coco-026":1.5009,"coco-029":0.6663,"coco-033":0.6663,"coco-047":1.5009,"coco-056":1.5009,"coco-059":0.6669,"coco-061":0.6669,"coco-062":0.6669,"coco-066":1.4995,"drone-aura-001":0.5625,"drone-aura-007":0.5625,"drone-aura-010":1.7778,"drone-aura-012":1.7778,"drone-aura-015":0.5625,"drone-aura-019":0.5625,"drone-korb-001":0.5625,"drone-korb-005":1.7778,"drone-korb-008":1.7778,"drone-korb-012":0.5625,"drone-korb-035":0.5625,"frances-001":0.6663,"frances-010":0.6663,"frances-013":0.6663,"frances-016":0.6663,"korb-018":1.5009,"korb-021":0.6663,"korb-023":0.6663,"korb-026":0.6663,"korb-030":0.6663,"korb-032":0.6663,"rest-001":0.6663,"rest-002":1.5009,"rest-004":0.6663,"rest-005":1.5009,"rest-006":0.6663,"rest-008":0.6663,"rest-010":0.6663,"rest-011":0.6663,"rest-013":0.6663,"rest-014":0.6663,"rest-016":1.5009,"rest-017":0.6663,"rest-018":1.5009,"selini-002":0.6663,"selini-005":0.6663,"selini-013":0.6663,"selini-026":1.5009,"selini-029":0.6663,"selini-031":0.6663,"selini-046":0.6663,"selini-054":1.4995,"selini-056":0.6663,"selini-069":0.6663,"selini-077":0.6663,"selini-080":0.6663,"selini-083":0.6663,"villa-001":0.6663,"villa-007":0.6663,"villa-009":0.6663,"villa-013":0.6663,"villa-016":0.6663,"villa-026":0.6663,"villa-027":0.6663,"villa-031":0.6663,"villa-033":0.6663,"villa-036":0.6663,"villa-040":0.6663,"villa-050":1.5009,"villa-053":0.6663};

/* ---- 3. Reels ------------------------------------------ */
const REEL = {
  korbekwan: { src: "korbekwan", title: "Adventure Remote Hotel reel", client: "Korbekwan Homestay, Gam" },
  selini2:   { src: "selini-2",  title: "Hotel Suite reel",            client: "Selini Hills, Komodo" },
  frances:   { src: "frances",   title: "POV Hotel & Travel Activities reel", client: "Frances Homestay, Mansuar" },
  villa:     { src: "villa-blanca", title: "Cinematic Lifestyle reel", client: "Villa Blanca, Canggu" },
  selini1:   { src: "selini-1",  title: "Couples Getaway reel",        client: "Selini Hills, Komodo" },
};

const REELS = {
  hotels: [REEL.korbekwan, REEL.selini2, REEL.frances, REEL.villa, REEL.selini1],
  experiences: [
    { src: "bali-nomads",      title: "Manta Ray Dive reel",          client: "Bali Nomads, Bali" },
    { src: "tribe-banua",      title: "Island Expedition reel",       client: "Tribe Banua, Philippines" },
    { src: "dewa-1",           title: "Dive Center Experience reel",   client: "Dewa United Scuba Diving, Gili Trawangan" },
    { src: "dewa-2",           title: "Night Dive reel",               client: "Dewa United Scuba Diving, Gili Trawangan" },
    { src: "dewa-3",           title: "Underwater Discovery reel",     client: "Dewa United Scuba Diving, Gili Trawangan" },
    { src: "phuket-elephants", title: "Ethical Wildlife Experience reel", client: "Phuket Elephant Sanctuary, Phuket" },
  ],
  travel: [
    { src: "airhint",  title: "App Review & Tutorial reel",       client: "AirHint" },
    { src: "booking",  title: "Booking Tips & Hacks reel",        client: "Booking.com" },
    { src: "workaway", title: "Work & Travel Storytelling reel",  client: "Workaway" },
    { src: "nomadtable", title: "Travel Community App reel",    client: "NomadTable" },
  ],
  voia: [
    { src: "voia-intro", title: "Brand Intro film",   client: "VOIA" },
    { src: "voia-bali",  title: "Website Hero film",  client: "VOIA" },
  ],
};

/* ---- 4. Galleries --------------------------------------
   Each gallery is a list of groups: { label, note, images[] } */
const GALLERIES = {
  hotelPhoto: [
    { label: "COCO Lifestyle Resort", images: ["coco-001","coco-062","coco-061","coco-012","coco-059","coco-033","coco-047","coco-029","coco-056","coco-026"] },
    { label: "Selini Hills", note: "Komodo, Indonesia", images: ["selini-n066","selini-n113","selini-n163","selini-n058","selini-n154","selini-n057","selini-n040","selini-n005","selini-n075"] },
    { label: "Korbekwan Homestay", note: "Gam, Raja Ampat", images: ["korb-023","korb-008","korb-017","korb-019","korb-011","korb-032","korb-018","korb-007","korb-021","korb-013","korb-009","korb-025","korb-026","korb-010","korb-027","korb-012"] },
  ],
  villa: [
    { label: "Villa Blanca", note: "Canggu, Bali", images: ["villa-031","villa-027","villa-001","villa-033","villa-050","villa-013","villa-016","villa-036","villa-026","villa-007","villa-040","villa-009","villa-053"] },
  ],
  restaurant: [
    { images: ["rest-010","rest-001","rest-016","rest-002","rest-011","rest-004","rest-013","rest-005","rest-018","rest-006","rest-014","rest-008","rest-017"] },
  ],
  experiences: [
    { images: ["exp-fil-10","exp-bali-08","pro/uw-022","exp-fil-18","exp-bali-49","pro/uw-035","exp-bali-05","exp-fil-13","pro/uw-005","exp-bali-03","exp-fil-31","exp-bali-52","exp-bali-67"] },
  ],
};

/* ---- 5. Professional photography ------------------------
   Each client opens its own view (#photography/<key>).
   A category with `children` shows tiles that open each child
   (#photography/clients/<child-key>). Images live in assets/img/pro/. */
const PRO_AR = {"uw-001":0.75,"uw-002":1.3333,"uw-003":1.3333,"uw-004":0.75,"uw-005":1.3333,"uw-006":1.3333,"uw-007":0.75,"uw-008":0.6665,"uw-009":0.6665,"uw-010":0.6665,"uw-011":1.5004,"uw-012":1.5004,"uw-013":1.5004,"uw-014":1.5004,"uw-015":1.5004,"uw-016":1.4993,"uw-017":1.4993,"uw-018":1.4993,"uw-019":0.6665,"uw-020":1.5004,"uw-021":1.5004,"uw-022":1.5004,"uw-023":1.5004,"uw-024":1.5004,"uw-025":0.6665,"uw-026":0.6665,"uw-027":0.6665,"uw-028":1.5004,"uw-029":1.5,"uw-030":1.5,"uw-031":1.5,"uw-032":1.5,"uw-033":1.5,"uw-034":1.5004,"uw-035":0.6665,"uw-036":1.5004,"uw-037":0.6665,"uw-038":0.6665,"uw-039":0.6665,"uw-040":0.6665,"uw-041":0.6515,"uw-042":0.6655,"uw-043":0.571,"uw-044":0.6665,"uw-045":0.6665,"uw-046":0.667,"zentir-004":1.5009,"zentir-005":1.5009,"zentir-010":1.5009,"zentir-014":0.6663,"zentir-021":1.5009,"zentir-022":1.5009,"zentir-025":1.5009,"zentir-036":1.5009,"zentir-037":1.5009,"zentir-041":1.5009,"zentir-048":1.5009,"zentir-053":1.4995,"zentir-057":1.5009,"zentir-058":1.5009,"zentir-060":0.6663,"voia-fil-001":1.7778,"voia-bali-hq05":1.5004,"voia-fil-002":0.6665,"voia-komodo-005":1.5009,"voia-fil-008":0.5625,"voia-bali-002":1.7798,"voia-fil-009":1.5004,"voia-komodo-006":1.5004,"voia-fil-038":0.6665,"voia-bali-hq67":1.5004,"voia-komodo-007":1.7778,"voia-fil-011":1.5004,"voia-bali-008":1.5009,"voia-fil-018":1.5004,"voia-komodo-010":1.5004,"voia-fil-022":1.7778,"voia-bali-012":1.5004,"voia-komodo-021":0.6665,"voia-fil-021":1.5004,"voia-bali-014":1.7778,"voia-fil-007":1.7778,"voia-komodo-023":1.5004,"voia-bali-017":1.5023,"voia-fil-026":1.7778,"voia-komodo-028":1.7778,"voia-bali-032":1.5009,"voia-fil-033":1.4358,"voia-komodo-037":1.5004,"voia-bali-hq58":0.6665,"voia-komodo-046":1.5004,"voia-cover":1.0,"events-001":0.6663,"events-002":1.5009,"events-003":1.5009,"events-004":1.5009,"events-005":0.6663,"events-006":1.5009,"events-007":1.3367,"events-009":1.5009,"events-010":1.5009,"events-011":1.4967,"events-012":1.4967,"events-013":1.5009,"events-014":1.5009,"events-015":1.5009,"events-016":1.5009,"events-018":1.5009,"events-019":1.5009,"events-020":1.5009,"lulu-001":0.6663,"lulu-002":1.5009,"lulu-003":0.6663,"lulu-004":1.5009,"lulu-005":1.5009,"lulu-006":1.5009,"lulu-007":0.6663,"lulu-008":1.5009,"lulu-009":0.6663,"lulu-010":1.5009,"lulu-011":1.5009,"lulu-012":0.6663,"lulu-014":0.6663,"lulu-015":0.6663,"portraits-001":0.6663,"portraits-002":0.5619,"portraits-003":0.6663,"portraits-004":0.6663,"portraits-005":0.5619,"portraits-006":0.6663,"portraits-007":0.6663,"portraits-008":0.5619,"portraits-009":0.5619,"portraits-010":0.6663,"portraits-011":0.6663,"portraits-012":0.5619,"portraits-013":0.6663,"portraits-014":0.6663,"sanpiago-001":1.4981,"sanpiago-002":0.6681,"sanpiago-004":1.4981,"sanpiago-005":0.6681,"sanpiago-006":1.4981,"sanpiago-007":1.4967,"sanpiago-008":0.6681,"sanpiago-010":0.6681,"sanpiago-013":1.4981,"sanpiago-015":1.4981,"sanpiago-017":1.5009,"sanpiago-018":1.4981,"sanpiago-020":0.6681,"sanpiago-022":0.6681,"sanpiago-024":0.6681,"sanpiago-025":1.4981,"trips-001":1.5009,"trips-002":1.5009,"trips-003":0.6656,"trips-004":1.5009,"trips-005":1.5009,"trips-006":1.5009,"trips-007":1.5009,"trips-008":1.5009,"trips-009":1.5009,"trips-010":0.6663,"trips-011":1.5009,"trips-012":1.5009,"trips-013":1.5009,"trips-015":1.5009,"trips-016":0.6663,"trips-017":1.5009,"trips-018":0.6663,"trips-019":1.5009,"trips-020":1.5009,"yupick-001":1.5009,"yupick-002":1.5009,"yupick-003":0.6663,"yupick-004":0.6663,"yupick-005":1.5009,"yupick-006":1.5009,"yupick-007":1.5009,"yupick-008":1.5009,"yupick-009":0.6663,"yupick-010":0.7994,"yupick-011":0.7994,"yupick-012":1.5009,"yupick-013":0.6663,"yupick-014":0.6663,"yupick-015":0.6663,"yupick-016":0.6663,"yupick-017":1.5009,"zentir-002":1.5009,"zentir-003":1.5009,"zentir-006":0.6663,"zentir-009":1.5009,"zentir-012":1.5009,"zentir-015":0.6663,"zentir-017":1.5009,"zentir-018":0.6663,"zentir-023":1.5009,"zentir-029":1.5009,"zentir-033":0.6663,"zentir-034":1.5009,"zentir-039":0.6663,"zentir-043":1.5009,"zentir-046":1.5009,"zentir-055":1.5009,"zentir-056":1.4011,"zentir-059":1.5009,"zentir-063":0.6663};
for (const k in PRO_AR) AR[`pro/${k}`] = PRO_AR[k];
const pro = (prefix, nums) => nums.map((n) => `pro/${prefix}-${String(n).padStart(3, "0")}`);

const PRO = {
  "uw-photography": {
    title: "UW Photography", note: "Underwater & freediving",
    cover: "pro/uw-041",
    intro: "Underwater photography from reefs, wrecks, cenotes and open blue: marine life, freedivers and the light that only exists below the surface.",
    images: pro("uw", [30,  1,  41,  35,  20,  11,  16,  27,  28,  4,  39,  9,  37,  2,  19,  43,  31,  24,  34,  21,  12,  5,  45,  14,  25,  29,  8,  7,  40,  38,  17,  33,  36,  3,  22,  42,  13,  15,  26,  23,  10,  46,  6,  44,  18,  32]),
  },
  "voia": {
    title: "VOIA", note: "Travel brand · Bali, Komodo & Philippines", cover: "pro/voia-cover",
    reels: "voia",
    images: ["pro/voia-fil-001", "pro/voia-bali-hq05", "pro/voia-fil-002", "pro/voia-komodo-005", "pro/voia-fil-008", "pro/voia-bali-002", "pro/voia-fil-009", "pro/voia-komodo-006", "pro/voia-fil-038", "pro/voia-bali-hq67", "pro/voia-komodo-007", "pro/voia-fil-011", "pro/voia-bali-008", "pro/voia-fil-018", "pro/voia-komodo-010", "pro/voia-fil-022", "pro/voia-bali-012", "pro/voia-komodo-021", "pro/voia-fil-021", "pro/voia-bali-014", "pro/voia-fil-007", "pro/voia-komodo-023", "pro/voia-bali-017", "pro/voia-fil-026", "pro/voia-komodo-028", "pro/voia-bali-032", "pro/voia-fil-033", "pro/voia-komodo-037", "pro/voia-bali-hq58", "pro/voia-komodo-046"],
  },
  "san-piago-hospitales": {
    title: "San Piago Hospitales", note: "Interiors & brand photography", cover: "pro/sanpiago-002",
    images: pro("sanpiago", [1, 2, 4, 5, 6, 7, 8, 10, 13, 15, 17, 18, 20, 22, 24, 25]),
  },
  "grupo-zentir": {
    title: "Grupo Zentir", note: "Outdoor group experiences", cover: "pro/zentir-015",
    images: pro("zentir", [2, 3, 4, 5, 6, 9, 10, 12, 14, 15, 17, 18, 21, 22, 23, 25, 29, 33, 34, 36, 37, 39, 41, 43, 46, 48, 53, 55, 56, 57, 58, 59, 60, 63]),
  },
  "yupick-cafe": {
    title: "Yupick Café", note: "Community event", cover: "pro/yupick-001",
    images: pro("yupick", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]),
  },
  "lululemon-x-zentir": {
    title: "Lululemon x Zentir", note: "Brand collaboration", cover: "pro/lulu-003",
    images: pro("lulu", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15]),
  },
  "ie-university": {
    title: "IE University", note: "Academic events", cover: "pro/ie-cover",
    images: pro("events", [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20]),
  },
  gtrips: {
    title: "GTrips", note: "Group travel", cover: "pro/trips-001",
    images: pro("trips", [1, 2, 3, 4, 5, 6, 7, 8, 9]),
  },
  portraits: {
    title: "Portraits", note: "Headshots & personal brands",
    cover: "pro/portraits-002", coverPos: "50% 12%",
    intro: "Professional portraits and headshots with a clean, timeless look for teams, founders and personal brands.",
    images: pro("portraits", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
  },
};

/* ==========================================================
   Rendering
   ========================================================== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

const ICON = {
  play: '<svg class="i-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>',
  pause: '<svg class="i-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h3.5v16H7zM13.5 4H17v16h-3.5z"/></svg>',
  muted: '<svg class="i-off" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9l5 6M22 9l-5 6"/></svg>',
  sound: '<svg class="i-on" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"/></svg>',
};

function altFor(name, label) {
  return label ? `${label} — photography by Alejandra` : "Photography by Alejandra";
}

function groupsHTML(groups) {
  return groups.map((g) => `
      <div class="group reveal">
        ${g.label ? `<h3 class="group__label">${g.label}${g.note ? ` <small>${g.note}</small>` : ""}</h3>` : ""}
        <div class="jg">
          ${g.images.map((n) => `
            <button class="jg__item" style="--ar:${AR[n] || 1.5}" data-full="assets/img/${n}.jpg" data-caption="${g.caption || (g.label ? g.label + (g.note ? " · " + g.note : "") : "")}" aria-label="Open image${g.label || g.caption ? ": " + (g.label || g.caption) : ""}">
              <img src="assets/img/${n}.jpg" alt="${altFor(n, g.label || g.caption)}" loading="lazy" decoding="async" data-loading>
            </button>`).join("")}
        </div>
      </div>`).join("");
}

function tileHTML(href, img, label, note, pos) {
  return `<a class="tile" href="${href}">
    <img src="assets/img/${img}.jpg" alt="" loading="lazy" decoding="async"${pos ? ` style="object-position:${pos}"` : ""}>
    <span>${label}${note ? `<small>${note}</small>` : ""}</span>
  </a>`;
}

/* Professional photography: category index + one view per category / client */
function renderPro() {
  const host = $("[data-pro-views]");
  if (!host) return;
  $("[data-pro-tiles]").innerHTML = Object.entries(PRO)
    .map(([k, c]) => tileHTML(`#photography/${k}`, c.cover, c.title, c.note, c.coverPos)).join("");

  const views = [];
  const crumbs = (trail) => `<nav class="crumbs" aria-label="Breadcrumb">
      <a href="#photography">Photography</a>
      ${trail.map(([href, t], i) => i === trail.length - 1
        ? `<span aria-current="page">${t}</span>` : `<a href="${href}">${t}</a>`).join("")}
    </nav>`;
  const head = (trail, title, intro) => `
      <header class="view-head">
        ${crumbs(trail)}
        <h2 class="title">${title}</h2>
        ${intro ? `<p class="view-head__intro">${intro}</p>` : ""}
      </header>`;

  for (const [k, c] of Object.entries(PRO)) {
    const trail = [[`#photography/${k}`, c.title]];
    if (c.children) {
      views.push(`<div class="pro-view wrap" data-view="${k}" hidden>
        ${head(trail, c.title, c.intro)}
        <div class="tiles${Object.keys(c.children).length === 4 ? " tiles--4" : ""}">${Object.entries(c.children)
          .map(([ck, cc]) => tileHTML(`#photography/${k}/${ck}`, cc.cover, cc.title, cc.note)).join("")}</div>
      </div>`);
      for (const [ck, cc] of Object.entries(c.children)) {
        views.push(`<div class="pro-view wrap" data-view="${k}/${ck}" hidden>
          ${head([...trail, [`#photography/${k}/${ck}`, cc.title]], cc.title, cc.note)}
          ${cc.reels ? `<div class="reels reels--wide" data-reels="${cc.reels}"></div>` : ""}
          <div data-lb-scope>${groupsHTML(cc.groups ? cc.groups.map((g) => ({ ...g, caption: `${cc.title} · ${g.label}` })) : [{ caption: cc.title, images: cc.images }])}</div>
          ${backHTML(`#photography/${k}`, `All ${c.title.toLowerCase()}`)}
        </div>`);
      }
    } else {
      views.push(`<div class="pro-view wrap" data-view="${k}" hidden>
        ${head(trail, c.title, c.intro || c.note)}
        ${c.reels ? `<div class="reels reels--wide" data-reels="${c.reels}"></div>` : ""}
        <div data-lb-scope>${groupsHTML([{ caption: c.title, images: c.images }])}</div>
        ${backHTML("#photography", "All clients")}
      </div>`);
    }
  }
  host.innerHTML = views.join("");
}
function backHTML(href, label) {
  return `<p class="view-back"><a href="${href}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>${label}</a></p>`;
}

function showProView(path) {
  const views = $$(".pro-view");
  const target = views.find((v) => v.dataset.view === path) || views.find((v) => v.dataset.view === "");
  views.forEach((v) => { v.hidden = v !== target; });
  observeReveals(target);
  const titled = target.dataset.view ? $(".title", target).textContent : "";
  document.title = `${titled ? titled + " — " : ""}Photography — Alejandra Ferreyro`;
  return target;
}

function renderGalleries() {
  $$("[data-gallery]").forEach((host) => {
    host.innerHTML = groupsHTML(GALLERIES[host.dataset.gallery] || []);
  });
  $$(".jg__item img").forEach((img) => {
    const done = () => img.removeAttribute("data-loading");
    img.complete ? done() : img.addEventListener("load", done, { once: true });
  });
}

function renderReels() {
  $$("[data-reels]").forEach((host) => {
    const list = REELS[host.dataset.reels] || [];
    host.dataset.count = list.length;
    host.innerHTML = list.map((r) => `
      <figure class="reel reveal is-paused">
        <div class="reel__frame">
          <video src="assets/video/${r.src}.mp4" poster="assets/poster/${r.src}.jpg" muted loop playsinline preload="none"></video>
          <button class="reel__btn" aria-label="Play ${r.title}"><span class="reel__icon">${ICON.pause}${ICON.play}</span></button>
          <button class="reel__sound" aria-label="Turn sound on" aria-pressed="false">${ICON.muted}${ICON.sound}</button>
          <div class="reel__progress" aria-hidden="true"><i></i></div>
        </div>
        <figcaption><b>${r.title}</b><span>Client: ${r.client}</span></figcaption>
      </figure>`).join("");
  });

  $$(".reel").forEach((reel) => {
    const v = $("video", reel);
    const playBtn = $(".reel__btn", reel);
    const soundBtn = $(".reel__sound", reel);
    const bar = $(".reel__progress i", reel);
    const title = $("b", reel).textContent;
    reel._userPaused = false;

    const sync = () => {
      reel.classList.toggle("is-paused", v.paused);
      playBtn.setAttribute("aria-label", `${v.paused ? "Play" : "Pause"} ${title}`);
    };
    v.addEventListener("play", sync);
    v.addEventListener("pause", sync);
    v.addEventListener("timeupdate", () => {
      bar.style.transform = `scaleX(${v.duration ? v.currentTime / v.duration : 0})`;
    });

    playBtn.addEventListener("click", () => {
      if (v.paused) { reel._userPaused = false; v.play().catch(() => {}); }
      else { reel._userPaused = true; v.pause(); }
    });

    soundBtn.addEventListener("click", () => {
      const turnOn = v.muted;
      // only one reel plays sound at a time
      if (turnOn) $$(".reel video").forEach((o) => { if (o !== v) { o.muted = true; o.closest(".reel").classList.remove("is-unmuted"); $(".reel__sound", o.closest(".reel")).setAttribute("aria-pressed", "false"); } });
      v.muted = !turnOn;
      reel.classList.toggle("is-unmuted", turnOn);
      soundBtn.setAttribute("aria-pressed", String(turnOn));
      soundBtn.setAttribute("aria-label", turnOn ? "Turn sound off" : "Turn sound on");
      if (turnOn && v.paused) { reel._userPaused = false; v.play().catch(() => {}); }
    });
  });

  // autoplay muted when in view (skip if reduced motion)
  if (!reduceMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        const v = $("video", target);
        if (isIntersecting && !target._userPaused) {
          if (v.preload === "none") v.preload = "auto";
          v.play().catch(() => {});
        } else if (!isIntersecting && !v.paused) {
          v.pause();
        }
      });
    }, { threshold: 0.45 });
    $$(".reel").forEach((r) => io.observe(r));
  }
}

const SOCIAL_ICONS = {
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
};
function renderContact() {
  const host = $("[data-contact]");
  const links = [];
  if (CONTACT.email) links.push(`<a class="btn btn--solid" href="mailto:${CONTACT.email}">Email me</a>`);
  if (CONTACT.phone) links.push(`<a class="btn" href="https://wa.me/${CONTACT.phone.replace(/\D/g, "")}" target="_blank" rel="noopener">WhatsApp</a>`);
  host.innerHTML = links.join("");
  host.hidden = links.length === 0;
  const details = $("[data-contact-details]");
  details.innerHTML = [
    CONTACT.name && `<span class="contact__name">${CONTACT.name}</span>`,
    CONTACT.email && `<a href="mailto:${CONTACT.email}">${CONTACT.email}</a>`,
    CONTACT.phone && `<a href="tel:${CONTACT.phone}">${CONTACT.phoneDisplay || CONTACT.phone}</a>`,
  ].filter(Boolean).join("");
  const socials = $("[data-socials]");
  socials.innerHTML = [["instagram", "Instagram"], ["tiktok", "TikTok"]]
    .filter(([k]) => CONTACT[k])
    .map(([k, label]) => `<a class="socials__link" href="${CONTACT[k]}" target="_blank" rel="noopener" aria-label="${label} @aleferreyron">${SOCIAL_ICONS[k]}</a>`).join("");
  socials.hidden = !socials.innerHTML;
  $("[data-year]").textContent = new Date().getFullYear();
}

/* ==========================================================
   Reveal on scroll
   ========================================================== */
let revealIO;
function observeReveals(scope = document) {
  if (reduceMotion || !("IntersectionObserver" in window)) {
    $$(".reveal", scope).forEach((el) => el.classList.add("is-in"));
    return;
  }
  revealIO ||= new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); revealIO.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });
  $$(".reveal:not(.is-in)", scope).forEach((el) => revealIO.observe(el));
}

/* ==========================================================
   Router  (#home, #hotels, #hotels/villa, #contact …)
   ========================================================== */
const PAGES = $$(".page").map((p) => p.dataset.page);
let current = null;

function setActiveNav(page) {
  $$(".menu a[data-link]").forEach((a) => {
    if (a.getAttribute("href") === `#${page}`) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}

function route() {
  const hash = decodeURIComponent(location.hash.slice(1)) || "home";
  const [page, ...rest] = hash.split("/");
  const sub = rest.join("/");

  if (page === "photography") {
    const wasHere = current === "photography";
    if (!wasHere) {
      $$(".page").forEach((p) => { p.hidden = p.dataset.page !== page; });
      $$(".page[hidden] video").forEach((v) => v.pause());
      current = page;
      setActiveNav(page);
    }
    const view = showProView(sub);
    if (sub) {
      // jump straight to the view content (below the hero)
      requestAnimationFrame(() => {
        const navH = nav.offsetHeight;
        window.scrollTo({ top: view.getBoundingClientRect().top + window.scrollY - navH, behavior: "instant" });
        view.querySelector(".title")?.setAttribute("tabindex", "-1");
        view.querySelector(".title")?.focus({ preventScroll: true });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
      $("#main").focus({ preventScroll: true });
    }
    if (lb.open) lb.close();
    closeMenu();
    updateNav();
    return;
  }

  if (PAGES.includes(page)) {
    if (page !== current) {
      $$(".page").forEach((p) => { p.hidden = p.dataset.page !== page; });
      // pause videos on hidden pages
      $$(".page[hidden] video").forEach((v) => v.pause());
      current = page;
      setActiveNav(page);
      const t = PAGES.find((p) => p === page);
      document.title = page === "home" ? "Alejandra Ferreyro — Content Creator & Photographer"
        : `${$(`[data-page="${t}"] h1`).textContent} — Alejandra Ferreyro`;
      if (!sub) {
        window.scrollTo({ top: 0, behavior: "instant" });
        $("#main").focus({ preventScroll: true });
      }
      observeReveals($(`[data-page="${page}"]`));
    }
    if (sub) {
      const el = document.getElementById(`${page}-${sub}`);
      if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }));
    }
  } else {
    // in-page anchor (e.g. #contact, #home-intro): keep current page
    if (!current) { $$(".page").forEach((p) => { p.hidden = p.dataset.page !== "home"; }); current = "home"; observeReveals(); }
    const el = document.getElementById(hash);
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }));
  }
  if (lb.open) lb.close();
  closeMenu();
  updateNav();
}

/* ==========================================================
   Nav
   ========================================================== */
const nav = $("#nav");
const toggle = $(".nav__toggle");
function updateNav() { nav.classList.toggle("is-solid", window.scrollY > 40 || nav.classList.contains("menu-open")); }
function closeMenu() {
  nav.classList.remove("menu-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open menu");
  document.body.style.overflow = "";
}
toggle.addEventListener("click", () => {
  const open = !nav.classList.contains("menu-open");
  nav.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.style.overflow = open ? "hidden" : "";
  updateNav();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("menu-open")) { closeMenu(); updateNav(); toggle.focus(); } });
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) { requestAnimationFrame(() => { updateNav(); ticking = false; }); ticking = true; }
}, { passive: true });

/* ==========================================================
   Lightbox
   ========================================================== */
const lb = $(".lightbox");
const lbImg = $("img", lb);
const lbCap = $("figcaption", lb);
let lbList = [], lbIndex = 0, lbReturn = null;

function lbShow(i) {
  lbIndex = (i + lbList.length) % lbList.length;
  const item = lbList[lbIndex];
  lbImg.src = item.dataset.full;
  lbImg.alt = $("img", item).alt;
  lbCap.textContent = `${item.dataset.caption ? item.dataset.caption + "  ·  " : ""}${lbIndex + 1} / ${lbList.length}`;
}
document.addEventListener("click", (e) => {
  const item = e.target.closest(".jg__item");
  if (!item) return;
  lbList = $$(".jg__item", item.closest("[data-gallery], [data-lb-scope]"));
  lbReturn = item;
  lbShow(lbList.indexOf(item));
  lb.showModal();
  document.body.style.overflow = "hidden";
});
$(".lightbox__prev").addEventListener("click", () => lbShow(lbIndex - 1));
$(".lightbox__next").addEventListener("click", () => lbShow(lbIndex + 1));
$(".lightbox__close").addEventListener("click", () => lb.close());
lb.addEventListener("click", (e) => { if (e.target === lb || e.target.tagName === "FIGURE") lb.close(); });
lb.addEventListener("close", () => { document.body.style.overflow = ""; lbReturn?.focus({ preventScroll: true }); });
lb.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") lbShow(lbIndex - 1);
  if (e.key === "ArrowRight") lbShow(lbIndex + 1);
});
// swipe on touch devices (buttons remain as the primary control)
let tx = null;
lb.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", (e) => {
  if (tx === null) return;
  const dx = e.changedTouches[0].clientX - tx;
  if (Math.abs(dx) > 50) lbShow(lbIndex + (dx < 0 ? 1 : -1));
  tx = null;
});

/* ==========================================================
   Init
   ========================================================== */
renderPro();
renderGalleries();
renderReels();
renderContact();
window.addEventListener("hashchange", route);
route();
