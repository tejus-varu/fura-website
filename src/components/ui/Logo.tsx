import React from "react";
import { brand } from "@/config/brand";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "emblem" | "compact";
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
  const wordmarkSrc = light ? brand.logo.lightSrc : brand.logo.src;
  const subTextColor = light ? "rgba(255, 255, 255, 0.75)" : "var(--color-green-700)";
  const textColor = light ? "#FFFFFF" : "var(--color-green-950)";

  // Sizing definitions
  const emblemSizeClasses = {
    sm: "w-8 h-8",
    md: "w-9 h-9 sm:w-10 sm:h-10",
    lg: "w-12 h-12 sm:w-14 sm:h-14",
  }[size];

  // Variant: Pure circular emblem (for mobile logo, favicon, avatar, compact placements)
  if (variant === "emblem") {
    return (
      <div className={`relative flex items-center justify-center select-none group ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={emblemSrc}
          alt={brand.name}
          className={`${emblemSizeClasses} object-contain transition-transform duration-200 group-hover:scale-105`}
        />
      </div>
    );
  }

  // Variant: Compact horizontal (emblem + concise FURAA text for mobile navbars or tight cards)
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2.5 select-none group ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={emblemSrc}
          alt={brand.name}
          className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform duration-200 group-hover:scale-105"
        />
        <div className="flex flex-col leading-none">
          <span
            className="text-lg sm:text-xl font-bold tracking-tight font-display"
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
  // Combines the circular emblem with the official FURAA wordmark
  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Circular Emblem */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={emblemSrc}
        alt={`${brand.shortName} Emblem`}
        className={`${emblemSizeClasses} shrink-0 object-contain transition-transform duration-200 group-hover:scale-105`}
      />

      {/* Wordmark Lockup */}
      <div className="flex flex-col items-start leading-none justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={wordmarkSrc}
          alt={brand.name}
          className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
        />
        {showText && (
          <span
            className="text-[7.5px] sm:text-[8.5px] font-semibold tracking-[0.24em] uppercase mt-1 pl-0.5"
            style={{ color: subTextColor }}
          >
            Future Ready Agriculture Academy
          </span>
        )}
      </div>
    </div>
  );
}
