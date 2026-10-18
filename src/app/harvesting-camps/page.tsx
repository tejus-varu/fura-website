import { Metadata } from "next";
import { brand } from "@/config/brand";
import { specialCampsData } from "@/config/specialCamps";
import SpecialCampView from "@/components/sections/SpecialCampView";

export const metadata: Metadata = {
  title: `Harvesting Camps | ${brand.name}`,
  description:
    "Celebrate the harvest: seasonal hand-harvesting, traditional threshing and winnowing, seed saving, sugarcane crushing, and farm-to-food gratitude feasts.",
};

export default function HarvestingCampsPage() {
  const camp = specialCampsData["harvesting-camps"];
  return <SpecialCampView camp={camp} />;
}
