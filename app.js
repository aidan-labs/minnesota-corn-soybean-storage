// Renders the storefront from team.json and catalog.json
(async function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) =>
    String(s ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );

  async function load(file) {
    const r = await fetch(file + "?v=" + Date.now());
    if (!r.ok) throw new Error(`Could not load ${file} (${r.status})`);
    try {
      return await r.json();
    } catch {
      throw new Error(
        `${file} is not valid JSON. Check for a missing comma or quote.`,
      );
    }
  }

  // NEW: turns a member's "capability" value (string, array, or {title,url}) into a list of links
  function capabilityLinks(m) {
    const list = [].concat(m.capability || []);
    return list
      .map((c) =>
        typeof c === "string"
          ? { url: c, title: `${m.name}'s capability page` }
          : {
              url: c && c.url,
              title: (c && c.title) || `${m.name}'s capability page`,
            },
      )
      .filter((c) => c.url)
      .map((c) => ({ ...c, pillar: m.pillar || m.role || "", owner: m.name }));
  }

  try {
    const [team, catalog] = await Promise.all([
      load("team.json"),
      load("catalog.json"),
    ]);
    document.title = team.name || "Storefront";
    $("name").textContent = team.name || "Unnamed team";
    $("tagline").textContent = team.tagline || "";
    $("eyebrow").textContent = [
      "OPMT 375 Supply Lab",
      team.link && `${team.link} link`,
      team.chain && `Chain ${team.chain}`,
    ]
      .filter(Boolean)
      .join(" · ");
    $("about").textContent = team.about || "";
    $("how").textContent = team.how_to_order || "";

    const items = (catalog && catalog.items) || [];
    $("catalog").innerHTML = items.length
      ? items
          .map((it) => {
            const extra = Object.entries(it).filter(
              ([k]) => !["name", "description"].includes(k),
            );
            return `<article class="card"><h3>${esc(it.name)}</h3><p>${esc(it.description)}</p>${
              extra.length
                ? `<dl>${extra.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(typeof v === "object" ? JSON.stringify(v) : v)}</dd>`).join("")}</dl>`
                : ""
            }</article>`;
          })
          .join("")
      : '<p class="muted">Nothing listed yet.</p>';

    // NEW: one card per capability page, collected from every team member
    const caps = (team.members || []).flatMap(capabilityLinks);
    $("capabilities").innerHTML = caps.length
      ? caps
          .map(
            (c) =>
              `<article class="card">${
                c.pillar ? `<p class="eyebrow">${esc(c.pillar)}</p>` : ""
              }<h3><a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${esc(c.title)}</a></h3><p class="muted">By ${esc(c.owner)}</p></article>`,
          )
          .join("")
      : '<p class="muted">Capability pages coming soon.</p>';

    $("members").innerHTML = (team.members || [])
      .map(
        (m) =>
          `<li><b>${esc(m.name)}</b>${m.role ? ` · ${esc(m.role)}` : ""}${
            m.github
              ? ` · <a href="https://github.com/${encodeURIComponent(m.github)}">@${esc(m.github)}</a>`
              : ""
          }</li>`,
      )
      .join("");

    // "Contact us" opens a new Issue on this repo
    const host = location.hostname.match(/^([^.]+)\.github\.io$/);
    const repo = location.pathname.split("/").filter(Boolean)[0];
    if (host && repo)
      $("contact").href =
        `https://github.com/${host[1]}/${repo}/issues/new/choose`;
    else $("contact").classList.add("hidden");
  } catch (e) {
    $("name").textContent = "Storefront not ready";
    $("err").textContent = e.message;
  }
})();
