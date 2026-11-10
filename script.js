/* BMO service catalog: add services/options here; the UI is generated from data. */
const BMO_CONFIG = {
  email: "hello@bmo.co.tz",
  services: [
    {
      id: "websites", number: "01", icon: "⌘", title: "Website design & development",
      short: "Websites", description: "Fast, responsive websites designed to build trust, tell your story, and turn visitors into customers.",
      searchTerms: ["website", "web design", "web development", "landing page", "ecommerce", "online store", "portfolio", "business website", "seo", "hosting", "firebase"],
      options: [
        { title: "Business website", icon: "⌘", tag: "WEB / 01", description: "A polished multi-page home for your company, services, and brand story." },
        { title: "E-commerce store", icon: "▤", tag: "WEB / 02", description: "A product-focused online shop built around browsing, trust, and conversion." },
        { title: "Landing page", icon: "↗", tag: "WEB / 03", description: "A focused campaign or launch page with a clear call to action." },
        { title: "Web application", icon: "▦", tag: "WEB / 04", description: "An interactive browser-based tool tailored to your users and workflow." },
        { title: "Portfolio website", icon: "◫", tag: "WEB / 05", description: "A memorable portfolio that presents your work with clarity and style." }
      ]
    },
    {
      id: "work-systems", number: "02", icon: "▦", title: "Work systems & software",
      short: "Work systems", description: "Custom digital systems that organize operations, reduce repetitive work, and make information easier to manage.",
      searchTerms: ["system", "software", "hospital", "healthcare", "clinic", "accounting", "school", "student management", "inventory", "hr", "payroll", "pos", "point of sale", "crm", "erp", "hotel", "pharmacy", "library", "logistics", "fleet", "booking", "church", "project management", "restaurant", "warehouse"],
      options: [
        { title: "Hospital management", icon: "✚", tag: "SYSTEM / 01", description: "Coordinate patient records, appointments, billing, pharmacy, and daily facility workflows." },
        { title: "Accounting & finance", icon: "▤", tag: "SYSTEM / 02", description: "Track income, expenses, invoices, payments, reports, and financial records." },
        { title: "School management", icon: "⌂", tag: "SYSTEM / 03", description: "Manage students, admissions, attendance, fees, exams, results, and parent communication." },
        { title: "Inventory & stock", icon: "▥", tag: "SYSTEM / 04", description: "Monitor stock levels, purchases, suppliers, product movement, and low-stock alerts." },
        { title: "HR & payroll", icon: "♙", tag: "SYSTEM / 05", description: "Organize staff records, leave, attendance, payroll, and internal HR workflows." },
        { title: "Point of sale (POS)", icon: "▣", tag: "SYSTEM / 06", description: "Support sales, receipts, products, cashier shifts, and day-end reporting." },
        { title: "CRM & sales", icon: "◎", tag: "SYSTEM / 07", description: "Keep customer records, leads, follow-ups, and sales activity in one place." },
        { title: "Enterprise resource planning", icon: "⌘", tag: "SYSTEM / 08", description: "Connect core business processes and reporting through a tailored ERP solution." },
        { title: "Hotel & booking", icon: "▰", tag: "SYSTEM / 09", description: "Manage reservations, rooms, guest details, billing, and availability." },
        { title: "Pharmacy management", icon: "✚", tag: "SYSTEM / 10", description: "Organize medicine inventory, dispensing, expiry tracking, and sales records." },
        { title: "Library management", icon: "▥", tag: "SYSTEM / 11", description: "Track books, members, lending, returns, and overdue items." },
        { title: "Fleet & logistics", icon: "↗", tag: "SYSTEM / 12", description: "Coordinate vehicles, dispatch, maintenance schedules, and delivery records." },
        { title: "Project & task management", icon: "☷", tag: "SYSTEM / 13", description: "Plan tasks, assign responsibilities, track progress, and keep teams aligned." },
        { title: "Restaurant management", icon: "▤", tag: "SYSTEM / 14", description: "Coordinate menus, orders, tables, kitchen tickets, and sales summaries." },
        { title: "Custom business system", icon: "✳", tag: "SYSTEM / 15", description: "A bespoke system shaped around your specific business processes and requirements." }
      ]
    },
    {
      id: "app-design", number: "03", icon: "▣", title: "Mobile app design & development",
      short: "App design", description: "Useful mobile experiences with thoughtful interfaces, reliable functionality, and a clear purpose.",
      searchTerms: ["app", "application", "android", "ios", "iphone", "mobile", "native", "cross platform", "offline", "unhosted", "prototype", "ui", "ux"],
      options: [
        { title: "Native Android app", icon: "▣", tag: "APP / 01", description: "An Android-first app shaped for the platform and the needs of your users." },
        { title: "Native iOS app", icon: "◉", tag: "APP / 02", description: "A focused iPhone and iPad experience with platform-specific interaction patterns." },
        { title: "Android + iOS app", icon: "⌘", tag: "APP / 03", description: "One product direction for both major mobile platforms, with a consistent experience." },
        { title: "Offline / local app", icon: "◈", tag: "APP / 04", description: "A local-first app designed for use on a device without needing continuous hosting." },
        { title: "UI/UX prototype", icon: "✳", tag: "APP / 05", description: "Clickable screens and user flows to test the idea before full development." }
      ]
    },
    {
      id: "graphics-design", number: "04", icon: "◈", title: "Graphic design & branding",
      short: "Graphics design", description: "A coherent visual identity and campaign materials that help your brand stand out.",
      searchTerms: ["graphics", "graphic design", "logo", "branding", "poster", "flyer", "flier", "brochure", "banner", "business card", "brand identity", "social media design", "packaging", "print design"],
      options: [
        { title: "Logo & brand identity", icon: "◈", tag: "DESIGN / 01", description: "A distinct logo system, color palette, typography, and visual brand direction." },
        { title: "Posters & flyers", icon: "▧", tag: "DESIGN / 02", description: "Campaign-ready layouts for events, promotions, launches, and announcements." },
        { title: "Brochures & profiles", icon: "▤", tag: "DESIGN / 03", description: "Clear, professional multi-page layouts for company profiles and product information." },
        { title: "Banners & billboards", icon: "▰", tag: "DESIGN / 04", description: "Large-format visual design built for distance, clarity, and impact." },
        { title: "Social media creatives", icon: "◎", tag: "DESIGN / 05", description: "A consistent set of digital creatives for campaigns and everyday publishing." },
        { title: "Print & packaging", icon: "▣", tag: "DESIGN / 06", description: "Production-aware designs for packaging, stationery, and printed collateral." }
      ]
    },
    {
      id: "motion-graphics", number: "05", icon: "▷", title: "Motion graphics",
      short: "Motion graphics", description: "Bring ideas to life with animated typography, logo reveals, explainers, and visual effects.",
      searchTerms: ["motion", "animation", "animated logo", "logo reveal", "2d animation", "3d animation", "kinetic typography", "explainer", "visual effects", "vfx"],
      options: [
        { title: "Logo animation", icon: "✳", tag: "MOTION / 01", description: "A clean animated reveal to give your brand a distinctive moving signature." },
        { title: "Promo motion graphics", icon: "▷", tag: "MOTION / 02", description: "Eye-catching animated visuals for campaigns, launches, and promotions." },
        { title: "Explainer animation", icon: "▧", tag: "MOTION / 03", description: "Use motion and visual storytelling to make a product or process easier to understand." },
        { title: "Kinetic typography", icon: "T", tag: "MOTION / 04", description: "Typography-led animation for messages that need rhythm and emphasis." }
      ]
    },
    {
      id: "advertisement-videos", number: "06", icon: "▶", title: "Advertisement video production",
      short: "Advertisement videos", description: "Promotional videos with a clear message, considered visuals, and a strong creative direction.",
      searchTerms: ["advertisement", "advert", "commercial", "promo video", "product video", "brand film", "video production", "campaign video", "marketing video", "cinematic"],
      options: [
        { title: "Product advertisement", icon: "◇", tag: "VIDEO / 01", description: "Showcase a product through strong visuals, features, and a focused message." },
        { title: "Brand commercial", icon: "▶", tag: "VIDEO / 02", description: "A story-led brand film to communicate what makes your business different." },
        { title: "Social media ad", icon: "▣", tag: "VIDEO / 03", description: "Short, platform-ready video ads designed to capture attention quickly." },
        { title: "Event highlight video", icon: "✳", tag: "VIDEO / 04", description: "A dynamic edit that captures key moments, energy, and atmosphere." }
      ]
    },
    {
      id: "video-editing", number: "07", icon: "▻", title: "Custom video editing",
      short: "Video editing", description: "Professional editing that turns raw footage into a polished, purposeful story.",
      searchTerms: ["video editing", "editor", "reels", "youtube", "shorts", "color grading", "sound design", "subtitles", "wedding", "documentary", "footage", "after effects", "premiere pro"],
      options: [
        { title: "Social reels & shorts", icon: "▣", tag: "EDIT / 01", description: "Punchy vertical edits with pacing, captions, and platform-specific framing." },
        { title: "YouTube & long-form", icon: "▷", tag: "EDIT / 02", description: "Structured edits for interviews, channels, tutorials, and long-form content." },
        { title: "Cinematic edit & grading", icon: "◉", tag: "EDIT / 03", description: "Shape mood and visual continuity through pacing, color, and finishing." },
        { title: "Event & documentary edit", icon: "▤", tag: "EDIT / 04", description: "Turn extensive footage into a clear story with thoughtful sequencing." },
        { title: "Sound & finishing", icon: "≋", tag: "EDIT / 05", description: "Refine audio, titles, transitions, captions, and final delivery formats." }
      ]
    }
  ]
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const serviceById = id => BMO_CONFIG.services.find(service => service.id === id);
let currentService = null;
let activeOptionIndex = 0;
let toastTimer;

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}
function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}
function serviceArt() {
  return '<div class="service-art" aria-hidden="true"><span class="art-window one"></span><span class="art-window two"></span><span class="art-window three"></span></div>';
}
function renderServices() {
  $("#serviceGrid").innerHTML = BMO_CONFIG.services.map(service => `
    <article class="service-card reveal" tabindex="0" role="button" data-open-service="${service.id}" aria-label="Explore ${escapeHTML(service.title)}">
      <div class="service-card-top"><span class="service-number">${service.number} / 07</span><span class="service-symbol">${service.icon}</span></div>
      ${serviceArt()}
      <h3>${escapeHTML(service.title)}</h3><p>${escapeHTML(service.description)}</p>
      <div class="service-card-foot"><span>Explore service</span><span>↗</span></div>
    </article>`).join("");
  $("#servicesDropdown").innerHTML = BMO_CONFIG.services.map(service => `
    <a href="#service:${service.id}" class="dropdown-service" data-open-service="${service.id}">
      <span class="dropdown-icon">${service.icon}</span><span><strong>${escapeHTML(service.short)}</strong><small>${escapeHTML(service.title)}</small></span>
    </a>`).join("");
  $("#contactService").innerHTML = '<option value="">Choose a service</option>' + BMO_CONFIG.services.map(service => `<option value="${escapeHTML(service.title)}">${escapeHTML(service.title)}</option>`).join("");
  $$(".reveal").forEach(el => revealObserver?.observe(el));
}
function openService(id) {
  const service = serviceById(id);
  if (!service) return;
  currentService = service;
  activeOptionIndex = 0;
  $("#servicePageTitle").textContent = service.title;
  $("#servicePageDescription").textContent = service.description;
  $("#servicePageIndex").textContent = `${service.number} / ${String(BMO_CONFIG.services.length).padStart(2, "0")}`;
  $("#servicePageFootnote").textContent = `Not sure which ${service.short.toLowerCase()} option is right? Tell us what you're trying to achieve.`;
  renderCarousel();
  $("#servicePage").classList.add("open");
  $("#servicePage").setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  $("#closeServicePage").focus();
  closeMobileMenu();
}
function closeService() {
  $("#servicePage").classList.remove("open");
  $("#servicePage").setAttribute("aria-hidden", "true");
  if (!$("#requestModal").classList.contains("open") && !$("#policyOverlay").classList.contains("open")) document.body.classList.remove("no-scroll");
}
function renderCarousel() {
  if (!currentService) return;
  const options = currentService.options;
  $("#serviceCarousel").innerHTML = options.map((option, index) => `
    <article class="option-card ${index === activeOptionIndex ? "is-active" : ""}" data-option-index="${index}" aria-label="${escapeHTML(option.title)}">
      <div class="option-art"><span class="option-tag">${escapeHTML(option.tag)}</span><div class="option-art-symbol"><span>${escapeHTML(option.icon)}</span></div></div>
      <div class="option-card-content"><h3>${escapeHTML(option.title)}</h3><p>${escapeHTML(option.description)}</p>
      <button class="button ${index === activeOptionIndex ? "button-primary" : "button-dark"}" data-request-option="${index}">Get service <span>↗</span></button></div>
    </article>`).join("");
  $("#carouselDots").innerHTML = options.map((option, index) => `<button class="carousel-dot ${index === activeOptionIndex ? "active" : ""}" data-carousel-index="${index}" aria-label="Show option ${index + 1}"></button>`).join("");
  const activeCard = $(`.option-card[data-option-index="${activeOptionIndex}"]`);
  if (activeCard && window.matchMedia("(max-width: 560px)").matches) {
    $("#serviceCarousel").scrollTo({ left: activeCard.offsetLeft - 35, behavior: "smooth" });
  }
}
function moveCarousel(direction) {
  if (!currentService) return;
  activeOptionIndex = (activeOptionIndex + direction + currentService.options.length) % currentService.options.length;
  renderCarousel();
}
function openRequest(optionIndex) {
  const option = currentService.options[optionIndex];
  $("#requestTitle").textContent = `Let's discuss ${option.title.toLowerCase()}.`;
  $("#requestDescription").textContent = `Tell us what you need for ${currentService.title.toLowerCase()} and we'll help map the next step.`;
  $("#requestServiceName").value = currentService.title;
  $("#requestOptionName").value = option.title;
  $("#requestDetails").value = `I'm interested in ${option.title}. `;
  $("#requestModal").classList.add("open");
  $("#requestModal").setAttribute("aria-hidden", "false");
  $("#requestModal").querySelector('input[name="name"]').focus();
}
function closeRequest() {
  $("#requestModal").classList.remove("open");
  $("#requestModal").setAttribute("aria-hidden", "true");
  if (!$("#servicePage").classList.contains("open") && !$("#policyOverlay").classList.contains("open")) document.body.classList.remove("no-scroll");
}
const policyContent = {
  terms: {
    title: "Terms & conditions",
    html: `<p><strong>Last updated: [add date]</strong></p>
      <p>These terms are a starter template for the BMO website. Replace bracketed details and obtain professional advice before publishing.</p>
      <h3>1. Website information</h3><p>Website content is provided for general information about BMO's services. A website enquiry does not create a client relationship or guarantee project acceptance.</p>
      <h3>2. Project scope and quotations</h3><p>Each project should be governed by a written proposal or agreement that defines deliverables, milestones, timelines, fees, revisions, client responsibilities, and acceptance criteria. Work begins after the agreed approval and any required deposit.</p>
      <h3>3. Payments and changes</h3><p>Payment schedules, late-payment arrangements, cancellation terms, and additional work should be agreed in writing before work begins. Requests outside the agreed scope may require a revised quote or timeline.</p>
      <h3>4. Intellectual property</h3><p>Ownership, licensing, third-party assets, source code, and handover terms should be stated in the relevant project agreement. Third-party software, fonts, stock media, and platforms remain subject to their own licences.</p>
      <h3>5. Client responsibilities</h3><p>Clients are responsible for providing accurate information, securing rights to supplied content, reviewing deliverables, and ensuring their use of the final work complies with applicable laws.</p>
      <h3>6. Availability and liability</h3><p>We aim to keep the website accurate and available, but cannot guarantee uninterrupted access. Any limits of liability, warranties, dispute process, and governing law must be reviewed and specified for your business.</p>
      <h3>7. Contact</h3><p>For questions about these terms, contact <a href="mailto:hello@bmo.co.tz">hello@bmo.co.tz</a>.</p>`
  },
  privacy: {
    title: "Privacy policy",
    html: `<p><strong>Last updated: [add date]</strong></p>
      <p>This is a starter privacy notice. Update it to reflect the information BMO actually collects, the tools it uses, and applicable data-protection requirements.</p>
      <h3>1. Information you provide</h3><p>If you contact BMO, we may receive the name, email address, phone number, company information, and project details you submit.</p>
      <h3>2. How information is used</h3><p>Information may be used to respond to enquiries, prepare proposals, deliver services, communicate about projects, maintain security, and meet legal obligations.</p>
      <h3>3. Sharing and service providers</h3><p>Information should only be shared with relevant staff, service providers, or authorities where necessary and lawful. Identify the actual providers you use, such as email, hosting, analytics, or form-processing services, before publishing.</p>
      <h3>4. Storage and security</h3><p>Describe where enquiry and client information is stored, how long it is retained, and the safeguards you use. No online transmission or storage method can be guaranteed completely secure.</p>
      <h3>5. Cookies and analytics</h3><p>If you add analytics, embedded media, advertising tools, or cookies, explain what they collect and provide any consent controls required by law.</p>
      <h3>6. Your choices</h3><p>Explain how people can request access, correction, deletion, or raise a privacy concern, subject to applicable legal requirements.</p>
      <h3>7. Contact</h3><p>For privacy enquiries, contact <a href="mailto:hello@bmo.co.tz">hello@bmo.co.tz</a>.</p>`
  }
};
function openPolicy(type) {
  const policy = policyContent[type];
  if (!policy) return;
  $("#policyTitle").textContent = policy.title;
  $("#policyBody").innerHTML = policy.html;
  $("#policyOverlay").classList.add("open");
  $("#policyOverlay").setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}
