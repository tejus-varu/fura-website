import type { SunburstNode } from "@/types";

/**
 * Sunburst chart data — hierarchical structure:
 * Root → Major Domain → Category → Activity
 *
 * Three major parent domains: Agriculture, Folk Arts & Culture, Nature & Nutrition
 * Each has category-level children, each category has activity-level leaves.
 *
 * Change `value` (relative weight) to adjust segment sizes.
 * Change `color` to restyle individual segments.
 * This data drives the D3 sunburst chart and is fully data-driven.
 */

export const sunburstData: SunburstNode = {
  name: "FURA Programs",
  children: [
    // ─── CLASS 4–5 ────────────────────────────────────────────────────────────
    {
      name: "Class 1–5",
      color: "#4A9A52",
      children: [
        {
          name: "Agriculture",
          color: "#2D6A35",
          children: [
            { name: "Farm Hands-On", value: 18, color: "#2D6A35" },
            { name: "Organic Harvesting", value: 12, color: "#4A9A52" },
            { name: "Bullock Cart Ride", value: 5, color: "#6AB872" },
          ],
        },
        {
          name: "Folk Arts & Culture",
          color: "#C9952A",
          children: [
            { name: "Folk Art & Craft", value: 16, color: "#C9952A" },
            { name: "Rural Games", value: 10, color: "#D9AB50" },
            { name: "Waste-to-Art", value: 8, color: "#E8C070" },
          ],
        },
        {
          name: "Nature & Ecology",
          color: "#5B9DB8",
          children: [
            { name: "Nature Walk", value: 10, color: "#5B9DB8" },
            { name: "Soil & Plants", value: 8, color: "#8FC4D8" },
          ],
        },
        {
          name: "Nutrition & Food",
          color: "#E07B39",
          children: [
            { name: "Millet Food Ed.", value: 8, color: "#E07B39" },
            { name: "Welcome Drinks", value: 5, color: "#F0A870" },
          ],
        },
      ],
    },

    // ─── CLASS 6–8 ────────────────────────────────────────────────────────────
    {
      name: "Class 6–8",
      color: "#2D6A35",
      children: [
        {
          name: "Agriculture",
          color: "#1A3D1F",
          children: [
            { name: "Farm Management", value: 16, color: "#1A3D1F" },
            { name: "Hydroponics", value: 12, color: "#2D6A35" },
            { name: "Organic Harvesting", value: 10, color: "#4A9A52" },
            { name: "Composting", value: 6, color: "#6AB872" },
          ],
        },
        {
          name: "Folk Arts & Culture",
          color: "#B07A18",
          children: [
            { name: "Warli & Folk Art", value: 12, color: "#B07A18" },
            { name: "Pottery & Craft", value: 8, color: "#C9952A" },
            { name: "Rural Games", value: 8, color: "#D9AB50" },
            { name: "Waste-to-Art", value: 6, color: "#E8C070" },
          ],
        },
        {
          name: "Nature & Ecology",
          color: "#3A7A96",
          children: [
            { name: "Terrace Gardening", value: 10, color: "#3A7A96" },
            { name: "Soil Science", value: 6, color: "#5B9DB8" },
          ],
        },
        {
          name: "Nutrition & Food",
          color: "#C05818",
          children: [
            { name: "Millet & Diet", value: 8, color: "#C05818" },
            { name: "Junk Food Talk", value: 6, color: "#E07B39" },
          ],
        },
      ],
    },

    // ─── CLASS 9–10 ───────────────────────────────────────────────────────────
    {
      name: "Class 9–10",
      color: "#1A3D1F",
      children: [
        {
          name: "Agriculture",
          color: "#0F2413",
          children: [
            { name: "Farm Systems", value: 14, color: "#0F2413" },
            { name: "Hydroponics Lab", value: 14, color: "#1A3D1F" },
            { name: "Soilless Culture", value: 10, color: "#2D6A35" },
            { name: "Urban Farming", value: 8, color: "#4A9A52" },
          ],
        },
        {
          name: "Folk Arts & Culture",
          color: "#7A4A08",
          children: [
            { name: "Folk Heritage", value: 10, color: "#7A4A08" },
            { name: "Cultural Workshop", value: 8, color: "#A36A10" },
            { name: "Waste-to-Art", value: 8, color: "#C9952A" },
          ],
        },
        {
          name: "Nature & Ecology",
          color: "#3A6341",
          children: [
            { name: "Terrace Garden Project", value: 12, color: "#3A6341" },
            { name: "Ecology Study", value: 8, color: "#5B9D8B" },
          ],
        },
        {
          name: "Nutrition & Food",
          color: "#A04010",
          children: [
            { name: "Food Systems", value: 8, color: "#A04010" },
            { name: "Nutrition Science", value: 8, color: "#C05818" },
          ],
        },
      ],
    },
  ],
};
