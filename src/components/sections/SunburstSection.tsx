"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import * as d3 from "d3";
import type { SunburstNode, ClassBand } from "@/types";
import { sunburstData, bandSummaries } from "@/config/sunburstData";
import SectionHeader from "@/components/ui/SectionHeader";
import { CLASS_BANDS, classBandLabels } from "@/config/programs";
import { Info, Target, Compass } from "lucide-react";

interface HierarchyDatum {
  name: string;
  value?: number;
  color?: string;
  description?: string;
  learningObjective?: string;
  children?: HierarchyDatum[];
}

const bandToName: Record<ClassBand, string> = {
  "1-4": "Foundation",
  "5-8": "Exploration",
  "9-10": "Specialization",
};

/** Find the class band node by matching module name */
function buildBandData(band: ClassBand): HierarchyDatum {
  const targetName = bandToName[band];
  const bandNode = sunburstData.children?.find((c) => c.name === targetName);
  return {
    name: sunburstData.name,
    children: bandNode ? [bandNode as HierarchyDatum] : [],
  };
}

/** Pull domain-level children (Agriculture, Folk Arts, etc.) for the legend */
function getDomains(band: ClassBand): SunburstNode[] {
  const targetName = bandToName[band];
  return (
    sunburstData.children?.find((c) => c.name === targetName)?.children ?? []
  );
}

