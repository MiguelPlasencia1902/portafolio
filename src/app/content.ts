import type { IconName } from "./Components/Icons";

export const contact = {
  email: "miguelplasencia1902@gmail.com",
  mailto:
    "mailto:miguelplasencia1902@gmail.com?subject=Consulta%20sobre%20un%20proyecto",
  github: "https://github.com/MiguelPlasencia1902",
  cv: "/documents/CV_Miguel_Plasencia.pdf",
};
export const services: {
  icon: IconName;
  title: string;
  description: string;
  delivery: string;
}[] = [
  {
    icon: "data",
    title: "Limpieza y análisis de datos",
    description:
      "Organizo archivos Excel o CSV con Python: reviso duplicados, valores vacíos, formatos y registros inconsistentes.",
    delivery: "Datos depurados y un reporte de los cambios realizados.",
  },
  {
    icon: "database",
    title: "Consultas y organización SQL",
    description:
      "Te ayudo a consultar, filtrar y ordenar información en bases de datos, con foco en PostgreSQL.",
    delivery: "Consultas SQL y resultados preparados para tu revisión.",
  },
  {
    icon: "terminal",
    title: "Automatizaciones con Python",
    description:
      "Convierto tareas repetitivas de procesamiento de archivos y preparación de reportes en scripts sencillos.",
    delivery: "Un script funcional con instrucciones para ejecutarlo.",
  },
  {
    icon: "code",
    title: "Páginas web y landing pages",
    description:
      "Desarrollo sitios adaptables a móvil para presentar tu negocio, servicio o proyecto con claridad.",
    delivery: "Una web responsive con contenido y navegación organizados.",
  },
];
export const skills: {
  icon: IconName;
  title: string;
  items: string[];
  note: string;
}[] = [
  {
    icon: "code",
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Svelte",
      "Tailwind CSS",
    ],
    note: "Interfaces, componentes reutilizables y diseño responsive.",
  },
  {
    icon: "data",
    title: "Python y datos",
    items: ["Python", "pandas", "NumPy", "Excel", "CSV"],
    note: "Limpieza, validación, transformación y exportación de datos.",
  },
  {
    icon: "database",
    title: "Bases de datos y backend",
    items: ["SQL", "PostgreSQL", "Access", "Django"],
    note: "Consultas y migraciones; fundamentos de backend con Django.",
  },
  {
    icon: "tools",
    title: "Herramientas",
    items: ["Git", "GitHub", "Vite", "Material UI", "Refine"],
    note: "Control de versiones y herramientas utilizadas en mis proyectos.",
  },
];
export type Project = {
  id: string;
  title: string;
  category: "Web" | "Datos" | "Experimental";
  type: string;
  description: string;
  technologies: string[];
  role: string;
  href?: string;
  note?: string;
  visual: "table" | "data" | "shop" | "vet" | "code" | "ai";
  featured?: boolean;
};
export const projects: Project[] = [
  {
    id: "dbfront",
    title: "DBFront",
    category: "Web",
    type: "Contribución",
    description:
      "Interfaz de gestión de registros con tablas, búsqueda, formularios de edición y paginación. Trabajo sobre operaciones de datos conectadas a una API.",
    technologies: ["React", "JavaScript", "Material UI", "API REST"],
    role: "Implementación de navegación y controles de datos en el frontend.",
    note: "Repositorio privado · Detalles del alcance por correo",
    visual: "table",
    featured: true,
  },
  {
    id: "ventas",
    title: "Datos de ventas, listos para analizar",
    category: "Datos",
    type: "Proyecto académico y práctico",
    description:
      "Limpieza de archivos CSV: conversión de tipos, tratamiento de nulos, detección de duplicados y validación de inconsistencias. Exportación de datos y reportes de incidencias.",
    technologies: ["Python", "pandas", "NumPy", "CSV"],
    role: "Procesamiento, validación y preparación de archivos y reportes.",
    note: "Proyecto documentado en el CV",
    visual: "data",
    featured: true,
  },
  {
    id: "ciavolella",
    title: "Ciavolella Interface",
    category: "Web",
    type: "Contribución",
    description:
      "Interfaz administrativa para un sistema de información, con vistas y formularios para trabajar con registros de clientes, facturación y otras entidades.",
    technologies: ["React", "TypeScript", "Refine", "Material UI"],
    role: "Participación en la implementación de la interfaz de gestión.",
    href: "https://github.com/Neutroflash/ciavolella-interface",
    visual: "table",
  },
  {
    id: "tasky",
    title: "Tasky Webapp",
    category: "Web",
    type: "Proyecto práctico",
    description:
      "Interfaz de catálogo comercial con navegación, carrusel y tarjetas de productos. Un ejercicio de composición visual y desarrollo de componentes con React.",
    technologies: ["React", "TypeScript", "Vite", "Material UI"],
    role: "Desarrollo del frontend disponible en mi repositorio.",
    href: "https://github.com/MiguelPlasencia1902/tasky-webapp",
    visual: "shop",
  },
  {
    id: "curalani",
    title: "Curalani Vet",
    category: "Web",
    type: "Proyecto práctico",
    description:
      "Sitio de presentación para una veterinaria, con navegación, secciones informativas y carrusel de imágenes. Práctica de maquetación y componentes en Svelte.",
    technologies: ["SvelteKit", "Tailwind CSS", "Flowbite"],
    role: "Desarrollo de la interfaz y composición de las secciones.",
    href: "https://github.com/MiguelPlasencia1902/curalani-vet",
    visual: "vet",
  },
  {
    id: "migracion",
    title: "De Access a PostgreSQL",
    category: "Datos",
    type: "Colaboración práctica",
    description:
      "Participación en la migración de datos y relaciones desde Microsoft Access hacia PostgreSQL, dentro de un proyecto web con backend en Django.",
    technologies: ["Access", "PostgreSQL", "Django", "SQL"],
    role: "Colaboración en el traslado y la organización de la información.",
    note: "Experiencia documentada en el CV",
    visual: "data",
  },
  {
    id: "portafolio",
    title: "Portafolio personal",
    category: "Web",
    type: "Proyecto propio",
    description:
      "Mi espacio para presentar servicios, proyectos y experiencia. Desarrollado con Next.js y TypeScript, con diseño responsive y contenido orientado a encargos freelance.",
    technologies: ["Next.js", "React", "TypeScript", "CSS"],
    role: "Desarrollo de la web y organización del contenido.",
    href: "https://github.com/MiguelPlasencia1902/portafolio",
    visual: "code",
  },
  {
    id: "capri",
    title: "CAPRI / Pruebas de IA",
    category: "Experimental",
    type: "Exploración personal",
    description:
      "Repositorio de experimentación sobre la base de Capri, un asistente de escritorio existente. Un espacio para estudiar su estructura y explorar aplicaciones de IA.",
    technologies: ["C#", ".NET", "IA"],
    role: "Exploración de una base existente; el proyecto original es de sus respectivos autores.",
    href: "https://github.com/MiguelPlasencia1902/Puerbas_IA_Con_Base",
    visual: "ai",
  },
];
