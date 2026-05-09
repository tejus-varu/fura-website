import { brand } from "@/config/brand";

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="py-10 border-y"
      style={{
        background: "var(--color-green-900)",
        borderColor: "var(--color-green-800)",
      }}
      aria-label="Key statistics"
    >
      <div className="container-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brand.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-display text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "var(--color-gold-500)" }}
              >
                {stat.value}
              </p>
              <p
                className="text-sm font-medium opacity-75"
                style={{ color: "var(--color-green-200)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
