import type { ReactNode } from "react";
export type IconName =
  | "code"
  | "data"
  | "terminal"
  | "database"
  | "tools"
  | "download"
  | "location"
  | "github";
const paths: Record<IconName, ReactNode> = {
  code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18" />,
  data: (
    <>
      <path d="M4 3h12l4 4v14H4zM16 3v5h4M8 12h8M8 16h8M11 10v9" />
    </>
  ),
  terminal: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m6 9 3 3-3 3m6 0h5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
    </>
  ),
  tools: (
    <path d="m14 6 4 4m-9 5-6 6m10-9 8-8-1-1-8 8M3 3l5 1 1 4-2 2-4-2zM9 10l12 11" />
  ),
  download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />,
  location: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  github: (
    <path d="M9 20c-4 1-4-2-6-2m15 4v-4c0-1-.5-2-1-2 4-.5 5-2.5 5-5 0-1.5-.5-2.5-1.5-3.5.3-1 .2-2-.2-3-2-.3-4 1-4 1a14 14 0 0 0-8 0s-2-1.3-4-1c-.4 1-.5 2-.2 3C3 8.5 2.5 9.5 2.5 11c0 2.5 1 4.5 5 5-.5.5-1 1-1 2v4" />
  ),
};
export function Icon({ name }: { name: IconName }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
export function Arrow() {
  return (
    <svg
      className="icon arrow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}
