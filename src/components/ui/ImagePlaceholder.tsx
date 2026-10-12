import { Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  caption?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2";
  badge?: string;
  className?: string;
}

export default function ImagePlaceholder({
  src,
  alt,
  caption,
  aspectRatio = "16/9",
  badge,
  className = "",
}: ImagePlaceholderProps) {
  const aspectClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
  }[aspectRatio];

  return (
    <figure className={`flex flex-col gap-2 ${className}`}>
      <div
        className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden border border-emerald-900/10 shadow-sm flex flex-col items-center justify-center p-6 text-center transition-all duration-200 group`}
        style={{
          background:
            "linear-gradient(135deg, var(--color-green-100) 0%, var(--color-earth) 50%, var(--color-cream) 100%)",
        }}
      >
        {src ? (
          // When an image URL is supplied
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          // Graceful placeholder with subtle pattern and accessible alt text
          <>
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--color-green-900) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />
            {badge && (
              <span className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/80 text-[var(--color-green-800)] border border-emerald-900/10 shadow-xs">
                {badge}
              </span>
            )}
            <div className="w-12 h-12 rounded-2xl bg-white/70 border border-emerald-900/10 flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform duration-200">
              <ImageIcon
                size={22}
                style={{ color: "var(--color-green-700)" }}
                aria-hidden="true"
              />
            </div>
            <p className="text-xs font-semibold text-[var(--color-green-900)] max-w-xs leading-snug">
              {alt}
            </p>
            <span className="text-[10px] text-[var(--color-green-600)] mt-1 opacity-70">
              Visual Documentation Slot
            </span>
          </>
        )}
      </div>
      {caption && (
        <figcaption className="text-xs text-[var(--color-green-700)] italic px-1">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
