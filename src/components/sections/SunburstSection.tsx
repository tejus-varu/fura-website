"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import type { SunburstNode } from "@/types";
import { sunburstData } from "@/config/sunburstData";
import SectionHeader from "@/components/ui/SectionHeader";
import { CLASS_BANDS, classBandLabels } from "@/config/programs";
import type { ClassBand } from "@/types";

interface HierarchyDatum {
  name: string;
  value?: number;
  color?: string;
  children?: HierarchyDatum[];
}

/** Find the class band node by matching the first number of the band ("4", "6", "9") */
function buildBandData(band: ClassBand): HierarchyDatum {
  const firstNum = band.split("-")[0];
  const bandNode = sunburstData.children?.find((c) =>
    c.name.includes(firstNum)
  );
  return {
    name: sunburstData.name,
    children: bandNode ? [bandNode as HierarchyDatum] : [],
  };
}

/** Pull domain-level children (Agriculture, Folk Arts, etc.) for the legend */
function getDomains(band: ClassBand): SunburstNode[] {
  const firstNum = band.split("-")[0];
  return (
    sunburstData.children?.find((c) => c.name.includes(firstNum))?.children ??
    []
  );
}

export default function SunburstSection() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeBand, setActiveBand] = useState<ClassBand>("1-5");
  const [tooltip, setTooltip] = useState<{
    name: string;
    value: number;
    color: string;
  } | null>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const size = Math.min(containerWidth, 460);
    const radius = size / 2;

    const el = svgRef.current;
    d3.select(el).selectAll("*").remove();

    const svg = d3
      .select(el)
      .attr("width", size)
      .attr("height", size)
      .attr("viewBox", `${-radius} ${-radius} ${size} ${size}`);

    const data = buildBandData(activeBand);

    const root = d3
      .hierarchy<HierarchyDatum>(data)
      .sum((d) => d.value ?? 0)
      .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

    const partition = d3.partition<HierarchyDatum>().size([2 * Math.PI, radius]);
    partition(root);

    type ArcDatum = d3.HierarchyRectangularNode<HierarchyDatum>;

    const arc = d3
      .arc<ArcDatum>()
      .startAngle((d) => d.x0)
      .endAngle((d) => d.x1)
      .padAngle(0.02)
      .padRadius(radius / 2)
      .innerRadius((d) => d.y0 + 6)
      .outerRadius((d) => d.y1 - 3);

    const g = svg.append("g");

    // Draw arcs (skip root depth 0)
    g.selectAll("path")
      .data(root.descendants().filter((d) => d.depth > 0))
      .join("path")
      .attr("d", arc as never)
      .attr("fill", (d) => (d.data as HierarchyDatum).color ?? "#4A9A52")
      .attr("fill-opacity", (d) => (d.depth === 1 ? 0.9 : 0.72))
      .attr("cursor", "pointer")
      .style("transition", "fill-opacity 0.2s ease")
      .on("mouseover", function (_, d) {
        d3.select(this).attr("fill-opacity", 1);
        setTooltip({
          name: (d.data as HierarchyDatum).name,
          value: Math.round(d.value ?? 0),
          color: (d.data as HierarchyDatum).color ?? "#4A9A52",
        });
      })
      .on("mouseout", function (_, d) {
        d3.select(this).attr("fill-opacity", d.depth === 1 ? 0.9 : 0.72);
        setTooltip(null);
      });

    // Outer ring labels — only if arc is wide enough
    g.selectAll("text.activity-label")
      .data(
        root.descendants().filter((d) => {
          const rectNode = d as d3.HierarchyRectangularNode<HierarchyDatum>;
          if(rectNode.x1 !== undefined && rectNode.x0 !== undefined) {
             const angle = rectNode.x1 - rectNode.x0;
             return d.depth === 2 && angle > 0.22;
          }
          return false;
        })
      )
      .join("text")
      .attr("class", "activity-label")
      .attr("transform", (d) => {
        const rectNode = d as d3.HierarchyRectangularNode<HierarchyDatum>;
        const midAngle = ((rectNode.x0 + rectNode.x1) / 2) * (180 / Math.PI) - 90;
        const midR = (rectNode.y0 + rectNode.y1) / 2;
        const flip = midAngle > 90 ? 180 : 0;
        return `rotate(${midAngle}) translate(${midR},0) rotate(${flip})`;
      })
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", "white")
      .attr("font-size", "9.5")
      .attr("font-weight", "600")
      .attr("pointer-events", "none")
      .text((d) => {
        const name = (d.data as HierarchyDatum).name;
        return name.length > 13 ? name.slice(0, 11) + "…" : name;
      });

    // Inner ring domain labels
    g.selectAll(".domain-label")
      .data(
        root.descendants().filter((d) => {
          const rectNode = d as d3.HierarchyRectangularNode<HierarchyDatum>;
          if(rectNode.x1 !== undefined && rectNode.x0 !== undefined) {
             const angle = rectNode.x1 - rectNode.x0;
             return d.depth === 1 && angle > 0.4;
          }
          return false;
        })
      )
      .join("text")
      .attr("class", "domain-label")
      .attr("transform", (d) => {
        const rectNode = d as d3.HierarchyRectangularNode<HierarchyDatum>;
        const midAngle = ((rectNode.x0 + rectNode.x1) / 2) * (180 / Math.PI) - 90;
        const midR = (rectNode.y0 + rectNode.y1) / 2;
        const flip = midAngle > 90 ? 180 : 0;
        return `rotate(${midAngle}) translate(${midR},0) rotate(${flip})`;
      })
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", "white")
      .attr("font-size", "10")
      .attr("font-weight", "700")
      .attr("pointer-events", "none")
      .text((d) => {
        const name = (d.data as HierarchyDatum).name;
        return name.length > 12 ? name.slice(0, 10) + "…" : name;
      });

    // Center text
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", "-8")
      .attr("font-size", "12")
      .attr("font-weight", "700")
      .attr("fill", "var(--color-green-900)")
      .text(classBandLabels[activeBand]);

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", "10")
      .attr("font-size", "9")
      .attr("fill", "var(--color-green-600)")
      .text("Activity Mix");
  }, [activeBand]);

  return (
    <section
      id="activity-mix"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, var(--color-earth) 0%, var(--color-cream) 100%)",
      }}
      aria-label="Activity mix by class band"
    >
      <div className="container-xl">
        <SectionHeader
          badge="Activity Mix"
          badgeVariant="gold"
          title="How Activities Are Balanced by Class Group"
          subtitle="Agriculture, folk arts, nature learning, and nutrition — each class band gets a thoughtfully weighted mix matched to their age, maturity, and learning goals."
        />

        {/* Band tab switcher */}
        <div
          className="flex flex-wrap gap-2 mb-10 p-1.5 rounded-2xl w-fit mx-auto"
          style={{ background: "var(--color-green-100)" }}
          role="tablist"
          aria-label="Select class band"
        >
          {CLASS_BANDS.map((band) => (
            <button
              key={band}
              role="tab"
              id={`tab-${band}`}
              aria-selected={activeBand === band}
              aria-controls={`panel-${band}`}
              onClick={() => setActiveBand(band)}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={
                activeBand === band
                  ? {
                      background: "var(--color-green-700)",
                      color: "white",
                      boxShadow: "0 2px 12px rgba(45,106,53,0.35)",
                    }
                  : {
                      background: "transparent",
                      color: "var(--color-green-700)",
                    }
              }
            >
              {classBandLabels[band]}
            </button>
          ))}
        </div>

        {/* Chart + legend layout */}
        <div
          id={`panel-${activeBand}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeBand}`}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        >
          {/* D3 Sunburst (Hidden on mobile for better UX) */}
          <div
            ref={containerRef}
            className="hidden md:flex relative items-center justify-center w-full max-w-[460px]"
          >
            <svg
              ref={svgRef}
              aria-label={`Activity distribution chart for ${classBandLabels[activeBand]}`}
            />

            {/* Hover tooltip */}
            {tooltip && (
              <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 card-base px-5 py-3 text-center pointer-events-none z-10"
                style={{ minWidth: "170px" }}
              >
                <span
                  className="inline-block w-3 h-3 rounded-full mb-1.5"
                  style={{ background: tooltip.color }}
                />
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-green-900)" }}
                >
                  {tooltip.name}
                </p>
                <p className="text-xs" style={{ color: "var(--color-green-600)" }}>
                  Relative weight: {tooltip.value}
                </p>
              </div>
            )}
          </div>

          {/* Legend / Mobile Fallback */}
          <div className="flex flex-col gap-4 min-w-[200px] w-full md:w-auto card-base md:bg-transparent md:shadow-none p-6 md:p-0">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-green-500)" }}
            >
              Program Domains — {classBandLabels[activeBand]}
            </p>
            {getDomains(activeBand).map((domain) => (
              <div key={domain.name} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-sm shrink-0"
                    style={{ background: domain.color }}
                  />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-green-900)" }}
                  >
                    {domain.name}
                  </span>
                </div>
                {domain.children && (
                  <ul className="ml-6 flex flex-col gap-1">
                    {domain.children.map((activity) => (
                      <li
                        key={activity.name}
                        className="text-xs"
                        style={{ color: "var(--color-green-600)" }}
                      >
                        · {activity.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <p
              className="text-xs mt-2 leading-relaxed opacity-60"
              style={{ color: "var(--color-green-700)" }}
            >
              Hover over chart segments to explore individual activities.
              Inner ring = domains, outer ring = specific activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
