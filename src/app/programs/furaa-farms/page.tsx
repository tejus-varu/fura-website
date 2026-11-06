import type { Metadata } from "next";
import { brand } from "@/config/brand";
import FuraaFarmsView from "@/components/sections/FuraaFarmsView";

export const metadata: Metadata = {
  title: `FURAA Farms — Ten Experiential Learning Pillars | ${brand.name}`,
  description:
    "Explore the ten distinct FURAA Farm categories: Rural Farms, Commercial Farms, Agro-Forests, Animal Farms, Nutri Gardens, Ornamental Gardens, Urban & Terrace Gardens, Art & Folk, Precision Machinery, and Wellness & Adventure.",
};

export default function FuraaFarmsPage() {
  return <FuraaFarmsView />;
}
