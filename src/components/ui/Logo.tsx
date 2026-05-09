import React from 'react';
import { brand } from '@/config/brand';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className = "", showText = true, light = false }: LogoProps) {
  const textColor = light ? "white" : "var(--color-gold-500)";
  const subTextColor = light ? "rgba(255,255,255,0.7)" : "var(--color-green-200)";
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Icon Mark */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* The 'U' bowl / Field shape */}
        <path
          d="M20 20V60C20 76.5685 33.4315 90 50 90C66.5685 90 80 76.5685 80 60V20"
          stroke={light ? "white" : "#1A1A1A"}
          strokeWidth="12"
          strokeLinecap="round"
        />
        
        {/* Soil inside */}
        <path
          d="M35 65C35 56.7157 41.7157 50 50 50C58.2843 50 65 56.7157 65 65H35Z"
          fill="#6B4E2E"
        />
        
        {/* Sprout Stem */}
        <path
          d="M50 60V35"
          stroke="#2E7D32"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Left Leaf */}
        <path
          d="M50 45C50 45 35 45 30 35C25 25 40 25 50 35"
          fill="#2E7D32"
        />
        
        {/* Right Leaf */}
        <path
          d="M50 45C50 45 65 45 70 35C75 25 60 25 50 35"
          fill="#7FBF3F"
        />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-display text-2xl font-bold tracking-tight"
            style={{ color: textColor }}
          >
            {brand.shortName}
          </span>
          <span
            className="text-[9px] font-medium tracking-[0.05em] uppercase opacity-90 mt-0.5"
            style={{ color: subTextColor }}
          >
            Agriculture Academy
          </span>
        </div>
      )}
    </div>
  );
}
