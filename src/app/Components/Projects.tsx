"use client";
import { useState } from "react";
import { projects, type Project } from "../content";
import { Arrow, Icon } from "./Icons";

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`project-visual visual-${project.visual}`}
      aria-hidden="true"
    >
      <span className="visual-label">
        {project.category === "Datos"
          ? "DATA / WORKFLOW"
          : project.category === "Experimental"
            ? "LAB / EXPLORACIÓN"
            : "WEB / INTERFAZ"}
      </span>
      {project.visual === "table" ? (
        <div className="mini-window">
          <div className="window-bar">
            <i />
            <i />
            <i />
            <span>{project.title}</span>
          </div>
          <div className="mini-dashboard">
            <div className="mini-sidebar">
              <b />
              <b />
              <b />
              <b />
            </div>
            <div className="mini-table">
              <div className="mini-table-title">
                Gestión de registros<span>+</span>
              </div>
              {[0, 1, 2, 3].map((n) => (
                <div className="mini-row" key={n}>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : project.visual === "data" ? (
        <div className="data-flow">
          <span>
            <Icon name="data" />
            {project.id === "migracion" ? "ACCESS" : "CSV"}
          </span>
          <span className="flow-line">→</span>
          <span className="flow-core">
            <Icon name="database" />
          </span>
          <span className="flow-line">→</span>
          <span>
            <Icon name="data" />
            {project.id === "migracion" ? "POSTGRESQL" : "DATOS LIMPIOS"}
          </span>
        </div>
      ) : project.visual === "shop" ? (
        <div className="mini-shop">
          <div className="shop-title">
            TASKY<span>COLECCIÓN / WEB</span>
          </div>
          <div className="shop-items">
            <i />
            <i />
            <i />
          </div>
        </div>
      ) : project.visual === "vet" ? (
        <div className="mini-vet">
          <span className="vet-cross">+</span>
          <div>
            Curalani<span>CUIDADO VETERINARIO</span>
          </div>
        </div>
      ) : project.visual === "ai" ? (
        <div className="ai-visual">
          <div className="ai-orbit">
            <span>AI</span>
          </div>
          <span>EXPLORAR. PROBAR. APRENDER.</span>
        </div>
      ) : (
        <div className="mini-code">
          <span>&lt;MiguelPlasencia /&gt;</span>
          <p>
            web<span> + </span>python<span> + </span>datos
          </p>
          <i />
        </div>
      )}
      <span className="visual-index">
        {project.id === "ventas"
          ? ".csv → .csv"
          : project.id === "migracion"
            ? ".mdb → SQL"
            : "< desarrollo />"}
      </span>
    </div>
  );
}
export function Projects() {
  const [filter, setFilter] = useState("Todos");
  const visible = projects.filter(
    (project) => filter === "Todos" || project.category === filter,
  );
  return (
    <>
      <div className="project-toolbar">
        <div className="filters" role="group" aria-label="Filtrar proyectos">
          {["Todos", "Web", "Datos", "Experimental"].map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              {item === "Todos" && <span>{projects.length}</span>}
            </button>
          ))}
        </div>
        <span className="project-count" aria-live="polite">
          {visible.length} proyectos
        </span>
      </div>
      <div className="projects-grid">
        {visible.map((project) => (
          <article
            className={`project-card${project.featured ? " featured" : ""}`}
            key={project.id}
          >
            <ProjectVisual project={project} />
            <div className="project-body">
              <div className="project-meta">
                <span>{project.type}</span>
                <span>{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <p className="project-role">
                <span>MI PARTICIPACIÓN</span>
                {project.role}
              </p>
              {project.href ? (
                <a
                  className="project-link"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código de ${project.title} en GitHub`}
                >
                  Ver código <Arrow />
                </a>
              ) : (
                <p className="project-private">{project.note}</p>
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="section-note project-caption">
        Gráficos ilustrativos del enfoque de cada proyecto. El código y el
        alcance se detallan en cada tarjeta.
      </p>
    </>
  );
}
