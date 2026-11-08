import Image from "next/image";
import { Arrow, Icon } from "./Components/Icons";
import { Projects } from "./Components/Projects";
import { contact, services, skills } from "./content";

export default function Home() {
  return (
    <>
      <section
        className="hero section-shell"
        id="inicio"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy">
          <span className="availability">
            <span /> Disponible para proyectos freelance
          </span>
          <p className="eyebrow hero-name">HOLA, SOY MIGUEL PLASENCIA</p>
          <h1 id="hero-title">
            Desarrollo web.
            <br />
            <span>Datos en orden.</span>
            <br />
            Soluciones prácticas.
          </h1>
          <p className="hero-role">
            Desarrollador web <span>·</span> Python <span>·</span> SQL
          </p>
          <p className="hero-description">
            Te ayudo a crear tu presencia web, organizar tus datos y automatizar
            tareas. Construyo experiencia con proyectos reales, colaboraciones y
            soluciones que puedes usar.
          </p>
          <div className="actions">
            <a className="button primary" href="#proyectos">
              Ver proyectos <Arrow />
            </a>
            <a className="button secondary" href={contact.cv} download>
              <Icon name="download" /> Descargar CV
            </a>
            <a className="text-link" href="#contacto">
              Hablemos <Arrow />
            </a>
          </div>
          <div className="hero-location">
            <Icon name="location" /> En Italia · Trabajo remoto en español
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <Image
              src="/images/miguel-plasencia.jpeg"
              alt="Miguel Plasencia, desarrollador web y estudiante de Ingeniería de Sistemas"
              width={1254}
              height={1254}
              priority
              sizes="(max-width: 760px) 85vw, 420px"
            />
            <div className="portrait-caption">
              <span>Miguel Plasencia</span>
              <span>Web, Python y datos</span>
            </div>
          </div>
          <div className="portrait-tag">
            <span className="code-mark">&lt;/&gt;</span>
            <div>
              De una necesidad concreta<span>a una solución funcional.</span>
            </div>
          </div>
          <span className="portrait-coordinate" aria-hidden="true">
            CONSTRUIR · ORGANIZAR · SIMPLIFICAR
          </span>
        </div>
      </section>
      <div className="specialties">
        <div className="section-shell">
          <span>Un enfoque práctico</span>
          <p>
            Desarrollo web <b>✦</b> Python y automatización <b>✦</b> SQL y
            análisis de datos
          </p>
        </div>
      </div>
      <section
        className="section-shell section"
        id="servicios"
        aria-labelledby="services-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / EN QUÉ PUEDO AYUDARTE</p>
            <h2 id="services-title">
              Menos tareas pendientes.
              <br />
              <span>Más soluciones.</span>
            </h2>
          </div>
          <p>
            Encargos con un alcance definido, comunicación directa y entregables
            que puedas revisar.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="card-top">
                <Icon name={service.icon} />
                <span>0{index + 1}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-delivery">
                <span>QUÉ TE LLEVAS</span>
                {service.delivery}
              </div>
            </article>
          ))}
        </div>
        <p className="section-note">
          ¿Necesitas soporte en una web pequeña? También puedo ayudarte a
          ajustar interfaces, corregir estilos e incorporar secciones.{" "}
          <a href="#contacto">
            Cuéntame qué necesitas <Arrow />
          </a>
        </p>
      </section>
      <section
        className="projects-section"
        id="proyectos"
        aria-labelledby="projects-title"
      >
        <div className="section-shell section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / TRABAJO EN PRÁCTICA</p>
              <h2 id="projects-title">
                Proyectos con <span>contexto.</span>
              </h2>
            </div>
            <p>
              Una selección de desarrollo web, trabajo con datos y exploraciones
              personales. Este es el alcance de mi participación.
            </p>
          </div>
          <Projects />
        </div>
      </section>
      <section
        className="section-shell section about-grid"
        id="sobre-mi"
        aria-labelledby="about-title"
      >
        <div>
          <p className="eyebrow">03 / DETRÁS DEL CÓDIGO</p>
          <h2 id="about-title">
            Estoy construyendo
            <br />
            <span>mi trayectoria.</span>
          </h2>
          <p className="about-lead">
            Soy Miguel, estudiante de Ingeniería de Sistemas en la Universidad
            San Ignacio de Loyola.
          </p>
          <p>
            Me enfoco en desarrollo web, Python, SQL y automatización. He
            participado en proyectos académicos y colaboraciones prácticas:
            desde interfaces para gestionar información hasta limpieza de datos
            y migraciones de bases de datos.
          </p>
          <p>
            Estoy iniciando mi recorrido profesional como freelance. Busco
            encargos en los que pueda aportar con lo que ya sé hacer, acordar un
            alcance realista y entregar una solución funcional.
          </p>
          <a className="text-link" href={contact.cv} download>
            Conoce mi perfil completo <Icon name="download" />
          </a>
        </div>
        <aside className="approach">
          <span className="eyebrow">ASÍ ME GUSTA TRABAJAR</span>
          {[
            {
              n: "01",
              title: "Entender antes de construir",
              text: "Revisamos tu necesidad, los archivos o la web actual y el resultado que esperas.",
            },
            {
              n: "02",
              title: "Acordar un alcance claro",
              text: "Definimos tareas, entregables y una forma sencilla de revisar los avances.",
            },
            {
              n: "03",
              title: "Entregar algo que puedas usar",
              text: "Compartimos el resultado, revisamos los detalles y explico cómo utilizarlo.",
            },
          ].map((item) => (
            <div className="approach-step" key={item.n}>
              <span>{item.n}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </aside>
      </section>
      <section
        className="section-shell section skills-section"
        id="habilidades"
        aria-labelledby="skills-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / HERRAMIENTAS DE TRABAJO</p>
            <h2 id="skills-title">
              La tecnología, <span>con propósito.</span>
            </h2>
          </div>
          <p>
            Conocimientos aplicados en mis proyectos. Elijo las herramientas
            según la tarea y su alcance.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.title}>
              <Icon name={group.icon} />
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <p>{group.note}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="section-shell section journey-section"
        id="trayectoria"
        aria-labelledby="journey-title"
      >
        <div>
          <p className="eyebrow">05 / FORMACIÓN Y PARTICIPACIÓN</p>
          <h2 id="journey-title">
            Aprender.
            <br />
            Aplicar. <span>Construir.</span>
          </h2>
        </div>
        <div className="timeline">
          <article>
            <span className="timeline-label">FORMACIÓN EN CURSO</span>
            <h3>Ingeniería de Sistemas · USIL</h3>
            <p>
              Estudios universitarios en progreso. Formación que complemento con
              proyectos de desarrollo web y tratamiento de datos.
            </p>
          </article>
          <article>
            <span className="timeline-label">COLABORACIÓN PRÁCTICA</span>
            <h3>Interfaces y bases de datos</h3>
            <p>
              Participación en Ciavolella y DBFront, junto con experiencia
              práctica en migración de datos y relaciones de Access a PostgreSQL
              en un entorno Django.
            </p>
          </article>
          <article>
            <span className="timeline-label">ACTUALMENTE</span>
            <h3>Primeros encargos freelance</h3>
            <p>
              Disponible para proyectos remotos de desarrollo web, limpieza de
              datos, consultas SQL y automatizaciones sencillas con Python.
            </p>
          </article>
        </div>
      </section>
      <section
        className="section-shell contact-section"
        id="contacto"
        aria-labelledby="contact-title"
      >
        <div className="contact-panel">
          <div>
            <p className="eyebrow">06 / HABLEMOS DE TU PROYECTO</p>
            <h2 id="contact-title">
              ¿Qué necesitas
              <br />
              <span>resolver?</span>
            </h2>
            <p>
              Cuéntame qué quieres hacer, qué tienes ahora y para cuándo lo
              necesitas. Podemos empezar por una tarea concreta.
            </p>
            <a className="button primary" href={contact.mailto}>
              Escríbeme por correo <Arrow />
            </a>
          </div>
          <div className="contact-details">
            <span className="contact-label">CONTACTO DIRECTO</span>
            <a className="email-link" href={contact.mailto}>
              {contact.email}
              <Arrow />
            </a>
            <p>En Italia · Disponible para trabajo remoto</p>
            <div className="contact-links">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" /> GitHub <Arrow />
              </a>
              <a href={contact.cv} download>
                <Icon name="download" /> Descargar CV en PDF
              </a>
            </div>
            <p className="contact-hint">
              Para trabajos con datos, describe el formato y el volumen
              aproximado. Para una web, comparte su objetivo y las secciones que
              necesitas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
