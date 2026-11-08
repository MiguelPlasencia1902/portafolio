# Portafolio de Miguel Plasencia

Portafolio en español para presentar servicios freelance de desarrollo web, limpieza de datos, SQL y automatización con Python. Incluye proyectos propios, colaboraciones, formación y contacto directo.

## Stack

Next.js 16 (App Router), React 19, TypeScript y CSS responsive. Se conserva la identidad del proyecto original: azul noche `#050F21` / `#061738` y azul `#4675F5`. Roboto se sirve localmente mediante la dependencia existente `@fontsource/roboto`; no se solicitan fuentes a Google.

La página principal se renderiza en el servidor. Solo la navegación móvil y los filtros de proyectos necesitan JavaScript de cliente. No se añadieron dependencias de ejecución.

## Ejecutar localmente

Requiere Node.js 20.9 o superior y npm.

```powershell
cd C:\Users\migue\WebstormProjects\portafolio
npm.cmd ci
npm.cmd run dev
```

Abre http://localhost:3000. En PowerShell se usa `npm.cmd` para evitar restricciones de ejecución de `npm.ps1`. En otros terminales puedes usar `npm`.

## Verificar y preparar producción

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npm.cmd run start
```

`build` genera la versión optimizada; `start` la sirve localmente. El proyecto se puede desplegar con un proveedor compatible con Next.js, usando `npm run build` y `npm run start`. No requiere claves, base de datos ni variables de entorno. No se ha publicado automáticamente.

## Estructura

- `src/app/page.tsx`: inicio, servicios, proyectos, sobre mí, habilidades, trayectoria y contacto.
- `src/app/content.ts`: datos de contacto, servicios, habilidades y proyectos. Editar aquí títulos, descripciones, tecnologías, roles y enlaces.
- `src/app/Components/DrawerAppBar.tsx`: navegación responsive con cierre mediante Escape.
- `src/app/Components/Projects.tsx`: tarjetas y filtros accesibles por categoría.
- `src/app/Components/Icons.tsx`: iconos SVG compartidos.
- `src/app/styles/global.css`: paleta, componentes visuales, breakpoints y preferencia de movimiento reducido.
- `src/app/layout.tsx`: idioma español, metadatos, fuentes locales, cabecera y pie.
- `public/images/miguel-plasencia.jpeg`: foto proporcionada por Miguel.
- `public/documents/CV_Miguel_Plasencia.pdf`: CV descargable proporcionado por Miguel.

## Contenido y alcance

El contenido parte del CV local y de los repositorios vinculados. Tasky se describe como interfaz de catálogo comercial según su código. CAPRI se presenta como exploración de una base existente, con atribución al proyecto original. Los trabajos de limpieza de datos y migración se basan en el CV; no se inventaron métricas, fechas, clientes ni demos públicas.

DBFront es privado: se describe la contribución y no se publica un enlace que requiere permisos. Ciavolella y los repositorios personales tienen enlaces de código. Los gráficos de las tarjetas son ilustraciones en CSS, no capturas de productos terminados. Actualizar roles si se dispone de información adicional verificable.

El contacto usa `mailto:` y necesita que el visitante tenga un cliente de correo configurado. Se retiró el formulario cuyo endpoint era de ejemplo. No se publica LinkedIn porque no se encontró un perfil verificable. La ubicación se actualizó a Italia según el CV.

## Al publicar

Después de asignar el dominio definitivo, añadir la URL canónica y un sitemap con ese dominio si se desea. Los metadatos de título, descripción, Open Graph y Twitter ya están preparados, sin una dirección de producción inventada. Mantener el PDF actualizado reemplazando el archivo en `public/documents/`.
