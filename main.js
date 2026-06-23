const grid = document.getElementById('projectGrid');
const filters = document.querySelectorAll('.filter');
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

function mediaTemplate(project, index){
  if(project.mediaType === 'video'){
    return `<video controls preload="metadata" poster="${project.poster || ''}"><source src="${project.media}" type="video/mp4">Tu navegador no soporta video HTML5.</video>`;
  }
  if(project.mediaType === 'image'){
    return `<img src="${project.media}" alt="${project.title}" loading="lazy">`;
  }
  const code = String(index + 1).padStart(2, '0');
  return `<div class="project-art art-${index % 4}" aria-hidden="true"><span>${project.tag}</span><strong>${code}</strong><i></i></div>`;
}

function renderProjects(filter = 'Todos'){
  const visible = filter === 'Todos' ? projects : projects.filter(project => project.type === filter);
  grid.innerHTML = visible.map((project, index) => `
    <article class="project-card">
      <div class="project-media">${mediaTemplate(project, index)}</div>
      <div class="project-body">
        <div class="project-meta"><span>${project.type}</span><span class="project-tag">${project.status}</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-impact"><strong>Impacto</strong><span>${project.impact}</span></div>
        <div class="tool-list">${project.tools.map(tool => `<span>${tool}</span>`).join('')}</div>
        <a class="project-link" href="${project.link}" target="${project.link.startsWith('http') ? '_blank' : '_self'}" rel="noopener">Ver caso <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  `).join('');
}

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    renderProjects(button.dataset.filter);
  });
});

renderProjects();
