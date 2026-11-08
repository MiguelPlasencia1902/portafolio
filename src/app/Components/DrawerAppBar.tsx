"use client";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Icons";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
];
export default function DrawerAppBar() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="section-shell nav-inner">
        <a
          className="wordmark"
          href="#inicio"
          aria-label="Miguel Plasencia, inicio"
        >
          <span className="monogram">
            mp<span>.</span>
          </span>
          <span>
            Miguel Plasencia
            <span className="wordmark-sub">DESARROLLO WEB Y DATOS</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          ref={button}
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          {open ? "Cerrar ✕" : "Menú ☰"}
        </button>
        <nav
          id="main-nav"
          aria-label="Navegación principal"
          className={open ? "nav-links is-open" : "nav-links"}
        >
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contacto"
            onClick={() => setOpen(false)}
          >
            Hablemos <Arrow />
          </a>
        </nav>
      </div>
    </header>
  );
}