export default function SunburstSection() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeBand, setActiveBand] = useState<ClassBand>("1-4");
  const [selectedNode, setSelectedNode] = useState<{
    name: string;
    domain?: string;
    value: number;
    percent: number;
    color: string;
    description?: string;
    learningObjective?: string;
  } | null>(null);

  const [hoveredNode, setHoveredNode] = useState<{
    name: string;
    value: number;
    percent: number;
    color: string;
  } | null>(null);

  const summary = bandSummaries[activeBand];
  const domains = useMemo(() => getDomains(activeBand), [activeBand]);

  // Calculate total weight for current band to compute percentage
  const totalBandValue = useMemo(() => {
    let total = 0;
    domains.forEach((dom) => {
      dom.children?.forEach((act) => {
        total += act.value ?? 0;
      });
    });
    return total || 1;
  }, [domains]);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const size = Math.min(containerWidth, 480);
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
      .padAngle(0.015)
      .padRadius(radius / 2)
      .innerRadius((d) => d.y0 + 5)
      .outerRadius((d) => d.y1 - 3);

    const g = svg.append("g");

    // Draw arcs (skip root depth 0)
    g.selectAll("path")
      .data(root.descendants().filter((d) => d.depth > 0))
      .join("path")
      .attr("d", arc as never)
      .attr("fill", (d) => (d.data as HierarchyDatum).color ?? "#4A9A52")
      .attr("fill-opacity", (d) => (d.depth === 1 ? 0.92 : 0.78))
      .attr("stroke", "white")
      .attr("stroke-width", "1.5")
      .attr("cursor", "pointer")
      .style("transition", "all 0.2s ease")
      .on("mouseover", function (_, d) {
        d3.select(this).attr("fill-opacity", 1).attr("stroke-width", "2.5");
        const datum = d.data as HierarchyDatum;
        const val = Math.round(d.value ?? 0);
        const pct = Math.round((val / totalBandValue) * 100);
        setHoveredNode({
          name: datum.name,
          value: val,
          percent: pct,
          color: datum.color ?? "#4A9A52",
        });
      })
      .on("mouseout", function (_, d) {
        d3.select(this)
          .attr("fill-opacity", d.depth === 1 ? 0.92 : 0.78)
          .attr("stroke-width", "1.5");
        setHoveredNode(null);
      })
      .on("click", function (_, d) {
        const datum = d.data as HierarchyDatum;
        const val = Math.round(d.value ?? 0);
        const pct = Math.round((val / totalBandValue) * 100);
        const parentName = d.depth === 2 ? d.parent?.data.name : undefined;
        setSelectedNode({
          name: datum.name,
          domain: parentName,
          value: val,
          percent: pct,
          color: datum.color ?? "#4A9A52",
          description: datum.description,
          learningObjective: datum.learningObjective,
        });
      });

    // Outer ring labels (depth 2)
    g.selectAll("text.activity-label")
      .data(
        root.descendants().filter((d) => {
          const rectNode = d as d3.HierarchyRectangularNode<HierarchyDatum>;
          if (rectNode.x1 !== undefined && rectNode.x0 !== undefined) {
            const angle = rectNode.x1 - rectNode.x0;
            return d.depth === 2 && angle > 0.2;
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
      .attr("font-size", "9")
      .attr("font-weight", "600")
      .attr("pointer-events", "none")
      .text((d) => {
        const name = (d.data as HierarchyDatum).name;
        return name.length > 13 ? name.slice(0, 11) + "…" : name;
      });

    // Inner ring domain labels (depth 1)
    g.selectAll(".domain-label")
      .data(
        root.descendants().filter((d) => {
          const rectNode = d as d3.HierarchyRectangularNode<HierarchyDatum>;
          if (rectNode.x1 !== undefined && rectNode.x0 !== undefined) {
            const angle = rectNode.x1 - rectNode.x0;
            return d.depth === 1 && angle > 0.35;
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

    // Center circular badge
    const centerG = svg.append("g").attr("class", "center-badge");
    centerG
      .append("circle")
      .attr("r", radius * 0.28)
      .attr("fill", "white")
      .attr("stroke", "var(--color-green-100)")
      .attr("stroke-width", "2")
      .attr("filter", "drop-shadow(0 2px 6px rgba(0,0,0,0.06))");

    centerG
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", "-8")
      .attr("font-size", "11")
      .attr("font-weight", "700")
      .attr("fill", "var(--color-green-900)")
      .text(summary.moduleName.replace(" Module", ""));

    centerG
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", "8")
      .attr("font-size", "9")
      .attr("font-weight", "600")
      .attr("fill", "var(--color-gold-600)")
      .text(summary.classRange);

    centerG
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", "22")
      .attr("font-size", "7.5")
      .attr("fill", "var(--color-green-600)")
      .text("Click to inspect");
  }, [activeBand, summary, totalBandValue]);

  return (
    <section
      id="activity-mix"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, var(--color-earth) 0%, var(--color-cream) 100%)",
      }}
      aria-label="Activity mix dashboard by class band"
    >
      <div className="container-xl">
        <SectionHeader
          badge="Activity Mix Dashboard"
          badgeVariant="gold"
          title="Balanced Learning Across Core Domains"
          subtitle="Explore the proposed activity distribution across Agriculture, Folk Arts, Nature & Ecology, and Nutrition. Each module scales with student maturity."
        />

        {/* Band tab switcher */}
        <div
          className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl w-fit mx-auto"
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
              onClick={() => {
                setActiveBand(band);
                setSelectedNode(null);
                setHoveredNode(null);
              }}
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

        {/* Visible summary banner for selected module */}
        <div
          className="max-w-4xl mx-auto mb-10 p-5 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{
            background: "white",
            borderColor: "var(--color-green-200)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
          }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "var(--color-green-100)" }}
            >
              <Compass size={20} style={{ color: "var(--color-green-700)" }} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                  {summary.moduleName} — {summary.classRange}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                  Proposed Distribution
                </span>
              </div>
              <p className="text-sm text-[var(--color-green-700)] mt-0.5">
                <span className="font-semibold text-[var(--color-green-900)]">Focus:</span> {summary.focus}
              </p>
            </div>
          </div>
          <div className="text-xs text-[var(--color-green-600)] max-w-xs md:text-right border-t md:border-t-0 pt-2 md:pt-0">
            {summary.learningApproach}
          </div>
        </div>

        {/* Desktop View: Chart + Interactive Inspector */}
        <div
          id={`panel-${activeBand}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeBand}`}
          className="hidden md:flex flex-col lg:flex-row items-center justify-center gap-10"
        >
          {/* D3 Sunburst Container */}
          <div
            ref={containerRef}
            className="relative flex items-center justify-center w-full max-w-[480px] shrink-0"
          >
            <svg
              ref={svgRef}
              aria-label={`Interactive activity distribution chart for ${classBandLabels[activeBand]}`}
            />

            {/* Hover tooltip */}
            {hoveredNode && !selectedNode && (
              <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 card-base px-4 py-2 text-center pointer-events-none z-10 bg-white/95 backdrop-blur-sm shadow-lg border border-gray-100"
                style={{ minWidth: "180px" }}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: hoveredNode.color }}
                  />
                  <p className="text-sm font-bold text-[var(--color-green-900)]">
                    {hoveredNode.name}
                  </p>
                </div>
                <p className="text-xs text-[var(--color-green-700)]">
                  Emphasis: ~{hoveredNode.percent}% of module balance
                </p>
              </div>
            )}
          </div>

          {/* Dynamic Inspector & Domain Breakdown */}
          <div className="flex flex-col gap-6 w-full max-w-lg">
            {/* Selected Activity Details Inspector */}
            {selectedNode ? (
              <div
                className="card-base p-6 bg-white border-2 transition-all duration-200"
                style={{ borderColor: selectedNode.color }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    {selectedNode.domain && (
                      <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-gold-600)]">
                        {selectedNode.domain}
                      </span>
                    )}
                    <h4 className="font-display text-lg font-bold text-[var(--color-green-900)]">
                      {selectedNode.name}
                    </h4>
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-bold text-white shrink-0"
                    style={{ background: selectedNode.color }}
                  >
                    ~{selectedNode.percent}%
                  </span>
                </div>

                {selectedNode.description && (
                  <p className="text-sm text-[var(--color-green-800)] mb-3 leading-relaxed">
                    {selectedNode.description}
                  </p>
                )}

                {selectedNode.learningObjective && (
                  <div className="p-3 rounded-xl bg-[var(--color-green-50)] border border-[var(--color-green-100)] flex items-start gap-2.5">
                    <Target size={16} className="mt-0.5 shrink-0 text-[var(--color-green-700)]" />
                    <div>
                      <p className="text-xs font-bold text-[var(--color-green-900)]">Learning Objective</p>
                      <p className="text-xs text-[var(--color-green-700)] mt-0.5">
                        {selectedNode.learningObjective}
                      </p>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setSelectedNode(null)}
                  className="mt-4 text-xs font-semibold text-[var(--color-green-600)] hover:underline"
                >
                  ← Return to full domain breakdown
                </button>
              </div>
            ) : (
              <div className="card-base p-5 bg-white/80 border border-[var(--color-green-100)]">
                <div className="flex items-center gap-2 mb-2 text-[var(--color-green-800)] font-semibold text-sm">
                  <Info size={16} className="text-[var(--color-gold-600)]" />
                  <span>Interactive Exploration</span>
                </div>
                <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                  Click on any segment in the sunburst chart to view detailed activity descriptions, learning objectives, and allocated weight. Inner ring indicates primary domain; outer ring indicates specific hands-on activities.
                </p>
              </div>
            )}

            {/* Domain-wise breakdown list with percentages */}
            <div className="card-base p-6 bg-white flex flex-col gap-5 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between border-b pb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-green-600)]">
                  Domain Breakdown
                </p>
                <p className="text-xs text-[var(--color-green-500)]">
                  Proposed Allocation
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {domains.map((domain) => {
                  let domainTotal = 0;
                  domain.children?.forEach((a) => {
                    domainTotal += a.value ?? 0;
                  });
                  const domainPct = Math.round((domainTotal / totalBandValue) * 100);

                  return (
                    <div key={domain.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-3.5 h-3.5 rounded-sm shrink-0"
                            style={{ background: domain.color }}
                          />
                          <span className="text-sm font-bold text-[var(--color-green-900)]">
                            {domain.name}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-[var(--color-green-700)]">
                          ~{domainPct}%
                        </span>
                      </div>

                      {/* Mini bar */}
                      <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${domainPct}%`,
                            background: domain.color,
                          }}
                        />
                      </div>

                      {domain.children && (
                        <div className="ml-6 flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                          {domain.children.map((activity) => (
                            <button
                              key={activity.name}
                              onClick={() => {
                                const val = activity.value ?? 0;
                                const pct = Math.round((val / totalBandValue) * 100);
                                setSelectedNode({
                                  name: activity.name,
                                  domain: domain.name,
                                  value: val,
                                  percent: pct,
                                  color: activity.color ?? domain.color ?? "#4A9A52",
                                  description: activity.description,
                                  learningObjective: activity.learningObjective,
                                });
                              }}
                              className="text-xs text-[var(--color-green-600)] hover:text-[var(--color-green-900)] hover:underline text-left cursor-pointer"
                            >
                              · {activity.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View Fallback: Structured, accessible card list */}
        <div className="md:hidden flex flex-col gap-4">
          <div className="p-4 rounded-xl bg-white border border-gray-100 mb-2">
            <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
              Below is the structured domain and activity mix for <strong>{summary.moduleName}</strong>. Tap any activity to view its learning objective.
            </p>
          </div>

          {domains.map((domain) => {
            let domainTotal = 0;
            domain.children?.forEach((a) => {
              domainTotal += a.value ?? 0;
            });
            const domainPct = Math.round((domainTotal / totalBandValue) * 100);

            return (
              <div
                key={domain.name}
                className="card-base p-5 bg-white border border-gray-100 shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-sm shrink-0"
                      style={{ background: domain.color }}
                    />
                    <h4 className="font-display text-base font-bold text-[var(--color-green-900)]">
                      {domain.name}
                    </h4>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-bold text-white"
                    style={{ background: domain.color }}
                  >
                    ~{domainPct}%
                  </span>
                </div>

                {domain.description && (
                  <p className="text-xs text-[var(--color-green-700)]">
                    {domain.description}
                  </p>
                )}

                <div className="flex flex-col gap-2 mt-1 pt-2 border-t border-gray-100">
                  {domain.children?.map((activity) => (
                    <div
                      key={activity.name}
                      className="p-3 rounded-lg bg-[var(--color-green-50)]/60 border border-green-50"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-[var(--color-green-900)]">
                          {activity.name}
                        </span>
                        <span className="text-[11px] font-semibold text-[var(--color-green-600)]">
                          ~{Math.round(((activity.value ?? 0) / totalBandValue) * 100)}%
                        </span>
                      </div>
                      {activity.description && (
                        <p className="text-[11px] text-[var(--color-green-800)] mb-1">
                          {activity.description}
                        </p>
                      )}
                      {activity.learningObjective && (
                        <p className="text-[11px] text-[var(--color-green-600)] italic">
                          Goal: {activity.learningObjective}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Methodological Transparency Note */}
        <div className="mt-10 max-w-2xl mx-auto text-center">
          <p className="text-xs text-[var(--color-green-700)]/70 leading-relaxed">
            * Percentages reflect proposed curricular emphasis and relative time weighting across domains. Exact distribution is customized in consultation with each partner school.
          </p>
        </div>
      </div>
    </section>
  );
}
