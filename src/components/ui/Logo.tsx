import React from 'react';
import { brand } from '@/config/brand';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({
  className = "",
  showText = true,
  light = false,
}: LogoProps) {
  // Use light variant on dark backgrounds (Navbar, Footer)
  // Use dark variant on light backgrounds
  const logoSrc = light ? "/images/logo/furaa-logo-light.png" : "/images/logo/furaa-logo.png";
  const subTextColor = light ? "rgba(255, 255, 255, 0.75)" : "var(--color-green-700)";

  return (
    <div className={`flex flex-col items-start leading-none select-none group ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt={brand.name}
        className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
      />
      {showText && (
        <span
          className="text-[8px] sm:text-[9px] font-semibold tracking-[0.22em] uppercase mt-1 pl-0.5"
          style={{ color: subTextColor }}
        >
          Agriculture Academy
        </span>
      )}
    </div>
  );
}
