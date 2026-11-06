import React from "react";
import type { FallbackType } from "@/config/team";

interface TeamPortraitFallbackProps {
  type: FallbackType;
  name: string;
  title?: string;
  className?: string;
}

export default function TeamPortraitFallback({
  type,
  name,
  title,
  className = "",
}: TeamPortraitFallbackProps) {
  return (
    <div
      className={`relative w-full h-full select-none overflow-hidden bg-[#0a1811] ${className}`}
      role="img"
      aria-label={`${name} — ${title || "Professional Profile Placeholder"}`}
    >
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02] group-focus-within:scale-[1.02]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Background Gradients */}
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#081810" />
            <stop offset="50%" stopColor="#0f261a" />
            <stop offset="100%" stopColor="#05100a" />
          </linearGradient>

          <radialGradient id="haloGrad" cx="50%" cy="38%" r="55%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#15803d" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#05100a" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="goldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2c974" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#b38e34" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="sageStroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#86efac" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.4" />
          </linearGradient>

          {/* Vignette Filter */}
          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Base Background Plate */}
        <rect width="400" height="500" fill="url(#bgGrad)" />
        <rect width="400" height="500" fill="url(#haloGrad)" />

        {/* Editorial Frame & Blueprint Grid */}
        <rect
          x="18"
          y="18"
          width="364"
          height="464"
          rx="14"
          fill="none"
          stroke="rgba(255,255,255,0.09)"
          strokeWidth="1"
        />
        <rect
          x="26"
          y="26"
          width="348"
          height="448"
          rx="10"
          fill="none"
          stroke="rgba(134,239,172,0.14)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Corner Crop Accents */}
        <path d="M 34 46 L 34 34 L 46 34" stroke="#86efac" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M 366 46 L 366 34 L 354 34" stroke="#86efac" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M 34 454 L 34 466 L 46 466" stroke="#86efac" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M 366 454 L 366 466 L 354 466" stroke="#86efac" strokeWidth="1.5" fill="none" opacity="0.7" />

        {/* Specific Thematic Illustration */}
        {type === "agriculture-education" && (
          <g transform="translate(0, -25)">
            {/* Background Halo Rays */}
            <circle cx="200" cy="200" r="95" fill="none" stroke="rgba(134,239,172,0.08)" strokeWidth="1" />
            <circle cx="200" cy="200" r="70" fill="none" stroke="rgba(226,201,116,0.18)" strokeWidth="1" strokeDasharray="3 4" />
            <circle cx="200" cy="200" r="45" fill="none" stroke="rgba(134,239,172,0.18)" strokeWidth="1" />

            {/* Guiding Radiance Lines */}
            <line x1="200" y1="85" x2="200" y2="115" stroke="#e2c974" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <line x1="135" y1="120" x2="155" y2="140" stroke="#e2c974" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <line x1="265" y1="120" x2="245" y2="140" stroke="#e2c974" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <line x1="105" y1="200" x2="130" y2="200" stroke="#86efac" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
            <line x1="295" y1="200" x2="270" y2="200" stroke="#86efac" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

            {/* Open Book / Curriculum Folio Base */}
            <path
              d="M 125 260 C 158 245 190 252 200 262 C 210 252 242 245 275 260 L 275 276 C 242 262 210 268 200 278 C 190 268 158 262 125 276 Z"
              fill="#102d1f"
              stroke="#86efac"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="M 200 262 L 200 278" stroke="#86efac" strokeWidth="1.5" />

            {/* Sprouting Seedling & Educational Growth Stem */}
            <path
              d="M 200 260 Q 200 190 200 150"
              fill="none"
              stroke="url(#sageStroke)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Left Leaf */}
            <path
              d="M 200 210 C 165 200 155 170 185 165 C 195 180 200 195 200 210 Z"
              fill="#143d27"
              stroke="#86efac"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="M 175 175 Q 185 185 200 198" stroke="#86efac" strokeWidth="1" opacity="0.7" fill="none" />

            {/* Right Leaf */}
            <path
              d="M 200 185 C 235 175 245 145 215 140 C 205 155 200 170 200 185 Z"
              fill="#1b4d32"
              stroke="url(#goldStroke)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="M 225 150 Q 215 160 200 173" stroke="#e2c974" strokeWidth="1" opacity="0.7" fill="none" />

            {/* Top Tender Bud / Discovery Sprout */}
            <path
              d="M 200 150 C 192 135 195 120 200 110 C 205 120 208 135 200 150 Z"
              fill="#22c55e"
              stroke="#86efac"
              strokeWidth="1.2"
            />

            {/* Botanical Cell & Educational Node Accents */}
            <circle cx="160" cy="155" r="2.5" fill="#e2c974" opacity="0.8" />
            <circle cx="240" cy="170" r="2.5" fill="#86efac" opacity="0.8" />
            <circle cx="200" cy="100" r="3" fill="#e2c974" filter="url(#subtleGlow)" />
          </g>
        )}

        {type === "strategy-innovation" && (
          <g transform="translate(0, -25)">
            {/* Concentric Strategic Compass Rings */}
            <circle cx="200" cy="200" r="95" fill="none" stroke="rgba(134,239,172,0.08)" strokeWidth="1" />
            <circle cx="200" cy="200" r="68" fill="none" stroke="rgba(226,201,116,0.18)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="38" fill="none" stroke="rgba(134,239,172,0.15)" strokeWidth="1" />

            {/* Hexagonal Strategic Framework */}
            <polygon
              points="200,130 258,163 258,233 200,267 142,233 142,163"
              fill="#0f2f20"
              stroke="#86efac"
              strokeWidth="1.5"
              opacity="0.85"
            />

            {/* Interconnecting Innovation Vectors */}
            <line x1="200" y1="130" x2="200" y2="267" stroke="#86efac" strokeWidth="1" opacity="0.4" />
            <line x1="142" y1="163" x2="258" y2="233" stroke="#86efac" strokeWidth="1" opacity="0.4" />
            <line x1="142" y1="233" x2="258" y2="163" stroke="#86efac" strokeWidth="1" opacity="0.4" />

            {/* Visionary Center Spark / Prism Core */}
            <circle cx="200" cy="200" r="14" fill="#1b4d32" stroke="#e2c974" strokeWidth="2" />
            <polygon points="200,190 204,199 213,200 204,202 200,211 196,202 187,200 196,199" fill="#e2c974" />

            {/* Collaboration Orbit Nodes */}
            <circle cx="200" cy="130" r="5" fill="#86efac" stroke="#081810" strokeWidth="2" />
            <circle cx="258" cy="163" r="5" fill="#e2c974" stroke="#081810" strokeWidth="2" />
            <circle cx="258" cy="233" r="5" fill="#86efac" stroke="#081810" strokeWidth="2" />
            <circle cx="200" cy="267" r="5" fill="#e2c974" stroke="#081810" strokeWidth="2" />
            <circle cx="142" cy="233" r="5" fill="#86efac" stroke="#081810" strokeWidth="2" />
            <circle cx="142" cy="163" r="5" fill="#e2c974" stroke="#081810" strokeWidth="2" />
          </g>
        )}

        {type === "agronomy-sustainability" && (
          <g transform="translate(0, -25)">
            {/* Contoured Agrarian Soil Terraces & Landscape Horizon */}
            <circle cx="200" cy="160" r="42" fill="#18422b" opacity="0.4" />
            <line x1="200" y1="95" x2="200" y2="113" stroke="#e2c974" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <line x1="160" y1="115" x2="172" y2="127" stroke="#e2c974" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <line x1="240" y1="115" x2="228" y2="127" stroke="#e2c974" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

            {/* Contoured Terraces / Furrows */}
            <path
              d="M 100 265 Q 150 235 200 250 T 300 240 L 300 290 L 100 290 Z"
              fill="#0d2618"
              stroke="#86efac"
              strokeWidth="1.2"
              opacity="0.8"
            />

            {/* Central Sheaf of Grain / Wheat Stalks */}
            <path d="M 200 270 Q 198 215 200 160" stroke="#e2c974" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 200 270 Q 185 220 170 175" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M 200 270 Q 215 220 230 175" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            {/* Grain Kernels / Golden Seeds */}
            <ellipse cx="200" cy="155" rx="4" ry="7" fill="#e2c974" stroke="#081810" strokeWidth="1" />
            <ellipse cx="195" cy="170" rx="3.5" ry="6" transform="rotate(-20 195 170)" fill="#e2c974" />
            <ellipse cx="205" cy="170" rx="3.5" ry="6" transform="rotate(20 205 170)" fill="#e2c974" />
            <ellipse cx="194" cy="187" rx="3.5" ry="6" transform="rotate(-25 194 187)" fill="#86efac" />
            <ellipse cx="206" cy="187" rx="3.5" ry="6" transform="rotate(25 206 187)" fill="#86efac" />

            {/* Left Branch Kernels */}
            <ellipse cx="170" cy="173" rx="3" ry="5.5" transform="rotate(-35 170 173)" fill="#86efac" />
            <ellipse cx="177" cy="187" rx="3" ry="5.5" transform="rotate(-30 177 187)" fill="#86efac" />

            {/* Right Branch Kernels */}
            <ellipse cx="230" cy="173" rx="3" ry="5.5" transform="rotate(35 230 173)" fill="#e2c974" />
            <ellipse cx="223" cy="187" rx="3" ry="5.5" transform="rotate(30 223 187)" fill="#e2c974" />

            {/* Water Droplet / Sustainability Loop */}
            <path
              d="M 200 115 C 192 130 186 140 186 148 A 14 14 0 0 0 214 148 C 214 140 208 130 200 115 Z"
              fill="rgba(134,239,172,0.15)"
              stroke="#86efac"
              strokeWidth="1.2"
            />
          </g>
        )}

        {type === "technology-partnerships" && (
          <g transform="translate(0, -25)">
            {/* Digital Constellation Mesh */}
            <circle cx="200" cy="200" r="95" fill="none" stroke="rgba(134,239,172,0.08)" strokeWidth="1" />
            <circle cx="200" cy="200" r="65" fill="none" stroke="rgba(226,201,116,0.12)" strokeWidth="1" strokeDasharray="3 4" />

            {/* Circuit Branches / Tech-Agri Bridge */}
            <path
              d="M 125 235 L 160 235 L 180 205 L 220 205 L 240 235 L 275 235"
              fill="none"
              stroke="#86efac"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />

            {/* Partnership Clasp / Geometric Nodes */}
            <rect x="175" y="191" width="50" height="28" rx="14" fill="#0d2b1c" stroke="#e2c974" strokeWidth="1.5" />
            <path d="M 188 205 Q 200 200 200 205 T 212 205" stroke="#f4efe6" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Code / Data Syntax Motifs < / > */}
            <path d="M 148 180 L 138 190 L 148 200" fill="none" stroke="#86efac" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 252 180 L 262 190 L 252 200" fill="none" stroke="#86efac" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

            {/* Canopy Cloud of Connected Nodes */}
            <circle cx="200" cy="125" r="6" fill="#22c55e" stroke="#081810" strokeWidth="2" />
            <circle cx="165" cy="143" r="4" fill="#e2c974" stroke="#081810" strokeWidth="1.5" />
            <circle cx="235" cy="143" r="4" fill="#86efac" stroke="#081810" strokeWidth="1.5" />
            <circle cx="125" cy="235" r="4.5" fill="#86efac" stroke="#081810" strokeWidth="1.5" />
            <circle cx="275" cy="235" r="4.5" fill="#e2c974" stroke="#081810" strokeWidth="1.5" />
          </g>
        )}

        {/* Lower Editorial Monogram & Name Plate */}
        <g transform="translate(0, 290)">
          {/* Subtle separator line */}
          <line x1="60" y1="20" x2="340" y2="20" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <circle cx="200" cy="20" r="3" fill="#86efac" />

          {/* Badge Pill */}
          <rect
            x="65"
            y="35"
            width="270"
            height="30"
            rx="15"
            fill="#091b12"
            stroke="rgba(134,239,172,0.35)"
            strokeWidth="1"
          />

          {/* Fallback Type Indicator Label */}
          <text
            x="200"
            y="54"
            textAnchor="middle"
            fill="#a7f3d0"
            fontSize="10"
            fontWeight="700"
            letterSpacing="1.2"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            {type === "agriculture-education" && "EXPERIENTIAL PEDAGOGY"}
            {type === "strategy-innovation" && "STRATEGY & INNOVATION"}
            {type === "agronomy-sustainability" && "SUSTAINABLE AGRONOMY"}
            {type === "technology-partnerships" && "DIGITAL & PARTNERSHIPS"}
          </text>

          {/* Person's Name Rendered as Readable Vector Text */}
          <text
            x="200"
            y="98"
            textAnchor="middle"
            fill="#f4efe6"
            fontSize="17"
            fontWeight="700"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            {name}
          </text>

          {/* Optional Title */}
          {title && (
            <text
              x="200"
              y="118"
              textAnchor="middle"
              fill="#e2c974"
              fontSize="12"
              fontWeight="600"
              letterSpacing="0.4"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              {title}
            </text>
          )}

          {/* Editorial Watermark */}
          <text
            x="200"
            y="138"
            textAnchor="middle"
            fill="rgba(255,255,255,0.4)"
            fontSize="9"
            letterSpacing="1.8"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            FURAA ACADEMY LEADERSHIP
          </text>
        </g>
      </svg>
    </div>
  );
}
