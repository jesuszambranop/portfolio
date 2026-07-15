const grid = document.getElementById("projectGrid");
const clientNav = document.getElementById("clientNav");
const totalClients = document.getElementById("totalClients");
const totalWorks = document.getElementById("totalWorks");
const year = document.getElementById("year");

const clients = Array.isArray(portfolioClients) ? portfolioClients : [];
const workCount = clients.reduce((total, client) => total + client.works.length, 0);

year.textContent = new Date().getFullYear();
totalClients.textContent = clients.length;
totalWorks.textContent = workCount;

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0])
    .join("");
}

function thumbnailTemplate(work, client, index) {
  if (work.thumbnail) {
    return `<img src="${work.thumbnail}" alt="Miniatura de ${client.name} - ${work.title}" loading="lazy">`;
  }

  return `
    <div class="thumb-placeholder" aria-label="Espacio para subir miniatura">
      <span>${initials(client.name)}</span>
      <strong>${String(index + 1).padStart(2, "0")}</strong>
      <small>Espacio para miniatura</small>
      <em>${work.thumbnailHint}</em>
    </div>
  `;
}

function renderClientNav() {
  clientNav.innerHTML = clients
    .map((client) => `<a href="#${client.slug}">${client.name} <span>${client.works.length}</span></a>`)
    .join("");
}

function renderProjects() {
  grid.innerHTML = clients
    .map((client) => `
      <section class="client-section" id="${client.slug}">
        <div class="client-heading">
          <div>
            <p class="eyebrow">Cliente</p>
            <h2>${client.name}</h2>
          </div>
          <span>${client.works.length} trabajos</span>
        </div>
        <div class="client-work-grid">
          ${client.works
            .map((work, index) => `
              <article class="work-card">
                <a class="work-thumb" href="${work.url}" target="_blank" rel="noopener">
                  ${thumbnailTemplate(work, client, index)}
                </a>
                <div class="work-body">
                  <div class="work-meta">
                    <span>${work.type}</span>
                    <span>${client.name}</span>
                  </div>
                  <h3>${work.title}</h3>
                  <a class="work-link" href="${work.url}" target="_blank" rel="noopener">
                    Ver post original <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            `)
            .join("")}
        </div>
      </section>
    `)
    .join("");
}

renderClientNav();
renderProjects();
