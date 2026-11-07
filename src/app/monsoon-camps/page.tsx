import { Metadata } from "next";
import { brand } from "@/config/brand";
import { specialCampsData } from "@/config/specialCamps";
import SpecialCampView from "@/components/sections/SpecialCampView";

export const metadata: Metadata = {
  title: `Monsoon Camps | ${brand.name}`,
  description:
    "Experience living hydrology: seasonal wetland crops, barefoot paddy puddling, rainwater harvesting systems, and guided monsoon biodiversity learning.",
  alternates: {
    canonical: "/monsoon-camps",
  },
  openGraph: {
    url: "https://myfuraa.com/monsoon-camps",
  },
};

export default function MonsoonCampsPage() {
  const camp = specialCampsData["monsoon-camps"];
  return <SpecialCampView camp={camp} />;
}
