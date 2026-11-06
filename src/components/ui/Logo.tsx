import React from "react";
import { brand } from "@/config/brand";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "emblem" | "compact" | "badge";
  showText?: boolean;
  light?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  variant = "horizontal",
  showText = true,
  light = true,
  size = "md",
}: LogoProps) {
  const emblemSrc = light ? brand.logo.emblemLight : brand.logo.emblem;
  const badgeSrc = brand.logo.emblemBadge;
  const subTextColor = light ? "rgba(255, 255, 255, 0.75)" : "var(--color-green-700)";
  const textColor = light ? "#FFFFFF" : "var(--color-green-950)";

  // Sizing definitions for U-sprout emblem
  const emblemSizeClasses = {
    sm: "w-9 h-9 sm:w-10 sm:h-10",
    md: "w-11 h-11 sm:w-12 sm:h-12",
    lg: "w-14 h-14 sm:w-16 sm:h-16",
  }[size];

  // Variant: Circular Badge with Gold Trim (favicon, avatars, app icon)
  if (variant === "badge") {
    return (
      <div className={`relative flex items-center justify-center select-none group ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={badgeSrc}
          alt={`${brand.shortName} Badge`}
          className={`${emblemSizeClasses} object-contain transition-transform duration-200 group-hover:scale-105`}
        />
      </div>
    );
  }

  // Variant: Pure U-sprout emblem (no outer ring or text)
  if (variant === "emblem") {
    return (
      <div className={`relative flex items-center justify-center select-none group ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={emblemSrc}
          alt={`${brand.shortName} Emblem`}
          className={`${emblemSizeClasses} object-contain transition-transform duration-200 group-hover:scale-105`}
        />
      </div>
    );
  }

  // Variant: Compact horizontal (for mobile navigation or tight spaces)
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2.5 select-none group ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={emblemSrc}
          alt={`${brand.shortName} Emblem`}
          className="w-9 h-9 object-contain transition-transform duration-200 group-hover:scale-105"
        />
        <div className="flex flex-col leading-none">
          <span
            className="text-lg font-bold tracking-wider font-display"
            style={{ color: textColor }}
          >
            FURAA
          </span>
          {showText && (
            <span
              className="text-[7.5px] font-semibold tracking-[0.2em] uppercase mt-0.5"
              style={{ color: subTextColor }}
            >
              Agriculture Academy
            </span>
          )}
        </div>
      </div>
    );
  }

  // Variant: Default Horizontal Lockup (Desktop Header & Footer)
  // Prominent U-sprout emblem on the left, refined FURAA typography on the right.
  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Prominent U-Sprout Emblem */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={emblemSrc}
        alt={`${brand.shortName} Emblem`}
        className={`${emblemSizeClasses} shrink-0 object-contain transition-transform duration-200 group-hover:scale-105`}
      />

      {/* Refined FURAA Typography Lockup */}
      <div className="flex flex-col items-start leading-none justify-center">
        <span
          className="text-xl sm:text-2xl font-bold tracking-wider font-display"
          style={{ color: textColor }}
        >
          FURAA
        </span>
        {showText && (
          <span
            className="text-[8px] sm:text-[9.5px] font-semibold tracking-[0.24em] uppercase mt-1 pl-0.5"
            style={{ color: subTextColor }}
          >
            Future Ready Agriculture Academy
          </span>
        )}
      </div>
    </div>
  );
}
