/* Extracted Archives: one nav bar for every page.
   To add or relink a page, edit NAV below. Every page loads this file and
   marks itself with <body data-page="...">. */
(function () {
  var NAV = [
    { id: "home", label: "Land here", href: "index.html" },
    { id: "atlas", label: "Atlas", href: "atlas.html" },
    { label: "Bog", items: [
      { id: "bog-archive", label: "as an archive", href: "bog-archive.html" },
      { id: "bog-extraction", label: "as extraction", href: "bog-extraction.html" }
    ]},
    { label: "Data centres", items: [
      { id: "dc-archive", label: "as an archive", href: "data-centres-archive.html" },
      { id: "dc-extraction", label: "as extraction", href: "data-centres-extraction.html" }
    ]},
    { id: "news", label: "In the news", href: "in-the-news.html" },
    { id: "prototypes", label: "Prototypes", href: "prototypes.html" }
  ];

  var current = document.body.getAttribute("data-page") || "";

  function link(item, cls) {
    var a = document.createElement("a");
    a.href = item.href; a.textContent = item.label;
    if (cls) a.className = cls;
    if (item.id === current) a.setAttribute("aria-current", "page");
    return a;
  }

  var nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.setAttribute("aria-label", "Site");

  var brand = link({ id: "home-brand", label: "Extracted Archives", href: "index.html" }, "brand");
  nav.appendChild(brand);

  var menuBtn = document.createElement("button");
  menuBtn.className = "menu-btn"; menuBtn.type = "button";
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.textContent = "[ menu ]";
  nav.appendChild(menuBtn);

  var ul = document.createElement("ul");
  ul.className = "links";
  NAV.forEach(function (item, i) {
    var li = document.createElement("li");
    if (!item.items) {
      li.appendChild(link(item));
    } else {
      li.className = "drop";
      var btn = document.createElement("button");
      btn.type = "button"; btn.textContent = item.label;
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-controls", "sub-" + i);
      var sub = document.createElement("ul");
      sub.className = "sub"; sub.id = "sub-" + i;
      item.items.forEach(function (s) {
        var sli = document.createElement("li");
        sli.appendChild(link(s));
        sub.appendChild(sli);
        if (s.id === current) li.classList.add("has-active");
      });
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = !li.classList.contains("open");
        closeAll();
        li.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", String(open));
      });
      li.appendChild(btn); li.appendChild(sub);
    }
    ul.appendChild(li);
  });
  nav.appendChild(ul);

  function closeAll() {
    nav.querySelectorAll("li.open").forEach(function (li) {
      li.classList.remove("open");
      li.querySelector("button").setAttribute("aria-expanded", "false");
    });
  }
  menuBtn.addEventListener("click", function () {
    var open = !nav.classList.contains("menu-open");
    nav.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "[ close ]" : "[ menu ]";
  });
  document.addEventListener("click", function (e) { if (!nav.contains(e.target)) closeAll(); });
  window.addEventListener("blur", closeAll); /* clicking into an embedded page */
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAll(); });

  document.body.insertBefore(nav, document.body.firstChild);
})();
