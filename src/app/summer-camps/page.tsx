import { Metadata } from "next";
import { brand } from "@/config/brand";
import { specialCampsData } from "@/config/specialCamps";
import SpecialCampView from "@/components/sections/SpecialCampView";

export const metadata: Metadata = {
  title: `Summer Camps | ${brand.name}`,
  description:
    "Transform school vacation into an active, screen-free farm immersion with hands-on agriculture, pottery, nature exploration, rural games, and sustainable creativity.",
};

export default function SummerCampsPage() {
  const camp = specialCampsData["summer-camps"];
  return <SpecialCampView camp={camp} />;
}
