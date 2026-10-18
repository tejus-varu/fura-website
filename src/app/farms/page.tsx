import type { Metadata } from "next";
import { brand } from "@/config/brand";
import FuraaFarmsView from "@/components/sections/FuraaFarmsView";

export const metadata: Metadata = {
  title: `FURAA Farms — Five Agrarian Learning Categories | ${brand.name}`,
  description:
    "Explore the five distinct FURAA Farm categories: Rural Farms, Commercial Farms, Agro-Forests, Animal Farms, and Nutri Gardens. Hands-on school learning beyond classrooms.",
};

export default function FarmsPage() {
  return <FuraaFarmsView />;
}
