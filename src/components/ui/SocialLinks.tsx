import React from "react";
import { brand } from "@/config/brand";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  light?: boolean;
}

/**
 * Clean SVG brand icons for social channels.
 * Uses currentColor to adapt to any background/theme seamlessly.
 */
export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

/**
 * Header and Footer Social Links.
 * Only displays active links if a valid URL or handle is configured in brand.social.
 * Unconfigured destinations remain hidden to avoid sending users to fake destinations.
 */
export default function SocialLinks({
  className = "",
  iconClassName = "w-3.5 h-3.5",
  light = true,
}: SocialLinksProps) {
  const items = [
    {
      id: "instagram",
      label: "Instagram",
      url: brand.social.instagram,
      icon: InstagramIcon,
    },
    {
      id: "facebook",
      label: "Facebook",
      url: brand.social.facebook,
      icon: FacebookIcon,
    },
    {
      id: "whatsapp",
      label: "WhatsApp Business",
      url: brand.social.whatsapp,
      icon: WhatsAppIcon,
    },
  ];

  // Filter only configured links (do not display fake or placeholder handles)
  const configuredItems = items.filter(
    (item): item is typeof item & { url: string } =>
      typeof item.url === "string" && item.url.trim().length > 0
  );

  if (configuredItems.length === 0) {
    // When no external social URLs are configured yet, render a subtle indicator or return null
    return null;
  }

  const linkColorClass = light
    ? "text-[var(--color-green-200)] hover:text-white hover:bg-white/10"
    : "text-[var(--color-green-800)] hover:text-[var(--color-green-950)] hover:bg-black/5";

  return (
    <div className={`flex items-center gap-1.5 ${className}`} aria-label="Social media links">
      {configuredItems.map(({ id, label, url, icon: Icon }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`FURAA on ${label}`}
          title={`Follow FURAA on ${label}`}
          className={`p-1.5 rounded-lg transition-all duration-150 ${linkColorClass}`}
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
}