function closePolicy() {
  $("#policyOverlay").classList.remove("open");
  $("#policyOverlay").setAttribute("aria-hidden", "true");
  if (!$("#servicePage").classList.contains("open") && !$("#requestModal").classList.contains("open")) document.body.classList.remove("no-scroll");
}
function closeMobileMenu() {
  $("#mainNav").classList.remove("open");
  $("#menuToggle").setAttribute("aria-expanded", "false");
  $("#servicesDropdown").classList.remove("open");
}
function allSearchEntries() {
  return BMO_CONFIG.services.flatMap(service => [
    { label: service.title, detail: "Service", serviceId: service.id, keywords: service.searchTerms.join(" ") },
    ...service.options.map(option => ({ label: option.title, detail: service.short, serviceId: service.id, keywords: `${option.title} ${option.description} ${service.searchTerms.join(" ")}` }))
  ]);
}
function renderSearchResults(query) {
  const box = $("#searchResults");
  const q = query.trim().toLowerCase();
  if (!q) { box.classList.remove("show"); box.innerHTML = ""; return; }
  const matches = allSearchEntries().filter(item => `${item.label} ${item.detail} ${item.keywords}`.toLowerCase().includes(q)).slice(0, 7);
  box.innerHTML = matches.length ? matches.map((item, index) => `<div class="search-result" role="option" tabindex="0" data-search-service="${item.serviceId}"><span>${escapeHTML(item.label)}</span><small>${escapeHTML(item.detail)} ↗</small></div>`).join("") : `<div class="search-result"><span>No matches found</span><small>Try “app” or “school”</small></div>`;
  box.classList.add("show");
}
let revealObserver;
document.addEventListener("DOMContentLoaded", () => {
  revealObserver = "IntersectionObserver" in window ? new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
  }), { threshold: .12 }) : null;
  renderServices();
  if (revealObserver) $$(".reveal").forEach(el => revealObserver.observe(el));
  else $$(".reveal").forEach(el => el.classList.add("is-visible"));
  $("#year").textContent = new Date().getFullYear();

  $("#menuToggle").addEventListener("click", () => {
    const opened = $("#mainNav").classList.toggle("open");
    $("#menuToggle").setAttribute("aria-expanded", String(opened));
  });
  $(".services-trigger").addEventListener("click", event => {
    if (window.matchMedia("(max-width: 850px)").matches) {
      event.preventDefault();
      $("#servicesDropdown").classList.toggle("open");
    }
  });
  document.addEventListener("click", event => {
    const serviceTrigger = event.target.closest("[data-open-service]");
    if (serviceTrigger) {
      event.preventDefault();
      openService(serviceTrigger.dataset.openService);
      $("#servicesDropdown").classList.remove("open");
      return;
    }
    const optionButton = event.target.closest("[data-request-option]");
    if (optionButton) { openRequest(Number(optionButton.dataset.requestOption)); return; }
    const dot = event.target.closest("[data-carousel-index]");
    if (dot) { activeOptionIndex = Number(dot.dataset.carouselIndex); renderCarousel(); return; }
    const policyButton = event.target.closest("[data-policy]");
    if (policyButton) { openPolicy(policyButton.dataset.policy); return; }
    if (event.target.closest("[data-close-service]")) closeService();
    if (event.target.closest("[data-close-request]")) closeRequest();
    if (event.target.closest("[data-close-policy]")) closePolicy();
    const searchResult = event.target.closest("[data-search-service]");
    if (searchResult) {
      openService(searchResult.dataset.searchService);
      $("#searchResults").classList.remove("show");
      $("#siteSearch").value = "";
    }
    if (event.target.closest("#servicePageContact")) {
      // The anchor scrolls after the overlay closes; the listener below handles it.
    }
    if (!event.target.closest(".search-wrap")) $("#searchResults").classList.remove("show");
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") { closeRequest(); closePolicy(); closeService(); closeMobileMenu(); $("#searchResults").classList.remove("show"); }
    const card = event.target.closest(".service-card");
    if (card && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); openService(card.dataset.openService); }
    const result = event.target.closest("[data-search-service]");
    if (result && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); openService(result.dataset.searchService); $("#searchResults").classList.remove("show"); }
  });
  $("#closeServicePage").addEventListener("click", closeService);
  $("#closeRequest").addEventListener("click", closeRequest);
  $("#closePolicy").addEventListener("click", closePolicy);
  $("#carouselPrev").addEventListener("click", () => moveCarousel(-1));
  $("#carouselNext").addEventListener("click", () => moveCarousel(1));
  $("#siteSearch").addEventListener("input", event => renderSearchResults(event.target.value));
  $("#searchForm").addEventListener("submit", event => {
    event.preventDefault();
    const first = $("[data-search-service]", $("#searchResults"));
    if (first) { openService(first.dataset.searchService); $("#searchResults").classList.remove("show"); $("#siteSearch").value = ""; }
    else if ($("#siteSearch").value.trim()) renderSearchResults($("#siteSearch").value);
  });
  $("#siteSearch").addEventListener("focus", () => { if ($("#siteSearch").value.trim()) renderSearchResults($("#siteSearch").value); });
  $("#servicePageContact").addEventListener("click", event => {
    event.preventDefault();
    const name = currentService?.title || "";
    closeService();
    $("#contactService").value = name;
    $("#contact").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => $('input[name="name"]', $("#contactForm")).focus({ preventScroll: true }), 550);
  });
  $("#contactForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`BMO project enquiry — ${data.get("service")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message")}`);
    window.location.href = `mailto:${BMO_CONFIG.email}?subject=${subject}&body=${body}`;
    showToast("Your email app should open with the enquiry ready to send.");
  });
  $("#requestForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`BMO service request — ${data.get("serviceName")} / ${data.get("optionName")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nCompany: ${data.get("company") || "Not provided"}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\nService: ${data.get("serviceName")}\nOption: ${data.get("optionName")}\n\nBrief:\n${data.get("details")}`);
    window.location.href = `mailto:${BMO_CONFIG.email}?subject=${subject}&body=${body}`;
    closeRequest();
    showToast("Your email app should open with your service request ready to send.");
  });
  $$('a[href^="#"]:not([data-open-service])').forEach(link => {
    link.addEventListener("click", event => {
      const href = link.getAttribute("href");
      if (!href || href === "#" || href.startsWith("#service:")) return;
      if (["#home", "#services", "#about", "#contact", "#intro"].includes(href)) {
        if (href !== "#services" || !link.classList.contains("services-trigger")) closeMobileMenu();
      }
    });
  });
  $$("[data-service-link]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    openService(link.dataset.serviceLink);
  }));

  // A lightweight swipe/drag interaction for the option carousel.
  const carousel = $("#serviceCarousel");
  let pointerStartX = null;
  carousel.addEventListener("pointerdown", event => { pointerStartX = event.clientX; });
  carousel.addEventListener("pointerup", event => {
    if (pointerStartX === null) return;
    const delta = event.clientX - pointerStartX;
    if (Math.abs(delta) > 55) moveCarousel(delta < 0 ? 1 : -1);
    pointerStartX = null;
  });
  carousel.addEventListener("pointercancel", () => { pointerStartX = null; });
});