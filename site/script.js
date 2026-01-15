const projectsEl = document.getElementById("projects");
const searchEl = document.getElementById("search");
const filterEl = document.getElementById("filter");

document.getElementById("year").textContent = new Date().getFullYear();

let all = [];

async function loadProjects() {
  const res = await fetch("./data/projects.json");
  all = await res.json();
  render();
}

function matches(p, q, category) {
  const text = `${p.title} ${p.description} ${(p.tech||[]).join(" ")} ${(p.category||"")}`.toLowerCase();
  const okQuery = !q || text.includes(q);
  const okCat = category === "All" || p.category === category;
  return okQuery && okCat;
}

function render() {
  const q = (searchEl.value || "").trim().toLowerCase();
  const cat = filterEl.value;

  const filtered = all.filter(p => matches(p, q, cat));

  projectsEl.innerHTML = filtered.map(p => `
    <div class="card">
      <h3 style="margin:0 0 8px;">${p.title}</h3>
      <p style="margin:0 0 10px;">${p.description}</p>
      <p class="small"><b>Category:</b> ${p.category} • <b>Tech:</b> ${(p.tech||[]).join(", ")}</p>
      <div class="links" style="margin-top:10px;">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noreferrer">Live Demo</a>` : ""}
        ${p.caseStudy ? `<a href="${p.caseStudy}" target="_blank" rel="noreferrer">Case Study</a>` : ""}
      </div>
    </div>
  `).join("") || `<p class="small">No projects match your search yet.</p>`;
}

searchEl.addEventListener("input", render);
filterEl.addEventListener("change", render);

// Placeholder: visitor + contact will be wired after AWS API is live
document.getElementById("visitorCount").textContent = "—";

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("contactStatus").textContent =
    "Contact API not connected yet. For now, please email me directly.";
});

loadProjects();
