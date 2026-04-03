import type { AhrefsBarItem } from "@/content/ahrefs-bar";

const iconClass = "h-6 w-6 text-primary";

export function AhrefsBarIcon({ icon }: Pick<AhrefsBarItem, "icon">) {
  switch (icon) {
    case "explorer":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 5h16v14H4V5z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "keywords":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M11 18a7 7 0 100-14 7 7 0 000 14zM21 21l-4.3-4.3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "audit":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3l7 4v10l-7 4-7-4V7l7-4z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M12 12l3-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "rank":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 15l3-4 3 2 4-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "toolbar":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 7h16v10H4V7z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M8 11h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
