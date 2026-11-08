import type { Metadata } from "next";
import Navbar from "./Components/DrawerAppBar";
import { contact } from "./content";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/global.css";

const title = "Miguel Plasencia | Desarrollo web, Python y SQL";
const description =
  "Desarrollo web, limpieza de datos y automatizaciones con Python y SQL. Conoce los proyectos de Miguel Plasencia y consulta por tu próximo encargo freelance.";
export const metadata: Metadata = {
  title,
  description,
  applicationName: "Miguel Plasencia · Portafolio",
  authors: [{ name: "Miguel Plasencia" }],
  keywords: [
    "Miguel Plasencia",
    "desarrollador web",
    "Python",
    "SQL",
    "freelance",
    "limpieza de datos",
    "automatización",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_ES",
    siteName: "Miguel Plasencia",
  },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido">{children}</main>
        <footer className="site-footer section-shell">
          <a className="footer-brand" href="#inicio">
            Miguel Plasencia<span>Web, Python y datos.</span>
          </a>
          <p>© {new Date().getFullYear()} Miguel Plasencia</p>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href="#inicio">Volver arriba ↑</a>
        </footer>
      </body>
    </html>
  );
}
